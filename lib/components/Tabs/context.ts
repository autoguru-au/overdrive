import { createContext } from 'react';

export const TabsContext = createContext<{
	id: string | null;
	active: number;
	onChange?: (idx: number) => void;
}>({
	active: 0,
	id: null,
});

export const IndexContext = createContext<number | null>(null);
