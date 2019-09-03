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
import { useOutsideClick } from '../OutsideClick';
import { EAlignment } from './alignment';
import { AlignmentRect, getOptimalPosition } from './getOptimalPosition';
import styles from './style.scss';

export interface Props {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;
	triggerOffset?: number;

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
		triggerOffset, // This is defaulted in the getOptimalPosition
		...rest
	}) => {
		if (typeof window === 'undefined') return null;

		const positionerRef = useRef<HTMLDivElement>();
		const { alignment: derivedAlignment, rect } = usePositionerEffect(
			alignment,
			triggerRef,
			triggerOffset,
			positionerRef,
			isOpen,
		);

		useOutsideClick([positionerRef, triggerRef], onRequestClose);

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
	triggerOffset: number,
	positionerRef: RefObject<HTMLElement>,
	isOpen: boolean,
) {
	const [positionerResult, setPositionerResult] = useState<AlignmentRect>({
		rect: null,
		alignment,
	});

	useLayoutEffect(() => {
		let current = true;

		if (!triggerRef.current || !positionerRef.current) {
			return void 0;
		}

		let lastFrame = requestAnimationFrame(() => {
			handler();
		});

		function handler() {
			if (!current && (!triggerRef.current || !positionerRef.current)) {
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
				getOptimalPosition(
					alignment,
					triggerRect,
					{
						height,
						width,
					},
					triggerOffset,
				),
			);

			lastFrame = requestAnimationFrame(() => {
				handler();
			});
		}

		return () => {
			current = false;
			if (lastFrame) {
				cancelAnimationFrame(lastFrame);
			}
		};
	}, [alignment, isOpen, positionerRef, triggerRef, triggerOffset]);

	return positionerResult;
}
