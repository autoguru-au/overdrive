import { CheckIcon } from '@autoguru/icons';
import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Icon } from '../Icon';

import { BulletText } from '.';

const meta = {
	title: 'Components/Bullet Text',
	component: BulletText,
	args: {
		as: 'div',
		children: 'Hello World',
		variant: 'primary',
	},
	argTypes: {
		bullet: {
			table: {
				type: { summary: 'Any custom react element' },
				defaultValue: void 0,
			},
			description: 'Any custom react element',
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof BulletText>;

export default meta;
type Story = StoryObj<typeof BulletText>;

export const Primary: Story = {};

export const Secondary: Story = {
	args: {
		is: 'div',
		variant: 'secondary',
	},
};

export const WithCustomBullet: Story = {
	args: {
		is: 'div',
		variant: 'primary',
		bullet: (
			<span
				style={{
					width: '20px',
					height: '20px',
					backgroundColor: ' #00dd95',
					color: 'white',
					borderRadius: '50%',
					flexDirection: 'row',
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Icon size="small" icon={CheckIcon} />
			</span>
		),
	},
};
