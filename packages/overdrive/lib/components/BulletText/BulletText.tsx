import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, isValidElement, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Column, Columns } from '../Columns';
import { Text } from '../Text';
import * as styleRefs from './BulletText.treat';

export interface Props {
	bullet?: ReactNode;
	variant?: keyof typeof styleRefs.variant;
	className?: string;
}

export const BulletText: FunctionComponent<Props> = ({
	variant = 'primary',
	className = '',
	children,
	bullet: Bullet = '•',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Columns
			noWrap
			space="3"
			className={clsx(styles.root, className)}
			is="li"
		>
			{isValidElement(Bullet) ? (
				<Column alignSelf="centre" className={styles.customBullet}>
					{Bullet}
				</Column>
			) : (
				<Column alignSelf="centre">
					<Box
						className={clsx(styles.bullet, styles.variant[variant])}
						borderRadius="pill"
					>
						<span className={styles.bulletText}>{Bullet}</span>
					</Box>
				</Column>
			)}
			<Column>
				<Text is="span">{children}</Text>
			</Column>
		</Columns>
	);
};
