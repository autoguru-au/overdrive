import { text, boolean } from '@storybook/addon-knobs';
import { addParameters, storiesOf } from '@storybook/react';
import React from 'react';
import { RadioButton } from '.';
import { RadioGroup } from './RadioGroup';
import styles from '../CheckableBase/style.scss';

const longLabel =
	'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ' +
	'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' +
	'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ' +
	'ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, ' +
	'sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';
const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
	onChange: checked => console.log('checked', checked),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|Radio Button', module).add('default', () => (
	<RadioButton name="radio-name" value="1" {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('unchecked', () => (
	<RadioButton name="radio-name" value="1" checked={false} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('checked', () => (
	<RadioButton name="radio-name" value="1" checked={true} {...baseProps()} />
));

storiesOf('Components|Radio Button', module).add('hovered', () => (
	<RadioButton
		name="radio-name"
		value="1"
		className={styles.hovered}
		{...checked()}
		{...baseProps()}
	/>
));

storiesOf('Components|Radio Button', module).add('active', () => (
	<RadioButton
		name="radio-name"
		value="1"
		className={styles.active}
		{...checked()}
		{...baseProps()}
	/>
));

storiesOf('Components|Radio Button', module).add('focused', () => (
	<RadioButton
		name="radio-name"
		value="1"
		className={styles.focused}
		{...checked()}
		{...baseProps()}
	/>
));

storiesOf('Components|Radio Button', module)
	.addParameters({ viewport: { defaultViewport: 'iphone6' } })
	.add('multiple lines', () => (
		<RadioButton
			name="radio-name"
			value="1"
			{...checked()}
			label={longLabel}
		/>
	));

));
