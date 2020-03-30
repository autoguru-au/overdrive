import clsx from 'clsx';
import * as React from 'react';
import { Children, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';
import { Theme } from 'treat/theme';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { resolveResponsiveStyle, ResponsiveProp } from '../../utils';
import { Box } from '../Box';
import * as styleRefs from './Inline.treat';

interface Props {
	space?: ResponsiveProp<keyof Theme['space']>;
	alignY?: ResponsiveProp<keyof typeof styleRefs.align>;
}

export const Inline: FunctionComponent<Props> = ({
	children,
	space = '2',
	alignY,
}) => {
	const negativeMarginLeft = useNegativeMarginLeft(space);
	const negativeMarginTop = useNegativeMarginTop(space);

	const styles = useStyles(styleRefs);

	return (
		<Box className={negativeMarginTop}>
			<Box
				className={clsx(
					styles.root,
					negativeMarginLeft,
					resolveResponsiveStyle(alignY, styles.align),
				)}>
				{Children.map(children, (child) => (
					<Box
						display="inline-block"
						paddingLeft={space}
						paddingTop={space}>
						{child}
					</Box>
				))}
			</Box>
		</Box>
	);
};
