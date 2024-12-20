import React, { useRef, type PropsWithChildren } from 'react';
import { useCheckbox, useFocusRing, useHover } from 'react-aria';
import type { AriaCheckboxProps } from 'react-aria';
import { useToggleState } from 'react-stately';

import { Icon, type IconEl } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

import {
	iconContainer,
	styledCheckbox,
	styledWrapper,
	type StyledWrapperProps,
} from './IconCheckboxButton.css';

interface IconCheckboxButtonProps extends AriaCheckboxProps {
	/**
	 * The text label for the checkbox
	 */
	label: string;
	/**
	 * Source an icon from `@autoguru/icons`
	 */
	icon?: IconEl;
	/**
	 * Additional text description content for the checkbox button
	 */
	description?: string;
	className?: string;
}

const uniformDataAttr = (v: boolean) => (v ? '' : undefined);

const IconTick = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		aria-hidden
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.2887 7.42963L8.48942 14.2289L4.71179 10.3673L6.08136 8.99777L8.48942 11.4801L13.9191 6.06006L15.2887 7.42963Z"
			fill="currentColor"
		/>
	</svg>
);

const Wrapper = (props: PropsWithChildren<StyledWrapperProps>) => {
	const { disabled, selected, ...restProps } = props;
	return (
		<label
			className={styledWrapper({ disabled, selected })}
			{...restProps}
		/>
	);
};

export const IconCheckboxButton = ({
	description,
	icon,
	label,
	...props
}: IconCheckboxButtonProps) => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useToggleState(props);
	const { inputProps, isSelected } = useCheckbox(props, state, ref);
	const { focusProps, isFocusVisible } = useFocusRing();
	const { hoverProps, isHovered } = useHover({});
	const showCheckbox = !icon || isHovered || isSelected;

	return (
		<Wrapper
			{...focusProps}
			{...hoverProps}
			selected={isSelected}
			data-focus-visible={uniformDataAttr(isFocusVisible)}
			data-hover={uniformDataAttr(isHovered)}
		>
			<VisuallyHidden>
				<input {...inputProps} ref={ref} />
			</VisuallyHidden>
			<div className={iconContainer}>
				{showCheckbox ? (
					<div
						className={styledCheckbox()}
						data-checked={uniformDataAttr(isSelected)}
						data-hover={uniformDataAttr(isHovered && !isSelected)}
					>
						<IconTick />
					</div>
				) : (
					<Icon icon={icon} size="100%" />
				)}
			</div>
			<div>
				<span>{label}</span>
				<span>{description}</span>
			</div>
		</Wrapper>
	);
};
