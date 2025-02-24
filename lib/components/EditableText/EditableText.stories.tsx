import { Meta, StoryObj } from '@storybook/react';
import isChromatic from 'chromatic';
import React, { type ChangeEvent, useState } from 'react';

import { EditableText } from '.';

const meta = {
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

export default meta;
type Story = StoryObj<typeof meta>;

const formatDate = (date: Date = new Date()) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const todayStr: string = formatDate(
	isChromatic() ? new Date(2019, 5, 1) : new Date(),
);

export const Text: Story = {
	args: {
		colour: 'muted',
		value: 'Hello World',
		type: 'text',
	},
	decorators: [
		(Story, context) => {
			const [value, setValue] = useState(context.args.value);
			return (
				<Story
					args={{
						...context.args,
						value,
						onChange: (e: ChangeEvent<HTMLInputElement>) => {
							setValue(e.currentTarget.value);
						},
					}}
				/>
			);
		},
	],
};

// eslint-disable-next-line sonarjs/no-globals-shadowing
export const Number: Story = {
	...Text,
	args: {
		colour: 'muted',
		value: '20',
		type: 'number',
	},
};

export const DateWithPicker: Story = {
	...Text,
	args: {
		colour: 'muted',
		value: todayStr,
		type: 'date',
	},
};

export const NarrowCharacters: Story = {
	...Text,
	args: {
		colour: 'muted',
		value: 'Price is $111.01',
		type: 'text',
	},
};

export const CustomSize: Story = {
	...Text,
	args: {
		colour: 'warning',
		value: '$999.99',
		type: 'text',
		size: '6',
	},
};
