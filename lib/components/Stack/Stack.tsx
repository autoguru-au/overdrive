import clsx from 'clsx';
import * as React from 'react';
import { Children, FunctionComponent, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { BoxStyleProps } from '../Box/useBoxStyles';
import { Divider } from './Divider';
import * as styleRefs from './Stack.treat';

interface Props extends Pick<BoxStyleProps, 'is' | 'width'> {
	spacing?: keyof typeof styleRefs.child.spaces;
	className?: string;
	dividers?: boolean;

	children: ReactNode[];
}

export const Stack: FunctionComponent<Props> = ({
	spacing = '2',
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
					className={clsx(
						styles.child.default,
						dividers ? undefined : styles.child.spaces[spacing],
					)}>
					{dividers && idx > 0 ? (
						<Box paddingY={spacing} width="full">
							<Divider />
						</Box>
					) : null}
					{child}
				</Box>
			))}
		</Box>
	);
};
