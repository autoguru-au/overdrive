import React, {
	ComponentType,
	FunctionComponent,
	ReactElement,
	RefObject,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

import { useOutsideClick } from '../OutsideClick';
import { Portal } from '../Portal';
import { usePortalContext } from '../Portal/Portal';
import { EAlignment } from './alignment';
import { AlignmentRect, getOptimalPosition, Rect } from './getOptimalPosition';
import styles from './style.scss';

export interface Props {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;
	triggerOffset?: number;

	onRequestClose?(): void;
}

type WrappedComponent<ExtraProps> = ExtraProps & { triggerRect: Rect } & Pick<
		Props,
		'isOpen' | 'alignment'
	>;

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
		const portalNode = usePortalContext();
		const portalNodeRef = useRef<HTMLElement>(portalNode);
		useEffect(() => {
			portalNodeRef.current = portalNode;
		}, [portalNode]);

		const {
			alignment: derivedAlignment,
			rect,
			triggerRect,
		} = usePositionerEffect(
			alignment,
			triggerRef,
			triggerOffset,
			positionerRef,
			isOpen,
		);

		useOutsideClick(
			useCallback(() => {
				if (isOpen) onRequestClose();
			}, [isOpen, onRequestClose]),
			[portalNodeRef, triggerRef],
		);

		return (
			<Portal>
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
							alignment={derivedAlignment}
							isOpen={isOpen}
							triggerRect={triggerRect}
						/>
					)}
				</div>
			</Portal>
		);
	};
}

export const Positioner = usingPositioner(
	({ children }) => children as ReactElement,
);

interface PositionerEffectState extends AlignmentRect {
	triggerRect: Rect;
}

function usePositionerEffect(
	alignment: EAlignment,
	triggerRef: RefObject<HTMLElement>,
	triggerOffset: number,
	positionerRef: RefObject<HTMLElement>,
	isOpen: boolean,
): PositionerEffectState {
	const [positionerResult, setPositionerResult] = useState<
		PositionerEffectState
	>({
		rect: null,
		triggerRect: null,
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

			setPositionerResult({
				triggerRect,
				...getOptimalPosition(
					alignment,
					triggerRect,
					{
						height,
						width,
					},
					triggerOffset,
				),
			});

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
