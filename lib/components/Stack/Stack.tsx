import * as React from 'react';
import { Children, FunctionComponent, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'react-treat';

import type { BoxStyleProps } from '../Box';
import { Box } from '../Box';
import { Divider } from './Divider';
import * as styleRefs from './Stack.treat';

export interface Props extends Pick<BoxStyleProps, 'is' | 'width'> {
	space?: keyof typeof styleRefs.child.spaces;
	className?: string;
	dividers?: boolean;

	children: ReactNode[];
}

export const Stack: FunctionComponent<Props> = ({
	space = '2',
	children,
	is = 'div',
	width,
	dividers = false,
	className = '',
}) => {
	const styles = useStyles(styleRefs);
	const items = flattenChildren(children);

	if (items.length < 2) {
		return <>{items}</>;
	}

	return (
		<Box is={is} className={className} width={width}>
			{Children.map(items, (child, idx) => (
				<Box
					is={['ul', 'ol'].includes(is) ? 'li' : 'div'}
					className={[
						styles.child.default,
						dividers ? undefined : styles.child.spaces[space],
					]}>
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
