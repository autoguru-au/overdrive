import React, { type ReactNode } from 'react';

import * as styles from './MarkdownStrikethrough.css';

export interface MarkdownStrikethroughProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownStrikethrough = ({
	children,
	node: _node,
	...props
}: MarkdownStrikethroughProps) => (
	<del className={styles.strikethrough} {...props}>
		{children}
	</del>
);

MarkdownStrikethrough.displayName = 'MarkdownStrikethrough';
