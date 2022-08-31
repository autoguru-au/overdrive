import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, ReactNode, useMemo } from 'react';

import { useId, useUncontrolledState } from '../../utils';

interface TabsContextValue {
	id?: string;
	activeIndex: number;
	onChange?: (index: number) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export interface Props {
	id?: string | null;
	active: number;
	children?: ReactNode;
	onChange?: (index: number) => void;
}

export const Tabs: FunctionComponent<Props> = ({
	id: incomingId,
	active = 0,
	onChange,
	children,
}) => {
	const [activeState, setActiveState] = useUncontrolledState<number>(
		active,
		onChange,
	);

	const id = useId(incomingId ?? undefined)!;

	return (
		<TabsContext.Provider
			value={useMemo(
				() => ({
					id,
					activeIndex: activeState,
					onChange: setActiveState,
				}),
				[id, activeState],
			)}
		>
			{children}
		</TabsContext.Provider>
	);
};

export default Tabs;
