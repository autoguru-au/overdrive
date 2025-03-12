import { FourByFourIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { DateInput } from '../DateInput';

import { ColourInput } from '.';

const defaultColour = '#ec4040';

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

const meta: Meta<typeof ColourInput> = {
	title: 'Forms & Input Fields/Colour Input',
	component: ColourInput,
	parameters: { chromatic: {} },
	argTypes: {
		value: {
			control: {
				type: 'color',
			},
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
			defaultValue: null,
			description: 'Input suffix Icon',
			...argTypesExampleIcons,
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sharedProps: ComponentProps<typeof ColourInput> = {
	disabled: false,
	name: 'date',
	placeholder: 'Your favourite colour',
	isValid: false,
	isTouched: false,
	isLoading: false,
	isFocused: false,
	reserveHintSpace: false,
	hintText: '',
	notch: true,
	suffixIcon: void 0,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {
	args: {
		...sharedProps,
	},
};

export const Filled: Story = {
	args: {
		...sharedProps,
		value: defaultColour,
		placeholder: 'What is your favourite car colour?',
		suffixIcon: FourByFourIcon,
	},
};
