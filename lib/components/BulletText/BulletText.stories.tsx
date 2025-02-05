import { CheckIcon } from '@autoguru/icons';
import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Icon } from '../Icon';

import { BulletText } from '.';

const meta = {
	title: 'Components/Bullet Text',
	component: BulletText,
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			defaultValue: 'primary',
			control: {
				type: 'select',
			},
		},
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
		is: {
			table: {
				type: { summary: 'div' },
				defaultValue: 'div',
			},
			description: 'HTML dom tag to be used',
			control: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof BulletText>;

export default meta;
type Story = StoryObj<typeof BulletText>;

export const Primary: Story = {
	args: {
		is: { summary: 'div' },
		variant: 'primary',
		children: 'Hello World',
		bullet: void 0,
	},
};

export const Secondary: Story = {
	args: {
		is: 'div',
		variant: 'secondary',
		children: 'Hello World',
		bullet: void 0,
	},
};

export const WithCustomBullet: Story = {
	args: {
		is: 'div',
		variant: 'primary',
		children: 'Hello World',
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
