import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextAreaInput } from '.';

const sharedKnobs = placeholder => ({
	placeholder: text('Placeholder', placeholder),
	disabled: boolean('disabled', false),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});

storiesOf('Components|Inputs/Textarea', module)
	.addParameters({
		chromatic: { delay: 300 },
	})
	.add('Standard', () => (
		<TextAreaInput name="abc" {...sharedKnobs('Tell us about your car.')} />
	))
	.add('With A Value', () => (
		<TextAreaInput
			name="abc"
			placeholder="Tell us about your car."
			value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar odio. Duis laoreet lacus vel consequat congue. Ut euismod enim non eros lacinia mollis. Vestibulum libero quam, aliquet non justo laoreet, egestas molestie ante. Quisque urna leo, consectetur id dui aliquet, placerat iaculis augue. Pellentesque sed vestibulum augue, quis porta lectus."
		/>
	))
	.add('With Hint Text', () => (
		<TextAreaInput
			name="abc"
			placeholder="How many?"
			hintText={text('Hint Text', 'Must be greater than 10.')}
		/>
	))
	.add('Disabled', () => (
		<TextAreaInput
			disabled
			name="abc"
			placeholder="Tell us about your car."
			value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar odio. Duis laoreet lacus vel consequat congue. Ut euismod enim non eros lacinia mollis. Vestibulum libero quam, aliquet non justo laoreet, egestas molestie ante. Quisque urna leo, consectetur id dui aliquet, placerat iaculis augue. Pellentesque sed vestibulum augue, quis porta lectus."
		/>
	));
// TODO: A test here to limit the value to 100 chars
