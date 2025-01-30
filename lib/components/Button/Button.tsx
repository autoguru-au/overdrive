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
	MouseEventHandler,
	ReactElement,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';

import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box, useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { ProgressSpinner } from '../ProgressSpinner';
import { useTextStyles } from '../Text';

import * as styles from './Button.css';

type ButtonPrimitive = ButtonHTMLAttributes<HTMLButtonElement>;

type AllowedChildren = string | IconType;

const DOUBLE_CLICK_DETECTION_PERIOD = 700;

export interface ButtonProps
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
	withDoubleClicks?: boolean;
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

export const Button = forwardRef<HTMLButtonElement, WithTestId<ButtonProps>>(
	(
		{
			children,
			className = '',
			disabled = false,
			id,
			is: Component = 'button',
			withDoubleClicks = false,
			isLoading = false,
			isFullWidth = false,
			minimal = false,
			onClick: incomingOnClick,
			rounded = false,
			size = 'medium',
			type = 'button',
			variant = 'secondary',
			'aria-label': ariaLabel,
			testId,
		},
		ref,
	) => {
		const { isSingleIconChild, props: maybeIconProps } = useMemo(() => {
			const maybeIcon = // @ts-ignore
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

		const [functionallyDisabled, setFunctionallyDisabled] =
			useState<boolean>(false);

		const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
			(event) => {
				if (!withDoubleClicks) setFunctionallyDisabled(true);
				if (typeof incomingOnClick === 'function')
					incomingOnClick(event);
			},
			[withDoubleClicks, incomingOnClick],
		);

		const props: Partial<ButtonPrimitive> & { ref: typeof ref } = {
			type: Component === 'button' ? (type as any) : undefined,
			id,
			onClick,
			disabled: disabled || isLoading,
			tabIndex: disabled ? -1 : void 0,
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
					pointerEvents: functionallyDisabled ? 'none' : void 0,
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
								(maybeIconProps.size ?? size === 'small')
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

		useEffect(() => {
			let timeout;
			if (functionallyDisabled)
				timeout = setTimeout(
					() => setFunctionallyDisabled(false),
					DOUBLE_CLICK_DETECTION_PERIOD,
				);

			return () => (timeout ? clearTimeout(timeout) : void 0);
		}, [functionallyDisabled]);

		const child = isLoading ? (
			<Box
				display="flex"
				justifyContent="center"
				position="relative"
				alignItems="center"
				width="full"
				height="full"
			>
				<Box
					position="absolute"
					alignItems="center"
					justifyContent="center"
					display="flex"
					width="full"
					height="full"
				>
					<ProgressSpinner
						className={styles.spinner}
						colour={getSpinnerColour(variant, minimal)}
					/>
				</Box>
				<Box
					width="full"
					height="full"
					className={[styles.body, styles.hiddenContent]}
				>
					{buttonContents}
				</Box>
			</Box>
		) : (
			<Box
				height="full"
				alignItems="center"
				justifyContent="center"
				className={styles.body}
				{...dataAttrs({ 'data-testid': testId })}
			>
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

export default Button;
