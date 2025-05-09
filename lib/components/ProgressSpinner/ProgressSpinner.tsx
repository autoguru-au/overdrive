import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box, boxStyles } from '../Box';

import * as styles from './ProgressSpinner.css';

export interface Props {
	className?: string;
	size?: keyof typeof styles.size;
	colour?: keyof typeof styles.colours;
}

export const ProgressSpinner: FunctionComponent<Props> = ({
	className = '',
	colour = 'primary',
	size = 'medium',
}) => (
	<Box
		className={[
			styles.size[size].circular,
			styles.colours[colour],
			className,
		]}
	>
		<svg
			className={clsx(
				boxStyles({
					as: 'svg',
					display: 'block',
					overflow: 'hidden',
				}),
				styles.circular,
			)}
			viewBox="25 25 50 50"
		>
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

export default ProgressSpinner;
