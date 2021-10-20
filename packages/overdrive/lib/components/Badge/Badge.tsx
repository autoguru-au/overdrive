import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { useTextStyles } from '../Text';

import * as styleRefs from './Badge.treat';

export interface Props {
	label: string;
	// TODO: These should use the intent verbs, and come from Box
	colour?: keyof typeof styleRefs.colours.default;
	className?: string;
	look?: 'standard' | 'inverted';
	size?: 'standard' | 'large';
}

export const Badge: FunctionComponent<Props> =
	({
		 label,
		 colour = 'neutral',
		 look = 'standard',
		 size = 'standard',
		 className = '',
	 }) => {
		const isStandardSize = size === 'standard';
		const styles = useStyles(styleRefs);
		const textStyles = useTextStyles({
			size: isStandardSize ? '2' : '4',
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
