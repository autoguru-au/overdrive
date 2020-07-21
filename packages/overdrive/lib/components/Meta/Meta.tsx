import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as styleRefs from './Meta.treat';

export interface Props {
	className?: string;
	icon: IconType;
	label: string;
	variant?: keyof typeof styleRefs.variant;
}

export const Meta: FunctionComponent<Props> = ({
	className = '',
	icon = undefined,
	label,
	variant = 'primary',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Box is="span" className={[styles.root, className]}>
			{icon && (
				<Icon
					icon={icon}
					className={clsx(
						styles.variant.default,
						styles.variant[variant],
					)}
				/>
			)}
			<Text>{label}</Text>
		</Box>
	);
};
