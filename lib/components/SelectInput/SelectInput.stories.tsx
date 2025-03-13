import { CarIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { DateInput } from '../DateInput';

import { SelectInput } from '.';

const valueOptions = ['Kia', 'Toyota', 'BMW', 'Mitsubishi', 'Hyundai'];
const selectOptions = valueOptions.map((item) => (
	<option key={item} value={item}>
		{item}
	</option>
));

const defaultValue = valueOptions[4];
const defaultPlaceholder = 'What is the make of your car?';

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

const meta: Meta<typeof SelectInput> = {
	title: 'Forms & Input Fields/Select',
	component: SelectInput,
	args: {
		// @ts-expect-error null is assignable to type 'string | undefined'
		value: null,
		disabled: false,
		name: 'text',
		placeholder: defaultPlaceholder,
		isValid: false,
		isTouched: false,
		isLoading: false,
		isFocused: false,
		reserveHintSpace: false,
		hintText: '',
		notch: true,
		attach: 'NONE',
		prefixIcon: CarIcon,
		onChange: action('onChange'),
		onFocus: action('onFocus'),
		onBlur: action('onBlur'),
		children: (
			<>
				<option disabled>Select an option</option>
				{selectOptions}
			</>
		),
	},
	argTypes: {
		value: {
			options: valueOptions,
			control: {
				type: 'select',
			},
		},
		attach: {
			description: 'Input attach',
			options: Object.keys(attachOptions),
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			...argTypesExampleIcons,
			description: 'Input prefix Icon',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {
	args: {
		hintText: 'Hint Text',
	},
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
		placeholder: defaultPlaceholder,
		isTouched: true,
		isValid: false,
		hintText: 'Vehicle make is mandatory',
	},
};

export const Disabled: Story = {
	args: {
		value: defaultValue,
		placeholder: defaultPlaceholder,
		disabled: true,
	},
};

export const SizeSmall: Story = {
	args: {
		size: 'small',
	},
};
