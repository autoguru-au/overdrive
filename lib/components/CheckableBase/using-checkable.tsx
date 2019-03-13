import React, { FunctionComponent } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import cx from 'clsx';
import styles from './style.scss';

export interface IProps {
	className?: string;
	checked: boolean;
	label?: string;
}

interface ISymbolProps {
	checked: boolean;
	className?: string;
}

export const usingCheckable = (
	SymbolComponent: FunctionComponent<ISymbolProps>,
	tag: string
): FunctionComponent<IProps> => ({
	className = '',
	checked = false,
	label,
}) => {
	const cls = cx([styles.root, className], {
		[styles.selected]: checked,
	});

	return (
		<div className={cls}>
			<SymbolComponent checked={checked} className={styles.checkable} />
			<input
				checked={checked}
				type={tag}
				className={styles.nativeInput}
			/>
			{!!(typeof label === 'string' && label.length > 0) && (
				<DetailText
					size={EDetailTextSize.Detail1}
					children={label}
					className={styles.label}
				/>
			)}
		</div>
	);
};
