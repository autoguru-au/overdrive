import clsx from 'clsx';
import React, { Children, memo, NamedExoticComponent, ReactNode } from 'react';

import styles from './Stack.scss';

interface Props {
	spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	children?: ReactNode;
}

const spaceMap = new Array(9)
	.fill(0)
	.map((_, idx) => styles[`space${idx + 1}`]);

export const Stack: NamedExoticComponent<Props> = memo(
	({ spacing = 2, children }) => {
		return (
			<>
				{Children.toArray(children).map((child, idx) => (
					<div
						key={idx}
						className={clsx(styles.child, spaceMap[spacing - 1])}>
						{child}
					</div>
				))}
			</>
		);
	},
);
