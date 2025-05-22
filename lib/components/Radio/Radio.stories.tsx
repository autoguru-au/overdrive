import { StoryObj, Meta } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { fn } from 'storybook/test';

import { Radio } from './Radio';
import { RadioGroup as RadioGroupComponent } from './RadioGroup';

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Disabled option', value: 'disabled' },
	{ label: 'Strawberries', value: 'strawberries' },
];

const meta: Meta<typeof RadioGroupComponent> = {
	title: 'Forms & Input Fields/Radio',
	component: RadioGroupComponent,
	tags: ['updated'],
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>
				<Story />
			</div>
		),
	],
	args: {
		name: undefined,
		value: undefined,
		onChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof RadioGroupComponent>;

export const RadioGroup = {
	render: ({ ...args }) => {
		const [selectedValue, setSelectedValue] = React.useState(args.value);

		const handleChange = (value: string) => {
			setSelectedValue(value);
			args.onChange(value);
		};

		return (
			<RadioGroupComponent
				{...(args as ComponentProps<typeof RadioGroupComponent>)}
				value={selectedValue}
				onChange={handleChange}
			>
				{listData.map((item) => (
					<Radio
						key={item.value}
						value={item.value}
						disabled={args.disabled || item.value === 'disabled'}
					>
						{item.label}
					</Radio>
				))}
			</RadioGroupComponent>
		);
	},
	args: {
		name: 'radio-group-favourite-fruit',
		value: 'avocado',
	},
};

export const MultipleLines: Story = {
	args: {
		name: 'radio-group-multi-line',
		value: 'multi1',
		children: (
			<>
				<Radio value="multi1">
					There is a very good reason why this thing is a multi-line,
					sometimes we need to show people a lot of things. And thus
					this exists.
				</Radio>
				<Radio value="single" disabled>
					Some options are just a single line, like this one.
				</Radio>
			</>
		),
	},
};
