import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import { memo } from 'react';
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
}

export const Badge = memo<Props>(
	({ label, colour = 'neutral', look = 'standard', className = '' }) => {
		const styles = useStyles(styleRefs);
		const textStyles = useTextStyles({
			size: '2',
			noWrap: true,
			fontWeight: 'semiBold',
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
					padding="1"
					borderRadius="1">
					<Box
						is="span"
						display="block"
						overflow="hidden"
						className={clsx(styles.label, textStyles, {
							[styles.colours.inverted[colour].text]: inverted,
							[styles.colours.default.text]: !inverted,
						})}>
						{label}
					</Box>
				</Box>
			</Box>
		);
	},
);
