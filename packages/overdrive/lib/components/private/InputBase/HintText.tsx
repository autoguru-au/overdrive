import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../../Box';
import { Text } from '../../Text';

import * as styleRefs from './HintText.treat';

export interface Props {
	hintText: ReactNode;
	reserveHintSpace?: boolean;
	disabled?: boolean;
	className?: string;
}

export const HintText: FunctionComponent<Props> = ({
													   reserveHintSpace,
													   disabled,
													   hintText,
													   className = '',
												   }) => {
	const styles = useStyles(styleRefs);
	const boxStyles = useBoxStyles({
		is: 'p',
		marginTop: '2',
		marginLeft: '4',
	});

	if (!hintText && !reserveHintSpace) return null;

	const showHintText = !disabled && hintText;

	return (
		<Text
			is='p'
			size='2'
			colour='unset'
			className={clsx(boxStyles, styles.hintText, className)}>
			{showHintText ? hintText : '\u00A0'}
		</Text>
	);
};
