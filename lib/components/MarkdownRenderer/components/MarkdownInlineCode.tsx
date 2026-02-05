import React, { type ReactNode } from 'react';

import * as styles from './MarkdownInlineCode.css';

export interface MarkdownInlineCodeProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownInlineCode = ({
	children,
	node: _node,
	...props
}: MarkdownInlineCodeProps) => (
	<code className={styles.inlineCode} {...props}>
		{children}
	</code>
);

MarkdownInlineCode.displayName = 'MarkdownInlineCode';
