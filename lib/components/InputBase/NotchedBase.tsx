import { warning } from '@autoguru/utilities';
import cx from 'clsx';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styles from './style.scss';

const ACTIVE_SCALING_FACTOR = 0.7777;
const ACTIVE_PADDING_ADDED = 8;
const NOTCHED_WARN_WIDTH = 170;
const ROUGH_WIDTH_PER_CHARACTER = 10.2;

export interface IProps {
	id: string;
	placeholder: string;
	isEmpty: boolean;
	isActive: boolean;
}

export const NotchedBase: FunctionComponent<IProps> = ({
	id,
	placeholder,
	isEmpty,
	isActive,
	children,
}) => {
	const labelRef = useRef<HTMLLabelElement>(null);
	const [labelWidth, setLabelWidth] = useState<number>(
		getNotchedComputedWidthFotWidth(
			placeholder.length * ROUGH_WIDTH_PER_CHARACTER
		)
	);

	useEffect(() => {
		if (labelRef.current) {
			setLabelWidth(labelRef.current.offsetWidth);
		}
	}, [labelRef.current, placeholder]);

	const notchedWidth = getNotchedComputedWidthFotWidth(labelWidth);

	// TODO: This will double warn, when placeholder gets updated, the setLabelWidth will trigger a double render
	warning(
		notchedWidth > NOTCHED_WARN_WIDTH,
		`The placeholder cannot exceed ${NOTCHED_WARN_WIDTH}px or roughly 20 characters, as it needs to fit into 280px container.`
	);

	return (
		<div
			className={cx(styles.notchedBase, {
				[styles.notchedBaseShift]: !isEmpty,
				[styles.notchedBaseActive]: isActive,
			})}>
			{children}
			<div className={styles.notchedBaseBorder}>
				<div className={styles.notchedBaseBorderLeading} />
				<div
					className={styles.notchedBaseBorderNotch}
					style={{ width: !isEmpty ? notchedWidth : 0 }}>
					<label
						ref={labelRef}
						htmlFor={id}
						className={styles.notchedBasePlaceholder}>
						{placeholder}
					</label>
				</div>
				<div className={styles.notchedBaseBorderTrailing} />
			</div>
		</div>
	);
};

function getNotchedComputedWidthFotWidth(width: number): number {
	return (
		Math.round(
			(width * ACTIVE_SCALING_FACTOR + ACTIVE_PADDING_ADDED) * 100
		) / 100
	);
}
