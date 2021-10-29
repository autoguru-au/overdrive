import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';
import { Text } from '../Text';

import { Bullet, BulletList } from '.';

export default {
	title: 'Foundation/List/BulletList',
	component: BulletList,
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
} as ComponentMeta<typeof BulletList>;

const StandardBulletListTemplate: ComponentStory<typeof BulletList> = (
	args,
) => (
	<BulletList {...args}>
		<Bullet>
			<Text>
				For some, it could be argued that air-conditioning is the most
				important feature of a car, excluding all the mechanical bits
				that make it go, stop and turn.
			</Text>
		</Bullet>
		<Bullet>
			<Text>
				There are many components that have to work together to ensure
				the air-conditioning system is working correctly and, with so
				many contributing parts, it’s clear the system should only be
				serviced or repaired by a qualified technician.
			</Text>
		</Bullet>
	</BulletList>
);
const NestedBulletListTemplate: ComponentStory<typeof BulletList> = (args) => (
	<BulletList {...args}>
		<Bullet>
			<Text>
				For some, it could be argued that air-conditioning is the most
				important feature of a car, excluding all the mechanical bits
				that make it go, stop and turn.
			</Text>
		</Bullet>
		<Bullet>
			<BulletList {...args}>
				<Bullet>
					<Text>
						For some, it could be argued that air-conditioning is
						the most important feature of a car, excluding all the
						mechanical bits that make it go, stop and turn.
					</Text>
				</Bullet>
				<Bullet>
					<BulletList {...args}>
						<Bullet>
							<Text>
								For some, it could be argued that
								air-conditioning is the most important feature
								of a car, excluding all the mechanical bits that
								make it go, stop and turn.
							</Text>
						</Bullet>
						<Bullet>
							<BulletList>
								<Bullet>
									<Text>
										For some, it could be argued that
										air-conditioning is the most important
										feature of a car, excluding all the
										mechanical bits that make it go, stop
										and turn.
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
				For some, it could be argued that air-conditioning is the most
				important feature of a car, excluding all the mechanical bits
				that make it go, stop and turn.
			</Text>
		</Bullet>
	</BulletList>
);

const standardProps: ComponentProps<typeof BulletList> = {};

export const standard = StandardBulletListTemplate.bind(standardProps);
standard.args = {};

export const nested = NestedBulletListTemplate.bind(standardProps);
nested.args = {};
