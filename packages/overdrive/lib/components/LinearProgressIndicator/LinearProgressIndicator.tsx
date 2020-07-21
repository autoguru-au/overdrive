import * as React from 'react';
import { memo, NamedExoticComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './LinearProgressIndicator.treat';

export interface Props {
	className?: string;
}

export const LinearProgressIndicator: NamedExoticComponent<Props> = memo(
	({ className = '' }) => {
		const styles = useStyles(styleRefs);
		return (
			<Box
				className={[styles.root, className]}
				backgroundColour="gray200">
				<div className={styles.linearProgressBar}>
					<Box
						is="span"
						backgroundColour="green300"
						className={styles.linearProgressBarInner}
					/>
				</div>
			</Box>
		);
	},
);
