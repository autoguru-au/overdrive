import React, { type ReactNode } from 'react';

import { sprinkles } from '../../../styles/sprinkles.css';
import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

export interface MarkdownOrderedListProps {
	children?: ReactNode;
	node?: unknown;
}

const comfortableStyle = sprinkles({ pl: '5', mb: '3' });
const compactStyle = sprinkles({ pl: '3', mb: '2' });

export const MarkdownOrderedList = ({
	children,
	node: _node,
	...props
}: MarkdownOrderedListProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<ol
			className={
				density === 'compact' ? compactStyle : comfortableStyle
			}
			{...props}
		>
			{children}
		</ol>
	);
};

MarkdownOrderedList.displayName = 'MarkdownOrderedList';
