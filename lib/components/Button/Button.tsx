import React, {
	cloneElement,
	isValidElement,
	useMemo,
	useCallback,
	useState,
	useEffect,
} from 'react';
import {
	type AriaButtonOptions,
	type PressEvents,
	useButton,
	useObjectRef,
} from 'react-aria';

import { dataAttrs } from '../../utils/dataAttrs';
import { BoxLikeProps, useBox } from '../Box/useBox';
import { Icon, type IconProps } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';

import * as styles from './Button.css';
import type { StyledButtonProps } from './Button.css';

const DOUBLE_CLICK_DETECTION_PERIOD = 700;
const LOCALE_TEXT = {
	loading: 'loading',
} as const;

type LocaleText = Partial<Record<keyof typeof LOCALE_TEXT, string>>;

interface CustomProps extends AriaButtonOptions<'button'>, StyledButtonProps {
	/**
	 * Pill shaped button appearance
	 */
	rounded?: boolean;
	/**
	 * Language content override
	 */
	localeText?: LocaleText;
	/**
	 * Allow multiple rapid clicks without a timeout.
	 * When true, allows rapid successive clicks (useful for pagination, tabs, etc.).
	 */
	withDoubleClicks?: boolean;
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
	onClick: incomingOnClick,
	onPress: incomingOnPress,
	rounded = false,
	size = 'medium',
	type = 'button',
	variant = 'secondary',
	withDoubleClicks = false,
	...props
}: ButtonProps) => {
	const {
		'aria-label': ariaLabel,
		isDisabled,
		ref: incomingRef,
		...filteredProps
	} = props;

	const language = { ...LOCALE_TEXT, ...localeText };
	const ref = useObjectRef(incomingRef);
	const [functionallyDisabled, setFunctionallyDisabled] = useState(false);
	const isInverse = minimal || variant === 'secondary';

	const handleOnClick = useCallback<NonNullable<PressEvents['onClick']>>(
		(event) => {
			if (!withDoubleClicks) setFunctionallyDisabled(true);
			if (typeof incomingOnClick === 'function') incomingOnClick(event);
		},
		[incomingOnClick, withDoubleClicks],
	);

	const handleOnPress = useCallback<NonNullable<PressEvents['onPress']>>(
		(event) => {
			if (!withDoubleClicks) setFunctionallyDisabled(true);
			if (typeof incomingOnPress === 'function') incomingOnPress(event);
		},
		[incomingOnPress, withDoubleClicks],
	);

	useEffect(() => {
		if (functionallyDisabled) {
			const timer = setTimeout(() => {
				setFunctionallyDisabled(false);
			}, DOUBLE_CLICK_DETECTION_PERIOD);

			return () => clearTimeout(timer);
		}
		return void 0;
	}, [functionallyDisabled]);

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

	const onClick = incomingOnClick ? handleOnClick : undefined;
	const onPress = incomingOnPress ? handleOnPress : undefined;
	const { buttonProps } = useButton(
		{
			...(componentProps as AriaButtonOptions<'button'>),
			isDisabled: functionallyDisabled || isLoading || isDisabled,
			onClick,
			onPress,
		},
		ref,
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

	const finalButtonProps = {
		...componentProps,
		...buttonProps,
		ref,
	};

	if (reactElement) {
		return cloneElement(reactElement, finalButtonProps, <Content />);
	}

	return (
		<Component {...finalButtonProps}>
			<Content />
		</Component>
	);
};

Button.displayName = 'Button';
