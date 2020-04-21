import * as React from 'react';
import { ContextType, FunctionComponent, useMemo } from 'react';

import { useId, useUncontrolledState } from '../../utils';
import { Box } from '../Box';
import { TabsContext } from './context';

interface Props {
	active?: number;
	onChange?: (idx: number) => void;
}

export const Tabs: FunctionComponent<Props> = ({
	children,
	active = 0,
	onChange,
}) => {
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
		<Box width="full">
			<TabsContext.Provider value={state}>
				{children}
			</TabsContext.Provider>
		</Box>
	);
};
