import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../../Box';
import { Text } from '../../Text';
import * as styleRefs from './HintText.treat';

export interface Props {
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
			className={clsx(
				useBoxStyles({
					marginTop: '2',
					marginLeft: '4',
				}),
				styles.hintText,
				className,
			)}>
			{children}
		</Text>
	);
};
