import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { FC } from 'react';

import { getSelectors } from '@core/common/getters';
import type { AppDefaultProps } from '@core/types/common';

import PrivateRoute from '@/components/utils/private-route';
import PublicRoute from '@/components/utils/public-route';
import { authModule } from '@/modules/auth/auth.module';
import { AuthSelectors } from '@/modules/auth/auth.selectors';

interface AppProps {}

const App: FC<AppProps & AppDefaultProps> = ({ modules }) => {
	const { Main, Auth } = modules;
	const authSelectors = getSelectors<AuthSelectors>(authModule);
	const auth = useSelector(authSelectors.selectAuth);

	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute
					allowOn={auth?.credential}
					path='/'
					exact
					component={Main}
					fallback={<Redirect to='/login' />}
				/>
				<PublicRoute
					disallowOn={auth?.credential}
					path='/'
					component={Auth}
					fallback={<Redirect to='/' />}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
