import * as React from 'react';
import {
	FunctionComponent,
	isValidElement,
	ReactNode,
	useContext,
} from 'react';

import { Box } from '../Box';

import * as styles from './Bullet.css';
import { BulletList } from './BulletList';
import { BulletListContext, bulletMap, BulletType } from './context';

export interface BulletProps {
	children?: ReactNode;
	className?: string;
}

const getBulletCls = (styles, type: BulletType): string => {
	switch (type) {
		case 'circle': {
			return styles.root.circle;
		}
		case 'square': {
			return styles.root.square;
		}
		case 'disc': {
			return styles.root.disc;
		}
		default: {
			return '';
		}
	}
};

export const Bullet: FunctionComponent<BulletProps> = ({
	children,
	className,
}) => (
	<Box
		as="li"
		className={[
			styles.root.default,
			getBulletCls(styles, bulletMap[useContext(BulletListContext)]) ??
				'',
			{
				[styles.noDot]:
					isValidElement(children) && children.type === BulletList,
			},
			className,
		]}
	>
		{children}
	</Box>
);
