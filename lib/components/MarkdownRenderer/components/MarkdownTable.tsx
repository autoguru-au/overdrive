import React, { type ReactNode } from 'react';

import { useMarkdownRendererDensity } from '../MarkdownRendererContext';

import * as styles from './MarkdownTable.css';

export interface MarkdownTableElementProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownTable = ({
	children,
	node: _node,
	...props
}: MarkdownTableElementProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<div className={styles.tableWrapper({ density })}>
			<table className={styles.table} {...props}>
				{children}
			</table>
		</div>
	);
};
MarkdownTable.displayName = 'MarkdownTable';

export const MarkdownTh = ({
	children,
	node: _node,
	...props
}: MarkdownTableElementProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<th className={styles.th({ density })} {...props}>
			{children}
		</th>
	);
};
MarkdownTh.displayName = 'MarkdownTh';

export const MarkdownTd = ({
	children,
	node: _node,
	...props
}: MarkdownTableElementProps) => {
	const density = useMarkdownRendererDensity();

	return (
		<td className={styles.td({ density })} {...props}>
			{children}
		</td>
	);
};
MarkdownTd.displayName = 'MarkdownTd';
