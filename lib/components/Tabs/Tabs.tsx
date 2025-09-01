import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, ReactNode, useCallback, useMemo, useRef } from 'react';

import { useId, useUncontrolledState } from '../../utils';

import type { TabAppearance } from './Tab.css';

interface TabsContextValue {
	id?: string;
	activeIndex: number;
	appearance: TabAppearance;
	onChange?: (index: number) => void;
	registerTab: (index: number, el: HTMLElement | null) => void;
	getTab: (index: number) => HTMLElement | undefined;
	getTabCount: () => number;
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

	// Registry for tab DOM elements
	const tabRefs = useRef<Map<number, HTMLElement>>(new Map());

	const registerTab = useCallback((index: number, el: HTMLElement | null) => {
		if (el) tabRefs.current.set(index, el);
		else tabRefs.current.delete(index);
	}, []);

	const getTab = useCallback(
		(index: number) => tabRefs.current.get(index),
		[],
	);

	const getTabCount = useCallback(() => tabRefs.current.size, []);

	return (
		<TabsContext.Provider
			value={useMemo(
				() => ({
					id,
					activeIndex: activeState,
					appearance,
					onChange: setActiveState,
					registerTab,
					getTab,
					getTabCount,
				}),
				[
					id,
					activeState,
					appearance,
					setActiveState,
					registerTab,
					getTab,
					getTabCount,
				],
			)}
		>
			{children}
		</TabsContext.Provider>
	);
};
