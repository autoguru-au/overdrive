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
	size: keyof typeof styles.placeholderPlacement;
	className?: string;
	children?: ReactNode;
	attach?: keyof typeof styles.bordersAttach['complete'];
}

export const NotchedBase: FunctionComponent<Props> = ({
	id,
	placeholder,
	isEmpty,
	disabled,
	prefixed,
	size,
	children,
	notch = true,
	borderColourClassName,
	placeholderColourClassName,
	className = '',
	attach = 'NONE',
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
				{
					[styles.bordersAttach.complete.NONE]: !notch && !attach,
					[styles.bordersAttach.complete.LEFT]:
						!notch && attach === 'LEFT',
					[styles.bordersAttach.complete.RIGHT]:
						!notch && attach === 'RIGHT',
					[styles.bordersAttach.complete.TOP]:
						!notch && attach === 'TOP',
					[styles.bordersAttach.complete.BOTTOM]:
						!notch && attach === 'BOTTOM',
					[styles.bordersAttach.complete.ALL]:
						!notch && attach === 'ALL',
				},
			)}
		>
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
					textAlign="left"
				>
					<div
						className={clsx(
							styles.borders.leading,
							borderColourClassName,
							{
								[styles.bordersAttach.flatCorners.TOP_LEFT]:
									attach === 'LEFT' ||
									attach === 'TOP' ||
									attach === 'ALL',
								[styles.bordersAttach.flatCorners.BOTTOM_LEFT]:
									attach === 'LEFT' ||
									attach === 'BOTTOM' ||
									attach === 'ALL',
							},
						)}
					/>
					<div
						className={clsx(
							styles.borders.middle,
							borderColourClassName,
						)}
						style={{ width: isEmpty ? 0 : notchedWidth }}
					>
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
									[styles.placeholderPlacement[size].default]:
										isEmpty && !prefixed,
									[styles.placeholderPlacement[size]
										.defaultPrefixed]: isEmpty && prefixed,
									[styles.placeholderPlacement[size].shifted]:
										!isEmpty,
								},
							)}
						>
							{placeholder}
						</Box>
					</div>
					<div
						className={clsx(
							styles.borders.trailing,
							borderColourClassName,
							borderColourClassName,
							{
								[styles.bordersAttach.flatCorners.TOP_RIGHT]:
									attach === 'RIGHT' ||
									attach === 'TOP' ||
									attach === 'ALL',
								[styles.bordersAttach.flatCorners.BOTTOM_RIGHT]:
									attach === 'RIGHT' ||
									attach === 'BOTTOM' ||
									attach === 'ALL',
							},
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
