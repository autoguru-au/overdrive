import clsx from 'clsx';
import React, {
	type ChangeEventHandler,
	forwardRef,
	type InputHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import { Box, type BoxProps } from '../Box/Box';
import { Text, type TextProps } from '../Text/Text';
import { textStyles } from '../Text/textStyles';
import * as inputStyles from '../private/InputBase/withEnhancedInput.css';

import * as styles from './EditableText.css';

type PickedBoxProps = Pick<
	BoxProps,
	'display' | 'onFocus' | 'onBlur' | 'onKeyDown'
>;

type FilteredTextProps = Pick<
	TextProps,
	'as' | 'colour' | 'size' | 'children' | 'noWrap'
>;

type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	| 'color'
	| 'style'
	| 'is'
	| 'autoFocus'
	| 'width'
	| 'height'
	| 'onFocus'
	| 'onBlur'
	| 'onKeyDown'
	| keyof FilteredTextProps
	| keyof PickedBoxProps
>;

export interface EditableTextProps
	extends FilteredTextProps,
		InputProps,
		Partial<PickedBoxProps> {
	className?: string;

	onModeChange?: (mode: InputMode) => void;
}
const numberInputValuePattern = /^\d*\.?\d*$/;
type InputMode = 'TEXT' | 'INPUT';
export const EditableText = forwardRef<HTMLDivElement, EditableTextProps>(
	(
		{
			as: is,
			colour = 'muted',
			size,
			display = 'inline-block',
			value,
			onFocus,
			onBlur,
			onKeyDown,
			onModeChange,
			tabIndex = 0,
			onChange: incomingOnChange,
			type = 'text',
			...inputProps
		},
		ref,
	) => {
		const textRef = useRef<HTMLSpanElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);
		const [mode, setMode] = useState<InputMode>('TEXT');
		const [inputValue, setInputValue] = useState(value);
		const onRequestModeChange = (newMode: InputMode) => {
			setMode(newMode);
			if (typeof onModeChange === 'function') {
				onModeChange(newMode);
			}
		};

		const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
			(e) => {
				const changeValue = e.currentTarget.value;
				// eslint-disable-next-line unicorn/prefer-at
				const lastChar = changeValue.charAt(changeValue.length - 1);
				if (
					type === 'number' &&
					!numberInputValuePattern.test(lastChar)
				) {
					// If the last entered character is not a digit or '.', don't update the state
					return;
				}
				if (mode === 'INPUT') {
					setInputValue(changeValue);
				}
				if (typeof incomingOnChange === 'function') incomingOnChange(e);
			},
			[incomingOnChange, type, mode],
		);

		const baseStyle = textStyles({
			as: is,
			colour,
			size,
		});
		const [width, setWidth] = useState<number | undefined>();
		useEffect(() => {
			if (textRef.current) {
				setWidth(textRef.current.clientWidth);
			}
		}, [textRef.current, inputValue]);
		return (
			<Box
				ref={ref}
				display={display}
				tabIndex={tabIndex}
				position="relative"
				className={styles.root}
				odComponent="editable-text"
				onClick={() => onRequestModeChange('INPUT')}
				onFocus={(e) => {
					if (typeof onFocus === 'function') onFocus(e);
					setInputValue(value);
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
						as="input"
						{...inputProps}
						autoFocus
						ref={inputRef}
						type={type === 'number' ? 'text' : type}
						value={inputValue}
						className={clsx(
							baseStyle,
							inputStyles.input.itself.root,
						)}
						onChange={onChange}
						style={{ width }}
					/>
				)}
				<Text
					noWrap
					ref={textRef}
					as={is}
					colour={colour}
					size={size}
					className={clsx(baseStyle, styles.text, {
						[styles.textHidden]: mode === 'INPUT',
					})}
				>
					{mode === 'INPUT'
						? inputRef.current?.value || value
						: value}
				</Text>
			</Box>
		);
	},
);

EditableText.displayName = 'EditableText';
