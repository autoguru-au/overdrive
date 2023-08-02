import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text';

import { Tooltip } from '.';

const sizeScale: Array<ComponentProps<typeof Text>['size']> = [
	'medium',
	'large',
];
export default {
	title: 'Components/Tooltip',
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
			options: EAlignment,
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
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
	</Tooltip>
);

const standardProps: Omit<ComponentProps<typeof Tooltip>, 'children'> = {
	label: 'Im the tooltip body',
	closeAfter: null,
};

export const standard: ComponentStory<typeof Tooltip> =
	Template.bind(standardProps);
standard.args = standardProps;

const withAtuCloseProps: Omit<ComponentProps<typeof Tooltip>, 'children'> = {
	label: 'I will automatically close after 5 seconds',
	closeAfter: 5e3,
};
export const withAutoClose: ComponentStory<typeof Tooltip> =
	Template.bind(withAtuCloseProps);
withAutoClose.args = withAtuCloseProps;

const withLongTextProps: Omit<ComponentProps<typeof Tooltip>, 'children'> = {
	label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
	alignment: EAlignment.BOTTOM,
};

export const withLongText: ComponentStory<typeof Tooltip> =
	Template.bind(withLongTextProps);
withLongText.args = withLongTextProps;

const withSmallTextSizeProps: Omit<
	ComponentProps<typeof Tooltip>,
	'children'
> = {
	label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
	alignment: EAlignment.BOTTOM,
	size: 'large',
};

export const withLargeTextSize: ComponentStory<typeof Tooltip> = Template.bind(
	withSmallTextSizeProps,
);
withLargeTextSize.args = withSmallTextSizeProps;

const withEmptyLabelProps: Omit<
	ComponentProps<typeof Tooltip>,
	'children'
> = {
	label: '',
	alignment: EAlignment.BOTTOM,
	size: 'large',
};

export const withEmptyLabel: ComponentStory<typeof Tooltip> = Template.bind(
	withEmptyLabelProps,
);
withEmptyLabel.args = withEmptyLabelProps;
