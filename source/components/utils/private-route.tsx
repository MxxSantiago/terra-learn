import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import type { FC, ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';

interface PrivateRouteProps {
	fallback?: ReactElement;
	allowOn?: boolean;
}
const PrivateRoute: FC<PrivateRouteProps & RouteProps> = ({
	fallback = <Fragment />,
	allowOn = false,
	...props
}: PrivateRouteProps) => {
	return allowOn ? <Route {...props} /> : fallback;
};

export default PrivateRoute;
