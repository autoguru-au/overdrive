import React, { type ReactNode } from 'react';

import * as styles from './MarkdownBlockquote.css';

interface MarkdownBlockquoteProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownBlockquote = ({
	children,
	node: _node,
	...props
}: MarkdownBlockquoteProps) => (
	<blockquote className={styles.blockquote} {...props}>
		{children}
	</blockquote>
);

MarkdownBlockquote.displayName = 'MarkdownBlockquote';
