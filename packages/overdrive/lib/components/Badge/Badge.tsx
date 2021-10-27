import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { FunctionComponent } from 'react';

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

export const Badge: FunctionComponent<Props> = ({
	label,
	colour = 'neutral',
	look = 'standard',
	size = 'standard',
	className = '',
}) => {
	const isStandardSize = size === 'standard';
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
		<Box display="flex">
			<Box
				className={[
					className,
					styles.labelSize[size],
					inverted
						? styles.colours.inverted[colour].background
						: styles.colours.default[colour],
				]}
				overflow="hidden"
				display="block"
				paddingX={isStandardSize ? '1' : '4'}
				paddingY={isStandardSize ? '1' : '2'}
				borderRadius="1">
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
					]}>
					{label}
				</Box>
			</Box>
		</Box>
	);
};
