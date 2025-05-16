import React, {
	cloneElement,
	type ComponentRef,
	type ForwardedRef,
	forwardRef,
	isValidElement,
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ComponentProps,
	type ElementType,
	type MouseEventHandler,
	type ReactElement,
} from 'react';

import type { TextFontWeight, TextSizeScale } from '../../themes';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { BoxLikeProps, useBox, type UseBoxProps } from '../Box/useBox';
import { Icon } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { useTextStyles } from '../Text/useTextStyles';

import * as styles from './Button.css';
import type { ButtonSize, StyledButtonProps } from './Button.css';

const DOUBLE_CLICK_DETECTION_PERIOD = 700;

const defaultEnglish = {
	loading: 'loading',
} as const;

type TextContent = keyof typeof defaultEnglish;

export interface ButtonProps extends StyledButtonProps {
	/**
	 * Disabling the button will prevent it from receiving keyboard focus or click events
	 */
	disabled?: boolean;
	isLoading?: boolean;
	isFullWidth?: boolean;
	/**
	 * Pill shaped button appearance
	 */
	rounded?: boolean;
	withDoubleClicks?: boolean;
	/**
	 * Language content override
	 */
	lang?: Partial<Record<TextContent, string>>;
}

/** Combined polymorphic Button props with style props and common box props */
export type ButtonPolyProps<E extends React.ElementType> = BoxLikeProps<
	E,
	ButtonProps
>;

export type ButtonForwardRefReturn = (<E extends ElementType = 'button'>(
	props: ButtonPolyProps<E> & { ref?: ForwardedRef<ComponentRef<E>> },
) => ReactElement | null) & { displayName?: string };

const getSpinnerColour: (
	variant: ButtonProps['variant'],
	minimal: boolean,
) => ComponentProps<typeof ProgressSpinner>['colour'] = (variant, minimal) =>
	minimal || variant === 'secondary' ? 'secondary' : 'light';

const getBorderRadius: (
	rounded: boolean,
) => ComponentProps<typeof Box>['borderRadius'] = (rounded) =>
	rounded ? 'pill' : 'md';

const getPadding: (
	size: ButtonProps['size'],
	loading: boolean,
) => ComponentProps<typeof Box>['paddingX'] = (size, loading) => {
	if (loading) return 'none';
	return size === 'small' ? '3' : '4';
};

const fontSize: Record<ButtonSize, TextSizeScale> = {
	xsmall: '2',
	small: '3',
	medium: '4',
};

const fontWeight: Record<ButtonSize, TextFontWeight> = {
	xsmall: 'normal',
	small: 'semiBold',
	medium: 'semiBold',
};

export const Button = forwardRef<
	ComponentRef<'button'>,
	ButtonPolyProps<'button'>
>(
	(
		{
			as = 'button',
			children,
			className,
			disabled = false,
			id,
			withDoubleClicks = false,
			isLoading = false,
			isFullWidth = false,
			lang,
			minimal = false,
			onClick: incomingOnClick,
			rounded = false,
			size = 'medium',
			type,
			variant = 'secondary',
			testId,
			...props
		},
		ref,
	) => {
		const { 'aria-label': ariaLabel } = props;
		const language = { ...defaultEnglish, ...lang };
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

		// Determine shape based on rounded and iconOnly status
		const shape = useMemo(() => {
			if (isSingleIconChild) return 'iconOnly';
			if (rounded) return 'rounded';
			return 'default';
		}, [isSingleIconChild, rounded]);

		const { Component, componentProps, reactElement } = useBox({
			...(props as UseBoxProps<'button'>),
			as,
			borderRadius: getBorderRadius(rounded),
			borderWidth: 'none',
			className: [
				useTextStyles({
					colour: 'white',
					fontWeight: fontWeight[size],
					size: fontSize[size],
				}),
				styles.button({
					size,
					shape,
					intent: variant,
					minimal,
				}),
				className,
			],
			disabled: disabled || isLoading,
			display: 'inline-block',
			id,
			onClick,
			overflow: 'hidden',
			paddingX: getPadding(size, isLoading),
			paddingY: 'none',
			pointerEvents: functionallyDisabled ? 'none' : undefined,
			ref,
			textAlign: 'center',
			type: as === 'button' ? (type ?? 'button') : undefined,
			width: isFullWidth ? 'full' : undefined,
			'aria-label': isLoading ? language.loading : ariaLabel,
			...dataAttrs({ loading: isLoading ? '' : undefined }),
		});

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
					height="full"
					alignItems="center"
					justifyContent="center"
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
				testId={testId}
			>
				{buttonContents}
			</Box>
		);

		if (reactElement) {
			return cloneElement(reactElement, componentProps, child);
		}

		return (
			<Component {...componentProps} ref={ref}>
				{child}
			</Component>
		);
	},
) as ButtonForwardRefReturn;

Button.displayName = 'Button';
