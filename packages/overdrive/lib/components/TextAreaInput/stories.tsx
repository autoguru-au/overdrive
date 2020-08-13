import { text } from '@storybook/addon-knobs';
import * as React from 'react';

import { TextAreaInput } from '.';

export default {
	title: 'Components/Inputs/Textarea',
	component: TextAreaInput,
	parameters: {
		chromatic: { delay: 300 },
	},
};

export const standard = () => (
	<TextAreaInput name="abc" placeholder="Tell us about your car." />
);
export const withAValue = () => (
	<TextAreaInput
		name="abc"
		placeholder="Tell us about your car."
		value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar odio. Duis laoreet lacus vel consequat congue. Ut euismod enim non eros lacinia mollis. Vestibulum libero quam, aliquet non justo laoreet, egestas molestie ante. Quisque urna leo, consectetur id dui aliquet, placerat iaculis augue. Pellentesque sed vestibulum augue, quis porta lectus."
	/>
);
export const withHintText = () => (
	<TextAreaInput
		name="abc"
		placeholder="How many?"
		hintText={text('Hint Text', 'Must be greater than 10.')}
	/>
);
export const disabled = () => (
	<TextAreaInput
		disabled
		name="abc"
		placeholder="Tell us about your car."
		value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar odio. Duis laoreet lacus vel consequat congue. Ut euismod enim non eros lacinia mollis. Vestibulum libero quam, aliquet non justo laoreet, egestas molestie ante. Quisque urna leo, consectetur id dui aliquet, placerat iaculis augue. Pellentesque sed vestibulum augue, quis porta lectus."
	/>
);
// TODO: A test here to limit the value to 100 chars
