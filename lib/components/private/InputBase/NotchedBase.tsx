import clsx from 'clsx';
import React, { type FunctionComponent, type ReactNode, useRef } from 'react';

import { Box } from '../../Box';

import * as styles from './NotchedBase.css';
import type { BordersAttach, BordersMerged } from './NotchedBase.css';
import type { InputSize } from './withEnhancedInput.css';

export interface Props {
	id: string;
	placeholder: string;
	isEmpty: boolean;
	disabled: boolean;
	prefixed: boolean;
	borderColourClassName: string;
	placeholderColourClassName: string;
	notch?: boolean;
	size: InputSize;
	className?: string;
	children?: ReactNode;
	attach?: BordersAttach;
	borderMerged?: BordersMerged;
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
	const labelRef = useRef<HTMLLabelElement>(null);

	const shouldMerge = !isFocused && !isHovered;

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
								[styles.borders.root.large]: size === 'large',
							},
						)}
					/>
					<div
						className={clsx(
							styles.borders.middle,
							borderColourClassName,
						)}
					>
						<Box
							display={
								isEmpty || placeholder.length === 0
									? 'none'
									: 'block'
							}
							paddingX="2"
							className={[
								styles.labelStyle.base,
								styles.labelStyle[size],
								styles.notchGapPlaceholder.base,
								styles.notchGapPlaceholder[size],
							]}
						>
							{placeholder}
						</Box>
						<Box
							ref={labelRef}
							as="label"
							pointerEvents="none"
							htmlFor={id}
							position="absolute"
							display="inline"
							margin="none"
							padding="none"
							className={clsx(
								styles.placeholder.default,
								placeholderColourClassName,
								styles.labelStyle.base,
								styles.labelStyle[size],
								{
									[styles.bordersMerged.complete.TOP]:
										shouldMerge && borderMerged === 'TOP',
									[styles.bordersMerged.complete.BOTTOM]:
										shouldMerge &&
										borderMerged === 'BOTTOM',
									[styles.bordersMerged.complete.ALL]:
										shouldMerge && borderMerged === 'ALL',
									[styles.placeholder.mutedLabelStyles]:
										isEmpty,
									[styles.placeholder.disabled]: disabled,
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
								[styles.borders.root.large]: size === 'large',
							},
						)}
					/>
				</Box>
			)}
		</Box>
	);
};
