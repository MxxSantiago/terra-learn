import React from 'react';
import type { FC } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = ({}: AppHeaderProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
			zIndex='10'
		>
			<Flex>
				<Heading fontSize='3xl'>TerraLearn</Heading>
			</Flex>
		</Flex>
	);
};

export default AppHeader;
