import { Actions } from '@core/common/classes';
import { Inject } from '@core/decorators/inject';

import { AuthActionsTypes } from './auth.actions-enum';
import { AuthService } from './auth.service';
import { OAuthProviderKey } from './auth.types';

export class AuthActions extends Actions {
	@Inject()
	public authService: AuthService;

	public signIn(providerKey: OAuthProviderKey) {
		this.dispatch({ type: AuthActionsTypes.SIGN_IN });
		this.authService
			.signIn(providerKey)
			.then((user) => {
				this.dispatch({
					type: AuthActionsTypes.SIGN_IN_SUCCESS,
					payload: { user, providerKey },
				});
			})
			.catch((error) => {
				this.dispatch({
					type: AuthActionsTypes.SIGN_IN_FAILURE,
					payload: { error },
				});
			});
	}

	public onAuthStateChanged(callback) {
		this.authService.onAuthStateChanged((user) => {
			this.dispatch({
				type: AuthActionsTypes.ON_AUTH_STATE_CHANGED,
				payload: callback(user),
			});
		});
	}

	public signOut() {
		this.dispatch({ type: AuthActionsTypes.SIGN_OUT });
	}
}
