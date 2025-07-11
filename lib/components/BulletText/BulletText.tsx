import React, { isValidElement, type ReactNode } from 'react';

import { Box } from '../Box/Box';
import { type FlexInlineComponentProps } from '../Flex/FlexInline';
import { inline } from '../Flex/flex';
import { Text } from '../Text/Text';

import * as styles from './BulletText.css';

export interface BulletTextProps
	extends Pick<FlexInlineComponentProps, 'as' | 'children'> {
	bullet?: ReactNode;
	variant?: 'primary' | 'secondary';
}

export const BulletText = ({
	as: Component = 'div',
	variant = 'primary',
	children,
	bullet: Bullet = '•',
}: BulletTextProps) => (
	<Component
		className={inline({
			align: 'start',
			gap: '3',
			justify: 'center',
			noWrap: true,
		})}
	>
		{isValidElement(Bullet) ? (
			<Box position="relative" flexShrink={0}>
				{Bullet}
			</Box>
		) : (
			<Box
				position="relative"
				flexShrink="0"
				display="flex"
				alignItems="center"
				justifyContent="center"
				className={[
					styles.bullet,
					{
						[styles.primary]: variant === 'primary',
						[styles.secondary]: variant !== 'primary',
					},
				]}
				borderRadius="pill"
			>
				<Text
					className={{
						[styles.primaryText]: variant === 'primary',
						[styles.secondaryText]: variant !== 'primary',
					}}
					as="span"
					size="2"
				>
					{Bullet}
				</Text>
			</Box>
		)}
		<Box flexGrow="1">
			<Text as="span" size="4" display="block">
				{children}
			</Text>
		</Box>
	</Component>
);
