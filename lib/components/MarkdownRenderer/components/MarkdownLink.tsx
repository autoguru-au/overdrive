import React, { type ReactNode } from 'react';

import { TextLink } from '../../TextLink/TextLink';

export interface MarkdownLinkProps {
	children?: ReactNode;
	href?: string;
	node?: unknown;
}

export const MarkdownLink = ({
	children,
	href,
	node: _node,
	...props
}: MarkdownLinkProps) => {
	const isExternal = href?.startsWith('http');
	return (
		<TextLink
			href={href}
			{...(isExternal
				? { target: '_blank', rel: 'noopener noreferrer' }
				: {})}
			{...props}
		>
			{children}
		</TextLink>
	);
};

MarkdownLink.displayName = 'MarkdownLink';
