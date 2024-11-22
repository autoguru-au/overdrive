import { ArgTypes, ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Text } from '.';

const textTypeOptions: Array<ComponentProps<typeof Text>['is']> = ['span', 'p'];
const noWrapOptions: Array<ComponentProps<typeof Text>['noWrap']> = [
	false,
	true,
];
const wordBreakOptions: Array<ComponentProps<typeof Text>['wordBreak']> = [
	false,
	true,
];
const transformOptions: Array<ComponentProps<typeof Text>['transform']> = [
	'uppercase',
	'capitalize',
	undefined,
];
const weightOptions: Array<ComponentProps<typeof Text>['fontWeight']> = [
	'normal',
	'semiBold',
	'bold',
];
const sizeScale: Array<ComponentProps<typeof Text>['size']> = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
];
const alignOptions: Array<ComponentProps<typeof Text>['align']> = [
	'left',
	'center',
	'right',
];
const colourOptions: Array<ComponentProps<typeof Text>['colour']> = [
	'dark',
	'light',
	'neutral',
	'primary',
	'secondary',
	'white',
	'information',
	'link',
	'success',
	'danger',
	'warning',
	'shine',
];

export default {
	title: 'Foundation/Typography/Text',
	//component: Text, Breaks the docs when enabled!
	decorators: [],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		<Text {...args} />
	</div>
);

const AllTypesTemplate: ComponentStory<typeof Text> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{textTypeOptions.map((is) => (
			<Text key={is} {...args} is={is} />
		))}
	</div>
);

const AllSizesTemplate: ComponentStory<typeof Text> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{sizeScale.map((size) => (
			<Text key={size} {...args} size={size} />
		))}
	</div>
);

const AllColoursTemplate: ComponentStory<typeof Text> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{colourOptions.map((colour, index) => (
			<div key={index} style={{ marginBottom: 8 }}>
				<Text key={index} {...args} colour={colour} />
			</div>
		))}
	</div>
);

const sharedArgTypes: ArgTypes<Partial<ComponentProps<typeof Text>>> = {
	noWrap: {
		options: noWrapOptions,
		defaultValue: false,
		control: {
			type: 'boolean',
		},
	},
	breakWord: {
		options: wordBreakOptions,
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
		options: weightOptions,
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
};
const colourArgTypes: ArgTypes<Partial<ComponentProps<typeof Text>>> = {
	colour: {
		options: colourOptions,
		defaultValue: void 0,
		control: {
			type: 'select',
		},
	},
};
const argTypes: ArgTypes<Partial<ComponentProps<typeof Text>>> = {
	...sharedArgTypes,
	...colourArgTypes,
	is: {
		options: textTypeOptions,
		defaultValue: 'span',
		table: {
			type: { summary: 'text' },
			defaultValue: 'span',
		},
		description: 'HTML text tag to be used',
		control: {
			type: 'select',
		},
	},
};

const standardProps: ComponentProps<typeof Text> = {
	is: 'span',
	children: 'Help people better care for their cars',
};
const allTypesProps: ComponentProps<typeof Text> = {
	children:
		'To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.',
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;
standard.argTypes = argTypes;

export const allTypes = AllTypesTemplate.bind(allTypesProps);
allTypes.args = allTypesProps;
allTypes.argTypes = { ...sharedArgTypes, ...colourArgTypes };

export const allSizes = AllSizesTemplate.bind(allTypesProps);
allSizes.args = allTypesProps;
allSizes.argTypes = argTypes;

export const allColours = AllColoursTemplate.bind(allTypesProps);
allColours.args = allTypesProps;
allColours.argTypes = argTypes;

const withLongUnspacedTextProps: ComponentProps<typeof Text> = {
	breakWord: true,
	children:
		'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.',
};

export const withLongUnspacedText = Template.bind(withLongUnspacedTextProps);
withLongUnspacedText.args = withLongUnspacedTextProps;
withLongUnspacedText.argTypes = argTypes;
