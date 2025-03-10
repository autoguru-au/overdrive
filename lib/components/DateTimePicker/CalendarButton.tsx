import React, { useRef } from 'react';
import { useButton, type AriaButtonProps } from 'react-aria';

import { styledButton } from './DateTimePicker.css';

export const CalendarButton = (props: AriaButtonProps) => {
	const ref = useRef(null);
	const { buttonProps } = useButton(props, ref);
	return (
		<button {...buttonProps} className={styledButton()} ref={ref}>
			{props.children}
		</button>
	);
};
