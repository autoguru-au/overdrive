import React, { type ReactNode } from 'react';

import { sprinkles } from '../../../styles/sprinkles.css';
import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

export interface MarkdownListItemProps {
	children?: ReactNode;
	className?: string;
	node?: unknown;
}

const comfortableStyle = sprinkles({ mb: '1' });
const compactStyle = sprinkles({ mb: 'none' });

export const MarkdownListItem = ({
	children,
	className,
	node: _node,
	...props
}: MarkdownListItemProps) => {
	const density = useMarkdownRendererDensity();
	const isTaskItem = className?.includes('task-list-item');
	const densityStyle =
		density === 'compact' ? compactStyle : comfortableStyle;

	if (isTaskItem) {
		return (
			<li
				className={`${densityStyle}${className ? ` ${className}` : ''}`}
				{...props}
			>
				{children}
			</li>
		);
	}

	return (
		<li
			className={`${densityStyle}${className ? ` ${className}` : ''}`}
			{...props}
		>
			{children}
		</li>
	);
};

MarkdownListItem.displayName = 'MarkdownListItem';
