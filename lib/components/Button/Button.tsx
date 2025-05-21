import React, {
	cloneElement,
	type ComponentProps,
	isValidElement,
	useMemo,
	useRef,
} from 'react';
import { type AriaButtonOptions, useButton } from 'react-aria';

import { dataAttrs } from '../../utils/dataAttrs';
import { BoxLikeProps, useBox, type UseBoxProps } from '../Box/useBox';
import { Icon } from '../Icon/Icon';
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
	const { 'aria-label': ariaLabel, isDisabled } = props;
	const language = { ...defaultEnglish, ...localeText };
	const internalRef = useRef<HTMLButtonElement>(null);
	const isInverse = minimal || variant === 'secondary';

	const isSingleIconChild = useMemo(() => {
		const maybeIcon = isValidElement(children) && children.type === Icon;
		return maybeIcon;
	}, [children]);

	// Determine shape based on rounded and iconOnly status
	const shape = useMemo(() => {
		if (isSingleIconChild) return 'iconOnly';
		if (rounded) return 'rounded';
		return 'default';
	}, [isSingleIconChild, rounded]);

	const { Component, componentProps, reactElement } = useBox({
		...(props as UseBoxProps<'button'>),
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

	// const ButtonIcon = () => (
	// 	<Icon
	// 		{...maybeIconProps}
	// 		size={
	// 			(maybeIconProps?.size ?? size === 'small') ? 'small' : 'medium'
	// 		}
	// 	/>
	// );

	const Content = () => {
		if (isLoading)
			return (
				<ProgressSpinner
					className={styles.spinner}
					colour={isInverse ? 'secondary' : 'light'}
				/>
			);

		if (isSingleIconChild && isValidElement(children)) {
			const cloneIcon = cloneElement<
				ComponentProps<typeof Icon>,
				typeof Icon
			>(children, { size: 'medium' });
			console.info('returning a clone icon');
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
