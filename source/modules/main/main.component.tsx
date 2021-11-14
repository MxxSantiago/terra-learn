import React, { Fragment, useEffect } from 'react';
import type { FC } from 'react';

import MainPage from '@/components/pages/main-page';
import { useActions } from '@core/common/hooks';
import { MainActions } from './main.actions';
import { mainModule } from './main.module';

interface MainProps {}

const Main: FC<MainProps> = ({}: MainProps) => {
	const mainActions = useActions<MainActions>(mainModule);

	useEffect(() => {}, []);

	return <MainPage />;
};

export default Main;
