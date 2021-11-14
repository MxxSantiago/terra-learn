import type { Dispatch } from 'redux';

export class Actions {
	public dispatch: Dispatch;
	public setDispatch = (dispatch: Dispatch) => {
		this.dispatch = dispatch;
	};
}
