import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import flatRed from '../../themes/flat_red';
import { Button } from '../Button/Button';
import { FlexInline } from '../Flex/FlexInline';

import { OverdriveProvider } from './OverdriveProvider';

const meta: Meta<typeof OverdriveProvider> = {
	title: 'Utility/OverdriveProvider',
	component: OverdriveProvider,
	render: (args) => (
		<OverdriveProvider {...args}>
			<FlexInline gap="4">
				<Button variant="primary">Primary Button</Button>
				<Button variant="secondary">Secondary Button</Button>
			</FlexInline>
		</OverdriveProvider>
	),
};

export default meta;
type Story = StoryObj<typeof OverdriveProvider>;

/** Uses the default base theme */
export const Standard: Story = {};

/**
 * Example configured similar to overrides for Merchant Finder use the flat red theme and custom colour overrides.
 */
export const WithColorOverrides: Story = {
	args: {
		theme: flatRed,
		colorOverrides: {
			primaryBackground: '#6d39a8',
			primaryForeground: '#ffffff',
		},
	},
};
