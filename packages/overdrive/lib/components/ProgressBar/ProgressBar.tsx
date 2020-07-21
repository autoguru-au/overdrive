import { clamp } from '@autoguru/utilities';
import * as React from 'react';
import { ComponentProps, memo } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './ProgressBar.treat';

// TODO: These should use the intent verbs
const colours: ReadonlyArray<
	'red' | 'green' | 'blue' | 'yellow' | 'neutral'
> = ['red', 'green', 'blue', 'yellow', 'neutral'] as const;

export interface Props {
	value?: number;
	colour?: typeof colours[number];
}

const backgroundColorMap: Record<
	Required<Props>['colour'],
	ComponentProps<typeof Box>['backgroundColour']
> = {
	red: 'red500',
	green: 'green500',
	blue: 'blue500',
	yellow: 'yellow600',
	neutral: 'gray500',
};

export const ProgressBar = memo<Props>(({ value = 0, colour = 'green' }) => {
	const styles = useStyles(styleRefs);

	return (
		<Box className={styles.container} borderRadius='1' backgroundColour="gray100">
			<Box
				borderRadius='1'
				backgroundColour={backgroundColorMap[colour]}
				className={[styles.bar, styles.container]}
				style={{
					width: `${clamp(value, 0, 1) * 100}%`,
				}}
			/>
		</Box>
	);
});
