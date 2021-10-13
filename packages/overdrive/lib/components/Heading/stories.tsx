import * as React from 'react';
import { ComponentProps } from 'react';

import { Heading } from '.';
import { ArgTypes } from '@storybook/react';

const headingTypeOptions: Array<ComponentProps<typeof Heading>['is']> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const sizeScale: Array<ComponentProps<typeof Heading>['size']> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alignOptions: Array<ComponentProps<typeof Heading>['align']> = ['left', 'center', 'right'];
const colourOptions: Array<ComponentProps<typeof Heading>['colour']> = ['dark', 'light', 'neutral', 'primary', 'secondary', 'white', 'information', 'link', 'success', 'danger', 'warning', 'shine'];

export default {
	title: 'Foundation/Typography/Heading',
	component: Heading,
};


const Template = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}><Heading {...args} /></div>
);

const AllTypesTemplate = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{headingTypeOptions.map(is => (
			<Heading key={is} {...args} is={is} />
		))}
	</div>
);

const AllColoursTemplate = (args) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>
		{colourOptions.map(colour => (
			<div style={{marginBottom: 8}}>
				{headingTypeOptions.map((is, index)=> (
					<Heading key={`${is}-${index}`} {...args} colour={colour} is={is} />
				))}
			</div>
		))}
	</div>
);

const sharedArgTypes: ArgTypes = {
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
const colourArgTypes: ArgTypes = {
	colour: {
		options: colourOptions,
		defaultValue: void 0,
		control: {
			type: 'select',
		},
	},
};
const argTypes: ArgTypes = {
	...sharedArgTypes,
	...colourArgTypes,
	is: {
		options: headingTypeOptions,
		defaultValue: 'h1',
		table: {
			type: { summary: 'heading' },
			defaultValue: 'h1',
		},
		description: 'HTML heading tag to be used',
		control: {
			type: 'select',
		},
	},
};

const standardProps: ComponentProps<typeof Heading> = {
	is: 'h1',
	children: 'I am a heading',
};
const allTypesProps: ComponentProps<typeof Heading> = {
	children: 'I am a heading',
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
standard.argTypes = argTypes;

export const allTypes = AllTypesTemplate.bind(allTypesProps);
allTypes.args = allTypesProps;
allTypes.argTypes = { ...sharedArgTypes, colourArgTypes };

export const allColours = AllColoursTemplate.bind(allTypesProps);
allColours.args = allTypesProps;
allColours.argTypes = sharedArgTypes;
