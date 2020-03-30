import clsx from 'clsx';
import * as React from 'react';
import { Children, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { IndexContext } from './context';
import * as styleRefs from './Tabs.treat';

interface Props {
	stretch?: boolean;
}

export const TabList: FunctionComponent<Props> = ({
	children,
	stretch = false,
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			borderWidth="none"
			borderWidthBottom="1"
			borderColour="gray"
			role="tablist"
			className={clsx(styles.tabsList.root, {
				[styles.tabsList.stretch]: stretch,
			})}>
			{Children.map(children, (child, index) => (
				<IndexContext.Provider value={index}>
					{child}
				</IndexContext.Provider>
			))}
		</Box>
	);
};
