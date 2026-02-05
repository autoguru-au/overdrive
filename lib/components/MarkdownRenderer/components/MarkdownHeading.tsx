import React, { type ReactNode } from 'react';

import { Heading, type HeadingProps } from '../../Heading/Heading';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface MarkdownHeadingProps {
	children?: ReactNode;
	node?: unknown;
}

function createHeadingComponent(level: HeadingLevel) {
	const sizeMap: Record<HeadingLevel, HeadingProps['size']> = {
		h1: '9',
		h2: '8',
		h3: '7',
		h4: '6',
		h5: '5',
		h6: '4',
	};

	const Component = ({
		children,
		node: _node,
		...props
	}: MarkdownHeadingProps) => (
		<Heading as={level} size={sizeMap[level]} mb="3" mt="5" {...props}>
			{children}
		</Heading>
	);
	Component.displayName = `MarkdownHeading(${level})`;
	return Component;
}

export const MarkdownH1 = createHeadingComponent('h1');
export const MarkdownH2 = createHeadingComponent('h2');
export const MarkdownH3 = createHeadingComponent('h3');
export const MarkdownH4 = createHeadingComponent('h4');
export const MarkdownH5 = createHeadingComponent('h5');
export const MarkdownH6 = createHeadingComponent('h6');
