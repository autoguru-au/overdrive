import * as React from 'react';
import { Children, FunctionComponent, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { BoxStyleProps } from '../Box';
import { Box } from '../Box';

import { Divider } from './Divider';
import * as styles from './Stack.css';

export interface Props
	extends Pick<BoxStyleProps, 'is' | 'width' | 'alignItems'> {
	space?: keyof typeof styles.child.spaces;
	className?: string;
	dividers?: boolean;

	children: ReactNode | ReactNode[];
}

const supportedListTypes: ReadonlyArray<keyof JSX.IntrinsicElements> = [
	'ul',
	'ol',
] as const;

export const Stack: FunctionComponent<Props> = ({
	space = '2',
	children,
	is = 'div',
	alignItems,
	width,
	dividers = false,
	className = '',
}) => {
	const items = flattenChildren(children);

	if (items.length < 2) {
		return <>{items}</>;
	}

	let listItem: typeof is = 'div';
	if (typeof is === 'string')
		listItem = supportedListTypes.includes(is) ? 'li' : 'div';

	return (
		<Box is={is} className={className} width={width}>
			{Children.map(items, (child, idx) => (
				<Box
					is={listItem}
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
