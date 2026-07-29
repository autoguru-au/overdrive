import { PlusIcon, XIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, {
	forwardRef,
	type HTMLAttributes,
	type MouseEventHandler,
	type ReactElement,
} from 'react';

import { useNullCheck } from '../../hooks/useNullCheck';
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

/**
 * Attributes forwarded to the chip body. Typed against `HTMLElement` because the
 * body is a `<button>` when interactive and a `<span>` when it is not.
 */
type FilterChipBodyAttributes = Pick<
	HTMLAttributes<HTMLElement>,
	| 'aria-controls'
	| 'aria-describedby'
	| 'aria-haspopup'
	| 'aria-label'
	| 'aria-labelledby'
	| 'id'
	| 'onBlur'
	| 'onFocus'
	| 'onKeyDown'
	| 'onMouseEnter'
	| 'onMouseLeave'
>;

export interface FilterChipProps extends FilterChipBodyAttributes, TestIdProp {
	/** The chip shape. @default 'select' */
	type?: FilterChipType;
	/** The category name, or the chip's only text for `simple` and `add`. */
	label: string;
	/** The chosen value. Rendered by `select` and `numeric` only. */
	value?: string;
	/** The comparison word, e.g. `over`. Rendered by `numeric` only. */
	operator?: string;
	/**
	 * Reflects the persistent chosen state as an inverted surface. Purely
	 * visual — the chip's own text is what tells a screen reader which filter is
	 * applied. Use `pressed` if the chip is a toggle. Not applicable to `add`.
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Marks the chip as an on/off toggle and reports `aria-pressed`. Only set
	 * this when clicking the chip applies and unapplies the filter in place; a
	 * chip whose body opens an editor is not a toggle and must leave it unset.
	 */
	pressed?: boolean;
	/**
	 * Whether the popover or dropdown this chip controls is open. When
	 * supplied the chip is exposed as a disclosure rather than a toggle, and
	 * `aria-haspopup` is set unless you specify it yourself. Pair it with
	 * `aria-controls` and the forwarded `ref`, which `Popover` needs to anchor
	 * itself to the chip.
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
	 * Accessible name for the `×` button. Defaults to naming the filter and its
	 * value — `Remove State QLD filter` — so that two chips from the same
	 * category are distinguishable. Any trailing colon is stripped.
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
 *
 * The forwarded `ref` lands on the chip body, which is what a `Popover` anchors
 * to. A chip with neither `onClick` nor `onRemove` renders no button and
 * receives no ref.
 *
 * Removal is by the `×` button only — the WAI-ARIA APG chip pattern also removes
 * a focused chip on `Backspace`/`Delete`, which this component does not
 * implement.
 */
export const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(
	(
		{
			type = 'select',
			label,
			value,
			operator,
			selected = false,
			pressed,
			expanded,
			onClick,
			onRemove,
			removeLabel,
			className,
			testId,
			'aria-haspopup': ariaHasPopup,
			...bodyAttrs
		},
		ref,
	): ReactElement => {
		const isAdd = type === 'add';
		const isSelected = !isAdd && selected;
		const showRemove = !isAdd && typeof onRemove === 'function';
		const isInteractive = typeof onClick === 'function' || showRemove;

		useNullCheck(
			!isAdd || typeof onClick === 'function',
			'FilterChip: an "add" chip needs an onClick — without one it renders as static text that still looks like a button.',
		);

		// Category labels are usually authored with a trailing colon ("Vehicle
		// type:"), which reads poorly in the middle of a sentence.
		const accessibleName = label.replace(/:\s*$/, '');

		// Naming the value as well keeps two chips from the same category
		// ("State: QLD", "State: NSW") distinguishable in a list of buttons.
		const removeName = [accessibleName, operator, value]
			.filter(Boolean)
			.join(' ');

		// A chip whose value is edited through a popover is a disclosure, and a
		// disclosure needs to say that it opens something. `aria-pressed` is only
		// for a chip the consumer has declared to be a toggle — inferring it from
		// `selected` would announce every applied filter as "not pressed".
		const stateProps = {
			'aria-expanded': expanded,
			'aria-haspopup':
				ariaHasPopup ?? (expanded === undefined ? undefined : true),
			'aria-pressed': isAdd ? undefined : pressed,
		};

		const rootClassName = clsx(
			styles.chip({
				variant: isAdd ? 'add' : 'filter',
				selected: isSelected,
				interactive: isInteractive,
			}),
			className,
		);

		const rootAttrs = {
			...dataAttrs({ odComponent: 'filter-chip' }),
			'data-testid': testId,
		};

		const content = (
			<>
				{isAdd && <Icon icon={PlusIcon} size="small" />}
				<span
					className={clsx(
						styles.labelText,
						(type === 'select' || type === 'numeric') &&
							styles.categoryLabel({ selected: isSelected }),
					)}
				>
					{label}
				</span>
				{type === 'numeric' && operator ? (
					<span className={styles.labelText}>{operator}</span>
				) : null}
				{(type === 'select' || type === 'numeric') && value ? (
					<span className={styles.valueText}>{value}</span>
				) : null}
			</>
		);

		// Two independent actions cannot nest inside one button, so a removable
		// chip is a plain container holding sibling buttons.
		if (showRemove) {
			const bodyClassName = clsx(
				styles.chipBody({ withRemove: true }),
				styles.innerButton,
			);

			return (
				<div className={rootClassName} {...rootAttrs}>
					{onClick ? (
						<button
							className={clsx(styles.resetButton, bodyClassName)}
							onClick={onClick}
							ref={ref}
							type="button"
							{...bodyAttrs}
							{...stateProps}
						>
							{content}
						</button>
					) : (
						<span className={bodyClassName} {...bodyAttrs}>
							{content}
						</span>
					)}
					<button
						aria-label={
							removeLabel ?? `Remove ${removeName} filter`
						}
						className={clsx(
							styles.resetButton,
							styles.innerButton,
							styles.removeButton,
						)}
						onClick={onRemove}
						type="button"
					>
						<Icon icon={XIcon} size="small" />
					</button>
				</div>
			);
		}

		if (onClick) {
			return (
				<button
					className={clsx(
						rootClassName,
						styles.resetButton,
						styles.chipBody(),
					)}
					onClick={onClick}
					ref={ref}
					type="button"
					{...rootAttrs}
					{...bodyAttrs}
					{...stateProps}
				>
					{content}
				</button>
			);
		}

		return (
			<span
				className={clsx(rootClassName, styles.chipBody())}
				{...rootAttrs}
				{...bodyAttrs}
			>
				{content}
			</span>
		);
	},
);

FilterChip.displayName = 'FilterChip';
