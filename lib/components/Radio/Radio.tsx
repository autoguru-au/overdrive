import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, type ReactNode } from 'react';

import type { OdComponentProp, TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { CheckableBase } from '../private/CheckableBase';
import { checkableIndicator } from '../private/CheckableBase/CheckableBase.css';

import * as styles from './Radio.css';
import { useRadioContext } from './RadioGroup';

export interface RadioProps extends OdComponentProp, TestIdProp {
	/** Flexible className applied to the root element */
	className?: string;
	/**
	 * Accessible name for the radio. Required when rendering without
	 * `children`, which otherwise leaves the control with no name at all.
	 */
	'aria-label'?: string;
	/** id of the element naming this radio, as an alternative to `aria-label` */
	'aria-labelledby'?: string;
	/** Removes the control from the tab order and blocks interaction */
	disabled?: boolean;
	/**
	 * Ring size, per the DS-2026 selection-control spec. Defaults to the
	 * `size` of the enclosing `RadioGroup`, which is `medium`.
	 */
	size?: keyof typeof styles.size;
	/**
	 * Value submitted with the form, and the value the enclosing `RadioGroup`
	 * matches to decide whether this radio is the selected one.
	 */
	value: string;
	/** Label content. A string is wrapped in `Text`; a node is rendered as given */
	children?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			value,
			className = '',
			'aria-label': ariaLabel,
			'aria-labelledby': ariaLabelledBy,
			children,
			disabled = false,
			size,
			odComponent = 'radio',
			testId,
		},
		ref,
	) => {
		const radioContext = useRadioContext();

		const isChecked = value === radioContext.value;
		const ringSize = size ?? radioContext.size ?? 'medium';

		const handleClick = () => radioContext.radioSelected?.(value);

		return (
			<CheckableBase
				ref={ref}
				inputType="radio"
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				className={className}
				inputName={radioContext.inputName}
				value={value}
				label={children}
				disabled={disabled}
				checked={isChecked}
				odComponent={odComponent}
				testId={testId}
				handleClick={handleClick}
			>
				<Box
					className={clsx(
						styles.ring,
						styles.size[ringSize],
						checkableIndicator,
					)}
					{...dataAttrs({
						size: ringSize,
						active: isChecked,
						disabled,
					})}
				>
					<Box className={styles.dot} />
				</Box>
			</CheckableBase>
		);
	},
);

Radio.displayName = 'Radio';
