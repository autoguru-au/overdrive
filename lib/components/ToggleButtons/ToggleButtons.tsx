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
	/** The toggle buttons to display in the group */
	children: ReactNode;
	/** Visual size variant of the toggle buttons */
	size?: 'small' | 'medium' | 'large';
	// TODO: Implement stretch functionality
	// /** Whether the buttons should stretch to fill available width */
	// stretch?: boolean;
}

/**
 * Context to pass state down to ToggleButton children
 */
const ToggleButtonGroupContext = React.createContext<ToggleGroupState | null>(
	null,
);

/**
 * ## ToggleButtons
 *
 * A a simple toggle button of 2 or more items that allows users to select one option from a set.
 * The default use is for single item selection. Multiple item selection is supported using
 * `selectionMode="multiple"`.
 *
 * @example
 * ```tsx
 * <ToggleButtons
 *   selectedKeys={['option1']}
 *   onSelectionChange={(keys) => setSelected(keys)}
 * >
 *   <ToggleButton key="option1">Confirm</ToggleButton>
 *   <ToggleButton key="option2">Decline</ToggleButton>
 *   <ToggleButton key="option3">Change date</ToggleButton>
 * </ToggleButtons>
 * ```
 *
 * @example
 * ```tsx
 * // icons
 * <ToggleButtons
 *   selectedKeys={['list']}
 *   onSelectionChange={handleViewChange}
 * >
 *   <ToggleButton key="list" aria-label="List view">
 *     <Icon icon={ListIcon} />
 *   </ToggleButton>
 *   <ToggleButton key="map" aria-label="Map view">
 *     <Icon icon={MapIcon} />
 *   </ToggleButton>
 * </ToggleButtons>
 * ```
 */
export const ToggleButtons = ({
	children,
	disallowEmptySelection = true,
	selectionMode = 'single',
	testId,

	...props
}: ToggleButtonsProps) => {
	const propsWithDefault = { disallowEmptySelection, selectionMode, ...props };
	const state = useToggleGroupState(propsWithDefault);
	const ref = useRef<HTMLDivElement>(null);
	const { groupProps } = useToggleButtonGroup(propsWithDefault, state, ref);

	const { Component, componentProps } = useBox({
		className: [styles.toggleButtonGroup],
		odComponent: 'toggle-buttons',
		testId,
	});

	return (
		<Component {...componentProps} {...groupProps} ref={ref}>
			<ToggleButtonGroupContext.Provider value={state}>
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
	const state = React.useContext(ToggleButtonGroupContext);

	if (!state) {
		throw new Error('ToggleButton must be used within ToggleButtons');
	}

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
				disabled: isDisabled,
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
