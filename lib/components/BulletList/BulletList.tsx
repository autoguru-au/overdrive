import clsx from 'clsx';
import React, { FunctionComponent, ReactNode, useContext } from 'react';

import styles from './BulletList.scss';
import { BulletListContext, bulletMap } from './context';

interface Props {
	children: ReactNode;
	className?: string;
}

export const BulletList: FunctionComponent<Props> = ({
	children,
	className,
}) => {
	const stack = useContext(BulletListContext);
	return (
		<BulletListContext.Provider
			value={stack + 1 >= bulletMap.length ? 0 : stack + 1}>
			<ul className={clsx(styles.root, className)}>{children}</ul>
		</BulletListContext.Provider>
	);
};
