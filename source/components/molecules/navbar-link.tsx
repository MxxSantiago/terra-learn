import React from 'react';
import type { FC, ReactNode } from 'react';
import { Link, Text } from '@chakra-ui/layout';

interface NavbarLinkProps {
	children?: ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({ children }: NavbarLinkProps) => {
	return (
		<Link px='2' mx='2'>
			<Text fontWeight='semibold'>{children}</Text>
		</Link>
	);
};

export default NavbarLink;
