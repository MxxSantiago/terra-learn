import React, { Fragment } from 'react';
import type { FC } from 'react';
import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button, IconButton } from '@chakra-ui/button';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/hooks';
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';

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
		>
			<Flex>
				<Heading fontSize='3xl'>TerraLearn</Heading>
			</Flex>
			<HStack marginLeft='auto'>
				<Link>About</Link>
				<Link>Profile</Link>
			</HStack>
		</Flex>
	);
};

export default AppHeader;
