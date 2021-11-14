import React, { Fragment } from 'react';
import type { FC } from 'react';
import { Flex, Grid } from '@chakra-ui/layout';

import Page from '@/components/atoms/page';
import Home from '@/components/organisms/home';
import AppHeader from '@/components/organisms/app-header';
import Aside from '@/components/organisms/aside';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}: MainPageProps) => {
	return (
		<Fragment>
			<AppHeader />
			<Page>
				<Grid templateColumns='2fr 8fr' columnGap='4' px='16'>
					<Aside />
					<Home />
				</Grid>
			</Page>
		</Fragment>
	);
};

export default MainPage;
