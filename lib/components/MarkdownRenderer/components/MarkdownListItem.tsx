import React, { type ReactNode } from 'react';

import { sprinkles } from '../../../styles/sprinkles.css';

interface MarkdownListItemProps {
	children?: ReactNode;
	className?: string;
	node?: unknown;
}

const listItemStyle = sprinkles({ mb: '1' });

export const MarkdownListItem = ({
	children,
	className,
	node: _node,
	...props
}: MarkdownListItemProps) => {
	const isTaskItem = className?.includes('task-list-item');

	if (isTaskItem) {
		return (
			<li className={className} {...props}>
				{children}
			</li>
		);
	}

	return (
		<li className={`${listItemStyle}${className ? ` ${className}` : ''}`} {...props}>
			{children}
		</li>
	);
};

MarkdownListItem.displayName = 'MarkdownListItem';
