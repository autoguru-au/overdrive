import React from 'react';

import { DividerLine } from '../../DividerLine/DividerLine';
import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

export interface MarkdownHorizontalRuleProps {
	node?: unknown;
}

export const MarkdownHorizontalRule = ({
	node: _node,
	...props
}: MarkdownHorizontalRuleProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<DividerLine
			space={density === 'compact' ? '2' : '4'}
			colour="neutral"
			{...props}
		/>
	);
};

MarkdownHorizontalRule.displayName = 'MarkdownHorizontalRule';
