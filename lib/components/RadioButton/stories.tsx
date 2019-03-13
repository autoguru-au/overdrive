import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { RadioButton } from '.';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
});

storiesOf('Components|Radio Button', module).add('default', () => (
	<RadioButton {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('unchecked', () => (
	<RadioButton checked={false} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('checked', () => (
	<RadioButton checked={true} {...baseProps()} />
));
