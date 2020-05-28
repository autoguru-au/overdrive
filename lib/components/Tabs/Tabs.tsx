import * as React from 'react';
import { FunctionComponent } from 'react';

import { useId, useUncontrolledState } from '../../utils';
import { Box } from '../Box';
import { TabsContextProvider } from './context';

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

	return (
		<Box width="full">
			<TabsContextProvider
				id={id}
				active={activeState}
				onChange={setActiveState}>
				{children}
			</TabsContextProvider>
		</Box>
	);
};
