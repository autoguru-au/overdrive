import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from '../Flyout/Flyout.treat';
import { usingPositioner } from '../Positioner';

export const Flyout = usingPositioner(({ children }) => (
	<FlyoutComponent>{children}</FlyoutComponent>
));

const FlyoutComponent: FunctionComponent = ({ children }) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			className={styles.root}
			backgroundColour="white"
			boxShadow="4"
			borderRadius="1"
			borderWidth="1"
			borderColour="gray">
			{children}
		</Box>
	);
};
