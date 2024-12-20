import React, { useRef, type PropsWithChildren } from 'react';
import { useCheckbox, useFocusRing, useHover } from 'react-aria';
import type { AriaCheckboxProps } from 'react-aria';
import { useToggleState } from 'react-stately';

import { VisuallyHidden } from '../VisuallyHidden';

import {
	styledCheckbox,
	styledIcon,
	styledWrapper,
	type StyledWrapperProps,
} from './IconCheckboxButton.css';

interface IconCheckboxButtonProps extends AriaCheckboxProps {
	icon?: React.ReactNode;
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
	icon,
	...props
}: IconCheckboxButtonProps) => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useToggleState(props);
	const { inputProps, isSelected } = useCheckbox(props, state, ref);
	const { focusProps, isFocusVisible } = useFocusRing();
	const { hoverProps, isHovered } = useHover({});
	const hasIcon = !!icon;
	const showCheckbox = !hasIcon || isHovered || isSelected;

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
			<div>
				{showCheckbox ? (
					<div
						className={styledCheckbox()}
						data-checked={uniformDataAttr(isSelected)}
						data-hover={uniformDataAttr(isHovered && !isSelected)}
					>
						<IconTick />
					</div>
				) : (
					<div className={styledIcon()}>{icon}</div>
				)}
			</div>
		</Wrapper>
	);
};
