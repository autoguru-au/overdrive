import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { TextAreaInput } from '.';

const meta: Meta<typeof TextAreaInput> = {
	title: 'Forms & Input Fields/Text Area Input',
	component: TextAreaInput,
	argTypes: {
		maxLength: {
			defaultValue: null,
			description: 'Set the max length of the input',
			control: {
				type: 'number',
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultValue =
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\nPhasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut';
const defaultPlaceholder = 'Tell us about your car.';

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {
	args: {
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
	},
};

export const Filled: Story = {
	args: {
		...Standard.args,
		value: defaultValue,
		hintText: 'Hint Text',
	},
};

export const Small: Story = {
	args: {
		...Standard.args,
		size: 'small',
	},
};

export const Disabled: Story = {
	args: {
		...Standard.args,
		value: defaultValue,
		disabled: true,
	},
};
