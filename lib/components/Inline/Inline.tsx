import type {
	ComponentType,
	FunctionComponent,
	ReactChild,
	ReactElement,
} from 'react';
import * as React from 'react';
import { Children, isValidElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import { resolveResponsiveStyle, ResponsiveProp } from '../../utils';
import { Box } from '../Box';
import { BoxStyleProps } from '../Box/useBoxStyles';
import { Text } from '../Typography';
import * as styleRefs from './Inline.treat';

export interface Props extends Pick<BoxStyleProps, 'is'> {
	space?: ResponsiveProp<keyof Theme['space']>;
	alignY?: ResponsiveProp<keyof typeof styleRefs.align>;
	dividers?: boolean | ComponentType | ReactChild;
}

export const Inline: FunctionComponent<Props> = ({
	is = 'div',
	children,
	space = '2',
	alignY,
	dividers,
}) => {
	const styles = useStyles(styleRefs);

	const items = flattenChildren(children);

	if (items.length < 2) {
		return <>{items}</>;
	}

	const divider = renderDivider(dividers);

	return (
		<Box
			is={is}
			position="relative"
			className={[
				styles.root,
				resolveResponsiveStyle(alignY, styles.align),
			]}>
			{Children.map(items, (child, idx) =>
				child !== null && child !== undefined ? (
					<Box
						is={['ul', 'ol'].includes(is) ? 'li' : 'div'}
						className={[
							styles.child,
							resolveResponsiveStyle(alignY, styles.align),
						]}
						paddingLeft={
							/* eslint-disable-next-line */
							dividers ? undefined : idx === 0 ? undefined : space
						}>
						{child}
						{dividers && idx !== items.length - 1 ? (
							<Box paddingX={space} display="inline-block">
								{divider}
							</Box>
						) : null}
					</Box>
				) : null,
			)}
		</Box>
	);
};

const renderDivider = (dividers: Props['dividers']): ReactElement | null => {
	if (typeof dividers === 'boolean') {
		return dividers ? <Text>•</Text> : null;
	}

	if (isValidElement(dividers)) {
		return dividers;
	}

	return <Text>{dividers}</Text>;
};
