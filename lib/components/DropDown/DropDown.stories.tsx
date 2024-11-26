import {
	DownloadIcon,
	SettingsIcon,
	SquareEditOutlineIcon,
	TrashCanOutlineIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps, Fragment } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

import { DropDown, DropDownOption } from '.';

const onClick = action('onClick');
export default {
	title: 'Components/DropDown',
	component: DropDown,
	decorators: [
		(story) => (
			<div
				style={{
					display: 'grid',
					gridGap: '12px',
					gridAutoFlow: 'row dense',
				}}
			>
				{story()}
			</div>
		),
	],
	args: {
		label: 'Attachment',
		children: undefined,
		size: 'medium',
		variant: 'primary',
	},
	argTypes: {
		size: {
			options: ['small', 'medium'],
			control: {
				type: 'select',
			},
		},
		variant: {
			options: [
				'primary',
				'secondary',
				'danger',
				'information',
				'warning',
				'danger',
			] as ComponentProps<typeof Button>['variant'][],
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args) => (
	<Box
		style={{
			height: '100vh',
			width: '100vw',
			maxHeight: '350px',
		}}
		display="flex"
		alignItems="center"
		justifyContent="center"
	>
		<DropDown {...args} />
	</Box>
);

const option1 = <DropDownOption label="Download" icon={DownloadIcon} />;
const option2 = <DropDownOption label="Delete" icon={TrashCanOutlineIcon} />;
const optionDisabled = (
	<DropDownOption disabled label="Edit" icon={SquareEditOutlineIcon} />
);

const standardProps: ComponentProps<typeof DropDown> = {
	label: 'Attachment',
	children: (
		<>
			{option1}
			{option1}
			{optionDisabled}
		</>
	),
	onClick,
};

export const primary = Template.bind(standardProps);
primary.args = standardProps;

const withOpenMenuProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	isOpen: true,
};

export const withOpenMenu = Template.bind(withOpenMenuProps);
withOpenMenu.args = withOpenMenuProps;

const secondaryProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	variant: 'secondary',
};

export const secondary = Template.bind(secondaryProps);
secondary.args = secondaryProps;

const minimalPrimaryProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	variant: 'primary',
	minimal: true,
};

export const minimalPrimary = Template.bind(minimalPrimaryProps);
minimalPrimary.args = minimalPrimaryProps;

const roundedSecondaryProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	variant: 'secondary',
	rounded: true,
};

export const roundedSecondary = Template.bind(roundedSecondaryProps);
roundedSecondary.args = roundedSecondaryProps;

const withCustomIconProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	variant: 'secondary',
	icon: SettingsIcon,
	isOpen: true,
};

export const withCustomIcon = Template.bind(withCustomIconProps);
withCustomIcon.args = withCustomIconProps;

const withManyOptionsProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	isOpen: true,
	children: (
		<>
			{Array.from({ length: 99 }).map((_, index) => (
				<Fragment key={index}>
					{index % 2 == 0 ? option1 : option2}
				</Fragment>
			))}
		</>
	),
};

export const withManyOptions = Template.bind(withManyOptionsProps);
withManyOptions.args = withManyOptionsProps;
