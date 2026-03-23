import React, { type ReactNode } from 'react';

import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

import * as styles from './MarkdownBlockquote.css';

export interface MarkdownBlockquoteProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownBlockquote = ({
	children,
	node: _node,
	...props
}: MarkdownBlockquoteProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<blockquote
			className={styles.blockquote({ density })}
			{...props}
		>
			{children}
		</blockquote>
	);
};

MarkdownBlockquote.displayName = 'MarkdownBlockquote';
