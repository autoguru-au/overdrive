import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { AutoSuggest } from '.';

const mockSuggestions = [
	'Alfa Romeo',
	'Aston Martin',
	'Bentley',
	'BMW',
	'Bugatti',
	'Ferrari',
	'Jaguar',
	'Koenigsegg',
	'Lamborghini',
	'Lotus',
	'Maserati',
	'McLaren',
	'Pontiac',
	'Porsche',
].map((item) => ({ text: item, payload: item }));

const iconOptions = {
	MagnifyIcon,
	CarIcon,
	CarMultipleIcon,
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
};

export default {
	title: 'Components/Inputs/AutoSuggest',
	component: AutoSuggest,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 900, margin: '0 auto' }}>{story()}</div>
		),
	],
	argTypes: {
		value: {
			options: {
				unselected: null,
				...mockSuggestions.reduce(
					(map, item) => ({ ...map, [item.text]: item }),
					{},
				),
			},
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		fieldIcon: {
			defaultValue: void 0,
			description: 'Input field Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			defaultValue: void 0,
			description: 'Input prefix Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		wrapperRef: {
			control: {
				disable: true,
			},
		},
		ref: {
			control: {
				disable: true,
			},
		},
	},
	parameters: { chromatic: { delay: 900 } },
} as ComponentMeta<typeof AutoSuggest>;

const Template: ComponentStory<typeof AutoSuggest> = (args) => (
	<AutoSuggest {...args} />
);

const standardProps: Omit<ComponentProps<typeof AutoSuggest>, 'children'> = {
	value: null,
	suggestions: mockSuggestions,
	disabled: void 0,
	name: 'text',
	placeholder: 'Pick an exotic car brand',
	isValid: void 0,
	isTouched: void 0,
	isLoading: void 0,
	isFocused: void 0,
	reserveHintSpace: void 0,
	hintText: '',
	notch: true,
	prefixIcon: void 0,
	onReset: () => action('onReset')(),
	onChange: (thing) => action('onChange')(thing),
	onEnter: (thing) => action('onEnter')(thing),
	onFocus: (thing) => action('onFocus')(thing),
	onBlur: (thing) => action('onBlur')(thing),
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;

const withValueProps: typeof standardProps = {
	...standardProps,
	value: mockSuggestions[3],
};

export const withValue = Template.bind(withValueProps);
withValue.args = withValueProps;

const withoutNotchProps: typeof withValueProps = {
	...withValueProps,
	notch: false,
};
export const withoutNotch = Template.bind(withoutNotchProps);
withoutNotch.args = withoutNotchProps;

const withNoItemsProps: typeof standardProps = {
	...standardProps,
	suggestions: [],
};
export const withNoItems = Template.bind(withNoItemsProps);
withNoItems.args = withNoItemsProps;

const withIconProps: typeof withValueProps = {
	...withValueProps,
	prefixIcon: CarIcon,
};
export const withIcon = Template.bind(withIconProps);
withIcon.args = withIconProps;

const disabledProps: typeof withIconProps = {
	...withIconProps,
	disabled: true,
};
export const disabled = Template.bind(disabledProps);
disabled.args = disabledProps;

const withHintTextProps: typeof withIconProps = {
	...withIconProps,
	hintText: 'Choose a sports car make',
};
export const withHintText = Template.bind(withHintTextProps);
withHintText.args = withHintTextProps;

const validProps: typeof withHintTextProps = {
	...withHintTextProps,
	value: mockSuggestions[8],
	isTouched: true,
	isValid: true,
};
export const valid = Template.bind(validProps);
valid.args = validProps;

const invalidProps: typeof withHintTextProps = {
	...withHintTextProps,
	value: mockSuggestions[3],
	isTouched: true,
	isValid: false,
};
export const invalid = Template.bind(invalidProps);
invalid.args = invalidProps;
