import type { Placement } from '@popperjs/core';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import {
	defaultModifiers,
	popperGenerator,
} from '@popperjs/core/lib/popper-lite';
import * as React from 'react';
import {
	ComponentType,
	FunctionComponent,
	ReactElement,
	RefObject,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { useStyles } from 'react-treat';

import { isBrowser, setRef } from '../../utils';
import { Portal } from '../Portal';
import { EAlignment } from './alignment';
import * as styleRefs from './Positioner.treat';

const createPopper = popperGenerator({
	defaultModifiers: [
		...defaultModifiers,
		offset,
		{
			...preventOverflow,
			options: {
				tether: false,
				altAxis: true,
				padding: 8,
			},
		},
		flip,
	],
	defaultOptions: {
		placement: 'bottom',
	},
});

export interface Props {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;
	triggerOffset?: number;
	withBackdrop?: boolean;
}

type WrappedComponent<ExtraProps> = ExtraProps &
	Pick<Props, 'isOpen' | 'alignment' | 'triggerRef'>;

export function usingPositioner<T extends {} = {}>(
	WrappingComponent: ComponentType<WrappedComponent<T>>,
): FunctionComponent<Props & T> {
	const ReturningComponent: FunctionComponent<Props & T> = ({
		alignment = EAlignment.BOTTOM_LEFT,
		isOpen = false,
		triggerRef,
		triggerOffset = 12,
		...rest
	}) => {
		if (!isBrowser) return null;

		const placement = convertPlacement(alignment);

		/* eslint-disable react-hooks/rules-of-hooks */
		const styles = useStyles(styleRefs);

		const referenceRef = useRef<HTMLDivElement>(null);

		const popperInstanceRef = React.useRef<ReturnType<
			typeof createPopper
		> | null>(null);

		// Whenever this component get's re-rendered, we want to proc an update to the popper instance.
		useEffect(() => {
			if (popperInstanceRef.current) {
				popperInstanceRef.current.update();
			}
		});

		const handleOpen = useCallback(() => {
			if (!referenceRef.current || !triggerRef.current || !isOpen) return;

			// Delete the old instance, because we are about to create it again.
			if (popperInstanceRef.current) popperInstanceRef.current.destroy();

			const popper = createPopper(
				triggerRef.current,
				referenceRef.current,
				{
					placement,
					modifiers: [
						{
							name: 'offset',
							options: {
								offset: [0, triggerOffset],
							},
						},
					],
				},
			);

			setRef(popperInstanceRef, popper);
		}, [isOpen, placement, triggerOffset]);

		const handleClose = () => {
			if (!popperInstanceRef.current) return;

			popperInstanceRef.current.destroy();
			// GC the popper instance
			setRef(popperInstanceRef, null);
		};

		/*
		When one the handleOpen reference changes, we want to fire it off again,
		and when we un-mount to destroy the instance also.
		 */
		useEffect(() => {
			handleOpen();
		}, [handleOpen]);

		// Close when component un-mounts;
		useEffect(() => () => void handleClose(), []);

		useEffect(() => {
			if (!isOpen) {
				handleClose();
			}
		}, [isOpen]);

		// Gets applied to the positioner div, that on mount will run this callback
		const handleRef = useCallback(
			(node) => {
				setRef(referenceRef, node);
				handleOpen();
			},
			[handleOpen],
		);
		/* eslint-enable react-hooks/rules-of-hooks */

		return (
			<Portal>
				<div
					ref={handleRef}
					role="none presentation"
					className={styles.root}>
					{isOpen ? (
						<WrappingComponent
							{...(rest as T)}
							triggerRef={triggerRef}
							isOpen={isOpen}
						/>
					) : null}
				</div>
			</Portal>
		);
	};

	ReturningComponent.displayName = `usingPositioner(${WrappingComponent.displayName})`;

	return ReturningComponent;
}

export const Positioner = usingPositioner(
	({ children }) => children as ReactElement,
);

const convertPlacement = (alignment: EAlignment): Placement => {
	switch (alignment) {
		case EAlignment.BOTTOM_LEFT:
			return 'bottom-start';
		case EAlignment.BOTTOM_RIGHT:
			return 'bottom-end';
		case EAlignment.TOP_LEFT:
			return 'top-start';
		case EAlignment.TOP_RIGHT:
			return 'top-end';
		default:
			return alignment;
	}
};
