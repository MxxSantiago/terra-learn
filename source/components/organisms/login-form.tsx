import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Flex, Heading, Button } from '@chakra-ui/react';
import { Box, Divider, Grid, Link, StackDivider, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';

import { useActions } from '@core/common/hooks';

import { authModule } from '@/modules/auth/auth.module';
import type { AuthActions } from '@/modules/auth/auth.actions';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}: LoginFormProps) => {
	const authActions = useActions<AuthActions>(authModule);

	return (
		<Flex
			p='4'
			flexDirection='column'
			width={{ lg: '96' }}
			background='gray.700'
			rounded='base'
			border='1px'
			borderColor='gray.600'
			boxSizing='border-box'
		>
			<Heading marginBottom='2'>Iniciar sesión</Heading>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!</Text>
			<Divider my='4' />
			<Box>
				<Grid flexDirection='column' gridRowGap='4'>
					<Button colorScheme='facebook' onClick={() => authActions.signIn('facebook')}>
						Facebook
					</Button>
					<Button colorScheme='red' onClick={() => authActions.signIn('google')}>
						Google
					</Button>
					<Button colorScheme='purple' onClick={() => authActions.signIn('github')}>
						GitHub
					</Button>
				</Grid>
			</Box>
			<Divider my='4' />
			<Text fontSize='small' color='gray.500'>
				¿No tienes una cuenta?, <Link color='primary'>crea una aquí</Link>
			</Text>
		</Flex>
	);
};

export default LoginForm;
