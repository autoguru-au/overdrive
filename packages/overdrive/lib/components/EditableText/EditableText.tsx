import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentProps,
	forwardRef,
	InputHTMLAttributes,
	useRef,
	useState,
} from 'react';

import { Box, useBoxStyles } from '../Box';
import { Text, useTextStyles } from '../Text';
import * as inputStyles from '../private/InputBase/withEnhancedInput.css';

import * as styles from './EditableText.css';

type BoxProps = Pick<ComponentProps<typeof Text>, 'display'>;
type TextProps = Pick<
	ComponentProps<typeof Text>,
	'is' | 'colour' | 'size' | 'display' | 'children' | 'noWrap'
>;
type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	| 'style'
	| 'is'
	| 'autoFocus'
	| 'width'
	| 'height'
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
		return (
			<Box
				ref={ref}
				display={display}
				className={styles.root}
				onClick={onRequestEdit}
				onFocus={onRequestEdit}
				onBlur={() => setIsEditing(false)}
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
						style={{ width: textRef.current?.offsetWidth }}
					/>
				)}
				<Text
					noWrap
					ref={textRef}
					is={is}
					colour={colour}
					size={size}
					className={clsx(
						textStyles,
						styles.text,
						useBoxStyles({
							display: isEditing ? 'none' : display,
						}),
					)}
				>
					{value}
				</Text>
			</Box>
		);
	},
);

export default EditableText;
