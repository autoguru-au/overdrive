import React, {
	FunctionComponent,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { EAlignment } from './alignment';
import { getOptimalPosition, IPosition } from './getOptimalPosition';
import styles from './style.scss';

interface IProps {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;
}

export const Positioner: FunctionComponent<IProps> = ({
	alignment = EAlignment.TOP_LEFT,
	isOpen = false,
	triggerRef,
	children,
}) => {
	const positionerRef = useRef<HTMLDivElement>(null);
	const positionerPosition = usePositionerEffect(
		alignment,
		triggerRef,
		positionerRef,
		isOpen
	);

	return createPortal(
		<div
			ref={positionerRef}
			style={{
				...positionerPosition,
			}}
			className={styles.root}>
			{isOpen && children}
		</div>,
		document.body
	);
};

function usePositionerEffect(
	alignment: EAlignment,
	triggerRef: RefObject<HTMLElement>,
	positionerRef: RefObject<HTMLElement>,
	isOpen: boolean
) {
	const [positionerPosition, setPositionerPosition] = useState<IPosition>(
		null
	);

	useEffect(() => {
		if (!triggerRef.current && !positionerRef.current) {
			return void 0;
		}

		let lastFrame = requestAnimationFrame(() => {
			handler();
		});

		function handler() {
			if (!triggerRef.current && !positionerRef.current) {
				return;
			}

			if (!isOpen && !!lastFrame) {
				return cancelAnimationFrame(lastFrame);
			}

			const triggerRect = triggerRef.current.getBoundingClientRect();
			const containerRect = positionerRef.current.getBoundingClientRect();

			const height = Math.round(containerRect.height);
			const width = Math.round(containerRect.width);

			const { rect } = getOptimalPosition(alignment, triggerRect, {
				height,
				width,
			});

			setPositionerPosition({
				top: rect.top,
				left: rect.left,
			});

			lastFrame = requestAnimationFrame(() => {
				handler();
			});
		}

		return () => {
			if (lastFrame) {
				cancelAnimationFrame(lastFrame);
			}
		};
	}, [alignment, isOpen, positionerRef, triggerRef]);

	return positionerPosition;
}
