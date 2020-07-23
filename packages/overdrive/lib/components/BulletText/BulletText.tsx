import * as React from 'react';
import {
	ElementType,
	FunctionComponent,
	isValidElement,
	ReactNode,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Column, Columns } from '../Columns';
import { Text } from '../Text';
import * as styleRefs from './BulletText.treat';

export interface Props {
	bullet?: ReactNode;
	variant?: 'primary' | 'secondary';
	className?: string;
	is?: ElementType;
}

export const BulletText: FunctionComponent<Props> = ({
	variant = 'primary',
	className = '',
	children,
	is: Component = 'li',
	bullet: Bullet = '•',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Columns noWrap space="3" className={className} is={Component}>
			{isValidElement(Bullet) ? (
				<Column alignSelf="centre" position="relative" flexShrink={0}>
					{Bullet}
				</Column>
			) : (
				<Column alignSelf="centre">
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
				</Column>
			)}
			<Column>
				<Text is="span" size="4">
					{children}
				</Text>
			</Column>
		</Columns>
	);
};
