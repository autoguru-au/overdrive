import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { RadioButton } from '.';

const longLabel =
	'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ' +
	'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' +
	'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ' +
	'ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, ' +
	'sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';
const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|Radio Button', module).add('default', () => (
	<RadioButton {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('unchecked', () => (
	<RadioButton checked={false} {...checked()} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('checked', () => (
	<RadioButton checked={true} {...checked()} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('hovered', () => (
	<RadioButton hovered={true} {...checked()} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('active', () => (
	<RadioButton active={true} {...checked()} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('focused', () => (
	<RadioButton focused={true} {...checked()} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('multiple lines', () => (
	<RadioButton {...checked()} label={longLabel} />
));
