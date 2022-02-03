import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Text } from '../Text';

import { Image } from '.';

const lazyOptions: Array<ComponentProps<typeof Image>['noWrap']> = [
	false,
	true,
];
export default {
	title: 'Foundation/Typography/Heading',
	// component: Heading, Breaks the docs when enabled!
	argTypes: {
		lazy: {
			options: lazyOptions,
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		size: {
			options: sizeScale,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		<Heading {...args} />
	</div>
);

const AllTypesTemplate: ComponentStory<typeof Heading> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{headingTypeOptions.map((is) => (
			<Heading key={is} {...args} is={is} />
		))}
	</div>
);

const AllColoursTemplate: ComponentStory<typeof Heading> = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{colourOptions.map((colour, index) => (
			<div key={index} style={{ marginBottom: 8 }}>
				<Heading key={index} {...args} colour={colour} />
			</div>
		))}
	</div>
);

const standardProps: ComponentProps<typeof Heading> = {
	is: 'h1',
	children: 'I am a heading',
};
const allTypesProps: ComponentProps<typeof Heading> = {
	children: 'I am a heading',
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

export const allTypes = AllTypesTemplate.bind(allTypesProps);
allTypes.args = allTypesProps;

export const allColours = AllColoursTemplate.bind(allTypesProps);
allColours.args = allTypesProps;
