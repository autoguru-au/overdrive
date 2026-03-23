import React, { type ReactNode } from 'react';

import type { TypographyProps } from '../../../styles/typography';
import { Heading, type HeadingProps } from '../../Heading/Heading';
import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface MarkdownHeadingProps {
	children?: ReactNode;
	node?: unknown;
}

const comfortableSizeMap: Record<HeadingLevel, HeadingProps['size']> = {
	h1: '9',
	h2: '8',
	h3: '7',
	h4: '6',
	h5: '5',
	h6: '4',
};

const compactSizeMap: Record<HeadingLevel, HeadingProps['size']> = {
	h1: '4',
	h2: '4',
	h3: '3',
	h4: '3',
	h5: '3',
	h6: '3',
};

const compactWeightMap: Record<HeadingLevel, TypographyProps['weight']> = {
	h1: 'bold',
	h2: 'bold',
	h3: 'bold',
	h4: 'semiBold',
	h5: 'semiBold',
	h6: 'semiBold',
};

function createHeadingComponent(level: HeadingLevel) {
	const Component = ({
		children,
		node: _node,
		...props
	}: MarkdownHeadingProps) => {
		const density = useMarkdownRendererDensity();
		const isCompact = density === 'compact';

		return (
			<Heading
				as={level}
				size={isCompact ? compactSizeMap[level] : comfortableSizeMap[level]}
				weight={isCompact ? compactWeightMap[level] : 'bold'}
				mt={isCompact ? '3' : '5'}
				mb={isCompact ? '1' : '3'}
				{...props}
			>
				{children}
			</Heading>
		);
	};
	Component.displayName = `MarkdownHeading(${level})`;
	return Component;
}

export const MarkdownH1 = createHeadingComponent('h1');
export const MarkdownH2 = createHeadingComponent('h2');
export const MarkdownH3 = createHeadingComponent('h3');
export const MarkdownH4 = createHeadingComponent('h4');
export const MarkdownH5 = createHeadingComponent('h5');
export const MarkdownH6 = createHeadingComponent('h6');
