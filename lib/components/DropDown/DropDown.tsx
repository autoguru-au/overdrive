import { ChevronDownIcon, IconType } from '@autoguru/icons';
import * as React from 'react';
import {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import { useMedia } from '../../hooks/useMedia/useMedia';
import { Button } from '../Button/Button';
import { Flyout } from '../Flyout/Flyout';
import { Icon } from '../Icon/Icon';
import { useOutsideClick } from '../OutsideClick/OutsideClick';
import { EPositionerAlignment } from '../Positioner/index';
import { StandardModal } from '../StandardModal/StandardModal';

import { DropDownOptionsList } from './DropDownOptionsList';

type ButtonProps = Omit<
	ComponentProps<typeof Button>,
	'is' | 'children' | 'onClick'
>;
type FlyoutProps = Pick<ComponentProps<typeof Flyout>, 'alignment'>;

export interface DropDownProps extends ButtonProps, FlyoutProps {
	children: ReactNode;
	label: string;
	icon?: IconType;
	isOpen?: boolean;
	onOpenChange?: (isOpen: boolean) => void;
	onClick?: ComponentProps<typeof Button>['onClick'];
}

export const DropDown: FunctionComponent<DropDownProps> = ({
	children: options,
	label,
	icon = ChevronDownIcon,
	alignment = EPositionerAlignment.BOTTOM_LEFT,
	isOpen: controlledIsOpen,
	onOpenChange,
	onClick: incomingOnClick,
	...buttonProps
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
	const [isTablet] = useMedia(['tablet']);

	// Use controlled state if provided, otherwise use uncontrolled state
	const isControlled = controlledIsOpen !== undefined;
	const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

	// Determine if we should use mobile modal (mobile = not tablet)
	const isMobile = !isTablet;

	// Reset to closed when viewport changes between mobile/desktop
	useEffect(() => {
		if (isOpen) {
			if (isControlled && onOpenChange) {
				onOpenChange(false);
			} else if (!isControlled) {
				setUncontrolledIsOpen(false);
			}
		}
	}, [isMobile]); // Only trigger on viewport change

	const handleOpenChange = useCallback(
		(newIsOpen: boolean) => {
			if (onOpenChange) {
				onOpenChange(newIsOpen);
			}
			if (!isControlled) {
				setUncontrolledIsOpen(newIsOpen);
			}
		},
		[isControlled, onOpenChange],
	);

	const onMenuClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		(event) => {
			if (typeof incomingOnClick === 'function') incomingOnClick(event);
			handleOpenChange(!isOpen);
		},
		[isOpen, incomingOnClick, handleOpenChange],
	);

	const handleClose = useCallback(() => {
		handleOpenChange(false);
	}, [handleOpenChange]);

	useOutsideClick([menuRef], handleClose);

	return (
		<>
			<Button
				ref={buttonRef}
				onClick={onMenuClick}
				{...buttonProps}
			>
				{label}
				<Icon icon={icon} />
			</Button>
			{isMobile ? (
				<StandardModal
					isOpen={isOpen}
					onRequestClose={handleClose}
					title={label}
				>
					<DropDownOptionsList>{options}</DropDownOptionsList>
				</StandardModal>
			) : (
				<Flyout
					triggerRef={buttonRef}
					isOpen={isOpen}
					alignment={alignment}
				>
					<DropDownOptionsList ref={menuRef}>
						{options}
					</DropDownOptionsList>
				</Flyout>
			)}
		</>
	);
};

DropDown.displayName = 'DropDown';
