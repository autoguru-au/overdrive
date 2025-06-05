import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import * as React from 'react';

import { Box } from '../Box/Box';
import { Positioner } from '../Positioner/Positioner';

export const Flyout: FunctionComponent<
	ComponentPropsWithoutRef<typeof Positioner>
> = ({ children, triggerRef, isOpen, alignment, triggerOffset, ...rest }) => (
	<Positioner
		triggerRef={triggerRef}
		isOpen={isOpen}
		alignment={alignment}
		triggerOffset={triggerOffset}
		{...rest}
	>
		<Box
			overflow="hidden"
			backgroundColour="white"
			boxShadow="4"
			borderRadius="1"
			borderWidth="1"
			borderColour="gray"
		>
			{children}
		</Box>
	</Positioner>
);

export default Flyout;
