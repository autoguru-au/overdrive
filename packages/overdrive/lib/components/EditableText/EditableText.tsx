import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentProps,
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
} from 'react';

import { Box } from '../Box';
import { Text, useTextStyles } from '../Text';
import * as inputStyles from '../private/InputBase/withEnhancedInput.css';

import * as styles from './EditableText.css';

type BoxProps = Pick<
	ComponentProps<typeof Box>,
	'display' | 'onFocus' | 'onBlur' | 'onKeyDown'
>;
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
	| 'onKeyDown'
	| keyof TextProps
	| keyof BoxProps
>;

export interface Props extends TextProps, InputProps, BoxProps {
	className?: string;

	onModeChange?: (mode: InputMode) => void;
}

type InputMode = 'TEXT' | 'INPUT';
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
			onKeyDown,
			onModeChange,
			tabIndex = 0,
			...inputProps
		},
		ref,
	) => {
		const textRef = useRef<HTMLSpanElement>(null);
		const [mode, setMode] = useState<InputMode>('TEXT');
		const onRequestModeChange = (newMode: InputMode) => {
			setMode(newMode);
			if (typeof onModeChange === 'function') {
				onModeChange(newMode);
			}
		};
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
				tabIndex={tabIndex}
				position="relative"
				className={styles.root}
				onClick={() => onRequestModeChange('INPUT')}
				onFocus={(e) => {
					if (typeof onFocus === 'function') onFocus(e);
					onRequestModeChange('INPUT');
				}}
				onBlur={(e) => {
					if (typeof onBlur === 'function') onBlur(e);
					onRequestModeChange('TEXT');
				}}
				onKeyDown={(e) => {
					if (typeof onKeyDown === 'function') onKeyDown(e);
					if (e.key === 'Enter' || e.key === 'Escape') {
						onRequestModeChange('TEXT');
					}
				}}
			>
				{mode === 'INPUT' && (
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
						[styles.textHidden]: mode === 'INPUT',
					})}
				>
					{value}
				</Text>
			</Box>
		);
	},
);

export default EditableText;
