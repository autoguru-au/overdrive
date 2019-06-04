import clsx from 'clsx';
import React, {
	cloneElement,
	ComponentType,
	ElementType,
	forwardRef,
	FunctionComponent,
} from 'react';
import {
	EProgressSpinnerSize,
	EProgressSpinnerVariant,
	ProgressSpinner,
} from '../ProgressSpinner';

import { warning } from '@autoguru/utilities';
import styles from './style.scss';

export enum ESize {
	Small = 'small',
	Medium = 'medium',
}

export enum EVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Danger = 'danger',
}

export interface IProps {
	className?: string;
	is?: ElementType;
	component?: ComponentType; // @deprecated
	disabled?: boolean;
	isFullWidth?: boolean;
	isLoading?: boolean;
	rounded?: boolean;
	size?: ESize;
	variant?: EVariant;
}

const cssVariantMap: Map<EVariant, string> = new Map([
	[EVariant.Primary, styles.variantPrimary],
	[EVariant.Secondary, styles.variantSecondary],
	[EVariant.Danger, styles.variantDanger],
]);

const cssSizeMap: Map<ESize, string> = new Map([
	[ESize.Small, styles.sizeSmall],
	[ESize.Medium, styles.sizeMedium],
]);

const progressSpinnerSizeMap: Map<ESize, EProgressSpinnerSize> = new Map([
	[ESize.Small, EProgressSpinnerSize.Small],
	[ESize.Medium, EProgressSpinnerSize.Medium],
]);

const progressSpinnerVariantMap: Map<
	EVariant,
	EProgressSpinnerVariant
> = new Map([
	[EVariant.Primary, EProgressSpinnerVariant.Light],
	[EVariant.Secondary, EProgressSpinnerVariant.Secondary],
	[EVariant.Danger, EProgressSpinnerVariant.Light],
]);

// TODO: Fix this any here, needs to be an abstract of the component that is being passed in.
export const Button: FunctionComponent<IProps & any> = forwardRef(
	(
		{
			children,
			className = '',
			is: Component = 'button',
			component = void 0,
			disabled = false,
			isLoading = false,
			isFullWidth = false,
			rounded = false,
			size = ESize.Medium,
			variant = EVariant.Secondary,
			...rest
		},
		ref
	) => {
		// @deprecated block
		{
			warning(
				component !== void 0,
				`The \`component\` prop deprecated, please use the \`is\` prop instead.\n\nBefore:\n<Button component="{<Link/">}>\n\tHello\n</Button>\n\nAfter:\n<Button is="{<Link/">}>\n\tHello\n</Button>`
			);

			if (component !== void 0) {
				Component = component;
			}
		}

		const props = {
			className: clsx(
				[
					styles.root,
					cssSizeMap.get(size),
					cssVariantMap.get(variant),
					className,
				],
				{
					[styles.rounded]: rounded,
					[styles.fullWidth]: isFullWidth,
					[styles.loading]: isLoading,
				}
			),
			'aria-disabled': disabled || isLoading,
			disabled: disabled || isLoading,
			ref,
			...rest,
		};

		const childs = (
			<>
				<span className={styles.btnContent} children={children} />
				{isLoading && (
					<ProgressSpinner
						className={styles.spinner}
						variant={progressSpinnerVariantMap.get(variant)}
						size={progressSpinnerSizeMap.get(size)}
					/>
				)}
			</>
		);

		return typeof Component === 'string' ? (
			<Component {...props}>{childs}</Component>
		) : (
			cloneElement(Component, props, childs)
		);
	}
);
