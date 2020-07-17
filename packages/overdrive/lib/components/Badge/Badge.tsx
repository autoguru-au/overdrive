import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { memo } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './Badge.treat';

export interface Props {
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
			<Box display="flex">
				<Box
					className={[
						styles.colours[colour][
							inverted ? 'inverted' : 'default'
						],
						className,
					]}
					overflow="hidden"
					padding="1"
					borderRadius="1">
					<Box
						is="span"
						display="block"
						className={styles.label}
						overflow="hidden">
						{label}
					</Box>
				</Box>
			</Box>
		);
	},
);
