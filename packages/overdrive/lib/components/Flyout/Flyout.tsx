import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import * as React from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Positioner } from '../Positioner';
import * as styleRefs from './Flyout.treat';

export const Flyout: FunctionComponent<ComponentPropsWithoutRef<
	typeof Positioner
>> = ({ children, triggerRef, isOpen, alignment, triggerOffset, ...rest }) => {
	const styles = useStyles(styleRefs);

	return (
		<Positioner
			triggerRef={triggerRef}
			isOpen={isOpen}
			alignment={alignment}
			triggerOffset={triggerOffset}
			{...rest}
		>
			<Box
				className={styles.root}
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
};
