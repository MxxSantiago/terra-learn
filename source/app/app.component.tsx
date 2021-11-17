import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { FC } from 'react';

import { getSelectors } from '@core/common/getters';
import type { AppDefaultProps } from '@core/types/common';

import TeamPage from '@/components/pages/team-page';
import PrivateRoute from '@/components/utils/private-route';
import PublicRoute from '@/components/utils/public-route';

import { authModule } from '@/modules/auth/auth.module';
import { AuthSelectors } from '@/modules/auth/auth.selectors';
import { useActions } from '@core/common/hooks';
import { AuthActions } from '@/modules/auth/auth.actions';

interface AppProps {}

const App: FC<AppProps & AppDefaultProps> = ({ modules }) => {
	const { Main, Auth } = modules;
	const authSelectors = getSelectors<AuthSelectors>(authModule);
	const authActions = useActions<AuthActions>(authModule);
	const auth = useSelector(authSelectors.selectAuth);

	useEffect(() => {
		authActions.onAuthStateChanged((user) => user);
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute path='/team/:teamId' component={TeamPage} />
				<PrivateRoute
					allowOn={auth?.user}
					path='/'
					exact
					component={Main}
					fallback={<Redirect to='/login' />}
				/>
				<PublicRoute
					disallowOn={auth?.user}
					path='/'
					component={Auth}
					fallback={<Redirect to='/' />}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
