import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../../Box/Box';
import * as styleRefs from './NotchedBase.treat';

const ACTIVE_SCALING_FACTOR = 0.7777;
const ACTIVE_PADDING_ADDED = 16;
const ROUGH_WIDTH_PER_CHARACTER = 10.2;

export interface Props {
	id: string;
	placeholder: string;
	isEmpty: boolean;
	disabled: boolean;
	prefixed: boolean;
	borderColourClassName: string;
	placeholderColourClassName: string;
	notch?: boolean;
	className?: string;
}

export const NotchedBase: FunctionComponent<Props> = ({
	id,
	placeholder,
	isEmpty,
	disabled,
	prefixed,
	children,
	notch = true,
	borderColourClassName,
	placeholderColourClassName,
	className = '',
}) => {
	const styles = useStyles(styleRefs);
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

	return (
		<Box
			className={clsx(
				styles.root,
				!notch && [styles.borders.complete, borderColourClassName],
				className,
			)}>
			{children}
			{notch && (
				<div
					className={clsx(styles.borders.root.default, {
						[styles.borders.root.disabled]: disabled,
					})}>
					<div
						className={clsx(
							styles.borders.leading,
							borderColourClassName,
						)}
					/>
					<div
						className={clsx(
							styles.borders.middle,
							borderColourClassName,
						)}
						style={{ width: isEmpty ? 0 : notchedWidth }}>
						<label
							ref={labelRef}
							htmlFor={id}
							className={clsx(
								styles.placeholder.default.standard,
								placeholderColourClassName,
								{
									[styles.placeholder.empty]:
										isEmpty || disabled,
									[styles.placeholderPlacement.default]:
										isEmpty && !prefixed,
									[styles.placeholderPlacement
										.defaultPrefixed]: isEmpty && prefixed,
									[styles.placeholderPlacement
										.shifted]: !isEmpty,
								},
							)}>
							{placeholder}
						</label>
					</div>
					<div
						className={clsx(
							styles.borders.trailing,
							borderColourClassName,
						)}
					/>
				</div>
			)}
		</Box>
	);
};

function getNotchedComputedWidthForWidth(width: number): number {
	return (
		Math.round(
			(width * ACTIVE_SCALING_FACTOR + ACTIVE_PADDING_ADDED) * 100,
		) / 100
	);
}
