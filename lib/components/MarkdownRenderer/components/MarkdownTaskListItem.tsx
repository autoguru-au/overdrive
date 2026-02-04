import React, { type ReactNode } from 'react';

import * as styles from './MarkdownTaskListItem.css';

interface MarkdownTaskListItemProps {
	children?: ReactNode;
	checked?: boolean;
}

export const MarkdownTaskListItem = ({
	children,
	checked,
}: MarkdownTaskListItemProps) => (
	<li className={styles.taskListItem}>
		<input
			type="checkbox"
			checked={checked ?? false}
			readOnly
			className={styles.checkbox}
		/>
		<span>{children}</span>
	</li>
);

MarkdownTaskListItem.displayName = 'MarkdownTaskListItem';
