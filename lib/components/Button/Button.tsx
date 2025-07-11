import React, {
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
	type ElementType,
	type MouseEventHandler,
	type PropsWithChildren,
	type ReactElement,
} from 'react';

import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';
import { Icon, type IconProps } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';

import * as styles from './Button.css';
import type { StyledButtonProps } from './Button.css';

type ButtonPrimitive = ComponentProps<'button'>;

const DOUBLE_CLICK_DETECTION_PERIOD = 700;
const LOCALE_TEXT_DEFAULT = {
	loading: 'loading',
} as const;

type LocaleText = Partial<Record<keyof typeof LOCALE_TEXT_DEFAULT, string>>;

export interface ButtonProps
	extends Pick<
			ButtonPrimitive,
			| 'children'
			| 'id'
			| 'onBlur'
			| 'onClick'
			| 'onFocus'
			| 'onMouseEnter'
			| 'onMouseLeave'
			| 'type'
			| 'className'
		>,
		Pick<AriaAttributes, 'aria-label'>,
		StyledButtonProps,
		TestIdProp {
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
	 * Language content overrides
	 */
	localeText?: LocaleText;
}

const Spinner = ({
	isInverse,
	children,
}: PropsWithChildren<{ isInverse: boolean }>) => (
	<>
		<div className={styles.spinnerWrapper}>
			<ProgressSpinner colour={isInverse ? 'secondary' : 'light'} />
		</div>
		<div className={styles.hiddenContent}>{children}</div>
	</>
);

export const calcIconSize = (size: ButtonProps['size']) =>
	size === 'small' ? size : 'medium';

/**
 * The Button supports a variety of appearances and is one of the main interactive Overdrive
 * components. `variant`, `size` and `rounded` provide the main choices.
 *
 * By default the button will have a disabled timeout to avoid multiple rapid clicks.
 * To prevent this feature, use the `withDoubleClicks` prop.
 *
 * It is recommended to use the `onPress` and related event handler provided by react-aria.
 * For more information see the
 * [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) documentation.
 *
 * Use the `isLoading` prop where there is on-page data handling.
 *
 * _NOTE:_ Button `as` prop cannot be provided an HTML tag. `<button>` components are
 * interactive and accessible for use with event handlers and disabled or loading states.
 *
 * Please _DO NOT_ use a `<div>` tag as a button, choose an interactive HTML element.
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
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			as = 'button',
			children,
			className,
			id,
			type = 'button',

			disabled = false,
			isLoading = false,
			isFullWidth = false,
			localeText,
			minimal = false,
			rounded = false,
			size = 'medium',
			testId,
			variant = 'secondary',
			withDoubleClicks = false,

			onBlur,
			onClick: incomingOnClick,
			onFocus,
			onMouseEnter,
			onMouseLeave,

			'aria-label': ariaLabel,
		},
		ref,
	) => {
		const [functionallyDisabled, setFunctionallyDisabled] =
			useState<boolean>(false);

		const language = { ...LOCALE_TEXT_DEFAULT, ...localeText };
		const isInverse = minimal || variant === 'secondary';
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

		const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
			(event) => {
				if (!withDoubleClicks) setFunctionallyDisabled(true);
				if (typeof incomingOnClick === 'function')
					incomingOnClick(event);
			},
			[withDoubleClicks, incomingOnClick],
		);

		const { Component, componentProps } = useBox({
			as,
			disabled: disabled || isLoading,
			id,
			testId,
			type: as === 'button' ? type : undefined,

			className: [
				styles.button({
					intent: variant,
					isFullWidth,
					isLoading,
					minimal,
					rounded,
					shape,
					size,
				}),
				className,
			],
			pointerEvents: functionallyDisabled ? 'none' : undefined,

			'aria-label': isLoading ? language.loading : ariaLabel,
			'data-loading': isLoading ? '' : undefined,

			onBlur,
			onClick,
			onFocus,
			onMouseEnter,
			onMouseLeave,

			// ref,
		});

		const buttonContents = useMemo(() => {
			if (isSingleIconChild) {
				const iconProps = children as ReactElement<
					ComponentProps<typeof Icon>
				>;
				// if it is an icon button, allow custom icon size from the element
				// otherwise, standardise the size
				const iconSize = iconProps?.props?.size ?? calcIconSize(size);
				return cloneElement(children as React.ReactElement<IconProps>, {
					size: iconSize,
				});
			}
			return children;
		}, [isSingleIconChild, children, size]);

		useEffect(() => {
			if (functionallyDisabled) {
				const timer = setTimeout(() => {
					setFunctionallyDisabled(false);
				}, DOUBLE_CLICK_DETECTION_PERIOD);

				return () => clearTimeout(timer);
			}
			return void 0;
		}, [functionallyDisabled]);

		const child = isLoading ? (
			<Spinner isInverse={isInverse}>{buttonContents}</Spinner>
		) : (
			buttonContents
		);
		return React.isValidElement(as)
			? cloneElement(
					as,
					{ ...componentProps, ref } as Record<string, unknown>,
					child,
				)
			: createElement(Component, { ...componentProps, ref }, child);
	},
);

Button.displayName = 'Button';
