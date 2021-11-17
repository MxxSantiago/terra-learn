import { AuthActionsTypes } from './auth.actions-enum';

export function AuthReducer(state = {}, action) {
	switch (action.type) {
		case AuthActionsTypes.SIGN_IN_SUCCESS: {
			return {
				...state,
				user: action.payload.user,
			};
		}

		case AuthActionsTypes.SIGN_IN_FAILURE: {
			return {
				...state,
				error: action.payload.error,
			};
		}

		case AuthActionsTypes.ON_AUTH_STATE_CHANGED: {
			return {
				...state,
				user: action.payload,
			};
		}

		default: {
			return state;
		}
	}
}
