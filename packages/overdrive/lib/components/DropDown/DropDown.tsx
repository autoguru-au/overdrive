import { ChevronDownIcon, IconType } from '@autoguru/icons';
import * as React from 'react';
import {
	ComponentProps,
	MouseEventHandler,
	ReactNode,
	useCallback,
	useRef,
	useState,
} from 'react';

import { Button } from '../Button';
import { Flyout } from '../Flyout';
import { Icon } from '../Icon';
import { useOutsideClick } from '../OutsideClick';
import { EPositionerAlignment } from '../Positioner';

import { DropDownOptionsList } from './DropDownOptionsList';

type ButtonProps = Omit<ComponentProps<typeof Button>, 'is' | 'children' | 'onClick'>;
type FlyoutProps = Pick<ComponentProps<typeof Flyout>, 'alignment'>;

export interface Props extends ButtonProps, FlyoutProps {
	children: ReactNode;
	label: string;
	icon?: IconType;
	onClick?: ComponentProps<typeof Button>['onClick'];
}

export const DropDown = ({
	children: options,
	label,
	icon = ChevronDownIcon,
	alignment = EPositionerAlignment.BOTTOM_LEFT,
	onClick: incomingOnClick,
	...buttonProps
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

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

export default DropDown;
