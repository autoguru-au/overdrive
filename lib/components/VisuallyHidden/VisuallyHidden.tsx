import * as React from 'react';

import { Box, type BoxProps } from '../Box';

import { visuallyHidden } from './VisuallyHidden.css';

type VisuallyHiddenProps = Pick<BoxProps, 'as' | 'children' | 'is'>;

/**
 * Wrap any content or components with `<VisuallyHidden>` to apply styling that ensure the child content is not
 * visually displayed on the screen but is still present in the DOM/accessibility tree for assitive technology.
 * Use the `as` prop to change the rendered html tag.
 */
export const VisuallyHidden = ({ children, ...props }: VisuallyHiddenProps) => (
	<Box {...props} className={visuallyHidden}>
		{children}
	</Box>
);

export default VisuallyHidden;
