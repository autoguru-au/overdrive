import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { FunctionComponent, ComponentProps } from 'react';

import { Box } from '../Box';
import { useTextStyles } from '../Text';

import * as styles from './Badge.css';

export interface Props {
	label: string;
	colour?: keyof typeof styles.colours.default;
	className?: string;
	look?: 'standard' | 'inverted';
	size?: keyof typeof styles.labelSize;
}

const paddingXMap: Record<Props['size'] , ComponentProps<typeof Box>['padding']> = {
	'small': '1',
	'standard': '1',
	'large': '4'
}

const paddingYMap: Record<Props['size'] , ComponentProps<typeof Box>['padding']> = {
	'small': '1',
	'standard': '1',
	'large': '4'
}

export const Badge: FunctionComponent<Props> = ({
	label,
	colour = 'neutral',
	look = 'standard',
	size = 'standard',
	className = '',
}) => {
	const textStyles = useTextStyles({
		noWrap: true,
		fontWeight: 'semiBold',
		colour: 'unset',
	});
	const inverted = look === 'inverted';

	invariant(
		['string', 'number'].includes(typeof label),
		"Badge `label` can only contain string's or number's",
	);

	return (
		<Box className={className} display="flex">
			<Box
				className={[
					styles.labelSize[size],
					inverted
						? styles.colours.inverted[colour].background
						: styles.colours.default[colour],
				]}
				overflow="hidden"
				display="block"
				paddingX={paddingXMap[size]}
				paddingY={paddingYMap[size]}
				borderRadius="1"
			>
				<Box
					is="span"
					display="block"
					overflow="hidden"
					className={[
						textStyles,
						styles.label,
						inverted
							? styles.colours.inverted[colour].text
							: useTextStyles({ colour: 'white' }),
					]}
				>
					{label}
				</Box>
			</Box>
		</Box>
	);
};

export default Badge;
