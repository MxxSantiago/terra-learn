import './polyfill';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { application, store } from '@/application';

render(
	<StrictMode>
		<Provider store={store}>{application}</Provider>
	</StrictMode>,
	document.querySelector('#root'),
);
