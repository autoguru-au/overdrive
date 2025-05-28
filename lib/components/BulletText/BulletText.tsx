import clsx from 'clsx';
import React, { ComponentProps, isValidElement, type ReactNode } from 'react';

import { Box, type BoxProps } from '../Box/Box';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';

import * as styles from './BulletText.css';

export interface BulletTextProps extends BoxProps {
	bullet?: ReactNode;
	variant?: 'primary' | 'secondary';
}

export const BulletText = ({
	as,
	variant = 'primary',
	children,
	bullet: Bullet = '•',
}: BulletTextProps) => (
	<Inline
		as={as satisfies ComponentProps<typeof Inline>['as']}
		noWrap
		space="3"
		alignX="flex-start"
		alignY="center"
	>
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
