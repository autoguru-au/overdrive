import { invariant } from '@autoguru/utilities';
import React from 'react';

import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';

import * as styles from './Badge.css';
import type { StyledBadgeProps } from './Badge.css';

type Colours = Exclude<StyledBadgeProps['colour'], undefined>;

export interface BadgeProps {
	label: string;
	colour?: Colours;
	className?: string;
	look?: 'standard' | 'inverted';
	size?: StyledBadgeProps['size'];
}

export const Badge = ({
	label,
	colour = 'neutral',
	look = 'standard',
	size = 'standard',
	className = '',
	testId,
}: WithTestId<BadgeProps>) => {
	invariant(
		['string', 'number'].includes(typeof label),
		'Badge `label` can only contain strings or numbers',
	);

	const inverted = look === 'inverted';

	return (
		<Box
			className={className}
			display="flex"
			{...dataAttrs({ 'test-id': testId })}
		>
			<div
				className={styles.styledBadge({
					colour,
					inverted,
					size,
				})}
			>
				<div>{label}</div>
			</div>
		</Box>
	);
};

export default Badge;
