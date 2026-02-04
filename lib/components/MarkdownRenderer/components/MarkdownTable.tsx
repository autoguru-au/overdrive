import React, { type ReactNode } from 'react';

import * as styles from './MarkdownTable.css';

interface MarkdownTableElementProps {
	children?: ReactNode;
	node?: unknown;
}

export const MarkdownTable = ({
	children,
	node: _node,
	...props
}: MarkdownTableElementProps) => (
	<div className={styles.tableWrapper}>
		<table className={styles.table} {...props}>
			{children}
		</table>
	</div>
);
MarkdownTable.displayName = 'MarkdownTable';

export const MarkdownTh = ({
	children,
	node: _node,
	...props
}: MarkdownTableElementProps) => (
	<th className={styles.th} {...props}>
		{children}
	</th>
);
MarkdownTh.displayName = 'MarkdownTh';

export const MarkdownTd = ({
	children,
	node: _node,
	...props
}: MarkdownTableElementProps) => (
	<td className={styles.td} {...props}>
		{children}
	</td>
);
MarkdownTd.displayName = 'MarkdownTd';
