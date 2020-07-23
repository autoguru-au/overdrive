import { IconType } from '@autoguru/icons';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Inline } from '..';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as styleRefs from './Meta.treat';

export interface Props {
	icon: IconType;
	label: string;
	variant?: keyof typeof styleRefs.variant;
}

export const Meta: FunctionComponent<Props> = ({
	icon = undefined,
	label,
	variant = 'primary',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Inline is="span" space="2" alignY="center">
			{icon && <Icon icon={icon} className={styles.variant[variant]} />}
			<Text>{label}</Text>
		</Inline>
	);
};
