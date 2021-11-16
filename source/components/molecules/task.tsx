import React from 'react';
import type { FC } from 'react';

import { Box, Flex, Text } from '@chakra-ui/layout';
import {
	Checkbox,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	IconButton,
	Icon,
	Input,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowRight,
	faEllipsisV,
	faExclamationTriangle,
	faHamburger,
	faPen,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';

interface TaskProps {
	onComplete?: Function;
	onDelete?: Function;
	completed?: boolean;
	important?: boolean;
}

const Task: FC<TaskProps> = ({ children, important, onComplete, onDelete }) => {
	return (
		<Flex
			h='24z'
			background='gray.600'
			rounded='base'
			border='1px'
			borderColor='gray.500'
			justifyContent='space-between'
			overflow='hidden'
			direction='column'
			flexShrink={0}
		>
			<Flex p='2' background='gray.600' alignItems='center'>
				{important && (
					<Icon boxSize='6' as={FontAwesomeIcon} icon={faExclamationTriangle} color='yellow.600' />
				)}
				<Menu>
					<MenuButton
						ml='auto'
						as={IconButton}
						size='xs'
						icon={<Icon as={FontAwesomeIcon} icon={faEllipsisV} />}
					></MenuButton>
					<MenuList>
						<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faPen} />}>
							<Text colorScheme='red'>Edit</Text>
						</MenuItem>
						<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faArrowRight} />}>
							<Text>Move to next column</Text>
						</MenuItem>
						<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faTrash} color='red.400' />}>
							<Text color='red.400'>Delete</Text>
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
			<Box p='2' background='gray.700'>
				<Text>{children}</Text>
			</Box>
		</Flex>
	);
};

export default Task;
