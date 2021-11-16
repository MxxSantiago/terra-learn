import React, { Fragment } from 'react';
import type { FC } from 'react';
import { Grid } from '@chakra-ui/layout';

import AppHeader from '@/components/organisms/app-header';
import Page from '@/components/atoms/page';
import Aside from '@/components/organisms/aside';
import Team from '@/components/organisms/team';

interface TeamPageProps {}

const TeamPage: FC<TeamPageProps> = ({}) => {
	return (
		<Fragment>
			<AppHeader />
			<Page>
				<Grid templateColumns='2fr 8fr' templateRows='100%' columnGap='4' px='16'>
					<Aside />
					<Team />
				</Grid>
			</Page>
		</Fragment>
	);
};

export default TeamPage;
