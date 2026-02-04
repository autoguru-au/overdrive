import React, { type ReactNode } from 'react';

import { sprinkles } from '../../../styles/sprinkles.css';

interface MarkdownOrderedListProps {
	children?: ReactNode;
	node?: unknown;
}

const listStyle = sprinkles({ pl: '5', mb: '3' });

export const MarkdownOrderedList = ({
	children,
	node: _node,
	...props
}: MarkdownOrderedListProps) => (
	<ol className={listStyle} {...props}>
		{children}
	</ol>
);

MarkdownOrderedList.displayName = 'MarkdownOrderedList';
