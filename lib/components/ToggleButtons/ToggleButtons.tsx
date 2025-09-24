import type { AriaToggleButtonGroupItemProps } from '@react-types/button';
import React, { useRef, type ReactNode } from 'react';
import {
	useToggleButtonGroup,
	useToggleButtonGroupItem,
	type AriaToggleButtonGroupProps,
} from 'react-aria';
import { useToggleGroupState, type ToggleGroupState } from 'react-stately';

import type { TestIdProp } from '../../types';
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
}

/**
 * Context to pass state and options down to ToggleButton children
 */
interface ToggleButtonGroupContextValue {
	state: ToggleGroupState;
	iconOnly: boolean;
}

const ToggleButtonGroupContext =
	React.createContext<ToggleButtonGroupContextValue | null>(null);

/**
 * ## ToggleButtons
 *
 * A toggle button group component that allows users to select one or more options from a set.
 * Built with React Aria for full accessibility support including keyboard navigation and screen readers.
 *
 * ### Key Features
 * - **Single or Multiple Selection**: Use `selectionMode="single"` (default) or `selectionMode="multiple"`
 * - **Uncontrolled by Default**: Use `defaultSelectedKeys` for initial selection
 * - **Controlled Mode**: Use `selectedKeys` and `onSelectionChange` for external state management
 * - **Icon Support**: Use `iconOnly={true}` for optimized icon-only button layouts
 * - **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
 *
 * ### Component Props
 * - `defaultSelectedKeys`: Initial selected keys (uncontrolled mode)
 * - `selectedKeys` + `onSelectionChange`: External state control (controlled mode)
 * - `selectionMode`: "single" or "multiple" selection behavior
 * - `disallowEmptySelection`: Prevents deselecting all options (default: true)
 * - `iconOnly`: Optimizes layout for icon-only buttons
 * - `isDisabled`: Disables the entire group
 *
 * ### Selection Change Handling
 * The `onSelectionChange` callback receives a `Set<Key>` containing selected button IDs:
 * ```tsx
 * onSelectionChange={(keys) => {
 *   console.log([...keys]); // Convert Set to array: ["option1", "option3"]
 *   setSelected(new Set(keys)); // Store as Set for controlled state
 * }}
 * ```
 *
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
export const ToggleButtons = ({
	children,
	disallowEmptySelection = true,
	iconOnly = false,
	selectionMode = 'single',
	testId,

	...props
}: ToggleButtonsProps) => {
	const propsWithDefault = {
		disallowEmptySelection,
		selectionMode,
		...props,
	};
	const state = useToggleGroupState(propsWithDefault);
	const ref = useRef<HTMLDivElement>(null);
	const { groupProps } = useToggleButtonGroup(propsWithDefault, state, ref);

	const { Component, componentProps } = useBox({
		className: [styles.toggleButtonGroup({ iconOnly })],
		odComponent: 'toggle-buttons',
		testId,
	});

	return (
		<Component {...componentProps} {...groupProps} ref={ref}>
			<ToggleButtonGroupContext.Provider value={{ state, iconOnly }}>
				{children}
			</ToggleButtonGroupContext.Provider>
		</Component>
	);
};

ToggleButtons.displayName = 'ToggleButtons';

export const ToggleButton = ({
	children,

	...props
}: AriaToggleButtonGroupItemProps) => {
	const ref = useRef<HTMLButtonElement>(null);
	const context = React.useContext(ToggleButtonGroupContext);

	if (!context) {
		throw new Error('ToggleButton must be used within ToggleButtons');
	}

	const { state, iconOnly } = context;
	const { buttonProps, isSelected } = useToggleButtonGroupItem(
		props,
		state,
		ref,
	);

	const { isDisabled } = props;

	return (
		<button
			{...buttonProps}
			className={styles.toggleButton({
				selected: isSelected,
				iconOnly,
			})}
			{...dataAttrs({
				selected: isSelected,
				disabled: isDisabled,
			})}
			ref={ref}
		>
			{children}
		</button>
	);
};

ToggleButton.displayName = 'ToggleButton';
