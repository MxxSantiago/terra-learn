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
			.then((credential) => {
				this.dispatch({
					type: AuthActionsTypes.SIGN_IN_SUCCESS,
					payload: { credential, providerKey },
				});
			})
			.catch((error) =>
				this.dispatch({
					type: AuthActionsTypes.SIGN_IN_FAILURE,
					payload: error,
				}),
			);
	}
}
