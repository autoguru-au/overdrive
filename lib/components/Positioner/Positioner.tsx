import * as React from 'react';
import {
	ComponentType,
	FunctionComponent,
	memo,
	ReactChild,
	ReactElement,
	RefObject,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useStyles } from 'react-treat';

import { isBrowser } from '../../utils';
import { Modal } from '../Modal';
import { EAlignment } from './alignment';
import { AlignmentRect, getOptimalPosition, Rect } from './getOptimalPosition';
import * as styleRefs from './Positioner.treat';
import { Portal } from '../Portal';

export interface Props {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;
	triggerOffset?: number;
	withBackdrop?: boolean;

	onRequestClose?(): void;
}

type WrappedComponent<ExtraProps> = ExtraProps & { triggerRect?: Rect } & Pick<
		Props,
		'isOpen' | 'alignment'
	>;

export function usingPositioner<T extends {} = {}>(
	WrappingComponent: ComponentType<WrappedComponent<T>>,
): FunctionComponent<Props & T> {
	const returningComponent: FunctionComponent<Props & T> = ({
		alignment = EAlignment.BOTTOM_LEFT,
		withBackdrop = true,
		isOpen = false,
		onRequestClose = () => void 0,
		triggerRef,
		triggerOffset, // This is defaulted in the getOptimalPosition
		...rest
	}) => {
		if (!isBrowser) return null;

		const positionerRef = useRef<HTMLDivElement>(null);
		const { alignment: derivedAlignment, rect, triggerRect } =
			usePositionerEffect(
				alignment,
				triggerRef,
				triggerOffset!,
				positionerRef,
				isOpen,
			) ?? {};

		const child = useMemo(() => {
			return isOpen ? (
				<WrappingComponent
					{...(rest as T)}
					alignment={derivedAlignment}
					isOpen={isOpen}
					triggerRect={triggerRect}
				/>
			) : null;
		}, [isOpen, rest]);

		return withBackdrop ? (
			<Modal
				hideBackdrop
				isOpen={isOpen}
				transition={false}
				onRequestClose={onRequestClose}>
				<PositionerBody
					positionerRef={positionerRef}
					rect={rect}
					child={child}
				/>
			</Modal>
		) : (
			<Portal>
				<PositionerBody
					positionerRef={positionerRef}
					rect={rect}
					child={child}
				/>
			</Portal>
		);
	};
	returningComponent.displayName = `usingPositioner(${WrappingComponent.displayName})`;

	return returningComponent;
}

const PositionerBody = memo<{
	positionerRef: RefObject<HTMLDivElement>;
	rect?: Rect;
	child: ReactChild | null;
}>(({ rect, positionerRef, child }) => {
	const styles = useStyles(styleRefs);

	return (
		<div
			ref={positionerRef}
			role="none presentation"
			style={{
				visibility:
					positionerRef?.current === null && rect?.left! > 0
						? 'hidden'
						: 'visible',
				...(rect && {
					transform: `translate3d(${rect.left}px, ${rect.top}px, 0px)`,
				}),
			}}
			className={styles.root}>
			{child}
		</div>
	);
});

export const Positioner = usingPositioner(
	({ children }) => children as ReactElement,
);

interface PositionerEffectState extends AlignmentRect {
	triggerRect: Rect;
}

const usePositionerEffect = (
	alignment: EAlignment,
	triggerRef: RefObject<HTMLElement>,
	triggerOffset: number,
	positionerRef: RefObject<HTMLElement>,
	isOpen: boolean,
): PositionerEffectState | null => {
	const [
		positionerResult,
		setPositionerResult,
	] = useState<PositionerEffectState | null>(null);

	useLayoutEffect(() => {
		let current = true;

		if (!triggerRef.current && !positionerRef.current) {
			return void 0;
		}

		let lastFrame = requestAnimationFrame(() => {
			lastFrame = requestAnimationFrame(() => {
				handler();
			});
		});

		function handler() {
			if (
				!current ||
				triggerRef?.current === null ||
				positionerRef?.current === null
			) {
				return;
			}

			if (!isOpen && Boolean(lastFrame)) {
				return cancelAnimationFrame(lastFrame);
			}

			const triggerRect = triggerRef.current!.getBoundingClientRect();
			const containerRect = positionerRef.current!.getBoundingClientRect();

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
	});

	return positionerResult;
};
