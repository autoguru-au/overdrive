import React, { type ReactNode } from 'react';

import { Text } from '../../Text/Text';

interface MarkdownParagraphProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownParagraph = ({
	children,
	node: _node,
	...props
}: MarkdownParagraphProps) => (
	<Text as="p" display="block" mb="3" {...props}>
		{children}
	</Text>
);

MarkdownParagraph.displayName = 'MarkdownParagraph';
