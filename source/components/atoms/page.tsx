import React from 'react';
import type { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/layout';

interface PageProps {
	children?: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
	return (
		<Flex as='main' height='100vh' width='full' flexDirection='column' paddingTop='16'>
			{children}
		</Flex>
	);
};

export default Page;
