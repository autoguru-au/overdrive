import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React from 'react';

import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';

import * as styles from './Badge.css';
import type { StyledBadgeProps } from './Badge.css';

type Colours = Exclude<StyledBadgeProps['colour'], undefined>;

export interface BadgeProps extends TestIdProp {
	/** The text content */
	label: string;
	/** The color of the badge */
	colour?: Colours;
	/** Override class name with additional styles */
	className?: string;
	/** The visual style of the badge */
	look?: 'standard' | 'inverted';
	/** Select the badge size */
	size?: StyledBadgeProps['size'];
}

/**
 * The Badge component displays a label using intentional colour themes. The colours and sizes are configuable.
 *
 * To apply badge styling to an element directly the `styledBadge` recipe can be used.
 */
export const Badge = ({
	label,
	colour = 'neutral',
	look = 'standard',
	size = 'standard',
	className,
	testId,
}: BadgeProps) => {
	invariant(
		['string', 'number'].includes(typeof label),
		'Badge `label` can only contain strings or numbers',
	);

	const inverted = look === 'inverted';

	return (
		<Box
			className={clsx([
				styles.styledBadge({
					colour,
					inverted,
					size,
				}),
				className,
			])}
			borderRadius="1"
			odComponent="badge"
			testId={testId}
		>
			{label}
		</Box>
	);
};
