import React from 'react';
import type { FC } from 'react';
import { Flex, Grid, Heading, List, ListItem } from '@chakra-ui/layout';
import { IconButton, Icon, Image, Tag, Input } from '@chakra-ui/react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
	return (
		<Grid templateColumns='3fr 1fr' gridGap='4'>
			<Flex flexGrow={1} w='full' direction='column' gridGap='4'>
				<Heading fontSize='xl'>Conversation</Heading>
				<Flex
					bg='gray.700'
					rounded='base'
					p='4'
					border='1px'
					borderColor='gray.500'
					direction='column'
					gridGap='2'
				>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
					<Flex gridGap='2'>
						Hector
						<Tag>Amo la verga!</Tag>
					</Flex>
				</Flex>
				<Flex bg='gray.700' gridGap='4' rounded='base' p='4' border='1px' borderColor='gray.500'>
					<Input />
					<IconButton icon={<Icon as={FontAwesomeIcon} icon={faPaperPlane} />} />
				</Flex>
			</Flex>
			<Flex direction='column' flexShrink={0}>
				<Heading fontSize='xl' mb='4'>
					Participants
				</Heading>
				<List
					background='gray.700'
					rounded='base'
					p='4'
					border='1px'
					borderColor='gray.500'
					gridGap='4'
					display='flex'
					flexDirection='column'
				>
					<ListItem>
						<Flex
							h='12'
							gridGap='2'
							alignItems='center'
							bg='gray.600'
							rounded='base'
							p='2'
							border='1px'
							borderColor='gray.500'
						>
							<Image h='8' src='https://picsum.photos/200' rounded='full' />
							<Heading fontSize='medium'>Luis Gazcón</Heading>
						</Flex>
					</ListItem>
					<ListItem>
						<Flex h='12' gridGap='2' alignItems='center' bg='gray.600' rounded='base' p='2'>
							<Image h='8' src='https://picsum.photos/200' rounded='full' />
							<Heading fontSize='medium'>Max Santiago</Heading>
						</Flex>
					</ListItem>
					<ListItem>
						<Flex h='12' gridGap='2' alignItems='center' bg='gray.600' rounded='base' p='2'>
							<Image h='8' src='https://picsum.photos/200' rounded='full' />
							<Heading fontSize='medium'>Héctor Sabala</Heading>
						</Flex>
					</ListItem>
					<ListItem>
						<Flex h='12' gridGap='2' alignItems='center' bg='gray.600' rounded='base' p='2'>
							<Image h='8' src='https://picsum.photos/200' rounded='full' />
							<Heading fontSize='medium'>Emma Puto</Heading>
						</Flex>
					</ListItem>
				</List>
			</Flex>
		</Grid>
	);
};

export default Chat;
