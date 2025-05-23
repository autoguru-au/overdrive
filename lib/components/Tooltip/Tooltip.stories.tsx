import { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';

import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text/Text';

import { Tooltip } from './Tooltip';

const sizeScale: ComponentProps<typeof Text>['size'][] = ['3', '4'];

const meta = {
	title: 'Components/Tooltip',
	component: Tooltip,
	decorators: [
		(Story) => (
			<div style={{ marginLeft: 100, marginTop: 100 }}>
				<Story />
			</div>
		),
	],
	parameters: {
		chromatic: { disable: true },
	},
	argTypes: {
		alignment: {
			options: Object.values(EAlignment),
			defaultValue: EAlignment.RIGHT,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeScale,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
		label: {
			defaultValue: '',
		},
		closeAfter: {
			defaultValue: EAlignment.RIGHT,
			control: {
				type: 'number',
			},
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Standard: Story = {
	args: {
		label: "I'm the tooltip body",
		closeAfter: undefined,
		children: (
			<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
		),
	},
};

export const WithAutoClose: Story = {
	args: {
		label: 'I will automatically close after 5 seconds',
		closeAfter: 5e3,
		children: (
			<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
		),
	},
};

export const WithLongText: Story = {
	args: {
		label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		alignment: EAlignment.BOTTOM,
		children: (
			<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
		),
	},
};

export const WithLargeTextSize: Story = {
	args: {
		label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		alignment: EAlignment.BOTTOM,
		size: 'large',
		children: (
			<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
		),
	},
};
