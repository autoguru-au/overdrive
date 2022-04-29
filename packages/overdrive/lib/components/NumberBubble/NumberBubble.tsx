import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box, useBoxStyles } from '../Box';
import { Text } from '../Text';

import * as styles from './NumberBubble.css';

export interface Props extends Omit<ComponentProps<typeof Box>, 'borderRadius' | 'position' | 'padding'> {
	value: number;
	textColour: ComponentProps<typeof Text>['colour'];
}

export const NumberBubble: FunctionComponent<Props> = ({
														   value,
														   textColour= 'white',
														   ...boxProps
													   }) => {

	const largeBubble = value > 10 || value < 0;
	return (
		<Box borderRadius='full'
			 backgroundColour='gray900'
			 display='inlineBlock'
			 position='relative'
			 padding={largeBubble ? '3' : '2'}
			 {...boxProps}>
			<Text size='2'
				  strong
				  className={
					  clsx(
						  styles.bubbleText,
						  useBoxStyles({
							  position: 'absolute',
						  }),
					  )
				  }
				  colour={textColour}>{value}</Text>
		</Box>
	);
};
