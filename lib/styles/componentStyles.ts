import clsx, { type ClassValue as ClassName } from 'clsx';
import type { ElementType, ReactElement } from 'react';

import {
	elementReset,
	resetVariants,
	type ResetVariantProps,
} from './elementReset.css';
import { sprinkles, type Sprinkles } from './sprinkles.css';

type ResetPropsWithoutAs = Omit<ResetVariantProps, 'as'>;

/** Will check for any border-related prop out of any style props */
const hasBorderRelatedProp = (props: Sprinkles) =>
	Boolean(
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

/**
 * Returns the reset styles based on the `as` prop tag name passed in.
 * A wrapper around `resetVariants` recipe to allow any string to be passed in
 */
export const resetStyles = (element: string, options?: ResetPropsWithoutAs) => {
	const as = (
		element in elementReset ? element : undefined
	) as ResetVariantProps['as'];
	return resetVariants({
		as,
		hasBorder: options?.hasBorder,
	});
};

export interface ComponentStylesProps extends Sprinkles {
	as?: string | ElementType | ReactElement;
	className?: ClassName;
}

/**
 * Convenience function that combines element reset styles via `as` props and sprinkles utility styles.
 * Allows `as` prop that is JSX or other React element to safely be passed in so it does not have to be filtered out.
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
	if (typeof as !== 'string') return clsx(className);

	const hasBorder = hasBorderRelatedProp(styleProps);
	return clsx(
		resetStyles(as, { hasBorder }),
		sprinkles(styleProps),
		className,
	);
};
