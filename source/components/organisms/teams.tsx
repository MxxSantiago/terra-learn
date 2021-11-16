import React from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading, HStack, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import TeamCard from '../molecules/team-card';

interface TeamsProps {}

const Teams: FC<TeamsProps> = ({}: TeamsProps) => {
	return (
		<Flex direction='column'>
			<Heading fontSize='2xl' marginBottom='4'>
				Teams
			</Heading>
			<Grid templateColumns='1fr 1fr 1fr' gap='4'>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
				<TeamCard heading='Dick Suckers'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius aut repellendus
					fugit, similique soluta deserunt minima quia minus vitae molestiae magni recusandae cumque
					accusantium laborum culpa, ex rem error?
				</TeamCard>
			</Grid>
		</Flex>
	);
};

export default Teams;
