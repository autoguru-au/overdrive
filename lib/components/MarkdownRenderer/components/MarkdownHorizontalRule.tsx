import React from 'react';

import { DividerLine } from '../../DividerLine/DividerLine';

interface MarkdownHorizontalRuleProps {
	node?: unknown;
}

export const MarkdownHorizontalRule = ({
	node: _node,
	...props
}: MarkdownHorizontalRuleProps) => (
	<DividerLine space="4" colour="neutral" {...props} />
);

MarkdownHorizontalRule.displayName = 'MarkdownHorizontalRule';
