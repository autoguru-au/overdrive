import React, { useRef, type PropsWithChildren } from 'react';
import { useCheckbox, useFocusRing, useHover } from 'react-aria';
import type { AriaCheckboxProps } from 'react-aria';
import { useToggleState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import { Icon, type IconEl } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

import { IconTick } from './IconTick';
import {
	iconContainer,
	styledCheckbox,
	styledWrapper,
	type StyledWrapperProps,
} from './OptionTile.css';

interface OptionTileProps extends AriaCheckboxProps {
	/**
	 * The text label for the checkbox
	 */
	label: string;
	/**
	 * Source an icon from `@autoguru/icons`
	 */
	icon?: IconEl;
	/**
	 * Toggle the indicator appearance between checkbox and radio button, visual effect only
	 */
	indicator?: 'checkbox' | 'radio';
	/**
	 * Additional text description content for the checkbox button
	 */
	description?: string;
	className?: string;
}

const uniformDataAttr = (v: boolean) => (v ? '' : undefined);

const Wrapper = (props: PropsWithChildren<StyledWrapperProps>) => {
	const { disabled, selected, ...restProps } = props;
	return (
		<label
			className={styledWrapper({ disabled, selected })}
			{...restProps}
		/>
	);
};

/**
 * The OptionTile is primarily used in the booking flow to provide either single or multi-select optiosn for the user.
 */
export const OptionTile = ({
	description,
	icon,
	indicator = 'checkbox',
	label,
	...props
}: OptionTileProps) => {
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
				<div className={odStyle({ fontSize: 'md' })}>{label}</div>
				<div className={odStyle({ fontSize: 'xs' })}>{description}</div>
			</div>
		</Wrapper>
	);
};
