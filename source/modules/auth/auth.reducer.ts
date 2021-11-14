import { AuthActionsTypes } from './auth.actions-enum';

export function AuthReducer(state = {}, action) {
	switch (action.type) {
		case AuthActionsTypes.SIGN_IN_SUCCESS: {
			return {
				...state,
				credential: action.payload.credential,
			};
		}

		case AuthActionsTypes.SIGN_IN_FAILURE: {
			return {
				...state,
				error: action.payload,
			};
		}

		default: {
			return state;
		}
	}
}
