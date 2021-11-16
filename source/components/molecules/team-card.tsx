import React, { ReactNode } from 'react';
import type { FC } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/layout';

interface TeamCardProps {
	children: ReactNode;
	heading: ReactNode;
}

const TeamCard: FC<TeamCardProps> = ({ children, heading }) => {
	return (
		<Box background='gray.700' rounded='base' border='1px' borderColor='gray.500' p='4'>
			<Flex direction='column'>
				<Heading fontSize='xl' mb='4'>
					{heading}
				</Heading>
				<Box>{children}</Box>
			</Flex>
		</Box>
	);
};

export default TeamCard;
