import React, {
	Children,
	type FunctionComponent,
	isValidElement,
	type PropsWithChildren,
	type ReactNode,
	useMemo,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { Sprinkles } from '../../styles/sprinkles.css';
import type { BoxProps } from '../Box/Box';
import { useBox } from '../Box/useBox/useBox';
import { LIST_MAP } from '../Stack/Stack';
import { Text } from '../Text/Text';

export interface InlineProps extends Pick<BoxProps, 'as' | 'width'> {
	/**
	 * Sets the horizontal alignment
	 */
	alignX?: Sprinkles['justifyContent'];
	/**
	 * Sets the vertical alignment
	 * @default 'center'
	 */
	alignY?: Sprinkles['alignItems'];
	/**
	 * Control wrapping - `true` prevents items from wrapping to the next line when they overflow the container width
	 * @default false (items wrap)
	 */
	children: ReactNode;
	className?: string;
	/**
	 * A divider element to render between each child. Accepts `true`/`false` for default separator or custom JSX
	 */
	dividers?: boolean | ReactNode;
	noWrap?: boolean;
	/**
	 * Defines the gap between list items. Accepts responsive values
	 * @default '2'
	 */
	space?: Sprinkles['gap'];
}

const Divider = ({ children }: PropsWithChildren) => {
	if (!children) return null;
	if (typeof children === 'boolean') return <Text aria-hidden>•</Text>;
	if (isValidElement(children)) return <div aria-hidden>{children}</div>;
	return <Text aria-hidden>{children}</Text>;
};

/**
 * Inline arranges child elements horizontally, side by side.
 * It allows you to control the spacing between items, alignment (horizontal and vertical),
 * wrapping behavior, and optionally add dividers. Useful for creating a row layout.
 *
 * @example
 * <Inline space="4" alignY="flex-start">
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 * </Inline>
 *
 * @example
 * <Inline space="3" dividers>
 *   <Text>Option A</Text>
 *   <Text>Option B</Text>
 *   <Text>Option C</Text>
 * </Inline>
 *
 * @example
 * <Inline space="2" dividers="|" alignX="center">
 *   <Text>Link 1</Text>
 *   <Text>Link 2</Text>
 * </Inline>
 */
export const Inline: FunctionComponent<InlineProps> = ({
	as = 'div',
	children,
	className,

	alignX,
	alignY = 'center',
	dividers,
	noWrap,
	space: gap = '2',
	width,
}) => {
	const { Component, componentProps } = useBox({
		as,
		className,
		odComponent: 'inline',

		alignItems: alignY,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: noWrap ? 'nowrap' : 'wrap',
		gap,
		justifyContent: alignX,
		width,
	});

	const items = useMemo(() => flattenChildren(children), [children]);
	const childEl =
		typeof as === 'string' && as in LIST_MAP
			? LIST_MAP[as as keyof typeof LIST_MAP]
			: 'div';

	const { Component: ChildComponent, componentProps: childComponentProps } =
		useBox({
			as: childEl,

			alignItems: alignY,
			display: 'flex',
			flexWrap: 'nowrap',
			// inherit a gap value from a css variable
			useVar: 'gap',
		});

	if (items.length === 0) return null;

	return (
		<Component {...componentProps}>
			{Children.map(
				items,
				(child, idx) =>
					child && (
						<ChildComponent {...childComponentProps}>
							{dividers && idx > 0 && (
								<Divider>{dividers}</Divider>
							)}
							{child}
						</ChildComponent>
					),
			)}
		</Component>
	);
};
