import { DownloadIcon, TrashCanOutlineIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

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
	argTypes: {
		size: {
			options: ['small', 'medium'],
			defaultValue: 'medium',
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
			defaultValue: 'primary',
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
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

const standardProps: ComponentProps<typeof DropDown> = {
	label: 'Attachment',
	options: [option1, option2],
	onClick,
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;

const primaryProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	variant: 'primary',
	options: [option1, option2],
};

export const primary = Template.bind(primaryProps);
primary.args = primaryProps;

const withManyOptionsProps: ComponentProps<typeof DropDown> = {
	...standardProps,
	options: Array.from({ length: 99 }).map((_, index) =>
		index % 2 == 0 ? option1 : option2,
	),
};

export const withManyOptions = Template.bind(withManyOptionsProps);
withManyOptions.args = withManyOptionsProps;

/*

const primarySmallProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'small',
	variant: 'primary',
	onClick,
};
export const primarySmall = TemplateMulti.bind(primarySmallProps);
primarySmall.args = primarySmallProps;

const primaryMediumProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'medium',
	variant: 'primary',
	onClick,
};
export const primaryMedium = TemplateMulti.bind(primaryMediumProps);
primaryMedium.args = primaryMediumProps;

const secondarySmallProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'small',
	variant: 'secondary',
	onClick,
};
export const secondarySmall = TemplateMulti.bind(secondarySmallProps);
secondarySmall.args = secondarySmallProps;

const secondaryMediumProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'medium',
	variant: 'secondary',
	onClick,
};
export const secondaryMedium = TemplateMulti.bind(secondaryMediumProps);
secondaryMedium.args = secondaryMediumProps;

const informationSmallProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'small',
	variant: 'information',
	onClick,
};
export const informationSmall = TemplateMulti.bind(informationSmallProps);
informationSmall.args = informationSmallProps;

const informationMediumProps: Omit<
	ComponentProps<typeof DropDown>,
	'children'
> = {
	size: 'medium',
	variant: 'information',
	onClick,
};
export const informationMedium = TemplateMulti.bind(informationMediumProps);
informationMedium.args = informationMediumProps;

const warningSmallProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'small',
	variant: 'warning',
	onClick,
};
export const warningSmall = TemplateMulti.bind(warningSmallProps);
warningSmall.args = warningSmallProps;

const warningMediumProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'medium',
	variant: 'warning',
	onClick,
};
export const warningMedium = TemplateMulti.bind(warningMediumProps);
warningMedium.args = warningMediumProps;

const successSmallProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'small',
	variant: 'success',
	onClick,
};
export const successSmall = TemplateMulti.bind(successSmallProps);
successSmall.args = successSmallProps;

const successMediumProps: Omit<ComponentProps<typeof DropDown>, 'children'> = {
	size: 'medium',
	variant: 'success',
	onClick,
};
export const successMedium = TemplateMulti.bind(successMediumProps);
successMedium.args = successMediumProps;
*/
