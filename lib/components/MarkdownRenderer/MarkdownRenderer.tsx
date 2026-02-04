import type { ClassValue as ClassName } from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';

import * as styles from './MarkdownRenderer.css';
import { createComponentMap } from './components';

export interface MarkdownRendererProps extends TestIdProp {
	/** The markdown string to render */
	content: string;
	/** Optional additional class name */
	className?: ClassName;
}

const componentMap = createComponentMap();

/**
 * Renders GitHub Flavored Markdown content using Overdrive design tokens and components.
 */
export const MarkdownRenderer = React.forwardRef<
	HTMLDivElement,
	MarkdownRendererProps
>(({ content, className, testId, ...props }, ref) => {
	const { Component, componentProps } = useBox({
		...props,
		as: 'div',
		className: [styles.root, className],
		odComponent: 'markdown-renderer',
		testId,
	});

	return (
		<Component {...componentProps} ref={ref}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={componentMap}
			>
				{content}
			</ReactMarkdown>
		</Component>
	);
});

MarkdownRenderer.displayName = 'MarkdownRenderer';
