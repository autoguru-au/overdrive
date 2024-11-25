import { IconType } from '@autoguru/icons';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text } from '../Text';

import * as styles from './Meta.css';

export interface Props extends Pick<ComponentProps<typeof Text>, 'breakWord'> {
	icon: IconType;
	label: string;
	variant?: keyof typeof styles.variant;
}

export const Meta: FunctionComponent<Props> = ({
	icon,
	label,
	variant = 'primary',
	breakWord,
}) => (
	<Inline noWrap is="span" space="2" alignY="center">
		{icon && <Icon icon={icon} className={styles.variant[variant]} />}
		<Text breakWord={breakWord}>{label}</Text>
	</Inline>
);

export default Meta;
