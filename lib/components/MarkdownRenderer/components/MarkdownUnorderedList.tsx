import React, { type ReactNode } from 'react';

import { sprinkles } from '../../../styles/sprinkles.css';
import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

export interface MarkdownUnorderedListProps {
	children?: ReactNode;
	node?: unknown;
}

const comfortableStyle = sprinkles({ pl: '5', mb: '3' });
const compactStyle = sprinkles({ pl: '3', mb: '2' });

export const MarkdownUnorderedList = ({
	children,
	node: _node,
	...props
}: MarkdownUnorderedListProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<ul
			className={
				density === 'compact' ? compactStyle : comfortableStyle
			}
			{...props}
		>
			{children}
		</ul>
	);
};

MarkdownUnorderedList.displayName = 'MarkdownUnorderedList';
