import * as React from 'react';
import {
	FunctionComponent,
	isValidElement,
	ReactChild,
	useContext,
} from 'react';

import { Box } from '../Box';

import * as styles from './Bullet.css';
import { BulletList } from './BulletList';
import { BulletListContext, bulletMap, BulletType } from './context';

export interface Props {
	children: ReactChild;
	className?: string;
}

const getBulletCls = (styles: typeof style, type: BulletType): string => {
	switch (type) {
		case 'circle':
			return styles.root.circle;
		case 'square':
			return styles.root.square;
		case 'disc':
			return styles.root.disc;
		default:
			return '';
	}
};

export const Bullet: FunctionComponent<Props> = ({ children, className }) => (
	<Box
		is="li"
		className={[
			styles.root.default,
			getBulletCls(styles, bulletMap[useContext(BulletListContext)]) ??
				'',
			{
				[styles.noDot]:
					isValidElement(children) && children.type === BulletList,
			},
			className,
		]}>
		{children}
	</Box>
);
