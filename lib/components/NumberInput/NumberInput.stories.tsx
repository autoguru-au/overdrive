import { AccountEditIcon, CalendarIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import React, { type ComponentProps } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { DateInput } from '../DateInput';

import { NumberInput } from '.';

const meta: Meta<typeof NumberInput> = {
	title: 'Forms & Input Fields/Number Input',
	component: NumberInput,
	parameters: {
		chromatic: {},
	},
};
export default meta;

type Story = StoryObj<typeof NumberInput>;

const defaultValue = isChromatic()
	? '42'
	: Math.round(Math.random() * 100).toString();
const defaultPlaceholder = 'How many?';

const attachOptions: Record<
	string,
	ComponentProps<typeof DateInput>['attach']
> = {
	NONE: 'NONE',
	TOP: 'TOP',
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
	BOTTOM: 'BOTTOM',
	ALL: 'ALL',
};

const argTypes: ArgTypes = {
	prefixIcon: {
		...argTypesExampleIcons,
		defaultValue: null,
		description: 'Input prefix Icon',
	},
	attach: {
		defaultValue: 'NONE',
		description: 'Input attach',
		options: Object.values(attachOptions),
		control: {
			type: 'select',
		},
	},
	suffixIcon: {
		...argTypesExampleIcons,
		defaultValue: null,
		description: 'Input suffix Icon',
	},
	maxLength: {
		defaultValue: null,
		description: 'Set the max length of the number',
		control: {
			type: 'number',
		},
	},
};

const RenderTemplate = (args: ComponentProps<typeof NumberInput>) => {
	const [value, setValue] = React.useState(args.value);
	return (
		<NumberInput
			{...args}
			value={value}
			onChange={(e) => {
				setValue(e.currentTarget.value);
				args.onChange?.(e);
			}}
		/>
	);
};

const sharedProps: ComponentProps<typeof NumberInput> = {
	disabled: false,
	name: 'number',
	value: '',
	placeholder: defaultPlaceholder,
	isValid: false,
	isTouched: false,
	isLoading: false,
	isFocused: false,
	reserveHintSpace: false,
	hintText: '',
	notch: true,
	preventMouseWheel: true,
	prefixIcon: undefined,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {
	args: sharedProps,
	argTypes,
	render: RenderTemplate,
};

export const Valid: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: true,
	},
};

export const Invalid: Story = {
	args: {
		value: '545156543',
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: false,
		hintText: 'Please enter a valid number',
	},
};

export const SmallSize: Story = {
	args: {
		...sharedProps,
		value: defaultValue,
		placeholder: defaultPlaceholder,
		size: 'small',
	},
	argTypes,
	render: RenderTemplate,
};

/**
 * Both prefix and suffix icons
 */
export const WithIcons: Story = {
	args: {
		...sharedProps,
		prefixIcon: CalendarIcon,
		suffixIcon: AccountEditIcon,
	},
	argTypes,
	render: RenderTemplate,
};

export const Loading: Story = {
	args: {
		...sharedProps,
		isLoading: true,
	},
	argTypes,
	render: RenderTemplate,
};
