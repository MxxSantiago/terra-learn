import React from 'react';
import type { FC } from 'react';
import { Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import Task from '@/components/molecules/task';
import TaskColumn from '@/components/molecules/task-column';

interface TasksProps {}

const Tasks: FC<TasksProps> = ({}) => {
	return (
		<Flex direction='column' w='full' h='full' flex='1'>
			<Flex direction='row' flex='0' h='full' gridGap='4'>
				<TaskColumn heading='To do'>
					<Task important>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, enim.
					</Task>
					<Task>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem accusamus
						perspiciatis est nemo recusandae praesentium sint aspernatur unde! Mollitia alias
						tenetur dolor laborum iure amet, dolore voluptates rem sit earum facilis incidunt quo.
						Libero dolore alias non praesentium possimus.
					</Task>
				</TaskColumn>
				<TaskColumn heading='In progress'>
					<Task>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, enim.</Task>
					<Task important>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem accusamus
						perspiciatis est nemo recusandae praesentium sint aspernatur unde! Mollitia alias
						tenetur dolor laborum iure amet.
					</Task>
					<Task>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, enim.</Task>
					<Task>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem accusamus
						perspiciatis est nemo recusandae praesentium sint aspernatur unde! Mollitia alias
						tenetur dolor laborum iure amet.
					</Task>
				</TaskColumn>
				<TaskColumn heading='Finished'>
					<Task>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, enim.</Task>
					<Task>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Task>
				</TaskColumn>
			</Flex>
		</Flex>
	);
};

export default Tasks;
