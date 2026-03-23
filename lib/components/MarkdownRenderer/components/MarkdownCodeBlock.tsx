import React, { type ReactNode } from 'react';

import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

import * as styles from './MarkdownCodeBlock.css';

export interface MarkdownCodeBlockProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownCodeBlock = ({
	children,
	node: _node,
	...props
}: MarkdownCodeBlockProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<pre className={styles.codeBlock({ density })} {...props}>
			{React.Children.map(children, (child) => {
				if (
					React.isValidElement<{ className?: string }>(child) &&
					child.type === 'code'
				) {
					return React.cloneElement(child, {
						className: styles.codeBlockInner,
					});
				}
				return child;
			})}
		</pre>
	);
};

MarkdownCodeBlock.displayName = 'MarkdownCodeBlock';
