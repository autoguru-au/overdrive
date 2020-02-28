import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {
	EProgressSpinnerSize,
	EProgressSpinnerVariant,
	ProgressSpinner,
} from '.';

const baseProps = () => ({
	size: select('Size', EProgressSpinnerSize, EProgressSpinnerSize.Medium),
	variant: select(
		'Variant',
		EProgressSpinnerVariant,
		EProgressSpinnerVariant.Primary,
	),
	onClick(e) {
		e.preventDefault();

		return action('Clicked')(e);
	},
});

storiesOf('Components|Progress/Spinner', module)
	.addParameters({ chromatic: { disable: true } })
	.add('Standard', () => <ProgressSpinner {...baseProps()} />);
