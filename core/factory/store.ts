import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import type { StoreFactoryArguments } from '@core/types/arguments';

export function storeFactory(args: StoreFactoryArguments) {
	const { reducers } = args;
	const rootReducer = combineReducers(reducers);
	const composeEnhancers =
		window['__REDUX_DEVTOOLS_EXTENSION__'] && process.env.NODE_ENV === 'development'
			? composeWithDevTools
			: compose;

	return createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware) as any));
}
