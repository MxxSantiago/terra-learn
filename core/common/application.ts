import { createElement } from 'react';

import { storeFactory } from '@core/factory/store';
import { composeReducers, composeComponents } from '@core/common/compose';
import type { ApplicationFactoryArguments } from '@core/types/arguments';
import { moduleContext } from '@core/context/module';

export function applicationFactory(args: ApplicationFactoryArguments) {
	const { moduleTokens, component } = args;
	const reducers = composeReducers(moduleTokens);
	const components = composeComponents(moduleTokens);
	const store = storeFactory({ reducers });

	console.log(moduleContext.getAll());

	return {
		application: createElement(component as any, { modules: { ...components } }),
		store,
	};
}
