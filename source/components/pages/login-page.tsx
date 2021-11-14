import React, { Fragment, useEffect } from 'react';
import type { FC } from 'react';
import { Box, Flex } from '@chakra-ui/layout';

import Page from '@/components/atoms/page';
import LoginForm from '@/components/organisms/login-form';
import AuthHeader from '../organisms/auth-header';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}: LoginPageProps) => {
	useEffect(() => {}, []);

	return (
		<Fragment>
			<AuthHeader />
			<Page>
				<Flex height='full' widht='full' justifyContent='center' alignItems='center' p='4'>
					<LoginForm />
				</Flex>
			</Page>
		</Fragment>
	);
};

export default LoginPage;
