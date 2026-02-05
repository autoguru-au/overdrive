import React, { type ReactNode } from 'react';

import { sprinkles } from '../../../styles/sprinkles.css';

export interface MarkdownUnorderedListProps {
	children?: ReactNode;
	node?: unknown;
}

const listStyle = sprinkles({ pl: '5', mb: '3' });

export const MarkdownUnorderedList = ({
	children,
	node: _node,
	...props
}: MarkdownUnorderedListProps) => (
	<ul className={listStyle} {...props}>
		{children}
	</ul>
);

MarkdownUnorderedList.displayName = 'MarkdownUnorderedList';
