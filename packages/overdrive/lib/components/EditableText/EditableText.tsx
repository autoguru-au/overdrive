import clsx from 'clsx';
import * as React from 'react';
import {
	ChangeEventHandler,
	ComponentProps,
	forwardRef,
	InputHTMLAttributes,
	useCallback,
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
const numberInputValuePattern = /^\d*\.?\d*$/;
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
		const onUpdate = useCallback(
			(updateValue: InputProps['value']) => {
				if (mode === 'INPUT') {
					setInputValue(updateValue);
				}
			},
			[incomingOnChange, mode],
		);

		const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
			(e) => {
				const value = e.currentTarget.value;
				const lastChar = value.charAt(value.length - 1);
				if (
					type === 'number' &&
					!numberInputValuePattern.test(lastChar)
				) {
					// If the last entered character is not a digit or '.', don't update the state
					return;
				}
				onUpdate(value);
				if (typeof incomingOnChange === 'function') incomingOnChange(e);
			},
			[incomingOnChange, onUpdate, type],
		);

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
		}, [textRef.current, inputValue]);
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
						is="input"
						{...inputProps}
						autoFocus
						ref={inputRef}
						type={type !== 'number' ? type : 'text'}
						value={inputValue}
						className={clsx(
							textStyles,
							inputStyles.input.itself.root,
						)}
						onChange={onChange}
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
					{mode === 'INPUT'
						? inputRef.current?.value || value
						: value}
				</Text>
			</Box>
		);
	},
);

export default EditableText;
