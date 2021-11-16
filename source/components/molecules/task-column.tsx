import React from 'react';
import type { FC, ReactNode } from 'react';

import { Flex, Heading } from '@chakra-ui/layout';
import type { FlexProps } from '@chakra-ui/layout';

interface TaskColumnProps {
	children?: ReactNode;
	heading?: ReactNode;
}

const TaskColumn: FC<TaskColumnProps & FlexProps> = ({ children, heading, ...props }) => {
	return (
		<Flex direction='column' gridGap='4' w='100%' {...props}>
			<Heading fontSize='xl'>{heading}</Heading>
			<Flex
				direction='column'
				gridGap='4'
				p='4'
				bg='gray.700'
				border='1px'
				borderColor='gray.500'
				rounded='base'
			>
				{children}
			</Flex>
		</Flex>
	);
};

export default TaskColumn;
