import clsx, { type ClassValue as ClassName } from 'clsx';
import type { ElementType, ReactElement } from 'react';

import {
	elementReset,
	resetVariants,
	type ResetVariantProps,
} from './element.css';
import { sprinkles, type Sprinkles } from './sprinkles.css';

type ResetPropsWithoutAs = Omit<ResetVariantProps, 'as'>;
interface ResetStylesProps extends ResetPropsWithoutAs {
	as: string | undefined;
}

function hasBorderReset(props: Sprinkles) {
	return Boolean(
		props.borderColor ||
			props.borderStyle ||
			props.borderWidth ||
			props.borderWidthX ||
			props.borderWidthY ||
			props.borderBottomColor ||
			props.borderBottomStyle ||
			props.borderBottomWidth ||
			props.borderLeftColor ||
			props.borderLeftStyle ||
			props.borderLeftWidth ||
			props.borderRightColor ||
			props.borderRightStyle ||
			props.borderRightWidth ||
			props.borderTopColor ||
			props.borderTopStyle ||
			props.borderTopWidth ||
			props.borderWidthTop ||
			props.borderWidthRight ||
			props.borderWidthBottom ||
			props.borderWidthLeft ||
			props.borderColour ||
			props.borderColourX ||
			props.borderColourY ||
			props.borderBottomColour ||
			props.borderLeftColour ||
			props.borderRightColour ||
			props.borderTopColour,
	);
}

/**
 * Returns the reset styles based on the `as` prop tag name passed in.
 * A wrapper around `resetVariants` recipe to allow any string to be passed in
 */
export const resetStyles = ({ as: _as, hasBorder }: ResetStylesProps) => {
	if (!_as) return resetVariants();

	const resolvedAs = (
		_as in elementReset ? _as : 'div'
	) as ResetVariantProps['as'];
	return resetVariants({ as: resolvedAs, hasBorder });
};

/**
 * Generates reset styles for a given HTML element tag.
 *
 * @param tag - allows any value passed in so it can be used with `as` props which may be React elements
 */
export const elementResetStyles = (
	tag: unknown,
	options?: ResetPropsWithoutAs,
) => {
	if (typeof tag === 'string') return resetStyles({ as: tag, ...options });
	return '';
};

export interface ComponentStylesProps extends Sprinkles {
	as?: string | ElementType | ReactElement;
	className?: ClassName;
}

/**
 * Convenience function that combines element reset styles via `as` props and sprinkles utility styles.
 * Includes logic for adding border reset styles when any border props are used.
 *
 * @example <svg className={componentStyles({ as: 'svg', padding: '1', size: '4' })} ... />
 * @example <div className={componentStyles({ as: 'div', borderTopWidth: '1', borderTopColor: 'soft' })}
 * // ^ this will trigger the border reset ^
 */
export const componentStyles = ({
	as,
	className,
	...styleProps
}: ComponentStylesProps) => {
	const hasBorder = hasBorderReset(styleProps);
	return clsx(
		elementResetStyles(as, { hasBorder }),
		sprinkles(styleProps),
		className,
	);
};
