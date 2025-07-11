import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';

import { elementStyles } from '../../styles';
import { Box } from '../Box/Box';

import * as styles from './ProgressSpinner.css';

export interface ProgressSpinnerProps {
	className?: string;
	size?: keyof typeof styles.size;
	colour?: keyof typeof styles.colours;
}

export const ProgressSpinner: FunctionComponent<ProgressSpinnerProps> = ({
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
		odComponent="progress-spinner"
	>
		<svg
			className={clsx(
				elementStyles({
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
