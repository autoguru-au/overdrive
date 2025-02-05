import { Meta, StoryFn } from '@storybook/react';
import isChromatic from 'chromatic';
import * as React from 'react';
import { ChangeEvent, ComponentProps, useState } from 'react';

import { EditableText } from '.';

export default {
	title: 'Forms & Input Fields/Editable Text',
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
} satisfies Meta<typeof EditableText>;

const template: StoryFn<typeof EditableText> = ({
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

export const Text = template.bind(textProps);
export const Number = template.bind(numberProps);
export const DateWithPicker = template.bind(dateProps);
export const NarrowCharacters = template.bind(narrowCharactersProps);
export const CustomSize = template.bind(customSizeProps);

Text.args = textProps;
Number.args = numberProps;
DateWithPicker.args = dateProps;
NarrowCharacters.args = narrowCharactersProps;
CustomSize.args = customSizeProps;
