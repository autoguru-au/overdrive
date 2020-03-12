import { Context, createContext } from 'react';

export type BulletType = 'circle' | 'square' | 'disc';

export const bulletMap: BulletType[] = ['circle', 'square', 'disc'];

export const BulletListContext: Context<number> = createContext(-1);
