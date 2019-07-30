import clsx from 'clsx';
import React, {
	AriaAttributes,
	ButtonHTMLAttributes,
	cloneElement,
	createElement,
	forwardRef,
	isValidElement,
	ReactElement,
} from 'react';
import { IconType } from '../../icons';
import { ProgressSpinner } from '../ProgressSpinner';

import styles from './Button.scss';

export enum EButtonSize {
	Medium = 'medium',
	Small = 'small',
}

export enum EButtonVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Danger = 'danger',
}

type ButtonPrimitive = ButtonHTMLAttributes<HTMLButtonElement>;

type AllowedChildren = string | IconType;

interface Props
	extends Pick<ButtonPrimitive, 'id' | 'onClick' | 'type' | 'className'>,
		Pick<AriaAttributes, 'aria-label'> {
	children: AllowedChildren | AllowedChildren[];
	disabled?: boolean;
	is?: ReactElement;
	isLoading?: boolean;
	isFullWidth?: boolean;
	minimal?: boolean;
	rounded?: boolean;
	size?: EButtonSize;
	variant?: EButtonVariant;
}

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
			size = EButtonSize.Medium,
			type = 'button',
			variant = EButtonVariant.Secondary,
			'aria-label': ariaLabel,
		},
		ref,
	) => {
		const props: Partial<ButtonPrimitive> & { ref: typeof ref } = {
			type: Component === 'button' ? (type as any) : void 0,
			id,
			onClick,
			disabled: disabled || isLoading,
			'aria-label': ariaLabel,
			className: clsx(
				styles.root,
				buttonVariantStyleMap[variant],
				buttonSizeStyleMap[size],
				{
					[styles.loading]: isLoading,
					[styles.fullWidth]: isFullWidth,
					[styles.minimal]: minimal,
					[styles.rounded]: rounded,
				},
				className,
			),
			ref,
		};

		const child = isLoading ? (
			<ProgressSpinner variant={null} />
		) : (
			<div className={styles.body}>{children}</div>
		);

		return isValidElement(Component)
			? cloneElement(Component, props, child)
			: createElement(Component, props, child);
	},
);

const buttonVariantStyleMap: Record<EButtonVariant, string> = {
	[EButtonVariant.Danger]: styles.variantDanger,
	[EButtonVariant.Primary]: styles.variantPrimary,
	[EButtonVariant.Secondary]: styles.variantSecondary,
};

const buttonSizeStyleMap: Record<EButtonSize, string> = {
	[EButtonSize.Medium]: styles.medium,
	[EButtonSize.Small]: styles.small,
};
