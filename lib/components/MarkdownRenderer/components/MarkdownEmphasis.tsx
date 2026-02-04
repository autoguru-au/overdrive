import React, { type ReactNode } from 'react';

import * as styles from './MarkdownEmphasis.css';

export interface MarkdownEmphasisProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownEmphasis = ({
	children,
	node: _node,
	...props
}: MarkdownEmphasisProps) => (
	<em className={styles.emphasis} {...props}>
		{children}
	</em>
);

MarkdownEmphasis.displayName = 'MarkdownEmphasis';
