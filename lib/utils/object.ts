export const arrayFromKeys = <T extends Record<string, unknown>>(
	obj: T,
): (keyof T)[] => Object.keys(obj) as (keyof T)[];
