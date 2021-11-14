import { v4 as uuid } from 'uuid';

import { Metadata } from '@core/enums';
import { moduleContext } from '@core/context/module';
import { composeExports } from '@core/common/compose';
import { actionsFactory } from '@core/factory/actions';
import { selectorsFactory } from '@core/factory/selectors';
import { providersFactory } from '@core/factory/providers';
import type { InjectProvidersArguments, ModuleFactoryArguments } from '@core/types/arguments';
import { Component } from 'react';

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

export function moduleFactory<Actions, Selectors>(
	args: ModuleFactoryArguments<Actions, Selectors>,
): string {
	const {
		name,
		imports = [],
		exports = [],
		actions,
		selectors,
		providers,
		component,
		reducer,
	} = args;
	const moduleToken = name ? name : uuid();
	const instances = {
		actions: actionsFactory(actions),
		selectors: selectorsFactory(selectors),
		providers: providersFactory(providers, imports),
	};

	moduleContext.set(moduleToken, {
		name: moduleToken,
		imports: imports,
		component: component,
		reducer: reducer,
		selectors: instances.selectors,
		providers: instances.providers,
		exports: composeExports(exports, instances.providers),
		actions: injectProviders({
			constructor: actions,
			instance: instances.actions,
			providers: instances.providers,
		}),
	});

	return moduleToken;
}
