import { useDispatch } from 'react-redux';

import { getActions } from '@core/common/getters';
import { Actions } from '@core/common/classes';

export function useActions<T = any>(moduleToken: string): T {
	const dispatch = useDispatch();
	const actions = getActions<T & Actions>(moduleToken);
	actions.setDispatch(dispatch);
	return actions;
}
