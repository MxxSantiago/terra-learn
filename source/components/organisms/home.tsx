import React, { Fragment, useState } from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading, HStack } from '@chakra-ui/layout';
import { Text, Image, Tag, Skeleton } from '@chakra-ui/react';

import Recents from '@/components/organisms/recents';
import Teams from '@/components/organisms/teams';

interface HomeProps {}

const Home: FC<HomeProps> = ({}: HomeProps) => {
	const [loaded, setLoaded] = useState<boolean>();

	return (
		<Grid autoFlow='row' rowGap='4' p='4'>
			<Recents />
			<Teams />
		</Grid>
	);
};

export default Home;
