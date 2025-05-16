import * as React from 'react';
import { ComponentProps, memo, NamedExoticComponent, useCallback } from 'react';

import { useAnimationEvents } from '../../hooks/useAnimationEvents';
import { Box } from '../Box';

import * as styles from './ProgressStep.css';

interface ProgressStepProps
	extends Pick<ComponentProps<typeof Box>, 'backgroundColour'> {
	className?: string;
	paused: boolean;
	isActive: boolean;
	hasPassed: boolean;
	duration: string;

	onFinished(): void;
}

export const ProgressStep: NamedExoticComponent<ProgressStepProps> = memo(
	({
		className = '',
		paused,
		isActive,
		hasPassed,
		duration,
		backgroundColour = 'white',
		onFinished,
	}) => {
		const { elementRef } = useAnimationEvents<HTMLDivElement>({
			onAnimationEnd: useCallback(
				() => !hasPassed && isActive && onFinished(),
				[isActive, hasPassed, onFinished],
			),
		});

		return (
			<Box className={className} position="relative">
				<Box
					ref={elementRef}
					position="absolute"
					display={hasPassed ? 'none' : 'block'}
					className={[styles.item, styles.empty]}
					backgroundColour={backgroundColour}
				/>
				<Box
					ref={elementRef}
					position="absolute"
					display={isActive || hasPassed ? 'block' : 'none'}
					className={[
						styles.item,
						styles.fill,
						{
							[styles.passed]: hasPassed,
							[styles.active]: isActive,
							[styles.paused]: isActive && paused,
						},
					]}
					backgroundColour={backgroundColour}
					style={{
						animationDuration: duration,
					}}
				/>
			</Box>
		);
	},
);

ProgressStep.displayName = 'ProgressStep';
