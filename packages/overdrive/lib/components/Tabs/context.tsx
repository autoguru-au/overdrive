import * as React from 'react';
import {
	ContextType,
	createContext,
	FunctionComponent,
	useContext,
} from 'react';

const TabsContext = createContext<{
	id: string | null;
	active: number;
	onChange?: (idx: number) => void;
}>({
	active: 0,
	id: null,
});

export const useTabsContext = () => useContext(TabsContext);
export const TabsContextProvider: FunctionComponent<ContextType<
	typeof TabsContext
>> = ({ active, id, onChange, children }) => (
	<TabsContext.Provider
		value={{
			active,
			id,
			onChange,
		}}
	>
		{children}
	</TabsContext.Provider>
);

const IndexContext = createContext<number | null>(null);

export const TabIndexProvider: FunctionComponent<{ index: number }> = ({
	index,
	children,
}) => <IndexContext.Provider value={index}>{children}</IndexContext.Provider>;
export const useTabIndex = () => useContext(IndexContext);
