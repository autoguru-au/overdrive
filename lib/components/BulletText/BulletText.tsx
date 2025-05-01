import clsx from 'clsx';
import React, { type ElementType, isValidElement, type ReactNode } from 'react';

import { type BoxBasedProps, Box } from '../Box';
import { Inline } from '../Inline';
import { Text } from '../Text';

import * as styles from './BulletText.css';

export interface Props<E extends ElementType> extends BoxBasedProps<E> {
	bullet?: ReactNode;
	variant?: 'primary' | 'secondary';
}

export const BulletText = <E extends ElementType>({
	as,
	variant = 'primary',
	children,
	bullet: Bullet = '•',
}: Props<E>) => (
	<Inline noWrap space="3" as={as} alignX="flex-start" alignY="center">
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
					as="span"
					size="2"
				>
					{Bullet}
				</Text>
			</Box>
		)}
		<Box flexGrow={1}>
			<Text as="span" size="4" display="block">
				{children}
			</Text>
		</Box>
	</Inline>
);

export default BulletText;
