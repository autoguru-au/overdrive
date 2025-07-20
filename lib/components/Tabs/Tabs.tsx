import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, ReactNode, useMemo } from 'react';

import { useId, useUncontrolledState } from '../../utils';

import type { TabAppearance } from './Tab.css';

interface TabsContextValue {
	id?: string;
	activeIndex: number;
	appearance: TabAppearance;
	onChange?: (index: number) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsProps {
	id?: string | null;
	active: number;
	appearance?: TabAppearance;
	children?: ReactNode;
	onChange?: (index: number) => void;
}

export const Tabs: FunctionComponent<TabsProps> = ({
	id: incomingId,
	active = 0,
	appearance = 'underlined',
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
					appearance,
					onChange: setActiveState,
				}),
				[id, activeState, appearance, setActiveState],
			)}
		>
			{children}
		</TabsContext.Provider>
	);
};
