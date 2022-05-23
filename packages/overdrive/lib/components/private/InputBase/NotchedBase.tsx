import clsx from 'clsx';
import * as React from 'react';
import {
	FunctionComponent,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

import { Box } from '../../Box';
import { useTextStyles } from '../../Text';

import * as styles from './NotchedBase.css';

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
	children?: ReactNode;
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
	const labelStyles = useTextStyles({
		noWrap: true,
		size: '4',
	});
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
			position="relative"
			width="full"
			padding="none"
			className={clsx(
				styles.root,
				!notch && [styles.borders.complete, borderColourClassName],
				className,
			)}>
			{children}
			{notch && (
				<Box
					className={clsx(styles.borders.root.default, {
						[styles.borders.root.disabled]: disabled,
					})}
					pointerEvents="none"
					position="absolute"
					display="flex"
					width="full"
					height="full"
					textAlign="left">
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
						<Box
							ref={labelRef}
							is="label"
							pointerEvents="none"
							htmlFor={id}
							position="absolute"
							display="inline"
							margin="none"
							padding="none"
							className={clsx(
								styles.placeholder.default,
								placeholderColourClassName,
								labelStyles,
								{
									[styles.placeholder.mutedLabelStyles]:
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
						</Box>
					</div>
					<div
						className={clsx(
							styles.borders.trailing,
							borderColourClassName,
						)}
					/>
				</Box>
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
