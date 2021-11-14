import { moduleFactory } from '@core/factory/module';

import { AuthSelectors } from './auth.selectors';
import { AuthService } from './auth.service';
import { AuthActions } from './auth.actions';
import { AuthReducer } from './auth.reducer';
import Auth from './auth.component';

export const authModule = moduleFactory({
	name: 'auth',
	reducer: AuthReducer,
	actions: AuthActions,
	selectors: AuthSelectors,
	component: Auth,
	providers: [AuthService],
	exports: [AuthService],
});
