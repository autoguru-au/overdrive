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
	borderMerged?: keyof typeof styles.bordersMerged['complete'];
	isFocused?: boolean;
	isHovered?: boolean;
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
	borderMerged = 'NONE',
	isFocused = false,
	isHovered = false,
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
	const shouldMerge = !isFocused && !isHovered;

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
					[styles.bordersMerged.complete.NONE]:
						!notch &&
						shouldMerge &&
						(!borderMerged || borderMerged === 'NONE'),
					[styles.bordersMerged.complete.LEFT]:
						!notch && shouldMerge && borderMerged === 'LEFT',
					[styles.bordersMerged.complete.TOP]:
						!notch && shouldMerge && borderMerged === 'TOP',
					[styles.bordersMerged.complete.RIGHT]:
						!notch && shouldMerge && borderMerged === 'RIGHT',
					[styles.bordersMerged.complete.BOTTOM]:
						!notch && shouldMerge && borderMerged === 'BOTTOM',
					[styles.bordersMerged.complete.ALL]:
						!notch && shouldMerge && borderMerged === 'ALL',
					[styles.bordersAttach.complete.NONE]:
						!notch && attach === 'NONE',
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
								[styles.bordersMerged.complete.LEFT]:
									shouldMerge && borderMerged === 'LEFT',
								[styles.bordersMerged.complete.TOP]:
									shouldMerge && borderMerged === 'TOP',
								[styles.bordersMerged.complete.BOTTOM]:
									shouldMerge && borderMerged === 'BOTTOM',
								[styles.bordersMerged.complete.ALL]:
									shouldMerge && borderMerged === 'ALL',
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
									[styles.bordersMerged.complete.TOP]:
										shouldMerge && borderMerged === 'TOP',
									[styles.bordersMerged.complete.BOTTOM]:
										shouldMerge &&
										borderMerged === 'BOTTOM',
									[styles.bordersMerged.complete.ALL]:
										shouldMerge && borderMerged === 'ALL',

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
							'chromatic-ignore',
							styles.borders.trailing,
							borderColourClassName,
							borderColourClassName,
							{
								[styles.bordersMerged.complete.RIGHT]:
									shouldMerge && borderMerged === 'RIGHT',
								[styles.bordersMerged.complete.TOP]:
									shouldMerge && borderMerged === 'TOP',
								[styles.bordersMerged.complete.BOTTOM]:
									shouldMerge && borderMerged === 'BOTTOM',
								[styles.bordersMerged.complete.ALL]:
									shouldMerge && borderMerged === 'ALL',
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
