import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { RadioButton, RadioGroup } from '.';
import styles from '../CheckableBase/style.scss';

const longLabel1 =
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
	'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ' +
	'pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet ' +
	'nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis ' +
	'eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend ' +
	'tellus.';

const longLabel2 =
	'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ' +
	'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' +
	'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.';

const baseProps = () => ({
	label: text('Checkbox label', 'check me!'),
	onChange: checked => console.log('checked', checked),
});

const checked = () => ({
	checked: boolean('checked', false),
});

storiesOf('Components|Radio Button', module).add('default', () => (
	<RadioGroup name="radio-story">
		<RadioButton name="radio-name" value="1" {...baseProps()} />
	</RadioGroup>
));

storiesOf('Components|Radio Button', module).add('unchecked', () => (
	<RadioGroup name="radio-story">
		<RadioButton name="radio-name" value="1" {...baseProps()} />
	</RadioGroup>
));

storiesOf('Components|Radio Button', module).add('checked', () => (
	<RadioGroup name="radio-story">
		<RadioButton
			name="radio-name"
			value="1"
			checked={true}
			{...baseProps()}
		/>
	</RadioGroup>
));

storiesOf('Components|Radio Button', module).add('hovered', () => (
	<RadioGroup name="radio-story">
		<RadioButton
			name="radio-name"
			value="1"
			className={styles.hovered}
			{...checked()}
			{...baseProps()}
		/>
	</RadioGroup>
));

storiesOf('Components|Radio Button', module).add('active', () => (
	<RadioGroup name="radio-story">
		<RadioButton
			name="radio-name"
			value="1"
			className={styles.active}
			{...checked()}
			{...baseProps()}
		/>
	</RadioGroup>
));

storiesOf('Components|Radio Button', module).add('focused', () => (
	<RadioGroup name="radio-story">
		<RadioButton
			name="radio-name"
			value="1"
			className={styles.focused}
			{...checked()}
			{...baseProps()}
		/>
	</RadioGroup>
));

storiesOf('Components|Radio Button', module)
	.addParameters({ viewport: { defaultViewport: 'iphone6' } })
	.add('multiple lines', () => (
		<RadioGroup name="radio-story">
			<RadioButton
				name="radio-name"
				value="1"
				{...checked()}
				label={longLabel1}
			/>
			<RadioButton
				name="radio-name"
				value="2"
				{...checked()}
				label={longLabel2}
			/>
		</RadioGroup>
	));

storiesOf('Components|Radio Group', module).add('default', () => (
	<RadioGroup name="make">
		<RadioButton label="Subaru" value="subaru" />
		<RadioButton label="Kia" value="kia" />
		<RadioButton label="Toyota" value="toyota" />
		<RadioButton label="Holden" value="holden" />
		<RadioButton label="Ford" value="ford" />
	</RadioGroup>
));
