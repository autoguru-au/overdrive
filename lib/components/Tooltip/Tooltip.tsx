import React, {
	Children,
	cloneElement,
	FunctionComponent,
	ReactElement,
	useEffect,
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

	const enterHandlers = ['mouseenter', 'touchenter'];
	const leaveHandlers = ['mouseleave', 'touchleave'];

	useEffect(() => {
		let leaveTimer;
		let current = true;

		if (triggerRef.current) {
			const close = () => {
				if (current) {
					setIsOpen(false);
				}
			};

			const open = () => {
				if (current) {
					setIsOpen(true);
				}
			};

			const enterHandler = () => {
				if (leaveTimer) {
					clearTimeout(leaveTimer);
				}

				open();
			};

			const leaveHandler = () => {
				leaveTimer = setTimeout(() => {
					close();
				}, 1e3 / 2);
			};

			enterHandlers.forEach(handler =>
				triggerRef.current.addEventListener(handler, enterHandler, {
					passive: true,
				}),
			);
			leaveHandlers.forEach(handler =>
				triggerRef.current.addEventListener(handler, leaveHandler, {
					passive: true,
				}),
			);

			return () => {
				current = false;

				if (triggerRef.current) {
					enterHandlers.forEach(handler =>
						triggerRef.current.removeEventListener(
							handler,
							enterHandler,
						),
					);
					leaveHandlers.forEach(handler =>
						triggerRef.current.removeEventListener(
							handler,
							leaveHandler,
						),
					);
				}
			};
		}

		return () => {
			current = false;
		};
	}, [enterHandlers, leaveHandlers, triggerRef]);

	return (
		<>
			{Children.only(children) &&
				cloneElement(children, {
					ref: triggerRef,
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
