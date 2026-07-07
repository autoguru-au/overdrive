import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, memo, NamedExoticComponent } from 'react';

import { Box } from '../Box';

import { ProgressStep } from './ProgressStep';
import * as styles from './SliderProgress.css';

export interface SliderProgressProps
	extends Pick<ComponentProps<typeof Box>, 'backgroundColour'>,
		Pick<ComponentProps<typeof ProgressStep>, 'paused' | 'duration'> {
	className?: string;
	totalCount: number;
	activeIndex: number;

	onRequestNext(): void;
}

export const SliderProgress: NamedExoticComponent<SliderProgressProps> = memo(
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
						// eslint-disable-next-line no-restricted-syntax -- RETAINED: public prop pass-through, intent-capable (accepts the 9 legacy intents), reverted by the C-theme-bridge corrective package (docs/ds2026-plan/track-c.md §1.5 + deviation 12).
						backgroundColour={backgroundColour}
						hasPassed={index < activeIndex}
						isActive={index === activeIndex}
						onFinished={onRequestNext}
					/>
				))}
		</div>
	),
);

SliderProgress.displayName = 'SliderProgress';
