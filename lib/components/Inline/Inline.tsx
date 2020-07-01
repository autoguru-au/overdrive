import type { FunctionComponent, ReactChild, ReactElement } from 'react';
import * as React from 'react';
import { Children, isValidElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import type { Theme } from 'treat/theme';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { ResponsiveProp } from '../../utils';
import { Box } from '../Box';
import { BoxStyleProps } from '../Box/useBoxStyles';
import { Text } from '../Typography';

export interface Props extends Pick<BoxStyleProps, 'is'> {
	space?: ResponsiveProp<keyof Theme['space']>;
	alignY?: BoxStyleProps['alignItems'];
	alignX?: BoxStyleProps['justifyContent'];
	noWrap?: boolean;
	dividers?: boolean | ReactChild;
}

export const Inline: FunctionComponent<Props> = ({
	is = 'div',
	children,
	space = '2',
	alignY = 'center',
	alignX,
	noWrap,
	dividers,
}) => {
	const negativeMarginLeft = useNegativeMarginLeft(space);
	const negativeMarginTop = useNegativeMarginTop(space);

	const items = flattenChildren(children);

	if (items.length < 2) {
		return <>{items}</>;
	}

	const divider = renderDivider(dividers);

	const listItem = ['ul', 'ol'].includes(is) ? 'li' : 'div';

	return (
		<Box
			is={is}
			position="relative"
			display="flex"
			alignItems={alignY}
			justifyContent={alignX}
			flexDirection="row"
			flexWrap={noWrap ? 'nowrap' : 'wrap'}
			className={[negativeMarginTop, !dividers && negativeMarginLeft]}>
			{Children.map(items, (child, idx) =>
				child !== null && child !== undefined ? (
					<Box
						is={listItem}
						display="flex"
						flexDirection="row"
						flexWrap="nowrap"
						alignItems={alignY}
						paddingTop={space}
						paddingLeft={dividers ? undefined : space}>
						{child}
						{dividers && idx !== items.length - 1 ? (
							<Box paddingX={space}>{divider}</Box>
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
