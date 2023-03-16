import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, memo, NamedExoticComponent } from 'react';

import { Box } from '../Box';

import { ProgressStep } from './ProgressStep';
import * as styles from './SliderProgress.css';

interface Props extends Pick<ComponentProps<typeof Box>, 'backgroundColour'> ,
	Pick<ComponentProps<typeof ProgressStep>, 'paused'| 'duration'> {
	className?: string;
	totalCount: number;
	activeIndex: number;

	onRequestNext(): void;
}

export const SliderProgress: NamedExoticComponent<Props> = memo(
	({
		className = '',
		paused,
		totalCount,
		activeIndex,
		duration,
		backgroundColour,
		onRequestNext,
	}) => (
		<div
			className={clsx(className, styles.root)}
			style={{
				gridTemplateColumns: `repeat(${totalCount}, 1fr)`,
			}}
		>
			{Array.from({ length: totalCount })
				.fill('')
				.map((_, index) => (
					<ProgressStep
						key={index}
						className={styles.step}
						paused={paused}
						duration={duration}
						backgroundColour={backgroundColour}
						hasPassed={index < activeIndex}
						isActive={index === activeIndex}
						onFinished={onRequestNext}
					/>
				))}
		</div>
	),
);
