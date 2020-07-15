import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box/Box';
import * as styleRefs from './Section.treat';

export interface Props extends Pick<ComponentProps<typeof Box>, 'paddingX'> {
	width?: keyof typeof styleRefs.width;
}

export const Section: FunctionComponent<Props> = ({
	children,
	width = 'medium',
	paddingX,
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			className={clsx(styles.root, styles.width[width!])}
			paddingX={paddingX}>
			{children}
		</Box>
	);
};
