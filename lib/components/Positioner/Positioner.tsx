import React, {
	ComponentType,
	FunctionComponent,
	ReactElement,
	RefObject,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { EAlignment } from './alignment';
import { AlignmentRect, getOptimalPosition } from './getOptimalPosition';
import styles from './style.scss';

export interface Props {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;

	onRequestClose?(): void;
}

type WrappedComponent<T> = T & Pick<Props, 'isOpen' | 'alignment'>;

export function usingPositioner<T extends {} = {}>(
	WrappingComponent: ComponentType<WrappedComponent<T>>,
): FunctionComponent<Props & T> {
	return ({
		alignment = EAlignment.BOTTOM_LEFT,
		isOpen = false,
		onRequestClose = () => void 0,
		triggerRef,
		...rest
	}) => {
		const positionerRef = useRef<HTMLDivElement>();
		const { alignment: derivedAlignment, rect } = usePositionerEffect(
			alignment,
			triggerRef,
			positionerRef,
			isOpen,
			onRequestClose,
		);

		return createPortal(
			<div
				ref={positionerRef}
				style={{
					visibility: rect === null ? 'hidden' : 'visible',
					...(rect && {
						transform: `translate3d(${rect.left}px, ${rect.top}px, 0px)`,
					}),
				}}
				className={styles.root}>
				{isOpen && (
					<WrappingComponent
						{...(rest as T)}
						isOpen={isOpen}
						alignment={derivedAlignment}
					/>
				)}
			</div>,
			document.body,
		);
	};
}

export const Positioner = usingPositioner(
	({ children }) => children as ReactElement,
);

function usePositionerEffect(
	alignment: EAlignment,
	triggerRef: RefObject<HTMLElement>,
	positionerRef: RefObject<HTMLElement>,
	isOpen: boolean,
	onRequestClose: () => void,
) {
	const [positionerResult, setPositionerResult] = useState<AlignmentRect>({
		rect: null,
		alignment,
	});

	useLayoutEffect(
		() =>
			outsideHandler([positionerRef, triggerRef], () => {
				if (typeof onRequestClose === 'function') {
					onRequestClose();
				}
			}),
		[onRequestClose, positionerRef, triggerRef],
	);

	useLayoutEffect(() => {
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

			if (!isOpen && Boolean(lastFrame)) {
				return cancelAnimationFrame(lastFrame);
			}

			const triggerRect = triggerRef.current.getBoundingClientRect();
			const containerRect = positionerRef.current.getBoundingClientRect();

			const height = Math.round(containerRect.height);
			const width = Math.round(containerRect.width);

			setPositionerResult(
				getOptimalPosition(alignment, triggerRect, {
					height,
					width,
				}),
			);

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

	return positionerResult;
}

const outsideHandler = (
	refs: Array<RefObject<HTMLElement>>,
	onClickAway: () => void,
) => {
	const defaultEvents = ['mousedown', 'touchstart'];

	const handler = event => {
		if (
			refs
				.filter(item => Boolean(item.current))
				.every(item => !item.current.contains(event.target))
		) {
			onClickAway();
		}
	};

	defaultEvents.forEach(ev =>
		document.addEventListener(ev, handler, {
			passive: true,
		}),
	);

	return () => {
		defaultEvents.forEach(ev => document.removeEventListener(ev, handler));
	};
};
