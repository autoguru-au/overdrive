import React, { type FunctionComponent, type ReactElement } from 'react';

import { Inline, type InlineProps } from '../Inline';

export interface ActiontsProps extends Pick<InlineProps, 'noWrap'> {
	children: ReactElement | ReactElement[];
	className?: string;
	wrappingDirection?: 'default' | 'reverse';
}

export const Actions: FunctionComponent<ActiontsProps> = ({
	children,
	noWrap,
	wrappingDirection,
}) => (
	<Inline
		space="3"
		noWrap={noWrap}
		reverse={wrappingDirection === 'reverse' ? true : undefined}
	>
		{children}
	</Inline>
);
