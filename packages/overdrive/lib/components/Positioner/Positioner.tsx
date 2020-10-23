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
	ComponentPropsWithoutRef,
	FunctionComponent,
	RefObject,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { useStyles } from 'react-treat';

import { isBrowser, setRef } from '../../utils';
import { Box } from '../Box';
import { Portal } from '../Portal';

import { EAlignment } from './alignment';

import * as styleRefs from './Positioner.treat';

export { EAlignment } from './alignment';

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

export interface Props
	extends Exclude<
		ComponentPropsWithoutRef<typeof Box>,
		'aria-hidden' | 'className'
	> {
	alignment?: EAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;
	triggerOffset?: number;
}

export const Positioner: FunctionComponent<Props> = ({
	alignment = EAlignment.BOTTOM_LEFT,
	isOpen = false,
	triggerRef,
	triggerOffset = 12,
	children,
	...boxProps
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

		const popper = createPopper(triggerRef.current, referenceRef.current, {
			placement,
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, triggerOffset],
					},
				},
			],
		});

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
			<Box
				{...boxProps}
				ref={handleRef}
				position="fixed"
				className={styles.root}
				aria-hidden={!isOpen}>
				{isOpen ? children : null}
			</Box>
		</Portal>
	);
};

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
