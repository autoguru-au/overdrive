import { IconType } from '@autoguru/icons';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text } from '../Text';

import * as styles from './Meta.css';

export interface MetaProps
	extends Pick<ComponentProps<typeof Text>, 'breakWord'> {
	icon: IconType;
	label: string;
	variant?: keyof typeof styles.variant;
}

export const Meta: FunctionComponent<MetaProps> = ({
	icon,
	label,
	variant = 'primary',
	breakWord,
}) => (
	<Inline noWrap as="span" space="2" alignY="center">
		{icon && <Icon icon={icon} className={styles.variant[variant]} />}
		<Text breakWord={breakWord}>{label}</Text>
	</Inline>
);
