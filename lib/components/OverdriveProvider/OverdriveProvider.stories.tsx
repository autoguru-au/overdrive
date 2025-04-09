import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import flatRed from '../../themes/flat_red';
import { Box } from '../Box';
import { Button } from '../Button';
import { Inline } from '../Inline';
import { Stack } from '../Stack';

import { OverdriveProvider } from '.';

const meta: Meta<typeof OverdriveProvider> = {
	title: 'Utility/OverdriveProvider',
	component: OverdriveProvider,
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => (
		<OverdriveProvider {...args}>
			<Box padding="6">
				<Stack space="4">
					<Box display="flex" alignItems="center">
						<Inline space="4">
							<Button variant="primary">Primary Button</Button>
							<Button variant="secondary">
								Secondary Button
							</Button>
						</Inline>
					</Box>
				</Stack>
			</Box>
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
