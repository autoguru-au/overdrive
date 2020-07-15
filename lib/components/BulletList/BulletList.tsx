import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box/Box';
import * as styleRefs from './BulletList.treat';
import { BulletListContext, bulletMap } from './context';

export interface Props {
	className?: string;
}

export const BulletList: FunctionComponent<Props> = ({
	children,
	className,
}) => {
	const stack = useContext(BulletListContext);
	const styles = useStyles(styleRefs);

	return (
		<Box
			is="ul"
			className={clsx(
				styles.root,
				{ [styles.firstOccurrence]: stack === -1 },
				className,
			)}>
			<BulletListContext.Provider
				value={stack + 1 >= bulletMap.length ? 0 : stack + 1}>
				{children}
			</BulletListContext.Provider>
		</Box>
	);
};
