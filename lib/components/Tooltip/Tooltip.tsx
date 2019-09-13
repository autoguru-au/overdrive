import React, {
	Children,
	cloneElement,
	FunctionComponent,
	ReactElement,
	useCallback,
	useRef,
	useState,
} from 'react';

import { EPositionerAlignment, Positioner } from '../Positioner';
import { Text } from '../Typography';
import styles from './style.scss';

interface Props {
	label: string;
	alignment?: EPositionerAlignment;
	children: ReactElement;
}

export const Tooltip: FunctionComponent<Props> = ({
	alignment = EPositionerAlignment.RIGHT,
	label,
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const childRef = useRef<HTMLDivElement>();
	const triggerRef = useRef<HTMLElement>();

	const leaveTimer = useRef<number>();

	const enterHandler = useCallback(() => {
		if (typeof window === 'undefined') return;

		if (leaveTimer.current) {
			window.clearTimeout(leaveTimer.current);
		}

		setIsOpen(true);
	}, [setIsOpen]);

	const leaveHandler = useCallback(() => {
		if (typeof window === 'undefined') return;

		leaveTimer.current = window.setTimeout(() => {
			setIsOpen(false);
		}, 1e3 / 2);
	}, [setIsOpen]);

	return (
		<>
			{cloneElement(Children.only(children), {
				ref: triggerRef,
				onMouseEnter: enterHandler,
				onMouseLeave: leaveHandler,
			})}
			<Positioner
				triggerRef={triggerRef}
				alignment={alignment}
				isOpen={isOpen}>
				<div ref={childRef} className={styles.root}>
					<Text white>{label}</Text>
				</div>
			</Positioner>
		</>
	);
};
