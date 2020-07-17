import * as React from 'react';
import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './VisuallyHidden.treat';

export interface Props {
	is?: ComponentPropsWithoutRef<typeof Box>['is'];
}

export const VisuallyHidden: FunctionComponent<Props> = ({ children, is }) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			is={is}
			position="absolute"
			overflow="hidden"
			userSelect="none"
			className={styles.root}
		>
			{children}
		</Box>
	);
};
