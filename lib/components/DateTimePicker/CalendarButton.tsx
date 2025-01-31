import React, { useRef } from 'react';
import { useButton, type AriaButtonProps } from 'react-aria';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';

export const CalendarButton = (props: AriaButtonProps) => {
	const ref = useRef(null);
	const { buttonProps } = useButton(props, ref);
	return (
		<button
			{...buttonProps}
			className={odStyle({
				alignItems: 'center',
				background: { initial: 'white' },
				borderRadius: '2',
				cursor: { hover: 'pointer', disabled: 'default' },
				display: 'flex',
				justifyContent: 'center',
				padding: 'none',
				size: '7',
				...focusOutline,
			})}
			ref={ref}
		>
			{props.children}
		</button>
	);
};
