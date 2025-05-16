import { ChevronDownIcon, IconType } from '@autoguru/icons';
import * as React from 'react';
import {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
	ReactNode,
	useCallback,
	useRef,
	useState,
} from 'react';

import { Button } from '../Button/Button';
import { Flyout } from '../Flyout/Flyout';
import { Icon } from '../Icon/Icon';
import { useOutsideClick } from '../OutsideClick/OutsideClick';
import { EPositionerAlignment } from '../Positioner/index';

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
	onClick?: ComponentProps<typeof Button>['onClick'];
}

export const DropDown: FunctionComponent<DropDownProps> = ({
	children: options,
	label,
	icon = ChevronDownIcon,
	alignment = EPositionerAlignment.BOTTOM_LEFT,
	isOpen: incomingIsOpen = false,
	onClick: incomingOnClick,
	...buttonProps
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(incomingIsOpen);

	const onMenuClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		(event) => {
			if (typeof incomingOnClick === 'function') incomingOnClick(event);
			setIsOpen(!isOpen);
		},
		[isOpen, incomingOnClick],
	);
	useOutsideClick([menuRef], () => setIsOpen(false));
	return (
		<>
			<Button ref={buttonRef} onClick={onMenuClick} {...buttonProps}>
				{label}
				<Icon icon={icon} />
			</Button>
			<Flyout
				triggerRef={buttonRef}
				isOpen={isOpen}
				alignment={alignment}
			>
				<DropDownOptionsList ref={menuRef}>
					{options}
				</DropDownOptionsList>
			</Flyout>
		</>
	);
};
