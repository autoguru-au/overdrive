import React, {
	cloneElement,
	isValidElement,
	useMemo,
	type ElementType,
} from 'react';

import { type BoxLikeProps, useBox, type UseBoxProps } from '../Box/useBox';
import { Icon, type IconProps } from '../Icon/Icon';

import { getIconProps } from './Button';
import * as styles from './Button.css';
import type { ButtonStyleProps } from './Button.css';

export type StyledButtonProps<E extends ElementType = 'button'> = BoxLikeProps<
	E,
	Omit<ButtonStyleProps, 'isLoading'>
>;

/**
 * A styled button component that renders as any HTML element while maintaining button appearance.
 * Elements of this nature typically do not have a loading state or button-like event handlers.
 *
 * Only use StyledButton when you need an element to look like an Overdrive button but should not
 * be rendered as an actual `<button>` tag. For semantic buttons, use the regular Button component
 * instead.
 *
 * Please _DO NOT_ use a `<div>` tag as a button, choose an interactive HTML element for accessibility.
 *
 * @example
 * <StyledButton as="a" href="/path" variant="primary">
 *   Click me
 * </StyledButton>
 */
export const StyledButton = <E extends ElementType = 'button'>({
	as = 'button' as E,
	className,
	children,

	// custom props
	size = 'medium',
	variant = 'secondary',
	rounded = false,
	minimal = false,
	isFullWidth = false,

	...props
}: StyledButtonProps<E>) => {
	const isSingleIconChild = useMemo(
		() =>
			isValidElement(children) &&
			children.type === Icon &&
			typeof children.type !== 'string',
		[children],
	);

	const shape =
		(isSingleIconChild && 'iconOnly') ||
		(rounded && 'rounded') ||
		'default';

	const { Component, componentProps, reactElement } = useBox<E>({
		...(props as UseBoxProps<E>),
		as,
		className: [
			styles.button({
				size,
				shape,
				intent: variant,
				isFullWidth,
				minimal,
				rounded,
			}),
			className,
		],
	});

	const Content = () => {
		if (isSingleIconChild) {
			const cloneIcon = cloneElement(
				children as React.ReactElement<IconProps>,
				getIconProps(size),
			);
			return <>{cloneIcon}</>;
		}

		return <>{children}</>;
	};

	if (reactElement) {
		return cloneElement(reactElement, componentProps, <Content />);
	}

	return (
		<Component {...componentProps}>
			<Content />
		</Component>
	);
};

StyledButton.displayName = 'Button.Styled';
