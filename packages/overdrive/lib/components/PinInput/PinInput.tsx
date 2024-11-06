import * as React from 'react';
import { memo, NamedExoticComponent } from 'react';

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

export const PinInput: NamedExoticComponent<Props> = memo(
	({
		className = '',
		digits,
		 value = digits,
		size = EPinInputSize.Medium,
	}) => (
		<Box className={className}>
			<Inline space={labelSizeMap.get(size)} alignY="center">
				{Array.from({ length: digits })
					.fill(0)
					.map((_, index) => (
						<TextInput key={index} className={styles.inputDigit[size]} size={size} maxLength={1}  name="digit" placeholder='' />
					))}
			</Inline>
		</Box>
	),
);

export default PinInput;
