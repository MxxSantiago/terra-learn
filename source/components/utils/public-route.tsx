import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import type { FC, ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';

interface PublicRouteProps {
	disallowOn?: boolean;
	fallback?: ReactElement;
}
const PublicRoute: FC<PublicRouteProps & RouteProps> = ({
	disallowOn = false,
	fallback = <Fragment />,
	...props
}: PublicRouteProps) => {
	return !disallowOn ? <Route {...props} /> : fallback;
};

export default PublicRoute;
