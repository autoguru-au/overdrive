import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, forwardRef, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { Box } from '../Box';
import { Text, useTextStyles } from '../Text';
import * as inputStyles from '../private/InputBase/withEnhancedInput.css';

import * as styles from './EditableText.css';

type BoxProps = Pick<ComponentProps<typeof Box>, 'display' | 'onFocus' | 'onBlur'>;
type TextProps = Pick<
	ComponentProps<typeof Text>,
	'is' | 'colour' | 'size' | 'children' | 'noWrap'
>;
type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	| 'style'
	| 'is'
	| 'autoFocus'
	| 'width'
	| 'height'
	| 'onFocus'
	| 'onBlur'
	| keyof TextProps
	| keyof BoxProps
>;

export interface Props extends TextProps, InputProps, BoxProps {
	className?: string;
}

export const EditableText = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			is,
			colour = 'muted',
			size,
			display = 'inlineBlock',
			value,
			onFocus,
			onBlur,
			...inputProps
		},
		ref,
	) => {
		const textRef = useRef<HTMLSpanElement>(null);
		const [isEditing, setIsEditing] = useState(false);
		const onRequestEdit = () => setIsEditing(true);
		const textStyles = useTextStyles({
			is,
			colour,
			size,
		});
		const [width, setWidth] = useState<number | undefined>(undefined);
		useEffect(() => {
			if (textRef.current) {
				setWidth(textRef.current.clientWidth);
			}
		}, [textRef.current, value]);
		return (
			<Box
				ref={ref}
				display={display}
				position="relative"
				className={styles.root}
				onClick={onRequestEdit}
				onFocus={(e) => {
					onRequestEdit();
					if (typeof onFocus === 'function')
						onFocus(e);
				}}
				onBlur={(e) => {
					setIsEditing(false);
					if (typeof onBlur === 'function')
						onBlur(e);
				}}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === 'Escape') {
						setIsEditing(false);
					}
				}}
			>
				{isEditing && (
					<Box
						is="input"
						{...inputProps}
						autoFocus
						value={value}
						className={clsx(
							textStyles,
							inputStyles.input.itself.root,
						)}
						style={{ width }}
					/>
				)}
				<Text
					noWrap
					ref={textRef}
					is={is}
					colour={colour}
					size={size}
					className={clsx(textStyles, styles.text, {
						[styles.textHidden]: isEditing,
					})}
				>
					{value}
				</Text>
			</Box>
		);
	},
);

export default EditableText;
