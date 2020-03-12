import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Text } from '../Typography';
import * as styleRefs from './HintText.treat';

interface Props {
	className?: string;
}

export const HintText: FunctionComponent<Props> = ({
	children,
	className = '',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Text
			is="p"
			size="2"
			colour="unset"
			className={clsx(styles.hintText, className)}>
			{children}
		</Text>
	);
};
