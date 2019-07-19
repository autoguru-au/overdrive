import { Context, createContext } from 'react';

import BulletStyles from './Bullet.scss';

export const bulletMap: string[] = [
	BulletStyles.circle,
	BulletStyles.square,
	BulletStyles.disc,
];

export const BulletListContext: Context<number> = createContext(-1);
