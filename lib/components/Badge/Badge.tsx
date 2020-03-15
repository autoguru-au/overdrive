import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import { memo } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './Badge.treat';

interface Props {
	label: string;
	// TODO: These should use the intent verbs, and come from Box
	colour?: keyof typeof styleRefs.colours;
	className?: string;
	look?: 'standard' | 'inverted';
}

export const Badge = memo<Props>(
	({ label, colour = 'neutral', look = 'standard', className = '' }) => {
		const styles = useStyles(styleRefs);
		const inverted = look === 'inverted';

		invariant(
			['string', 'number'].includes(typeof label),
			"Badge `label` can only contain string's or number's",
		);

		return (
			<Box
				className={clsx(
					styles.colours[colour][inverted ? 'inverted' : 'default'],
					className,
				)}
				padding="1"
				borderRadius="1">
				<span className={styles.label}>{label}</span>
			</Box>
		);
	},
);
