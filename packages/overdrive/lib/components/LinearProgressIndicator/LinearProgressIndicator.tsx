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
				position="relative"
				overflow="hidden"
				width="full"
				backgroundColour="gray200"
				className={[styles.root, className]}>
				<Box
					position="absolute"
					width="full"
					height="full"
					className={styles.linearProgressBar}>
					<Box
						is="span"
						backgroundColour="green300"
						position="absolute"
						width="full"
						height="full"
						className={styles.linearProgressBarInner}
					/>
				</Box>
			</Box>
		);
	},
);
