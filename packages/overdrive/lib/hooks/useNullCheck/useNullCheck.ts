import { useEffect } from 'react';

export const useNullCheck = (value: any, message: string) => {
	useEffect(() => {
		if (!value) {
			console.warn(`%c${message}`, 'color: orange');
		}
	}, [value, message]);
};
