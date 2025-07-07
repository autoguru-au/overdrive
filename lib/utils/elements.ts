import type { AsProp } from '../types';

export const LIST_MAP = {
	ol: 'li',
	ul: 'li',
} as const;

export const calcChildElement = (el: AsProp) =>
	typeof el === 'string' && el in LIST_MAP
		? LIST_MAP[el as keyof typeof LIST_MAP]
		: 'div';
