import React, { Fragment, useState } from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading, HStack } from '@chakra-ui/layout';
import { Text, Image, Tag, Skeleton } from '@chakra-ui/react';

import Updates from '@/components/organisms/updates';
import Teams from '@/components/organisms/teams';

interface HomeProps {}

const Home: FC<HomeProps> = ({}: HomeProps) => {
	return (
		<Grid autoFlow='row' rowGap='4' p='4'>
			<Updates />
			<Teams />
		</Grid>
	);
};

export default Home;
