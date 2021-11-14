import type { FC, Component } from 'react';

import { moduleContext } from '@core/context/module';
import type { Class, Index } from '@core/types/common';
import type { Reducer } from '@core/types/redux';

export function composeExports(exports: Array<Class>, instances: any): any {
	return exports.reduce((prev, _export) => {
		return {
			...prev,
			[_export.name]:
				instances[
					Object.keys(instances).filter(
						(instanceKey) => instances[instanceKey] instanceof _export,
					)[0]
				],
		};
	}, {});
}

export function composeReducers(moduleTokens: Array<string>): Index<Reducer> {
	const reducers = moduleTokens.reduce((prev, moduleToken) => {
		const module = moduleContext.get(moduleToken);
		return {
			...prev,
			[module.name]: module.reducer,
		};
	}, {});

	return reducers;
}

export function composeComponents(moduleTokens: Array<string>): Index<FC & Component> {
	const components = moduleTokens.reduce((prev, moduleToken) => {
		const { name, component } = moduleContext.get(moduleToken);
		return {
			...prev,
			[name.charAt(0).toUpperCase() + name.substring(1, name.length)]: component,
		};
	}, {});
	return components;
}
