import React, { Component, Fragment } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import type { FC } from 'react';
import LoginPage from '@/components/pages/login-page';

interface AuthProps {}

const Auth: FC<AuthProps> = ({}: AuthProps) => {
	const match = useRouteMatch();

	return (
		<Fragment>
			<Route path={`${match.path}login`} component={LoginPage} />
		</Fragment>
	);
};

export default Auth;
