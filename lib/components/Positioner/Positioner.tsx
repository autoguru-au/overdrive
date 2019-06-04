import React, {
	FunctionComponent,
	MouseEvent,
	RefObject,
	TouchEvent,
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

	onRequestClose?(): void;
}

export const Positioner: FunctionComponent<IProps> = ({
	alignment = EAlignment.TOP_LEFT,
	isOpen = false,
	onRequestClose = () => void 0,
	triggerRef,
	children,
}) => {
	const positionerRef = useRef<HTMLDivElement>(null);
	const positionerPosition = usePositionerEffect(
		alignment,
		triggerRef,
		positionerRef,
		isOpen,
		onRequestClose
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
	isOpen: boolean,
	onRequestClose: () => void
) {
	const [positionerPosition, setPositionerPosition] = useState<IPosition>(
		null
	);

	if (typeof onRequestClose === 'function') {
		useOutsideClick([positionerRef, triggerRef], () => {
			onRequestClose();
		});
	}

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

const defaultEvents = ['mousedown', 'touchstart'];

const useOutsideClick = (
	refs: Array<RefObject<HTMLElement>>,
	onClickAway: (event: MouseEvent | TouchEvent) => void
) => {
	useEffect(() => {
		const handler = event => {
			if (
				refs
					.filter(item => !!item.current)
					.every(item => !item.current.contains(event.target))
			) {
				onClickAway(event);
			}
		};

		defaultEvents.forEach(ev =>
			document.addEventListener(ev, handler, {
				passive: true,
			})
		);

		return () => {
			defaultEvents.forEach(ev =>
				document.removeEventListener(ev, handler)
			);
		};
	});
};
