import { moduleFactory } from '@core/common/factory';

import { MainActions } from './main.actions';
import { MainReducer } from './main.reducer';
import { MainSelectors } from './main.selectors';
import Main from './main.component';

export const mainModule = moduleFactory<MainActions, MainSelectors>({
	name: 'main',
	selectors: MainSelectors,
	actions: MainActions,
	reducer: MainReducer,
	component: Main,
	providers: [],
});
