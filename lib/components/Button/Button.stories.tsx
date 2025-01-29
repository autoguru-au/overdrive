import { AccountBoxIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';

import { Button } from '.';

const onClick = action('onClick');
export default {
	title: 'Primatives/Buttons',
	component: Button,
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
		is: {
			options: ['button', 'a'],
		},
	},
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
	<div
		style={{
			width: 200,
		}}
	>
		<Button {...args} />
	</div>
);

const TemplateMulti: StoryFn<typeof Button> = (args) => (
	<>
		<Columns space="3">
			<Column>
				<Button {...args}>Login</Button>
			</Column>
			<Column>
				<Button {...args}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button isLoading {...args}>
					A very very very long button Label
				</Button>
			</Column>
			<Column>
				<Button disabled {...args}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button rounded {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded {...args}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button rounded isLoading {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded disabled {...args}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button minimal {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal {...args}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button minimal isLoading {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal disabled {...args}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button minimal rounded {...args}>
					1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded {...args}>
					<Icon icon={AccountBoxIcon} />1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button minimal rounded isLoading {...args}>
					1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded disabled {...args}>
					1
				</Button>
			</Column>
		</Columns>
		<Button isFullWidth {...args}>
			Full Width
		</Button>
	</>
);

const standardProps: ComponentProps<typeof Button> = {
	isFullWidth: void 0,
	size: void 0,
	variant: void 0,
	children: 'Login',
	onClick,
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;

const primarySmallProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'small',
	variant: 'primary',
	onClick,
};
export const primarySmall = TemplateMulti.bind(primarySmallProps);
primarySmall.args = primarySmallProps;

const primaryMediumProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'medium',
	variant: 'primary',
	onClick,
};
export const primaryMedium = TemplateMulti.bind(primaryMediumProps);
primaryMedium.args = primaryMediumProps;

const brandSmallProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'small',
	variant: 'brand',
	onClick,
};
export const brandSmall = TemplateMulti.bind(brandSmallProps);
brandSmall.args = brandSmallProps;

const brandMediumProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'medium',
	variant: 'brand',
	onClick,
};
export const brandMedium = TemplateMulti.bind(brandMediumProps);
brandMedium.args = brandMediumProps;

const secondarySmallProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'small',
	variant: 'secondary',
	onClick,
};
export const secondarySmall = TemplateMulti.bind(secondarySmallProps);
secondarySmall.args = secondarySmallProps;

const secondaryMediumProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'medium',
	variant: 'secondary',
	onClick,
};
export const secondaryMedium = TemplateMulti.bind(secondaryMediumProps);
secondaryMedium.args = secondaryMediumProps;

const informationSmallProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'small',
	variant: 'information',
	onClick,
};
export const informationSmall = TemplateMulti.bind(informationSmallProps);
informationSmall.args = informationSmallProps;

const informationMediumProps: Omit<
	ComponentProps<typeof Button>,
	'children'
> = {
	size: 'medium',
	variant: 'information',
	onClick,
};
export const informationMedium = TemplateMulti.bind(informationMediumProps);
informationMedium.args = informationMediumProps;

const warningSmallProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'small',
	variant: 'warning',
	onClick,
};
export const warningSmall = TemplateMulti.bind(warningSmallProps);
warningSmall.args = warningSmallProps;

const warningMediumProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'medium',
	variant: 'warning',
	onClick,
};
export const warningMedium = TemplateMulti.bind(warningMediumProps);
warningMedium.args = warningMediumProps;

const successSmallProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'small',
	variant: 'success',
	onClick,
};
export const successSmall = TemplateMulti.bind(successSmallProps);
successSmall.args = successSmallProps;

const successMediumProps: Omit<ComponentProps<typeof Button>, 'children'> = {
	size: 'medium',
	variant: 'success',
	onClick,
};
export const successMedium = TemplateMulti.bind(successMediumProps);
successMedium.args = successMediumProps;
