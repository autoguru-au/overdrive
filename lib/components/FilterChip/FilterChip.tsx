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
import { useBox } from '../Box/useBox/useBox';
import { Icon } from '../Icon/Icon';

import * as styles from './FilterChip.css';

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

interface FilterChipBaseProps extends FilterChipBodyAttributes, TestIdProp {
	/** The category name, or the chip's only text for `simple` and `add`. */
	label: string;
	/** Override class name with additional styles */
	className?: string;
}

/**
 * The props every chip except `add` shares. `add` opens a filter picker and has
 * no filter of its own, so it carries none of them.
 */
interface FilterChipStateProps {
	/**
	 * Reflects the persistent chosen state as an inverted surface. Purely
	 * visual — the chip's own text is what tells a screen reader which filter is
	 * applied. Use `pressed` if the chip is a toggle.
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
	 */
	onRemove?: MouseEventHandler<HTMLButtonElement>;
	/**
	 * Accessible name for the `×` button. Defaults to naming the filter and its
	 * value — `Remove State QLD filter` — so that two chips from the same
	 * category are distinguishable. Any trailing colon is stripped.
	 */
	removeLabel?: string;
}

/** A category and its chosen value, e.g. `Vehicle type: Truck`. */
interface SelectChipProps extends FilterChipBaseProps, FilterChipStateProps {
	type?: 'select';
	/** The chosen value. */
	value?: string;
	operator?: never;
}

/** A category, a comparison operator and a value, e.g. `Usage (km): over 100,000 km`. */
interface NumericChipProps extends FilterChipBaseProps, FilterChipStateProps {
	type: 'numeric';
	/** The chosen value. */
	value?: string;
	/** The comparison word, e.g. `over`. */
	operator?: string;
}

/** A bare label with no value, e.g. `Serviced`. */
interface SimpleChipProps extends FilterChipBaseProps, FilterChipStateProps {
	type: 'simple';
	value?: never;
	operator?: never;
}

/**
 * The dashed "Add Filter" affordance that opens a filter picker.
 *
 * `onClick` is required: without one the chip renders as static text that still
 * looks like a button. It holds no filter, so it takes no value, no selected or
 * pressed state, and nothing to remove.
 */
interface AddChipProps extends FilterChipBaseProps {
	type: 'add';
	onClick: MouseEventHandler<HTMLButtonElement>;
	value?: never;
	operator?: never;
	selected?: never;
	pressed?: never;
	expanded?: never;
	onRemove?: never;
	removeLabel?: never;
}

/**
 * A discriminated union on `type`, so combinations the component ignores at
 * runtime — a `simple` chip with a `value`, an `add` chip with an `onRemove` —
 * do not compile.
 */
export type FilterChipProps =
	| SelectChipProps
	| NumericChipProps
	| SimpleChipProps
	| AddChipProps;

/**
 * The four filter chip shapes.
 *
 * - `select` — a category and its chosen value, e.g. `Vehicle type: Truck`
 * - `numeric` — a category, a comparison operator and a value, e.g. `Usage (km): over 100,000 km`
 * - `simple` — a bare label with no value
 * - `add` — the dashed "Add Filter" affordance that opens a filter picker
 *
 * Derived from the props union rather than declared beside it, so the two
 * cannot drift.
 */
export type FilterChipType = NonNullable<FilterChipProps['type']>;

/**
 * A filter chip represents one active filter in a filter bar. The body opens an
 * editor for the filter's value and the trailing `×` clears it.
 *
 * Distinct from `Badge`, which is a static, non-interactive label.
 *
 * The forwarded `ref` lands on the chip body, which is what a `Popover` anchors
 * to. It is attached only when the body is a button — that is, when `onClick` is
 * supplied. A chip without one has an inert `<span>` body and receives no ref,
 * whether or not it has a `×`.
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

		// `expanded` and `pressed` describe the chip body, and the body is only
		// a button when there is an `onClick`. Without one they have nowhere
		// valid to land — `aria-expanded` on an inert `<span>` is not a
		// disclosure — so they are dropped, loudly rather than silently.
		useNullCheck(
			typeof onClick === 'function' ||
				(expanded === undefined && pressed === undefined),
			'FilterChip: "expanded" and "pressed" describe the chip body, which is only a button when onClick is supplied. Without one they are dropped.',
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

		// The body is a button only when there is something to activate; without
		// an `onClick` it is inert text, and the `×` carries the interaction.
		const isBodyButton = typeof onClick === 'function';
		const bodyInteractionProps = isBodyButton
			? { ...stateProps, onClick, ref, type: 'button' }
			: {};

		// Every slot goes through `useBox` so that `elementReset` supplies the
		// UA reset for whichever tag it renders as. Composing the reset by hand
		// does not work — see `buttonFont` in the stylesheet.
		//
		// A removable chip is a plain container holding sibling buttons, since
		// two independent actions cannot nest inside one button. Every other
		// chip has no second action, so its root *is* its body.
		const bodyAs = isBodyButton ? 'button' : 'span';
		const rootAs = showRemove ? 'div' : bodyAs;

		const { Component: Root, componentProps: rootProps } = useBox({
			as: rootAs,
			className: [
				styles.chip({
					variant: isAdd ? 'add' : 'filter',
					selected: isSelected,
					interactive: isInteractive,
				}),
				!showRemove && styles.chipBody(),
				!showRemove && isBodyButton && styles.buttonFont,
				className,
			],
			odComponent: 'filter-chip',
			testId,
			...(showRemove ? {} : { ...bodyAttrs, ...bodyInteractionProps }),
		});

		// Built unconditionally to keep the call order stable, and rendered only
		// by the removable branch below. On every other chip the root above has
		// already absorbed the body's classes and attributes.
		const { Component: Body, componentProps: bodyProps } = useBox({
			as: bodyAs,
			className: [
				styles.chipBody({ withRemove: true }),
				styles.innerButtonText,
				isBodyButton && styles.buttonFont,
			],
			...bodyAttrs,
			...bodyInteractionProps,
		});

		const { Component: Remove, componentProps: removeProps } = useBox({
			as: 'button',
			className: [
				styles.buttonFont,
				styles.innerButtonText,
				styles.removeButton,
			],
			'aria-label': removeLabel ?? `Remove ${removeName} filter`,
			onClick: onRemove,
			type: 'button',
		});

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
					// The value is the one run that truncates. Set
					// unconditionally because whether it has actually been cut
					// off depends on the container, which is not knowable at
					// render — a screen reader still gets the full text from
					// the DOM, this is what gives a pointer user the same.
					<span className={styles.valueText} title={value}>
						{value}
					</span>
				) : null}
			</>
		);

		if (showRemove) {
			return (
				<Root {...rootProps}>
					<Body {...bodyProps}>{content}</Body>
					<Remove {...removeProps}>
						<Icon icon={XIcon} size="small" />
					</Remove>
				</Root>
			);
		}

		return <Root {...rootProps}>{content}</Root>;
	},
);

FilterChip.displayName = 'FilterChip';
