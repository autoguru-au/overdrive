import { IconType } from '@autoguru/icons';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { inline } from '../Flex/flex';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

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
	<span className={inline({ gap: '2', justify: 'center', noWrap: true })}>
		{icon && <Icon icon={icon} className={styles.variant[variant]} />}
		<Text breakWord={breakWord}>{label}</Text>
	</span>
);
