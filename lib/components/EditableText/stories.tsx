import { ComponentMeta, ComponentStory } from '@storybook/react';
import isChromatic from 'chromatic';
import * as React from 'react';
import { ChangeEvent, ComponentProps, useState } from 'react';

import { EditableText } from '.';

export default {
	title: 'Components/Inputs/EditableText',
	component: EditableText,
	argTypes: {
		colour: {
			options: ['muted', 'primary', 'secondary'],
			defaultValue: 'primary',
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof EditableText>;

const template: ComponentStory<typeof EditableText> = ({
	onChange: incomingOnChange,
	value: incomingValue,
	...args
}) => {
	const [value, setValue] = useState<number>(incomingValue);
	return (
		<EditableText
			onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setValue(e.currentTarget.value);
				typeof incomingOnChange === 'function' &&
					incomingOnChange(e.currentTarget.value);
			}}
			value={value}
			{...args}
		/>
	);
};

const textProps: ComponentProps<typeof EditableText> = {
	colour: 'muted',
	value: 'Hello World',
	type: 'text',
};
const numberProps: ComponentProps<typeof EditableText> = {
	colour: 'muted',
	value: '20',
	type: 'number',
};

const formatDate = (date: Date = new Date()) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const todayStr: string = formatDate(
	isChromatic() ? new Date(2019, 5, 1) : new Date(),
);
const dateProps: ComponentProps<typeof EditableText> = {
	colour: 'muted',
	value: todayStr,
	type: 'date',
};
const narrowCharactersProps: ComponentProps<typeof EditableText> = {
	colour: 'muted',
	value: 'Price is $111.01',
	type: 'text',
};

const customSizeProps: ComponentProps<typeof EditableText> = {
	colour: 'warning',
	value: '$999.99',
	type: 'text',
	size: '6',
};

export const text = template.bind(textProps);
export const number = template.bind(numberProps);
export const date = template.bind(dateProps);
export const narrowCharacters = template.bind(narrowCharactersProps);
export const customSize = template.bind(customSizeProps);

text.args = textProps;
number.args = numberProps;
date.args = dateProps;
narrowCharacters.args = narrowCharactersProps;
customSize.args = customSizeProps;
