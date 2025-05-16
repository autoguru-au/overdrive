import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { textStyles } from '../Text/textStyles';

import * as styles from './DropDownOption.css';

interface DropDownOptionProps
	extends Omit<ComponentProps<typeof Box>, 'paddingX' | 'paddingY'> {
	icon?: IconType;
	label: string;
	iconColour?: ComponentProps<typeof Text>['colour'];
}

export const DropDownOption: FunctionComponent<DropDownOptionProps> = ({
	label,
	icon,
	className,
	disabled = false,
	display = 'flex',
	iconColour = 'dark',
	is = 'button',
	alignItems = 'center',
	width = 'full',
	...boxProps
}) => {
	const colourStyles = textStyles({ colour: iconColour });
	return (
		<Box
			className={clsx(styles.root, className, {
				[styles.disabled]: disabled,
			})}
			{...boxProps}
			width={width}
			alignItems={alignItems}
			display={display}
			paddingX="3"
			paddingY="2"
			is={is}
		>
			<Inline
				noWrap
				space="2"
				width="full"
				alignX="space-between"
				alignY="center"
			>
				<Text as="p" size="3">
					{label}
				</Text>
				{icon ? (
					<Icon className={colourStyles} size="medium" icon={icon} />
				) : null}
			</Inline>
		</Box>
	);
};
