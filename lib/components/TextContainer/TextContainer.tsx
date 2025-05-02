import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';

import { Box } from '../Box';
import { Stack } from '../Stack';

export interface Props {
	heading?: ReactElement;
	action?: ReactElement;
	className?: string;
	children: ReactElement | ReactElement[];
}

export const TextContainer: FunctionComponent<Props> = ({
	heading,
	className = '',
	children,
	action,
}) => (
	<Stack as="article" space="2" className={className}>
		<Box
			alignItems="center"
			display="flex"
			justifyContent="space-between"
			width="full"
		>
			<Box>{heading}</Box>
			{action && <Box>{action}</Box>}
		</Box>
		{children}
	</Stack>
);
