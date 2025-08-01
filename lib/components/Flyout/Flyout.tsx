import React, { type ComponentProps } from 'react';

import { Box } from '../Box/Box';
import { Positioner } from '../Positioner/Positioner';

export const Flyout = ({
	children,
	triggerRef,
	isOpen,
	alignment,
	triggerOffset,
	...rest
}: ComponentProps<typeof Positioner>) => (
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
