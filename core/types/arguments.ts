import type { FC, Component } from 'react';

import type { Reducer } from '@core/types/redux';
import type { AppDefaultProps, Class, Index } from '@core/types/common';

export interface ApplicationFactoryArguments {
	moduleTokens: Array<string>;
	component: FC<AppDefaultProps> | Component<AppDefaultProps>;
}

export interface ModuleFactoryArguments<Actions, Selectors> {
	name: string;
	imports?: Array<string>;
	exports?: Array<Class>;
	reducer: Reducer;
	actions: Class<Actions>;
	selectors: Class<Selectors>;
	providers: Array<Class>;
	component: FC | Component;
}

export interface StoreFactoryArguments {
	reducers: Index<Reducer>;
}

export interface InjectProvidersArguments<Actions> {
	constructor: new () => Actions;
	instance: Actions;
	providers: Index<any>;
}
