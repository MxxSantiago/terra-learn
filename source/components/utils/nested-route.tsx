import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import type { FC, ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';

interface NestedRouteProps {
	fallback?: ReactElement;
}
const NestedRoute: FC<NestedRouteProps & RouteProps> = ({ path, ...props }) => {
	const match = useRouteMatch();

	return <Route path={match.path + path} {...props} />;
};

export default NestedRoute;
