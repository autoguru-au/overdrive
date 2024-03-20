import { useEffect } from 'react';

export const useNullCheck = <T>(value: T, message: string) => {
	useEffect(() => {
		if (!value) {
			console.warn(`%c${message}`, 'color: orange');
		}
	}, [value, message]);
};
