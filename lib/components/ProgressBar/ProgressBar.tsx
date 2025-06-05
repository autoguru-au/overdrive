import { clamp } from '@autoguru/utilities';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box } from '../Box/Box';

import * as styles from './ProgressBar.css';

// TODO: These should use the intent verbs
const colours: ReadonlyArray<'red' | 'green' | 'blue' | 'yellow' | 'neutral'> =
	['red', 'green', 'blue', 'yellow', 'neutral'] as const;

export interface ProgressBarProps {
	value?: number;
	colour?: (typeof colours)[number];
}

const backgroundColorMap: Record<
	Required<ProgressBarProps>['colour'],
	ComponentProps<typeof Box>['backgroundColour']
> = {
	red: 'red500',
	green: 'green500',
	blue: 'blue500',
	yellow: 'yellow600',
	neutral: 'gray500',
};

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({
	value = 0,
	colour = 'green',
}) => (
	<Box
		className={styles.container}
		borderRadius="1"
		backgroundColour="gray100"
	>
		<Box
			borderRadius="1"
			backgroundColour={backgroundColorMap[colour]}
			className={[styles.bar, styles.container]}
			style={{
				width: `${clamp(value, 0, 1) * 100}%`,
			}}
		/>
	</Box>
);

export default ProgressBar;
