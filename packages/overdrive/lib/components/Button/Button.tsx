import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	AriaAttributes,
	ButtonHTMLAttributes,
	cloneElement,
	ComponentProps,
	createElement,
	ElementType,
	forwardRef,
	isValidElement,
	ReactElement,
	useMemo,
} from 'react';

import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { ProgressSpinner } from '../ProgressSpinner';
import { useTextStyles } from '../Text';

import * as styles from './Button.css';

type ButtonPrimitive = ButtonHTMLAttributes<HTMLButtonElement>;

type AllowedChildren = string | IconType;

export interface Props
	extends Pick<ButtonPrimitive, 'id' | 'onClick' | 'type' | 'className'>,
		Pick<AriaAttributes, 'aria-label'> {
	children: AllowedChildren | AllowedChildren[];
	disabled?: boolean;
	is?: ElementType | ReactElement;
	isLoading?: boolean;
	isFullWidth?: boolean;
	minimal?: boolean;
	rounded?: boolean;
	size?: keyof typeof styles.size;
	variant?: keyof typeof styles.variant;
}

const getSpinnerColour: (
	variant: keyof typeof styles.variant,
	minimal: boolean,
) => ComponentProps<typeof ProgressSpinner>['colour'] = (variant, minimal) =>
	minimal || variant === 'secondary' ? 'secondary' : 'light';

const getBorderRadius: (
	rounded: boolean,
) => ComponentProps<typeof Box>['borderRadius'] = (rounded) =>
	rounded ? 'pill' : '1';

const getPadding: (
	size: keyof typeof styles.size,
	loading: boolean,
) => ComponentProps<typeof Box>['paddingX'] = (size, loading) => {
	if (loading) return 'none';
	return size === 'small' ? '3' : '4';
};

export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			children,
			className = '',
			disabled = false,
			id,
			is: Component = 'button',
			isLoading = false,
			isFullWidth = false,
			minimal = false,
			onClick,
			rounded = false,
			size = 'medium',
			type = 'button',
			variant = 'secondary',
			'aria-label': ariaLabel,
		},
		ref,
	) => {
		const { isSingleIconChild, props: maybeIconProps } = useMemo(() => {
			const maybeIcon =
				isValidElement(children) && children.type === Icon;
			const maybeProps = children as ReactElement<
				ComponentProps<typeof Icon>
			>;

			return maybeIcon
				? {
						isSingleIconChild: true,
						props: maybeProps.props,
				  }
				: { isSingleIconChild: false };
		}, [children]);

		const props: Partial<ButtonPrimitive> & { ref: typeof ref } = {
			type: Component === 'button' ? (type as any) : undefined,
			id,
			onClick,
			disabled: disabled || isLoading,
			'aria-label': ariaLabel,
			className: clsx(
				useBoxStyles({
					is: typeof Component === 'string' ? Component : undefined,
					display: 'inlineBlock',
					overflow: 'hidden',
					borderRadius: getBorderRadius(rounded),
					textAlign: 'center',
					borderWidth: 'none',
					paddingY: 'none',
					paddingX: getPadding(size, isLoading),
					width: isFullWidth ? 'full' : void 0,
				}),
				useTextStyles({
					colour: 'white',
					fontWeight: 'semiBold',
					size: size === 'medium' ? '4' : '3',
				}),
				styles.root,
				getButtonStates(
					styles,
					variant,
					disabled || isLoading,
					minimal,
					rounded,
				),
				!minimal && styles.variant[variant],
				getButtonSize(
					styles,
					size,
					rounded,
					isSingleIconChild && !isLoading,
				),
				{
					[styles.disabled]: disabled,
					[styles.enabled]: !disabled && !isLoading,
					[styles.loading]: isLoading,
				},
				className,
			),
			ref,
		};

		const buttonContents = useMemo(
			() => (
				<>
					{isSingleIconChild && maybeIconProps ? (
						<Icon
							size={
								maybeIconProps.size ?? size === 'small'
									? 'small'
									: 'medium'
							}
							{...maybeIconProps}
						/>
					) : (
						children
					)}
				</>
			),
			[maybeIconProps, isSingleIconChild, children, size],
		);

		const child = isLoading ? (
			<Box
				display="flex"
				justifyContent="center"
				position="relative"
				alignItems="center"
				width="full"
				height="full">
				<Box
					position="absolute"
					alignItems="center"
					justifyContent="center"
					display="flex"
					width="full"
					height="full">
					<ProgressSpinner
						className={styles.spinner}
						colour={getSpinnerColour(variant, minimal)}
					/>
				</Box>
				<Box
					width="full"
					height="full"
					className={[styles.body, styles.hiddenContent]}>
					{buttonContents}
				</Box>
			</Box>
		) : (
			<Box
				height="full"
				alignItems="center"
				justifyContent="center"
				className={styles.body}>
				{buttonContents}
			</Box>
		);

		return isValidElement(Component)
			? // @ts-ignore
			  cloneElement(Component, { ref, ...props }, child)
			: // @ts-ignore
			  createElement(Component, { ref, ...props }, child);
	},
);

const getButtonStates: (
	buttonStyles: typeof styles,
	variant: keyof typeof styles.variant,
	disabled: boolean,
	minimal: boolean,
	rounded: boolean,
) => string = (buttonStyles, variant, disabled, minimal, rounded) => {
	if (disabled)
		return minimal
			? clsx(buttonStyles.minimal.defaults, {
					[buttonStyles.minimal.noneRounded]: !rounded,
			  })
			: '';

	if (minimal)
		return clsx(styles.minimal.defaults, styles.minimalStates[variant], {
			[styles.minimal.noneRounded]: !rounded,
		});
	return styles.defaultStates[variant];
};

const getButtonSize: (
	buttonStyles: typeof styles,
	size: keyof typeof styles.size,
	rounded: boolean,
	iconOnly: boolean,
) => string = (buttonStyles, size, rounded, iconOnly) => {
	const currentSize = buttonStyles.size[size];

	return clsx(currentSize.default, {
		[currentSize.rounded]: rounded,
		[currentSize.iconOnly]: iconOnly,
	});
};
