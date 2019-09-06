import { useEffect, useState } from 'react';

let id = 0;
const genId = () => ++id;

export const useId = (): string => {
	const [id, setId] = useState(null);
	useEffect(() => setId(genId()), []);
	return `od-${id}`;
};
