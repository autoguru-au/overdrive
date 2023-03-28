import { ArrowRightIcon, ChevronRightIcon } from '@autoguru/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { TextLink } from '.';

const sizeScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alignOptions: ['left', 'center', 'right'] = ['left', 'center', 'right'];
const fontWeightOptions = ['normal', 'semiBold', 'bold'];
const iconOptions = {
	ArrowRightIcon,
	ChevronRightIcon,
};
const noWrapOptions: Array<ComponentProps<typeof Heading>['noWrap']> = [
	false,
	true,
];
const transformOptions: Array<ComponentProps<typeof Text>['transform']> = [
	'uppercase',
	'capitalize',
	undefined,
];

export default {
	title: 'Foundation/Typography/TextLink',
	decorators: [
		(story) => (
			<div
				style={{
					width: '100%',
					maxWidth: 300,
					display: 'grid',
					gridTemplateColumns: '1fr',
				}}
			>
				{story()}
			</div>
		),
	],
	argTypes: {
		icon: {
			defaultValue: void 0,
			description: 'Input field Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		noWrap: {
			options: noWrapOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		transform: {
			options: transformOptions,
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		fontWeight: {
			options: fontWeightOptions,
			defaultValue: null,
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
		align: {
			options: alignOptions,
			defaultValue: 'left',
			control: {
				type: 'select',
			},
		},
		is: {
			control: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => (
	<Box>
		<TextLink {...args}>Hello</TextLink>
	</Box>
);

const InsideParagraphTemplate: ComponentStory<typeof TextLink> = (args) => (
	<Text is="p">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
		<TextLink {...args}>Hello</TextLink> autem consectetur consequuntur eius
		fugiat illo ipsum nobis numquam, officiis placeat quia, quidem
		reprehenderit rerum temporibus veniam vero.
	</Text>
);

const standardProps: Omit<ComponentProps<typeof TextLink>, 'children'> = {
	muted: false,
	size: '4',
	align: 'left',
	fontWeight: 'semiBold',
};

export const standard: ComponentStory<typeof TextLink> =
	Template.bind(standardProps);
standard.args = standardProps;

export const insideParagraph: ComponentStory<typeof TextLink> =
	InsideParagraphTemplate.bind(standardProps);
insideParagraph.args = standardProps;

const withIconProps: typeof standardProps = {
	...standardProps,
	icon: ArrowRightIcon,
};

export const withIcon = Template.bind(withIconProps);
withIcon.args = withIconProps;

export const withIconInsideParagraph =
	InsideParagraphTemplate.bind(withIconProps);
withIconInsideParagraph.args = withIconProps;
