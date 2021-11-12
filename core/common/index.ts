import { moduleContext } from '@core/context/module';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

export function getActions<T = any>(moduleToken: string): T {
	const { actions } = moduleContext.get(moduleToken);
	return actions;
}

export function getSelectors<T = any>(moduleToken: string): T {
	const { selectors } = moduleContext.get(moduleToken);
	return selectors;
}

export function useActions<T = any>(moduleToken: string): T {
	const dispatch = useDispatch();
	const actions = getActions<T & Actions>(moduleToken);
	actions.setDispatch(dispatch);
	return actions;
}

export class Actions {
	public dispatch: Dispatch;
	public setDispatch = (dispatch: Dispatch) => {
		this.dispatch = dispatch;
	};
}
