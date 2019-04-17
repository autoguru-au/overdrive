import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
} from '../Grid';
import { EGridDirection, EWrap } from '../Grid/stories';
import styles from './style.scss';

export interface IProps {
	name: string;
	className?: string;
	value?: string;

	onChange?(value: string): void;
}

export interface IRadioGroupContext {
	inputName: string;
	value: string;

	radioSelected(value: string): void;
}

export const RadioContext = React.createContext<IRadioGroupContext>(null);

export const RadioGroup: FunctionComponent<IProps> = ({
	name,
	value = null,
	className = '',
	onChange = () => void 0,
	children,
}) => (
	<RadioContext.Provider
		value={{ value, inputName: name, radioSelected: onChange }}>
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Stretch}
			wrap={EWrap.NoWrap}
			padding={EGridSpace.Space0}
			gutter={EGridSpace.Space4}
			className={cx([styles.radioGroup, className])}
			children={children}
		/>
	</RadioContext.Provider>
);
