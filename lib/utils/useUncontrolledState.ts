import { useState } from 'react';

export const useUncontrolledState = <T extends unknown>(
	value: T,
	onChange?: (value: T) => void,
): [T, (value: T) => void] => {
	const [uncontrolledValue, setUncontrolledValue] = useState<T>(value);

	if (typeof onChange === 'function') {
		return [value, onChange];
	}

	return [uncontrolledValue, setUncontrolledValue];
};
