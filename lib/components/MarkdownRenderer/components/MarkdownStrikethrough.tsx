import React, { type ReactNode } from 'react';

import * as styles from './MarkdownStrikethrough.css';

interface MarkdownStrikethoughProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownStrikethrough = ({
	children,
	node: _node,
	...props
}: MarkdownStrikethoughProps) => (
	<del className={styles.strikethrough} {...props}>
		{children}
	</del>
);

MarkdownStrikethrough.displayName = 'MarkdownStrikethrough';
