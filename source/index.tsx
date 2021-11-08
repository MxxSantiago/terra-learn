import './polyfill';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { application, store } from '@/application';

render(
	<StrictMode>
		<ChakraProvider>
			<Provider store={store}>{application}</Provider>
		</ChakraProvider>
	</StrictMode>,
	document.querySelector('#root'),
);
