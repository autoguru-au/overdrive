import type { ClassValue as ClassName } from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';

import * as styles from './MarkdownRenderer.css';
import type { MarkdownRendererDensity } from './MarkdownRendererContext';
import { MarkdownRendererDensityProvider } from './MarkdownRendererContext';
import { createComponentMap } from './components';

export interface MarkdownRendererProps extends TestIdProp {
	/** The markdown string to render */
	content: string;
	/** Optional additional class name */
	className?: ClassName;
	/**
	 * Controls the visual density of the rendered markdown.
	 *
	 * - `'comfortable'` (default): Full-size typography and spacing, suitable for
	 *   page-level content.
	 * - `'compact'`: Reduced typography and tighter spacing, optimised for
	 *   widget and sidebar contexts where space is constrained.
	 */
	density?: MarkdownRendererDensity;
}

const componentMap = createComponentMap();

/**
 * Renders GitHub Flavoured Markdown content using Overdrive design tokens and components.
 */
export const MarkdownRenderer = React.forwardRef<
	HTMLDivElement,
	MarkdownRendererProps
>(({ content, className, density = 'comfortable', testId, ...props }, ref) => {
	const { Component, componentProps } = useBox({
		...props,
		as: 'div',
		className: [
			styles.rootBase,
			styles.rootDensity({ density }),
			className,
		],
		odComponent: 'markdown-renderer',
		testId,
	});

	return (
		<MarkdownRendererDensityProvider value={density}>
			<Component {...componentProps} ref={ref}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					components={componentMap}
				>
					{content}
				</ReactMarkdown>
			</Component>
		</MarkdownRendererDensityProvider>
	);
});

MarkdownRenderer.displayName = 'MarkdownRenderer';
