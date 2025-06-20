import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	cloneElement,
	createElement,
	forwardRef,
	isValidElement,
	useCallback,
	useEffect,
	useMemo,
	useState,
	type AriaAttributes,
	type ComponentProps,
	type ComponentPropsWithRef,
	type ElementType,
	type MouseEventHandler,
	type ReactElement,
} from 'react';

import { componentStyles } from '../../styles';
import { typographyStyles } from '../../styles/typography.css';
import type { TextFontWeight, TextSizeScale } from '../../themes';
import type { TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';

import * as styles from './Button.css';
import type { ButtonSize, StyledButtonProps } from './Button.css';

type ButtonPrimitive = ComponentPropsWithRef<'button'>;
type AllowedChildren = string | IconType;

const DOUBLE_CLICK_DETECTION_PERIOD = 700;

const defaultEnglish = {
	loading: 'loading',
} as const;

type TextContent = keyof typeof defaultEnglish;

export interface ButtonProps
	extends Pick<ButtonPrimitive, 'id' | 'onClick' | 'type' | 'className'>,
		Pick<AriaAttributes, 'aria-label'>,
		StyledButtonProps,
		TestId {
	children: AllowedChildren | AllowedChildren[];
	/**
	 * Disabling the button will prevent it from receiving keyboard focus or click events
	 */
	disabled?: boolean;
	as?: ElementType | ReactElement;
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

const getSpinnerColour: (
	variant: ButtonProps['variant'],
	minimal: boolean,
) => ComponentProps<typeof ProgressSpinner>['colour'] = (variant, minimal) =>
	minimal || variant === 'secondary' ? 'secondary' : 'light';

const getBorderRadius = (rounded: boolean) => (rounded ? 'pill' : 'md');

const getPadding = (size: ButtonProps['size'], loading: boolean) => {
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className = '',
			disabled = false,
			id,
			as: Component = 'button',
			withDoubleClicks = false,
			isLoading = false,
			isFullWidth = false,
			lang,
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
		const language = { ...defaultEnglish, ...lang };
		const { isSingleIconChild, props: maybeIconProps } = useMemo(() => {
			const maybeIcon =
				// @ts-expect-error This comparison appears to be unintentional
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

		const props: ButtonPrimitive & { 'data-loading'?: string } = {
			type: Component === 'button' ? type : undefined,
			id,
			onClick,
			disabled: disabled || isLoading,
			'aria-label': isLoading ? language.loading : ariaLabel,
			className: clsx(
				componentStyles({
					as: Component,
					display: 'inline-block',
					overflow: 'hidden',
					borderRadius: getBorderRadius(rounded),
					textAlign: 'center',
					borderWidth: 'none',
					paddingY: 'none',
					paddingX: getPadding(size, isLoading),
					width: isFullWidth ? 'full' : undefined,
					pointerEvents: functionallyDisabled ? 'none' : undefined,
				}),
				typographyStyles({
					colour: 'white',
					weight: fontWeight[size],
					size: fontSize[size],
				}),
				styles.button({
					size,
					shape,
					intent: variant,
					minimal,
				}),
				className,
			),
			...dataAttrs({ loading: isLoading, testid: testId }),
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
			>
				{buttonContents}
			</Box>
		);

		return isValidElement(Component)
			? cloneElement(Component, { ...props }, child)
			: createElement(Component, { ...props }, child);
	},
);

Button.displayName = 'Button';

export default Button;
