import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, isValidElement, ReactNode } from 'react';

import { Box } from '../Box/Box';
import type { BoxStyleProps } from '../Box/useBoxStyles';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';

import * as styles from './BulletText.css';

export interface BulletTextProps
	extends Partial<Pick<BoxStyleProps, 'as' | 'is'>> {
	bullet?: ReactNode;
	variant?: 'primary' | 'secondary';
	children?: ReactNode;
}

export const BulletText: FunctionComponent<BulletTextProps> = ({
	variant = 'primary',
	children,
	as = 'div',
	is: Component = as,
	bullet: Bullet = '•',
}) => (
	<Inline noWrap space="3" is={Component} alignX="flexStart" alignY="center">
		{isValidElement(Bullet) ? (
			<Box position="relative" flexShrink={0}>
				{Bullet}
			</Box>
		) : (
			<Box
				position="relative"
				flexShrink={0}
				display="flex"
				alignItems="center"
				justifyContent="center"
				className={clsx(styles.bullet, {
					[styles.primary]: variant === 'primary',
					[styles.secondary]: variant !== 'primary',
				})}
				borderRadius="pill"
			>
				<Text
					className={clsx({
						[styles.primaryText]: variant === 'primary',
						[styles.secondaryText]: variant !== 'primary',
					})}
					is="span"
					size="2"
				>
					{Bullet}
				</Text>
			</Box>
		)}
		<Box flexGrow={1}>
			<Text is="span" size="4" display="block">
				{children}
			</Text>
		</Box>
	</Inline>
);

export default BulletText;
