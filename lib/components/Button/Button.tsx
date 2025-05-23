import React, { cloneElement, isValidElement, useMemo, useRef } from 'react';
import { type AriaButtonOptions, useButton } from 'react-aria';

import { dataAttrs } from '../../utils/dataAttrs';
import { BoxLikeProps, useBox } from '../Box/useBox';
import { Icon, type IconProps } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';

import * as styles from './Button.css';
import type { StyledButtonProps } from './Button.css';

// const DOUBLE_CLICK_DETECTION_PERIOD = 700;

const defaultEnglish = {
	loading: 'loading',
} as const;

type LocaleText = Partial<Record<keyof typeof defaultEnglish, string>>;

interface CustomProps extends AriaButtonOptions<'button'>, StyledButtonProps {
	/**
	 * Pill shaped button appearance
	 */
	rounded?: boolean;
	/**
	 * Language content override
	 */
	localeText?: LocaleText;
}

export type ButtonProps = BoxLikeProps<'button', CustomProps>;

const getIconProps = (size: ButtonProps['size']) => ({
	size: size === 'small' ? size : 'medium',
});

/**
 * The Button supports a variety of appearances and is one of the main interactive Overdrive
 * components. `variant`, `size` and `rounded` provide the main choices.
 *
 * It is recommended to use the `onPress` and related event handler provided by react-aria.
 * For more information see the
 * [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) documentation.
 *
 * Use the `isLoading` prop where there is on-page data handling.
 *
 * @example
 * <Button
 *   variant="primary"
 *   size="medium"
 *   onPress={() => console.info('button clicked')}
 * >
 *   Click Me
 * </Button>
 */
export const Button = ({
	as = 'button',
	children,
	className,
	isLoading = false,
	isFullWidth = false,
	localeText,
	minimal = false,
	rounded = false,
	size = 'medium',
	type = 'button',
	variant = 'secondary',
	...props
}: ButtonProps) => {
	const { 'aria-label': ariaLabel, isDisabled, ...filteredProps } = props;
	const language = { ...defaultEnglish, ...localeText };
	const internalRef = useRef<HTMLButtonElement>(null);
	const isInverse = minimal || variant === 'secondary';

	const isSingleIconChild = useMemo(() => {
		const maybeIcon = isValidElement(children) && children.type === Icon;
		return maybeIcon;
	}, [children]);

	const shape =
		(isSingleIconChild && 'iconOnly') ||
		(rounded && 'rounded') ||
		'default';

	const { Component, componentProps, reactElement } = useBox({
		// filtered props are needed here to avoid passing in react-aria props
		...filteredProps,
		as,
		className: [
			styles.button({
				size,
				shape,
				intent: variant,
				isFullWidth,
				isLoading,
				minimal,
				rounded,
			}),
			className,
		],
		type,
		'aria-label': isLoading ? language.loading : ariaLabel,
		...dataAttrs({ loading: isLoading ? '' : undefined }),
	});

	const { buttonProps } = useButton(
		{
			...(componentProps as AriaButtonOptions<'button'>),
			isDisabled: isDisabled ?? isLoading,
		},
		// TODO: handle merged props
		internalRef,
	);

	const Content = () => {
		if (isLoading)
			return (
				<>
					<div className={styles.spinnerWrapper}>
						<ProgressSpinner
							colour={isInverse ? 'secondary' : 'light'}
						/>
					</div>
					<div className={styles.hiddenContent}>{children}</div>
				</>
			);

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
		return cloneElement(
			reactElement,
			{ ...componentProps, ...buttonProps },
			<Content />,
		);
	}

	return (
		<Component {...componentProps} {...buttonProps}>
			<Content />
		</Component>
	);
};

Button.displayName = 'Button';
