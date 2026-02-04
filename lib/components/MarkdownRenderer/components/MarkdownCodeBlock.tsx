import React, { type ReactNode } from 'react';

import * as styles from './MarkdownCodeBlock.css';

interface MarkdownCodeBlockProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownCodeBlock = ({
	children,
	node: _node,
	...props
}: MarkdownCodeBlockProps) => (
	<pre className={styles.codeBlock} {...props}>
		{React.Children.map(children, (child) => {
			if (React.isValidElement<{ className?: string }>(child) && child.type === 'code') {
				return React.cloneElement(child, {
					className: styles.codeBlockInner,
				});
			}
			return child;
		})}
	</pre>
);

MarkdownCodeBlock.displayName = 'MarkdownCodeBlock';
