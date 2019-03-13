import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { RadioButton } from '.';

const baseProps = () => ({
	checked: boolean('checked', false),
	label: text('Checkbox label', 'check me!'),
});

storiesOf('Components|Radio Button', module).add('default', () => (
	<RadioButton {...baseProps()} />
));
