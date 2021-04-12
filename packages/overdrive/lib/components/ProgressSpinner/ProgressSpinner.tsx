import clsx from 'clsx';
import * as React from 'react';
import { memo } from 'react';
import { useStyles } from 'react-treat';

import { Box, useBoxStyles } from '../Box';

import * as styleRefs from './ProgressSpinner.treat';

export interface Props {
	className?: string;
	size?: keyof typeof styleRefs.size;
	colour?: keyof typeof styleRefs.colours;
}

export const ProgressSpinner = memo<Props>(
	({ className = '', colour = 'primary', size = 'medium' }) => {
		const styles = useStyles(styleRefs);

		return (
			<Box
				className={[
					styles.size[size].circular,
					styles.colours[colour],
					className,
				]}>
				<svg
					className={clsx(
						useBoxStyles({
							is: 'svg',
							overflow: 'hidden',
						}),
						styles.circular,
					)}
					viewBox="25 25 50 50">
					<circle
						className={clsx(styles.path, styles.size[size].path)}
						cx="50"
						cy="50"
						r="20"
						fill="none"
						strokeMiterlimit="10"
					/>
				</svg>
			</Box>
		);
	},
);
