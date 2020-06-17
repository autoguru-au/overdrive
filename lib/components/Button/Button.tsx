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
import { useStyles } from 'react-treat';

import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { ProgressSpinner } from '../ProgressSpinner';
import * as styleRefs from './Button.treat';

type ButtonPrimitive = ButtonHTMLAttributes<HTMLButtonElement>;

type AllowedChildren = string | IconType;

interface Props
	extends Pick<ButtonPrimitive, 'id' | 'onClick' | 'type' | 'className'>,
		Pick<AriaAttributes, 'aria-label'> {
	children: AllowedChildren | AllowedChildren[];
	disabled?: boolean;
	is?: ElementType | ReactElement;
	isLoading?: boolean;
	isFullWidth?: boolean;
	minimal?: boolean;
	rounded?: boolean;
	size?: keyof typeof styleRefs.size;
	variant?: keyof typeof styleRefs.variant;
}

const getSpinnerColour: (
	variant: keyof typeof styleRefs.variant,
	minimal: boolean,
) => ComponentProps<typeof ProgressSpinner>['colour'] = (variant, minimal) =>
	minimal || variant === 'secondary' ? 'secondary' : 'light';

const getBorderRadius: (
	rounded: boolean,
) => ComponentProps<typeof Box>['borderRadius'] = (rounded) =>
	rounded ? 'pill' : '1';

const getPadding: (
	size: keyof typeof styleRefs.size,
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
		const styles = useStyles(styleRefs);
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
			type: Component === 'button' ? (type as any) : void 0,
			id,
			onClick,
			disabled: disabled || isLoading,
			'aria-label': ariaLabel,
			className: clsx(
				useBoxStyles({
					is: typeof Component === 'string' ? Component : undefined,
					display: 'inlineBlock',
					borderRadius: getBorderRadius(rounded),
					borderWidth: 'none',
					paddingY: 'none',
					paddingX: getPadding(size, isLoading),
				}),
				styles.root,
				styles.themedButton,
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
				styles.width[isFullWidth ? 'fullWidth' : 'default'],
				className,
			),
			ref,
		};

		const child = isLoading ? (
			<ProgressSpinner
				className={styles.spinner}
				colour={getSpinnerColour(variant, minimal)}
			/>
		) : (
			<div className={styles.body}>
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
			</div>
		);

		return isValidElement(Component)
			? cloneElement(Component, { ref, ...props }, child)
			: createElement(Component, { ref, ...props }, child);
	},
);

const getButtonStates: (
	styles: typeof styleRefs,
	variant: keyof typeof styleRefs.variant,
	disabled: boolean,
	minimal: boolean,
	rounded: boolean,
) => string = (styles, variant, disabled, minimal, rounded) => {
	if (disabled)
		return minimal
			? clsx(styles.minimal.defaults, {
					[styles.minimal.noneRounded]: !rounded,
			  })
			: '';

	if (minimal)
		return clsx(styles.minimal.defaults, styles.minimalStates[variant], {
			[styles.minimal.noneRounded]: !rounded,
		});
	return styles.defaultStates[variant];
};

const getButtonSize: (
	styles: typeof styleRefs,
	size: keyof typeof styles.size,
	rounded: boolean,
	iconOnly: boolean,
) => string = (styles, size, rounded, iconOnly) => {
	const currentSize = styles.size[size];

	return clsx(currentSize.default, {
		[currentSize.rounded]: rounded,
		[currentSize.iconOnly]: iconOnly,
	});
};
