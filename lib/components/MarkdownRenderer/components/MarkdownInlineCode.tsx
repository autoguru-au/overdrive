import React, { type ReactNode } from 'react';

import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

import * as styles from './MarkdownInlineCode.css';

export interface MarkdownInlineCodeProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownInlineCode = ({
	children,
	node: _node,
	...props
}: MarkdownInlineCodeProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<code className={styles.inlineCode({ density })} {...props}>
			{children}
		</code>
	);
};

MarkdownInlineCode.displayName = 'MarkdownInlineCode';
