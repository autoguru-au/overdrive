import { action } from '@storybook/addon-actions';
import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { TextAreaInput } from '.';

export default {
	title: 'Forms & Input Fields/Text Area Input',
	component: TextAreaInput,
	parameters: { chromatic: {} },
} satisfies Meta<typeof TextAreaInput>;

const defaultValue =
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\nPhasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut';
const defaultPlaceholder = 'Tell us about your car.';

const argTypes: ArgTypes = {
	maxLength: {
		defaultValue: null,
		description: 'Set the max length of the input',
		control: {
			type: 'number',
		},
	},
};

const Template: StoryFn<typeof TextAreaInput> = (args) => (
	<TextAreaInput {...args} />
);

const sharedProps: ComponentProps<typeof TextAreaInput> = {
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
	prefixIcon: void 0,
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
};

const standardProps: ComponentProps<typeof TextAreaInput> = sharedProps;
const withAValueProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
};
const withHintTextProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	hintText: 'Hint Text',
	placeholder: defaultPlaceholder,
};
const disabledProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	disabled: true,
};
const validProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: true,
};
const invalidProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: 'Bob the builder',
	placeholder: defaultPlaceholder,
	isTouched: true,
	isValid: false,
	hintText: 'Cannot be Bob the builder',
};
const noNotchProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	placeholder: defaultPlaceholder,
	notch: false,
};
const noNotchWithValueProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	value: defaultValue,
	placeholder: defaultPlaceholder,
	notch: false,
};
const loadingProps: ComponentProps<typeof TextAreaInput> = {
	...sharedProps,
	isLoading: true,
};
export const Standard = Template.bind(standardProps);
Standard.args = standardProps;
Standard.argTypes = argTypes;

export const WithAValue = Template.bind(withAValueProps);
WithAValue.args = withAValueProps;
WithAValue.argTypes = argTypes;

export const WithHintText = Template.bind(withHintTextProps);
WithHintText.args = withHintTextProps;
WithHintText.argTypes = argTypes;

export const NotchDisabled = Template.bind(noNotchProps);
NotchDisabled.args = noNotchProps;
NotchDisabled.argTypes = argTypes;

export const NotchDisabledWithValue = Template.bind(noNotchWithValueProps);
NotchDisabledWithValue.args = noNotchWithValueProps;
NotchDisabledWithValue.argTypes = argTypes;

export const Disabled = Template.bind(disabledProps);
Disabled.args = disabledProps;
Disabled.argTypes = argTypes;

export const Valid = Template.bind(validProps);
Valid.args = validProps;
Valid.argTypes = argTypes;

export const Invalid = Template.bind(invalidProps);
Invalid.args = invalidProps;
Invalid.argTypes = argTypes;

export const Loading = Template.bind(loadingProps);
Loading.args = loadingProps;
Loading.argTypes = argTypes;

const smallProps: typeof standardProps = {
	...standardProps,
	size: 'small',
};
export const Small = Template.bind(smallProps);
Small.args = smallProps;
Small.argTypes = argTypes;

const withValueSmallProps: typeof withAValueProps = {
	...withAValueProps,
	size: 'small',
};

export const WithValueSmall = Template.bind(withValueSmallProps);
WithValueSmall.args = withValueSmallProps;
WithValueSmall.argTypes = argTypes;

const loadingSmallProps: typeof withAValueProps = {
	...withAValueProps,
	isLoading: true,
	size: 'small',
};
export const LoadingSmall = Template.bind(loadingSmallProps);
LoadingSmall.args = loadingSmallProps;
LoadingSmall.argTypes = argTypes;
