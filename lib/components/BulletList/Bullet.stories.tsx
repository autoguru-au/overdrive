import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Text } from '../Text/Text';

import { Bullet } from './Bullet';
import { BulletList } from './BulletList';

const meta = {
	title: 'Primatives/Bullet List',
	component: BulletList,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof BulletList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {},
	render: (args) => (
		<BulletList {...args}>
			<Bullet>
				<Text>
					For some, it could be argued that air-conditioning is the
					most important feature of a car, excluding all the
					mechanical bits that make it go, stop and turn.
				</Text>
			</Bullet>
			<Bullet>
				<Text>
					There are many components that have to work together to
					ensure the air-conditioning system is working correctly and,
					with so many contributing parts, it&apos;s clear the system
					should only be serviced or repaired by a qualified
					technician.
				</Text>
			</Bullet>
		</BulletList>
	),
};

export const Nested: Story = {
	args: {},
	render: (args) => (
		<BulletList {...args}>
			<Bullet>
				<Text>
					For some, it could be argued that air-conditioning is the
					most important feature of a car, excluding all the
					mechanical bits that make it go, stop and turn.
				</Text>
			</Bullet>
			<Bullet>
				<BulletList {...args}>
					<Bullet>
						<Text>
							For some, it could be argued that air-conditioning
							is the most important feature of a car, excluding
							all the mechanical bits that make it go, stop and
							turn.
						</Text>
					</Bullet>
					<Bullet>
						<BulletList {...args}>
							<Bullet>
								<Text>
									For some, it could be argued that
									air-conditioning is the most important
									feature of a car, excluding all the
									mechanical bits that make it go, stop and
									turn.
								</Text>
							</Bullet>
							<Bullet>
								<BulletList>
									<Bullet>
										<Text>
											For some, it could be argued that
											air-conditioning is the most
											important feature of a car,
											excluding all the mechanical bits
											that make it go, stop and turn.
										</Text>
									</Bullet>
								</BulletList>
							</Bullet>
						</BulletList>
					</Bullet>
				</BulletList>
			</Bullet>
			<Bullet>
				<Text>
					For some, it could be argued that air-conditioning is the
					most important feature of a car, excluding all the
					mechanical bits that make it go, stop and turn.
				</Text>
			</Bullet>
		</BulletList>
	),
};
