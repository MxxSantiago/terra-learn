import React from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

interface AsideProps {}

const Aside: FC<AsideProps> = ({}: AsideProps) => {
	return (
		<Flex p='4' direction='column'>
			<Heading fontSize='2xl' mb='4'>
				Menú
			</Heading>
			<Grid
				autoFlow='row'
				background='gray.700'
				rounded='base'
				p='4'
				gap='2'
				border='1px'
				borderColor='gray.500'
			>
				<Heading fontSize='xl'>Principal</Heading>
				<Button justifyContent='flex-start'>Equipos</Button>
				<Button justifyContent='flex-start'>Mensajes</Button>
				<Button justifyContent='flex-start'>Ajustes</Button>
				<Heading fontSize='xl'>Cuenta</Heading>
				<Button color='red.400' justifyContent='flex-start'>
					Cerrar sesión
				</Button>
			</Grid>
		</Flex>
	);
};

export default Aside;
