import React, { Fragment } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface AppProps {
	modules: { [name: string]: FC<any> };
}

const App: FC<AppProps> = ({ modules }: AppProps) => {
	const { Main } = modules;

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Main} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
