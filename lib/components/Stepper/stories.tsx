import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import { Stepper } from './Stepper';

const badgeProps = () => ({
	min: number('min', 0),
	max: number('max', 10),
	step: number('step', 0.5),
	disabled: boolean('disabled', false),
});

export default { title: 'Components|Inputs/Stepper', component: Stepper };

export const standard = () => {
	const StepperWrapper = () => {
		const [value, setValue] = useState(1);

		const onChangeHandler = (changedValue) => {
			action('onChange')(changedValue);
			setValue(changedValue);
		};

		const formatFn = (input) => `$${input}`;

		return (
			<Stepper
				{...badgeProps()}
				format={formatFn}
				value={number('value', value)}
				onChange={onChangeHandler}
			/>
		);
	};

	return <StepperWrapper />;
};
