import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, useEffect, useState } from 'react';

import { Box } from '../Box';

import * as styles from './StickyBox.css';

export interface StickyBoxProps extends ComponentProps<typeof Box> {
	top?: 'none' | '1' | '2' | '3' | '5' | '7' | 'subHeader';
	bottom?: 'none' | '1' | '2' | '3' | 'subHeader';
	zIndex?: 0 | 1 | 2 | 3 | 99;
	noPopShadow?: boolean;
	className?: string;
}

export const StickyBox: FunctionComponent<StickyBoxProps> = ({
	top = 'none',
	bottom = 'none',
	noPopShadow = false,
	zIndex = 2,
	className = '',
	backgroundColour,
	boxShadow,
	children,
	...rest
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [withShadow, setWithShadow] = useState<boolean>(false);

	useEffect(() => {
		if (!containerRef.current?.parentElement || !window) return void 0;
		const parentElement = containerRef.current.parentElement;
		const onScroll = () => {
			setWithShadow(parentElement.scrollTop > 3);
		};
		// clean up code
		parentElement.removeEventListener('scroll', onScroll);
		parentElement.addEventListener('scroll', onScroll, { passive: true });
		return () => parentElement.removeEventListener('scroll', onScroll);
	}, [containerRef.current?.parentElement]);

	return noPopShadow ? (
		<Box
			className={[
				className,
				styles.simpleRoot,
				styles.top[top],
				styles.zIndex[zIndex],
			]}
			odComponent="sticky-box"
			{...rest}
		>
			{children}
		</Box>
	) : (
		<Box
			ref={containerRef}
			overflow="hidden"
			className={clsx(
				className,
				styles.root,
				styles.top[top],
				styles.zIndex[zIndex],
			)}
			backgroundColour={withShadow ? backgroundColour || 'white' : void 0}
			boxShadow={withShadow ? boxShadow || '3' : void 0}
			odComponent="sticky-box"
			{...rest}
		>
			<Box
				className={clsx(className, styles.content, {
					[styles.popped]: withShadow,
				})}
			>
				{children}
			</Box>
		</Box>
	);
};
