import { ChevronDownIcon, IconType } from '@autoguru/icons';
import * as React from 'react';
import {
	ComponentProps,
	FunctionComponent,
	KeyboardEventHandler,
	MouseEventHandler,
	ReactNode,
	useCallback,
	useRef,
	useState,
} from 'react';

import type { TestIdProp } from '../../types';
import { Button } from '../Button/Button';
import { DropDownOptionsList } from '../DropDown/DropDownOptionsList';
import { Flyout } from '../Flyout/Flyout';
import { Icon } from '../Icon/Icon';
import { useOutsideClick } from '../OutsideClick/OutsideClick';
import { EPositionerAlignment } from '../Positioner/index';

import * as styles from './SplitButton.css';

/**
 * Button props shared by *both* the primary action and the menu trigger. The
 * `children`/`onClick`/`aria-label` of the underlying buttons are managed
 * internally, so they are omitted here.
 */
type SharedButtonProps = Pick<
	ComponentProps<typeof Button>,
	'variant' | 'size' | 'disabled' | 'minimal' | 'rounded' | 'isLoading'
>;

type FlyoutProps = Pick<ComponentProps<typeof Flyout>, 'alignment'>;

export interface SplitButtonProps
	extends SharedButtonProps,
	FlyoutProps,
	TestIdProp {
	/**
	 * Text label for the primary action segment (left).
	 */
	label: string;
	/**
	 * Handler for the primary action. This does **not** open the menu.
	 */
	onClick?: ComponentProps<typeof Button>['onClick'];
	/**
	 * Menu options, typically `DropDownOption` elements.
	 */
	children: ReactNode;
	/**
	 * Icon shown in the menu trigger segment (right).
	 * @default ChevronDownIcon
	 */
	icon?: IconType;
	/**
	 * Accessible label for the menu trigger segment.
	 * @default 'More options'
	 */
	menuLabel?: string;
	/**
	 * Controls the open state of the menu. When provided the component becomes
	 * controlled; otherwise it manages its own open state.
	 */
	isOpen?: boolean;
	/**
	 * Called whenever the menu requests to open or close.
	 */
	onOpenChange?: (isOpen: boolean) => void;
}

/**
 * A `SplitButton` pairs a primary action with a dropdown menu of related
 * secondary actions. The left segment triggers the primary action, while the
 * chevron on the right opens a menu of `DropDownOption` children.
 *
 * Both segments share a single `variant`/`size`. Following the WAI-ARIA
 * pattern, the two segments are independent buttons grouped together; the
 * trigger exposes `aria-haspopup` and `aria-expanded`.
 *
 * @example
 * <SplitButton label="Bulk upload" onClick={handleUpload}>
 *   <DropDownOption label="Single upload" icon={UploadIcon} onClick={...} />
 *   <DropDownOption label="Import CSV" onClick={...} />
 * </SplitButton>
 */
export const SplitButton: FunctionComponent<SplitButtonProps> = ({
	label,
	onClick,
	children,
	icon = ChevronDownIcon,
	menuLabel = 'More options',
	alignment = EPositionerAlignment.BOTTOM_RIGHT,
	isOpen: controlledIsOpen,
	onOpenChange,
	testId,
	...sharedProps
}) => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);

	// Use controlled state if provided, otherwise use uncontrolled state.
	const isOpen = controlledIsOpen ?? uncontrolledIsOpen;

	const handleOpenChange = useCallback(
		(newIsOpen: boolean) => {
			onOpenChange?.(newIsOpen);
			if (controlledIsOpen === undefined) {
				setUncontrolledIsOpen(newIsOpen);
			}
		},
		[controlledIsOpen, onOpenChange],
	);

	const handleClose = useCallback(
		() => handleOpenChange(false),
		[handleOpenChange],
	);

	const onTriggerClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		() => handleOpenChange(!isOpen),
		[isOpen, handleOpenChange],
	);

	const onTriggerKeyDown = useCallback<KeyboardEventHandler<HTMLButtonElement>>(
		(event) => {
			if (event.key === 'Escape' && isOpen) {
				handleClose();
			}
		},
		[isOpen, handleClose],
	);

	useOutsideClick([menuRef, triggerRef], handleClose);

	return (
		<>
			<div role="group" className={styles.group} data-testid={testId}>
				<Button
					{...sharedProps}
					className={styles.primary}
					onClick={onClick}
				>
					{label}
				</Button>
				<Button
					{...sharedProps}
					ref={triggerRef}
					className={styles.trigger}
					aria-label={menuLabel}
					aria-haspopup="menu"
					aria-expanded={isOpen}
					onClick={onTriggerClick}
					onKeyDown={onTriggerKeyDown}
				>
					<Icon icon={icon} />
				</Button>
			</div>
			<Flyout
				triggerRef={triggerRef}
				isOpen={isOpen}
				alignment={alignment}
			>
				<DropDownOptionsList ref={menuRef}>
					{children}
				</DropDownOptionsList>
			</Flyout>
		</>
	);
};

SplitButton.displayName = 'SplitButton';
