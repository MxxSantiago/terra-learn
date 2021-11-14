import React from 'react';
import type { FC } from 'react';
import { Grid, Text } from '@chakra-ui/layout';
import { Flex, Heading } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

interface RecentsProps {}

const Recents: FC<RecentsProps> = ({}: RecentsProps) => {
	return (
		<Flex direction='column'>
			<Heading fontSize='2xl' mb='4'>
				Recents
			</Heading>
			<Grid
				autoFlow='row'
				rowGap='4'
				p='4'
				background='gray.700'
				rounded='base'
				border='1px'
				borderColor='gray.500'
			>
				<Flex direction='column'>
					<Heading fontSize='xl' mb='2'>
						Messages
					</Heading>
					<Tag>Hector sucked a dick!</Tag>
				</Flex>
				<Flex direction='column'>
					<Heading fontSize='xl' mb='2'>
						Events
					</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, accusantium.</Text>
				</Flex>
			</Grid>
		</Flex>
	);
};

export default Recents;
