import * as React from 'react';
import { ContextType, FunctionComponent, useMemo } from 'react';

import { useId, useUncontrolledState } from '../../utils';
import { Box } from '../Box';
import { TabsContext } from './context';

export const Tabs: FunctionComponent<{
	active?: number;
	onChange?: (idx: number) => void;
}> = ({ children, active = 0, onChange }) => {
	const [activeState, setActiveState] = useUncontrolledState<number>(
		active,
		onChange,
	);

	const id = useId();

	const state = useMemo<ContextType<typeof TabsContext>>(
		() => ({
			id,
			active: activeState,
			onChange: setActiveState,
		}),
		[id, activeState, setActiveState],
	);

	return (
		<Box>
			<TabsContext.Provider value={state}>
				{children}
			</TabsContext.Provider>
		</Box>
	);
};
