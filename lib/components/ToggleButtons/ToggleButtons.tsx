import { invariant } from '@autoguru/utilities';
import type { AriaToggleButtonGroupItemProps } from '@react-types/button';
import type { Key } from '@react-types/shared';
import React, { Children, forwardRef, useRef, type ReactNode } from 'react';
import {
	useToggleButtonGroup,
	useToggleButtonGroupItem,
	type AriaToggleButtonGroupProps,
} from 'react-aria';
import { useToggleGroupState, type ToggleGroupState } from 'react-stately';

import type { TestIdProp } from '../../types';
import { mergeRefs } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { useBox } from '../Box/useBox/useBox';

import * as styles from './ToggleButtons.css';

export interface ToggleButtonsProps
	extends AriaToggleButtonGroupProps,
		TestIdProp {
	/**
	 * The toggle buttons to display in the group
	 * ```tsx
	 * <ToggleButton id="option1">Option 1</ToggleButton>
	 * <ToggleButton id="option2">Option 2</ToggleButton>
	 * ```
	 */
	children: ReactNode;
	/** Whether the buttons contain only icons (affects layout styling) */
	iconOnly?: boolean;
	/** Whether single or multiple selection is enabled. @default 'single' */
	selectionMode?: 'single' | 'multiple';
	/** Whether the collection allows empty selection. @default true */
	disallowEmptySelection?: boolean;
	/** The currently selected keys in the collection (controlled). */
	selectedKeys?: Iterable<Key>;
	/** The initial selected keys in the collection (uncontrolled). */
	defaultSelectedKeys?: Iterable<Key>;
	/** Handler that is called when the selection changes. */
	onSelectionChange?: (keys: Set<Key>) => void;
	/** Whether all toggle buttons are disabled. */
	isDisabled?: boolean;
	/** (_Not in use__) The orientation of the toggle button group. @default 'horizontal' */
	orientation?: 'horizontal' | 'vertical';
}

const ToggleButtonGroupContext = React.createContext<ToggleGroupState | null>(
	null,
);

/**
 * ## ToggleButtons
 *
 * A toggle button group component that allows users to select one option from a set (multiple selection
 * configrable). The ToggleButtons component also exports `ToggleButton` which are the child contents.
 * Each `ToggleButton` item must be populated with an `id="[value]"` prop which is used to identify it
 * both for default selection and in the on-change event.
 *
 * ### Configuration Overview
 * - **Selection mode**: `selectionMode` - "single" or "multiple" behavior
 * - **Default selection**: `defaultSelectedKeys` - initial selected keys as `string[]` (uncontrolled)
 * - **Controlled mode**: `selectedKeys` + `onSelectionChange` - external state control
 * - **Icon-only**: `iconOnly` - changes layout for single icon content (ARIA label or hidden text label required)
 * - `disallowEmptySelection`: Prevents deselecting all options (**default**: `true`)
 * - `isDisabled`: Disables the entire group
 *
 * ### Accessibility
 * - **Group Label**: When the button group has a label, associate it with `aria-labelledby` to and `id` on the heading text.
 *   To add a label without a heading use `aria-label`
 * - **Button Label**: For icons and other visual-only buttons add `aria-label` or label text within <VisuallyHidden>
 *
 * ### Selection Handling
 * The `onSelectionChange` callback receives a `Set<Key>` containing the IDs of current selected buttons.
 * Since a Set is not seralizable, the common approach is to convert it to an array for operations:
 * ```tsx
 * onSelectionChange={(keys) => {
 *   console.log([...keys]); // Convert Set to array: ["option1", "option3"]
 *   setSelected(new Set(keys)); // Store as Set for controlled state
 * }}
 * ```
 * @example
 * ```tsx
 * // Uncontrolled (recommended)
 * <ToggleButtons
 *   defaultSelectedKeys={['confirm']}
 *   onSelectionChange={(keys) => handleChange(keys)}
 * >
 *   <ToggleButton id="confirm">Confirm</ToggleButton>
 *   <ToggleButton id="decline">Decline</ToggleButton>
 *   <ToggleButton id="change-date">Change date</ToggleButton>
 * </ToggleButtons>
 * ```
 *
 * @example
 * ```tsx
 * // Controlled mode
 * const [selected, setSelected] = useState(new Set(['list']));
 *
 * <ToggleButtons
 *   selectedKeys={selected}
 *   onSelectionChange={setSelected}
 * >
 *   <ToggleButton id="list">List</ToggleButton>
 *   <ToggleButton id="grid">Grid</ToggleButton>
 * </ToggleButtons>
 * ```
 *
 * @example
 * ```tsx
 * // Icon-only buttons
 * <ToggleButtons
 *   defaultSelectedKeys={['list']}
 *   iconOnly
 *   onSelectionChange={handleViewChange}
 * >
 *   <ToggleButton id="list" aria-label="List view">
 *     <Icon icon={ListIcon} />
 *   </ToggleButton>
 *   <ToggleButton id="map" aria-label="Map view">
 *     <Icon icon={MapIcon} />
 *   </ToggleButton>
 * </ToggleButtons>
 * ```
 */
export const ToggleButtons = forwardRef<HTMLDivElement, ToggleButtonsProps>(
	(
		{
			children,
			disallowEmptySelection = true,
			iconOnly = false,
			selectionMode = 'single',
			testId,
			...props
		},
		forwardedRef,
	) => {
		const childArray = Children.toArray(children);
		invariant(
			childArray.length > 0,
			'ToggleButtons: Must contain at least one ToggleButton child',
		);

		const propsWithDefault = {
			disallowEmptySelection,
			selectionMode,
			...props,
		};
		const state = useToggleGroupState(propsWithDefault);
		const internalRef = useRef<HTMLDivElement>(null);
		const { groupProps } = useToggleButtonGroup(
			propsWithDefault,
			state,
			internalRef,
		);

		const { Component, componentProps } = useBox({
			className: [styles.toggleButtonGroup({ iconOnly })],
			odComponent: 'toggle-buttons',
			testId,
		});

		return (
			<Component
				{...componentProps}
				{...groupProps}
				ref={mergeRefs([internalRef, forwardedRef])}
			>
				<ToggleButtonGroupContext.Provider value={state}>
					{children}
				</ToggleButtonGroupContext.Provider>
			</Component>
		);
	},
);

ToggleButtons.displayName = 'ToggleButtons';

export const ToggleButton = forwardRef<
	HTMLButtonElement,
	AriaToggleButtonGroupItemProps
>(({ children, ...props }, forwardedRef) => {
	const internalRef = useRef<HTMLButtonElement>(null);
	const state = React.useContext(ToggleButtonGroupContext);

	invariant(
		state !== null,
		'ToggleButton: Must be used within ToggleButtons component',
	);

	invariant(
		props.id !== undefined,
		'ToggleButton: Missing required "id" prop',
	);

	const { buttonProps, isSelected } = useToggleButtonGroupItem(
		props,
		state,
		internalRef,
	);

	const { isDisabled } = props;

	return (
		<button
			{...buttonProps}
			className={styles.toggleButton}
			{...dataAttrs({
				selected: isSelected,
				disabled: isDisabled,
			})}
			ref={mergeRefs([internalRef, forwardedRef])}
		>
			{children}
		</button>
	);
});

ToggleButton.displayName = 'ToggleButton';
