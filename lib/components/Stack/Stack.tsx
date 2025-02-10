import * as React from 'react';
import { Children, FunctionComponent, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { BoxStyleProps } from '../Box';
import { Box } from '../Box';

import { Divider } from './Divider';
import * as styles from './Stack.css';

export interface Props
	extends Pick<BoxStyleProps, 'as' | 'is' | 'width' | 'alignItems'> {
	space?: keyof typeof styles.child.spaces;
	className?: string;
	dividers?: boolean;

	children: ReactNode | ReactNode[];
}

const supportedListTypes: ReadonlyArray<keyof React.JSX.IntrinsicElements> = [
	'ul',
	'ol',
] as const;

export const Stack: FunctionComponent<Props> = ({
	space = '2',
	children,
	is = 'div',
	as = is,
	alignItems,
	width,
	dividers = false,
	className = '',
}) => {
	const items = flattenChildren(children);

	if (items.length < 2) {
		return <>{items}</>;
	}

	let listItem: typeof as = 'div';
	if (typeof as === 'string')
		listItem = supportedListTypes.includes(as) ? 'li' : 'div';

	return (
		<Box as={as} className={className} width={width}>
			{Children.map(items, (child, idx) => (
				<Box
					as={listItem}
					display={alignItems ? 'flex' : void 0}
					flexDirection="column"
					alignItems={alignItems}
					className={[
						styles.child.default,
						dividers ? undefined : styles.child.spaces[space],
					]}
				>
					{dividers && idx > 0 ? (
						<Box paddingY={space} width="full">
							<Divider />
						</Box>
					) : null}
					{child}
				</Box>
			))}
		</Box>
	);
};

export default Stack;
