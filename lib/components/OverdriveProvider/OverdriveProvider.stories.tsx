import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import flatRed from '../../themes/flat_red';
import { Button } from '../Button/Button';
import { CheckBox } from '../CheckBox';
import { FlexInline } from '../Flex/FlexInline';
import { Stack } from '../Stack';
import { Switch } from '../Switch';
import { Text } from '../Text';
import { TextLink } from '../TextLink';

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

/**
 * Everything a brand colour reaches once `linkColor` is opted into as well.
 *
 * `primaryBackground` alone brands the solid and outlined buttons, the
 * selection controls and `<Text colour="primary">`. It deliberately leaves
 * links and focus rings alone — that colour was chosen as a fill behind white
 * text and is often illegible as link text — so branding those is a separate,
 * explicit `linkColor`. Compare the link here with `WithColorOverrides` above,
 * where it stays the theme's own colour.
 */
export const WithBrandedLinks: Story = {
	args: {
		theme: flatRed,
		colorOverrides: {
			primaryBackground: '#6d39a8',
			primaryForeground: '#ffffff',
			linkColor: '#6d39a8',
		},
	},
	render: (args) => (
		<OverdriveProvider {...args}>
			<Stack space="4">
				<FlexInline gap="4">
					<Button variant="primary">Primary Button</Button>
					<Button variant="primary" outlined>
						Outlined Button
					</Button>
					<Button variant="secondary">Secondary Button</Button>
				</FlexInline>
				<FlexInline gap="4">
					<Switch isSelected>Switch, on</Switch>
					<CheckBox checked value="branded">
						Checked
					</CheckBox>
				</FlexInline>
				<FlexInline gap="4">
					<TextLink href="#branded">A branded link</TextLink>
					<Text colour="primary">
						Text colour=&quot;primary&quot;
					</Text>
				</FlexInline>
			</Stack>
		</OverdriveProvider>
	),
};
