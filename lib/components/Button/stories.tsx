import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, EButtonSize, EButtonVariant } from '.';
import styles from './style.scss';

const nonRoundedProps = () => ({
	isFullWidth: boolean('Full Width', false),
});

const baseProps = (defaultVariant = EButtonVariant.Primary) => ({
	size: select('Size', EButtonSize, EButtonSize.Medium),
	variant: select('Variant', EButtonVariant, defaultVariant),
	minimal: boolean('minimal', false),
	onClick(e) {
		e.preventDefault();

		return action('Clicked')(e);
	},
});

storiesOf('Components|Buttons', module)
	.add('default', () => (
		<Button
			{...baseProps()}
			{...nonRoundedProps()}
			isLoading={boolean('isLoading', false)}
			disabled={boolean('Disabled', false)}>
			Hello World
		</Button>
	))
	.add('hoverState', () => (
		<Button
			className={styles.isHoverState}
			{...baseProps()}
			{...nonRoundedProps()}>
			Hello World
		</Button>
	))
	.add('activeState', () => (
		<Button
			className={styles.isActiveState}
			{...baseProps()}
			{...nonRoundedProps()}>
			Hello World
		</Button>
	))
	.add('disabledState', () => (
		<Button {...baseProps()} {...nonRoundedProps()} disabled>
			Hello World
		</Button>
	))
	.add('loadingState', () => (
		<Button {...baseProps()} {...nonRoundedProps()} isLoading>
			Hello World
		</Button>
	))
	.add('asAnchor', () => (
		<Button
			href="https://www.autoguru.com.au"
			target="_blank"
			is="a"
			{...baseProps()}
			{...nonRoundedProps()}>
			Hello World
		</Button>
	))
	.add('rounded', () => (
		<Button rounded {...baseProps()}>
			2
		</Button>
	));
