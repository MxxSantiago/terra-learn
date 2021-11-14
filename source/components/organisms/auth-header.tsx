import React from 'react';
import type { FC } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';

interface AuthHeaderProps {}

const AuthHeader: FC<AuthHeaderProps> = ({}: AuthHeaderProps) => {
	return (
		<Flex
			position='fixed'
			alignItems='center'
			justifyContent='space-between'
			flexDirection='row'
			h='16'
			w='full'
			px='4'
			background='gray.700'
			borderBottom='1px'
			borderBottomColor='gray.500'
		>
			<Flex>
				<Heading fontSize='3xl'>TerraLearn</Heading>
			</Flex>
		</Flex>
	);
};

export default AuthHeader;
