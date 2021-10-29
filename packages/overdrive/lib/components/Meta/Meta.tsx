import { IconType } from '@autoguru/icons';
import * as React from 'react';
import { FunctionComponent } from 'react';

import { Inline } from '..';
import { Icon } from '../Icon';
import { Text } from '../Text';

import * as styles from './Meta.css';

export interface Props {
	icon: IconType;
	label: string;
	variant?: keyof typeof styles.variant;
}

export const Meta: FunctionComponent<Props> = ({
												   icon,
												   label,
												   variant = 'primary',
											   }) => (
	<Inline noWrap is='span' space='2' alignY='center'>
		{icon && <Icon icon={icon} className={styles.variant[variant]} />}
		<Text>{label}</Text>
	</Inline>
);
