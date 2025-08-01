import clsx from 'clsx';
import React, { FunctionComponent, ReactElement } from 'react';

import { Box } from '../Box/Box';
import { stack } from '../Flex/flex';

export interface TextContainerProps {
	heading?: ReactElement;
	action?: ReactElement;
	className?: string;
	children: ReactElement | ReactElement[];
}

export const TextContainer: FunctionComponent<TextContainerProps> = ({
	heading,
	className = '',
	children,
	action,
}) => (
	<article className={clsx(stack({ gap: '2' }), className)}>
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
	</article>
);
