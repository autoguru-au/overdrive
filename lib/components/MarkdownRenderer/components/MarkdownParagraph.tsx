import React, { type ReactNode } from 'react';

import { Text } from '../../Text/Text';
import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

export interface MarkdownParagraphProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownParagraph = ({
	children,
	node: _node,
	...props
}: MarkdownParagraphProps) => {
	const density = useMarkdownRendererDensity();
	const isCompact = density === 'compact';

	return (
		<Text
			as="p"
			display="block"
			size={isCompact ? '3' : undefined}
			mb={isCompact ? '2' : '3'}
			{...props}
		>
			{children}
		</Text>
	);
};

MarkdownParagraph.displayName = 'MarkdownParagraph';
