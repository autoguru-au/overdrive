import React, { useRef } from 'react';
import {
	useCheckbox,
	VisuallyHidden,
	type AriaCheckboxProps,
} from 'react-aria';
import { useToggleState } from 'react-stately';

import { sprinkles as overdriveStyle } from '../../styles/sprinkles.css';

type FilteredCheckboxProps = Omit<AriaCheckboxProps, 'isIndeterminate'>;
export interface CheckboxButtonProps extends FilteredCheckboxProps {
	label: string;
	labelColInfo?: string;
}

const Tick = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.2887 7.42963L8.48942 14.2289L4.71179 10.3673L6.08136 8.99777L8.48942 11.4801L13.9191 6.06006L15.2887 7.42963Z"
			fill="white"
		/>
	</svg>
);

export const CheckboxButton = ({
	label,
	labelColInfo,
	...props
}: CheckboxButtonProps) => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useToggleState(props);
	const { inputProps } = useCheckbox(props, state, ref);

	return (
		<label
			className={overdriveStyle({
				display: 'flex',
				justifyContent: 'space-between',
				borderColor: 'light',
				borderRadius: '1',
				borderWidth: '1',
				padding: '2',
				width: '100%',
			})}
		>
			<VisuallyHidden>
				<input {...inputProps} ref={ref} />
			</VisuallyHidden>
			<div className={overdriveStyle({ display: 'flex', gap: '2' })}>
				<div
					className={overdriveStyle({
						size: '6',
						background: 'blue900',
						borderColor: 'light',
						borderRadius: '1',
						borderWidth: '1',
					})}
				>
					<Tick />
				</div>
				<div>{label}</div>
			</div>
			<div>{labelColInfo}</div>
		</label>
	);
};
