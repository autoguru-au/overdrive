import * as React from 'react';
import { FunctionComponent, isValidElement, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Box, BoxStyleProps } from '../Box';
import { Inline } from '../Inline';
import { Text } from '../Text';

import * as styleRefs from './BulletText.treat';

export interface Props extends Partial<Pick<BoxStyleProps, 'is'>> {
	bullet?: ReactNode;
	variant?: 'primary' | 'secondary';
}

export const BulletText: FunctionComponent<Props> = ({
	variant = 'primary',
	children,
	is: Component = 'div',
	bullet: Bullet = '•',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Inline
			noWrap
			space="3"
			is={Component}
			alignX="flexStart"
			alignY="center">
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
					backgroundColour={
						variant === 'primary' ? 'green200' : 'gray200'
					}
					className={styles.bullet}
					borderRadius="pill">
					<Text
						is="span"
						size="2"
						colour={variant === 'primary' ? 'success' : 'dark'}>
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
};
