import * as React from 'react';
import { FunctionComponent, useRef } from 'react';
import { Box } from '../Box';
import { Inline } from '../Inline';
import { TextInput } from '../TextInput';

import * as styles from './PinInput.css';
import { Tokens } from '../../themes/tokens';

export enum EPinInputSize {
	Small = 'small',
	Medium = 'medium',
}

export interface Props {
	className?: string; // TODO: Remove this in the future
	digits: number;
	size?: EPinInputSize;
	value?: string;
}

const labelSizeMap: Map<EPinInputSize, keyof Tokens['typography']['size']> =
	new Map([
		[EPinInputSize.Small, '3'],
		[EPinInputSize.Medium, '4'],
	]);

export const PinInput: FunctionComponent<Props> = ({
		className = '',
		digits,
		value = digits,
		size = EPinInputSize.Medium,
	}) => {
		const handleOnPaste = (event) => {
			const stringPasted = event.clipboardData.getData('Text');
			//const stringPastedLength = event.clipboardData.getData('Text').length;

			[...stringPasted].forEach((digit, index) => {
				document.querySelector(`#input-pin-${index}`).value = digit;
				const nextfield = document.querySelector(`#input-pin-${index + 1}`);
				if (nextfield !== null) {
					nextfield.focus();
				}
				 event.preventDefault();
			})
		};

		return (
			<Box className={className}>
				<Inline space={labelSizeMap.get(size)} alignY="center">
					{Array.from({ length: digits })
						.fill(0)
						.map((_, index) => (
							<input id={`input-pin-${index}`} key={index} onPaste={handleOnPaste} className={styles.inputDigit[size]} maxLength={3} name="digit" placeholder='' />
							// <TextInput key={index} onPaste={handleOnPaste} className={styles.inputDigit[size]} size={size} maxLength={1}  name="digit" placeholder='' />
						))}
				</Inline>
			</Box>
		);
};

export default PinInput;
