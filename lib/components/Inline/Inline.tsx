import type { FunctionComponent, ReactElement } from 'react';
import * as React from 'react';
import { Children, isValidElement, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import type { ThemeTokens as Tokens } from '../../themes';
import type { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Box, type BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

export interface InlineProps extends Pick<BoxProps, 'as' | 'width'> {
	space?: ResponsiveProp<keyof Tokens['space']>;
	alignY?: BoxProps['alignItems'];
	alignX?: BoxProps['justifyContent'];
	noWrap?: boolean;
	children: ReactNode;
	dividers?: boolean | ReactNode;
}

const supportedListTypes: ReadonlyArray<keyof React.JSX.IntrinsicElements> = [
	'ul',
	'ol',
] as const;

export const Inline: FunctionComponent<InlineProps> = ({
	as = 'div',
	children,
	space = '2',
	alignY = 'center',
	alignX,
	noWrap,
	dividers,
	width,
}) => {
	const negativeMarginLeft = useNegativeMarginLeft(space);
	const negativeMarginTop = useNegativeMarginTop(space);
	const items = flattenChildren(children);

	if (items.length < 2) {
		return <>{items}</>;
	}

	const divider = renderDivider(dividers);

	let listItem: typeof as = 'div';
	if (typeof as === 'string')
		listItem = supportedListTypes.includes(as) ? 'li' : 'div';

	return (
		<Box
			as={as}
			width={width}
			position="relative"
			display="flex"
			alignItems={alignY}
			justifyContent={alignX}
			flexDirection="row"
			flexWrap={noWrap ? 'nowrap' : 'wrap'}
			className={[negativeMarginTop, !dividers && negativeMarginLeft]}
		>
			{Children.map(items, (child, idx) =>
				child !== null && child !== undefined ? (
					<Box
						as={listItem}
						display="flex"
						flexDirection="row"
						flexWrap="nowrap"
						alignItems={alignY}
						paddingTop={space as BoxProps['paddingTop']}
						paddingLeft={
							dividers
								? undefined
								: (space as BoxProps['paddingLeft'])
						}
					>
						{child}
						{dividers && idx !== items.length - 1 ? (
							<Box paddingX={space as BoxProps['paddingX']}>
								{divider}
							</Box>
						) : null}
					</Box>
				) : null,
			)}
		</Box>
	);
};

const renderDivider = (
	dividers: InlineProps['dividers'],
): ReactElement | null => {
	if (typeof dividers === 'boolean') {
		return dividers ? <Text>•</Text> : null;
	}

	if (isValidElement(dividers)) {
		return dividers;
	}

	return <Text>{dividers}</Text>;
};

export default Inline;
