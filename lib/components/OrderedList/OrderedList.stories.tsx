import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from '../Text';

import { OrderedList } from '.';

export default {
	title: 'Primatives/Ordered List',
	component: OrderedList,
} satisfies Meta<typeof OrderedList>;

type Story = StoryObj<typeof OrderedList>;

export const Standard: Story = {
	args: {
		children: (
			<>
				<OrderedList.Item>
					<Text>Strawberry</Text>
				</OrderedList.Item>
				<OrderedList.Item>
					<Text>Watermelon</Text>
					<OrderedList>
						<OrderedList.Item>
							<Text>Mango</Text>
						</OrderedList.Item>
						<OrderedList.Item>
							<Text>Banana</Text>
						</OrderedList.Item>
						<OrderedList.Item>
							<Text>Apple</Text>
							<OrderedList>
								<OrderedList.Item>
									<Text>Grape</Text>
								</OrderedList.Item>
								<OrderedList.Item>
									<Text>Orange</Text>
								</OrderedList.Item>
							</OrderedList>
						</OrderedList.Item>
						<OrderedList.Item>
							<Text>Pineapple</Text>
						</OrderedList.Item>
					</OrderedList>
				</OrderedList.Item>
				<OrderedList.Item>
					<Text>Pear</Text>
				</OrderedList.Item>
			</>
		),
	},
};
