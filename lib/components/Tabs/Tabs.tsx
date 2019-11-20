import React, { ContextType, FunctionComponent, useMemo } from 'react';

import { useId } from '../../utils/useId';
import { useUncontrolledState } from '../../utils/useUncontrolledState';
import { TabsContext } from './context';
import styles from './style.scss';

export const Tabs: FunctionComponent<{
	active?: number;
	onChange?: (idx: number) => void;
}> = ({ children, active = 0, onChange = null }) => {
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
		<TabsContext.Provider value={state}>
			<div className={styles.tabs}>{children}</div>
		</TabsContext.Provider>
	);
};
