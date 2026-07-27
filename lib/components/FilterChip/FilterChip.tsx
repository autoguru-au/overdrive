import { PlusIcon, XIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { type MouseEventHandler, type ReactElement } from 'react';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon } from '../Icon/Icon';

import * as styles from './FilterChip.css';

/**
 * The four filter chip shapes.
 *
 * - `select` — a category and its chosen value, e.g. `Vehicle type: Truck`
 * - `numeric` — a category, a comparison operator and a value, e.g. `Usage (km): over 100,000 km`
 * - `simple` — a bare label with no value
 * - `add` — the dashed "Add Filter" affordance that opens a filter picker
 */
export type FilterChipType = 'select' | 'numeric' | 'simple' | 'add';

export interface FilterChipProps extends TestIdProp {
	/** The chip shape. @default 'select' */
	type?: FilterChipType;
	/** The category name, or the chip's only text for `simple` and `add`. */
	label: string;
	/** The chosen value. Rendered by `select` and `numeric` only. */
	value?: string;
	/** The comparison word, e.g. `over`. Rendered by `numeric` only. */
	operator?: string;
	/**
	 * Reflects the persistent chosen state as an inverted surface. Not
	 * applicable to `add`. @default false
	 */
	selected?: boolean;
	/**
	 * Whether the popover or dropdown this chip controls is open. When
	 * supplied the chip is exposed as a disclosure rather than a toggle.
	 */
	expanded?: boolean;
	/** Activates the chip body. Omit to render the chip non-interactively. */
	onClick?: MouseEventHandler<HTMLButtonElement>;
	/**
	 * Removes the filter. Supplying this renders the trailing `×` button.
	 * Ignored by `add`, which has nothing to remove.
	 */
	onRemove?: MouseEventHandler<HTMLButtonElement>;
	/**
	 * Accessible name for the `×` button. Defaults to `Remove {label} filter`,
	 * with any trailing colon stripped from the label.
	 */
	removeLabel?: string;
	/** Override class name with additional styles */
	className?: string;
}

/**
 * A filter chip represents one active filter in a filter bar. The body opens an
 * editor for the filter's value and the trailing `×` clears it.
 *
 * Distinct from `Badge`, which is a static, non-interactive label.
 */
export const FilterChip = ({
	type = 'select',
	label,
	value,
	operator,
	selected = false,
	expanded,
	onClick,
	onRemove,
	removeLabel,
	className,
	testId,
}: FilterChipProps): ReactElement => {
	const isAdd = type === 'add';
	const isSelected = !isAdd && selected;
	const showRemove = !isAdd && typeof onRemove === 'function';

	// Category labels are usually authored with a trailing colon ("Vehicle
	// type:"), which reads poorly in the middle of a sentence.
	const accessibleName = label.replace(/:\s*$/, '');

	// A chip whose value is edited through a popover is a disclosure; one that
	// simply toggles on and off is a pressable. Announcing both would be noise.
	const stateProps = {
		'aria-expanded': expanded,
		'aria-pressed': expanded === undefined && !isAdd ? selected : undefined,
	};

	const rootClassName = clsx(
		styles.chip({
			variant: isAdd ? 'add' : 'filter',
			selected: isSelected,
		}),
		className,
	);

	const rootAttrs = {
		...dataAttrs({ odComponent: 'filter-chip' }),
		'data-testid': testId,
	};

	const content = (
		<>
			{isAdd && <Icon className={styles.icon} icon={PlusIcon} />}
			<span
				className={
					type === 'select' || type === 'numeric'
						? styles.categoryLabel({ selected: isSelected })
						: undefined
				}
			>
				{label}
			</span>
			{type === 'numeric' && operator ? <span>{operator}</span> : null}
			{(type === 'select' || type === 'numeric') && value ? (
				<span>{value}</span>
			) : null}
		</>
	);

	// Two independent actions cannot nest inside one button, so a removable
	// chip is a plain container holding sibling buttons.
	if (showRemove) {
		return (
			<div className={rootClassName} {...rootAttrs}>
				{onClick ? (
					<button
						className={clsx(styles.resetButton, styles.innerButton)}
						onClick={onClick}
						type="button"
						{...stateProps}
					>
						{content}
					</button>
				) : (
					<span className={styles.innerButton}>{content}</span>
				)}
				<button
					aria-label={
						removeLabel ?? `Remove ${accessibleName} filter`
					}
					className={clsx(
						styles.resetButton,
						styles.innerButton,
						styles.removeButton,
					)}
					onClick={onRemove}
					type="button"
				>
					<Icon className={styles.icon} icon={XIcon} />
				</button>
			</div>
		);
	}

	if (onClick) {
		return (
			<button
				className={clsx(rootClassName, styles.resetButton)}
				onClick={onClick}
				type="button"
				{...rootAttrs}
				{...stateProps}
			>
				{content}
			</button>
		);
	}

	return (
		<span className={rootClassName} {...rootAttrs}>
			{content}
		</span>
	);
};

FilterChip.displayName = 'FilterChip';
