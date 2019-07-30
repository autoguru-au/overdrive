import { warning } from '@autoguru/utilities';
import clsx from 'clsx';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styles from './style.scss';

const ACTIVE_SCALING_FACTOR = 0.7777;
const ACTIVE_PADDING_ADDED = 16;
const NOTCHED_WARN_WIDTH = 170;
const ROUGH_WIDTH_PER_CHARACTER = 10.2;

export interface Props {
	id: string;
	placeholder: string;
	isEmpty: boolean;
	isActive: boolean;
	hasPrefix?: boolean;
	hasSuffix?: boolean;
	className?: string;
}

export const NotchedBase: FunctionComponent<Props> = ({
	id,
	placeholder,
	isEmpty,
	isActive,
	children,
	hasPrefix = false,
	hasSuffix = false,
	className = '',
}) => {
	const labelRef = useRef<HTMLLabelElement>(null);
	const [labelWidth, setLabelWidth] = useState<number>(
		getNotchedComputedWidthForWidth(
			placeholder.length * ROUGH_WIDTH_PER_CHARACTER,
		),
	);

	useEffect(() => {
		if (labelRef.current) {
			setLabelWidth(labelRef.current.offsetWidth);
		}
	}, [placeholder]);

	const notchedWidth = getNotchedComputedWidthForWidth(labelWidth);

	// TODO: This will double warn, when placeholder gets updated, the setLabelWidth will trigger a double render
	warning(
		notchedWidth > NOTCHED_WARN_WIDTH,
		`The placeholder cannot exceed ${NOTCHED_WARN_WIDTH}px or roughly 20 characters, as it needs to fit into 280px container.`,
	);

	return (
		<div
			className={clsx(
				styles.notchedBase,
				{
					[styles.notchedBaseShift]: !isEmpty,
					[styles.notchedBaseActive]: isActive,
					[styles.prefixed]: hasPrefix,
					[styles.suffixed]: hasSuffix,
				},
				className,
			)}>
			{children}
			<div className={styles.notchedBaseBorder}>
				<div className={styles.notchedBaseBorderLeading} />
				<div
					className={styles.notchedBaseBorderNotch}
					style={{ width: isEmpty ? 0 : notchedWidth }}>
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

function getNotchedComputedWidthForWidth(width: number): number {
	return (
		Math.round(
			(width * ACTIVE_SCALING_FACTOR + ACTIVE_PADDING_ADDED) * 100,
		) / 100
	);
}
