import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';
import type { Theme } from 'treat/theme';

import { TextStyleProps, useTextStyles } from '../Text/useTextStyles';

export interface Props extends TextStyleProps {
	className?: string;
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	colour?: Exclude<keyof Theme['typography']['colour'], 'muted'>;
}

const sizeScaleDefaults: Map<
	string,
	keyof Theme['typography']['size']
> = new Map([
	['h1', '8'],
	['h2', '7'],
	['h3', '6'],
	['h4', '4'],
	['h5', '3'],
	['h6', '2'],
]);

export const Heading: FunctionComponent<Props> = ({
	children,
	className = '',
	is: Component = 'h1',
	colour = 'dark',
	align,
	size = sizeScaleDefaults.get(Component),
}) => (
	<Component
		children={children}
		className={clsx(
			useTextStyles({
				size,
				align,
				colour,
				fontWeight: 'bold',
			}),
			className,
		)}
	/>
);
