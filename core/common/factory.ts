import { v4 as uuid } from 'uuid';
import { FC, Component, createElement } from 'react';
import { applyMiddleware, combineReducers, compose, createStore, ReducersMapObject } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { moduleContext } from '@core/context/module';
import { Metadata } from '@core/common/enums';

interface ApplicationFactoryArguments {
	moduleTokens: Array<string>;
	component: FC | Component;
}
export function applicationFactory(args: ApplicationFactoryArguments) {
	const { moduleTokens, component } = args;
	const reducers = composeReducers(moduleTokens);
	const components = composeComponents(moduleTokens);
	const store = storeFactory({ reducers });

	console.log(moduleContext.getAll());

	return {
		application: createElement(component as any, { modules: { ...components } }, null),
		store,
	};
}

export function composeComponents(moduleTokens: Array<string>): Array<FC | Component> {
	const components = moduleTokens.reduce((prev, moduleToken) => {
		const { name, component } = moduleContext.get(moduleToken);
		return {
			...prev,
			[name.charAt(0).toUpperCase() + name.substring(1, name.length)]: component,
		};
	}, {});
	return components as any;
}

export function composeReducers(moduleTokens: Array<string>) {
	const reducers = moduleTokens.reduce((prev, moduleToken) => {
		const module = moduleContext.get(moduleToken);
		return {
			...prev,
			[module.name]: module.reducer,
		};
	}, {});

	return reducers;
}

export function actionsFactory<Actions>(actions: new () => Actions): Actions {
	return new actions();
}

export function providersFactory(providers: Array<new () => any>): { [key: string]: any } {
	return providers.reduce((prev, provider) => {
		return {
			...prev,
			[provider.name]: new provider(),
		};
	}, {});
}

export function selectorsFactory<Selectors>(selectors: new () => Selectors): Selectors {
	return new selectors();
}

interface InjectProvidersArguments<Actions> {
	constructor: new () => Actions;
	instance: Actions;
	providers: { [key: string]: any };
}
export function injectProviders<Actions>(args: InjectProvidersArguments<Actions>): Actions {
	const { constructor, instance, providers } = args;
	const providerProperties =
		Reflect.getMetadata(Metadata.PROVIDER_PROPERTIES, constructor.prototype) || [];
	const providerKeys = Object.keys(providers);

	providerKeys.forEach((providerKey) => {
		providerProperties.forEach(({ key, designType }) => {
			const provider = providers[providerKey];
			if (provider instanceof designType) {
				instance[key] = providers[providerKey];
			}
		});
	});

	return instance;
}

export function composeExports(exports: Array<new () => any>, instances: any): any {
	return exports.reduce((prev, _export) => {
		return {
			[_export.name]:
				instances[
					Object.keys(instances).filter(
						(instanceKey) => instances[instanceKey] instanceof _export,
					)[0]
				],
		};
	}, {});
}

export function composeImportedProviders(imports: Array<string>) {
	return imports.reduce((prev, _import) => {
		const { exports } = moduleContext.get(_import);
		return {
			...prev,
			...exports,
		};
	}, {});
}

interface ModuleFactoryArguments<Actions, Selectors> {
	name?: string;
	reducer: Function;
	actions: new () => Actions;
	component: FC | Component;
	selectors: new () => Selectors;
	providers: Array<new () => any>;
	imports?: Array<string>;
	exports?: Array<new () => any>;
}

export function moduleFactory<Actions, Selectors>(
	args: ModuleFactoryArguments<Actions, Selectors>,
): string {
	const {
		actions,
		selectors,
		providers,
		reducer,
		name,
		component,
		exports = [],
		imports = [],
	} = args;

	const token = name ? undefined : uuid();
	const key = token || name;

	const instances = {
		actions: actionsFactory<Actions>(actions),
		selectors: selectorsFactory<Selectors>(selectors),
		providers: { ...providersFactory(providers), ...composeImportedProviders(imports) },
	};

	instances.actions = injectProviders({
		constructor: actions,
		instance: instances.actions,
		providers: instances.providers,
	});

	moduleContext.register(key, {
		name: key,
		...instances,
		reducer,
		component,
		exports: composeExports(exports, instances.providers),
	});

	return key;
}

interface StoreFactoryArguments {
	reducers: { [name: string]: Function };
}
export function storeFactory(args: StoreFactoryArguments) {
	const { reducers } = args;
	const rootReducer = combineReducers(reducers as ReducersMapObject);
	const composeEnhancers =
		window['__REDUX_DEVTOOLS_EXTENSION__'] && process.env.NODE_ENV === 'development'
			? composeWithDevTools
			: compose;

	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware) as any));
	return store;
}
