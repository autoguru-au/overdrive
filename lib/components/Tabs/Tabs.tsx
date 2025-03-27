import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, ReactNode, useMemo } from 'react';

import { useId, useUncontrolledState } from '../../utils';

type TabsAppearance = 'underlined' | 'pill';
interface TabsContextValue {
	id?: string;
	activeIndex: number;
	appearance: TabsAppearance;
	onChange?: (index: number) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export interface Props {
	id?: string | null;
	active: number;
	appearance?: 'underlined' | 'pill';
	children?: ReactNode;
	onChange?: (index: number) => void;
}

export const Tabs: FunctionComponent<Props> = ({
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

export default Tabs;
