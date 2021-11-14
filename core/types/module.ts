import type { Component, FC } from 'react';

import type { Reducer } from '@core/types/redux';
import type { Index } from '@core/types/common';

export type Module<Actions = any, Selectors = any> = {
	imports: Array<string>;
	name: string;
	exports: Index<any>;
	component: FC | Component;
	reducer: Reducer;
	actions: Actions;
	selectors: Selectors;
	providers: Index<any>;
};
