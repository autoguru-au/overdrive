import React, { useRef, type ReactNode, type Key } from 'react';
import { useToggleButton, useToggleButtonGroup } from 'react-aria';
import { type useToggleGroupState } from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';

import * as styles from './ToggleButtons.css';

/**
 * ## ToggleButtons
 *
 * A group of toggle buttons that allows users to select one option from a set.
 * Built with React Aria's `useToggleButtonGroup` for full accessibility support.
 *
 * ### Usage Examples
 *
 * #### Basic Usage
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
 * #### Icon-only Buttons
 * ```tsx
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
 *
 * #### Different Sizes
 * ```tsx
 * <ToggleButtons
 *   size="large"
 *   selectedKeys={['option2']}
 *   onSelectionChange={handleChange}
 * >
 *   <ToggleButton key="option1">Small</ToggleButton>
 *   <ToggleButton key="option2">Medium</ToggleButton>
 *   <ToggleButton key="option3">Large</ToggleButton>
 * </ToggleButtons>
 * ```
 *
 * ### Accessibility Features
 *
 * - Full keyboard navigation with Arrow keys and Space/Enter
 * - Screen reader support with proper ARIA attributes
 * - Focus management and visual focus indicators
 * - Support for aria-label and aria-labelledby on individual buttons
 *
 * ### Visual Variants
 *
 * The component automatically handles visual styling based on selection state:
 * - Selected buttons have dark background with white text/icons
 * - Unselected buttons have light background with dark text/icons
 * - Seamless connection between adjacent buttons
 * - Rounded corners on the outer edges of the group
 */
export interface ToggleButtonsProps
	extends Omit<AriaToggleButtonGroupProps, 'children'>,
		TestIdProp {
	/** The toggle buttons to display in the group */
	children: ReactNode;
	/** Visual size variant of the toggle buttons */
	size?: 'small' | 'medium' | 'large';
	/** Whether the buttons should stretch to fill available width */
	stretch?: boolean;
}

export interface ToggleButtonProps extends TestIdProp {
	/** The content of the toggle button */
	children: ReactNode;
	/** Unique key to identify this button */
	key: Key;
	/** Whether the button is disabled */
	isDisabled?: boolean;
	/** Accessible label for the button (especially important for icon-only buttons) */
	'aria-label'?: string;
	/** ID of element that labels this button */
	'aria-labelledby'?: string;
}

export const ToggleButton = ({
	children,
	isDisabled,
	testId,
	...ariaProps
}: ToggleButtonProps) => {
	const ref = useRef<HTMLButtonElement>(null);
	const context = React.useContext(ToggleButtonGroupContext);

	if (!context) {
		throw new Error('ToggleButton must be used within ToggleButtons');
	}

	const { state, size } = context;
	const { buttonProps, isPressed } = useToggleButton(
		{
			...ariaProps,
			isDisabled,
		},
		state,
		ref,
	);

	const isSelected = state.isSelected(ariaProps.key as Key);

	return (
		<button
			{...buttonProps}
			ref={ref}
			className={[
				styles.toggleButton({
					selected: isSelected,
					pressed: isPressed,
					disabled: isDisabled,
				}),
				styles.sizeVariants[size],
			]}
			{...dataAttrs({
				selected: isSelected,
				disabled: isDisabled,
			})}
			data-testid={testId}
		>
			{children}
		</button>
	);
};

ToggleButton.displayName = 'ToggleButton';

// Context to pass state down to ToggleButton children
interface ToggleButtonGroupContextValue {
	state: ReturnType<typeof useToggleState>;
	size: 'small' | 'medium' | 'large';
}

const ToggleButtonGroupContext =
	React.createContext<ToggleButtonGroupContextValue | null>(null);

export const ToggleButtons = ({
	children,
	size = 'medium',
	stretch = false,
	testId,
	selectionMode = 'single',
	...toggleGroupProps
}: ToggleButtonsProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const toggleGroupPropsWithDefaults = { selectionMode, ...toggleGroupProps };
	const state = useToggleGroupState(toggleGroupPropsWithDefaults);
	const { groupProps } = useToggleButtonGroup(
		toggleGroupPropsWithDefaults,
		state,
		ref,
	);

	return (
		<ToggleButtonGroupContext.Provider value={{ state, size }}>
			<Box
				{...groupProps}
				ref={ref}
				display="inline-flex"
				alignItems="stretch"
				width={stretch ? 'full' : undefined}
				className={styles.toggleButtonGroup({
					size,
					stretch,
				})}
				data-od-component="toggle-buttons"
				data-testid={testId}
			>
				{children}
			</Box>
		</ToggleButtonGroupContext.Provider>
	);
};

ToggleButtons.displayName = 'ToggleButtons';
