import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, ReactNode, useContext } from 'react';

import { Box } from '../Box';

import * as styles from './BulletList.css';
import { BulletListContext, bulletMap } from './context';

export interface BulletListProps {
	className?: string;
	children?: ReactNode;
}

export const BulletList: FunctionComponent<BulletListProps> = ({
	children,
	className,
}) => {
	const stack = useContext(BulletListContext);
	return (
		<Box
			as="ul"
			className={clsx(className, styles.root, {
				[styles.firstOccurrence]: stack === -1,
			})}
			odComponent="bullet-list"
		>
			<BulletListContext.Provider
				value={stack + 1 >= bulletMap.length ? 0 : stack + 1}
			>
				{children}
			</BulletListContext.Provider>
		</Box>
	);
};
