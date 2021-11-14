import React from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading, HStack, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

interface TeamsProps {}

const Teams: FC<TeamsProps> = ({}: TeamsProps) => {
	return (
		<Flex direction='column'>
			<Heading fontSize='2xl' marginBottom='4'>
				Teams
			</Heading>
			<Grid templateColumns='1fr 1fr 1fr' gap='4'>
				<Box
					display='flex'
					flexDirection='row'
					background='gray.700'
					rounded='base'
					overflow='hidden'
				>
					<Box p='4' flex='1'>
						<Heading fontSize='xl' marginBottom='2'>
							Dick suckers
						</Heading>
						<Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quasi
							neque deleniti pariatur repellendus nulla adipisci reiciendis mollitia obcaecati fuga,
							culpa delectus magni eligendi!
						</Text>
						<HStack marginTop='4'>
							<Tag>Dick</Tag>
							<Tag>Porn</Tag>
							<Tag>Tits</Tag>
						</HStack>
					</Box>
				</Box>
				<Box
					display='flex'
					flexDirection='row'
					background='gray.700'
					rounded='base'
					overflow='hidden'
				>
					<Box p='4' flex='1'>
						<Heading fontSize='xl' marginBottom='2'>
							Dick suckers
						</Heading>
						<Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quasi
							neque deleniti pariatur repellendus nulla adipisci reiciendis mollitia obcaecati fuga,
							culpa delectus magni eligendi!
						</Text>
						<HStack marginTop='4'>
							<Tag>Dick</Tag>
							<Tag>Porn</Tag>
							<Tag>Tits</Tag>
						</HStack>
					</Box>
				</Box>
				<Box
					display='flex'
					flexDirection='row'
					background='gray.700'
					rounded='base'
					overflow='hidden'
				>
					<Box p='4' flex='1'>
						<Heading fontSize='xl' marginBottom='2'>
							Dick suckers
						</Heading>
						<Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quasi
							neque deleniti pariatur repellendus nulla adipisci reiciendis mollitia obcaecati fuga,
							culpa delectus magni eligendi!
						</Text>
						<HStack marginTop='4'>
							<Tag>Dick</Tag>
							<Tag>Porn</Tag>
							<Tag>Tits</Tag>
						</HStack>
					</Box>
				</Box>
				<Box
					display='flex'
					flexDirection='row'
					background='gray.700'
					rounded='base'
					overflow='hidden'
				>
					<Box p='4' flex='1'>
						<Heading fontSize='xl' marginBottom='2'>
							Dick suckers
						</Heading>
						<Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quasi
							neque deleniti pariatur repellendus nulla adipisci reiciendis mollitia obcaecati fuga,
							culpa delectus magni eligendi!
						</Text>
						<HStack marginTop='4'>
							<Tag>Dick</Tag>
							<Tag>Porn</Tag>
							<Tag>Tits</Tag>
						</HStack>
					</Box>
				</Box>
				<Box
					display='flex'
					flexDirection='row'
					background='gray.700'
					rounded='base'
					overflow='hidden'
				>
					<Box p='4' flex='1'>
						<Heading fontSize='xl' marginBottom='2'>
							Dick suckers
						</Heading>
						<Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quasi
							neque deleniti pariatur repellendus nulla adipisci reiciendis mollitia obcaecati fuga,
							culpa delectus magni eligendi!
						</Text>
						<HStack marginTop='4'>
							<Tag>Dick</Tag>
							<Tag>Porn</Tag>
							<Tag>Tits</Tag>
						</HStack>
					</Box>
				</Box>
				<Box
					display='flex'
					flexDirection='row'
					background='gray.700'
					rounded='base'
					overflow='hidden'
				>
					<Box p='4' flex='1'>
						<Heading fontSize='xl' marginBottom='2'>
							Dick suckers
						</Heading>
						<Text>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quasi
							neque deleniti pariatur repellendus nulla adipisci reiciendis mollitia obcaecati fuga,
							culpa delectus magni eligendi!
						</Text>
						<HStack marginTop='4'>
							<Tag>Dick</Tag>
							<Tag>Porn</Tag>
							<Tag>Tits</Tag>
						</HStack>
					</Box>
				</Box>
			</Grid>
		</Flex>
	);
};

export default Teams;
