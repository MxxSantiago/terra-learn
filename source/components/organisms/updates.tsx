import React from 'react';
import type { FC } from 'react';
import { Grid, Text } from '@chakra-ui/layout';
import { Flex, Heading } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

interface UpdatesProps {}

const Updates: FC<UpdatesProps> = ({}: UpdatesProps) => {
	return (
		<Flex direction='column'>
			<Heading fontSize='2xl' mb='4'>
				Updates
			</Heading>
			<Grid templateColumns='1fr 1fr 1fr' columnGap='4'>
				<Flex
					direction='column'
					p='4'
					background='gray.700'
					rounded='base'
					border='1px'
					borderColor='gray.500'
				>
					<Heading fontSize='xl' mb='2'>
						Messages
					</Heading>
					<Tag>You have no recent messages.</Tag>
				</Flex>
				<Flex
					direction='column'
					p='4'
					background='gray.700'
					rounded='base'
					border='1px'
					borderColor='gray.500'
				>
					<Heading fontSize='xl' mb='2'>
						Events
					</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, accusantium.</Text>
				</Flex>
			</Grid>
		</Flex>
	);
};

export default Updates;
