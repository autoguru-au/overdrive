import { Context, createContext } from 'react';

import bulletStyles from './Bullet.scss';

export const bulletMap: string[] = [
	bulletStyles.circle,
	bulletStyles.square,
	bulletStyles.disc,
];

export const BulletListContext: Context<number> = createContext(-1);
