import React, { type ReactNode } from 'react';

import { Text } from '../../Text/Text';

export interface MarkdownStrongProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownStrong = ({
	children,
	node: _node,
	...props
}: MarkdownStrongProps) => (
	<Text as="span" strong {...props}>
		{children}
	</Text>
);

MarkdownStrong.displayName = 'MarkdownStrong';
