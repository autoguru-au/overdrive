import clsx from 'clsx';
import React, {
	FunctionComponent,
	isValidElement,
	ReactChild,
	useContext,
} from 'react';

import styles from './Bullet.scss';
import { BulletList } from './BulletList';
import { BulletListContext, bulletMap } from './context';

interface Props {
	children: ReactChild;
	className?: string;
}

export const Bullet: FunctionComponent<Props> = ({ children, className }) => (
	<li
		className={clsx(
			styles.root,
			bulletMap[useContext(BulletListContext)] || '',
			{
				[styles.noDot]:
					isValidElement(children) && children.type === BulletList,
			},
			className,
		)}>
		{children}
	</li>
);
