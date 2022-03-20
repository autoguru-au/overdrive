import * as React from 'react';
import {
	Children,
	cloneElement,
	FunctionComponent,
	ReactElement,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import { Box } from '../Box';
import { Positioner } from '../Positioner';
import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text';

import * as styles from './Tooltip.css';

export interface Props {
	label: string;
	alignment?: EAlignment;
	children: ReactElement;
	closeAfter?: number;
}

export const Tooltip: FunctionComponent<Props> = ({
	alignment = EAlignment.RIGHT,
	label,
	children,
	closeAfter = null,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const childRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLElement>(null);

	const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

	const enterHandler = useCallback(() => {
		if (leaveTimer.current) {
			clearTimeout(leaveTimer.current);
		}

		setIsOpen(true);
	}, [setIsOpen]);

	const leaveHandler = useCallback(() => {
		leaveTimer.current = setTimeout(() => {
			setIsOpen(false);
		}, 1e3 / 2);
	}, [setIsOpen]);

	useEffect(() => {
		let timeout;
		if (isOpen && typeof closeAfter === 'number')
			timeout = setTimeout(() => setIsOpen(false), closeAfter);

		return () => (timeout ? clearTimeout(timeout) : void 0);
	}, [closeAfter, isOpen]);

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
				<Box
					ref={childRef}
					className={styles.root}
					width="full"
					pointerEvents="none"
					userSelect="none"
					overflow="hidden"
					borderRadius="1"
					boxShadow="4"
					backgroundColour="gray900"
					padding="4">
					<Text colour="white">{label}</Text>
				</Box>
			</Positioner>
		</>
	);
};
