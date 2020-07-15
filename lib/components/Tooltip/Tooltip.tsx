import * as React from 'react';
import {
	Children,
	cloneElement,
	FunctionComponent,
	ReactElement,
	useCallback,
	useRef,
	useState,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box/Box';
import { EAlignment } from '../Positioner/alignment';
import { Positioner } from '../Positioner/Positioner';
import { Text } from '../Text/Text';
import * as styleRefs from './Tooltip.treat';

export interface Props {
	label: string;
	alignment?: EAlignment;
	children: ReactElement;
}

export const Tooltip: FunctionComponent<Props> = ({
	alignment = EAlignment.RIGHT,
	label,
	children,
}) => {
	const styles = useStyles(styleRefs);
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
