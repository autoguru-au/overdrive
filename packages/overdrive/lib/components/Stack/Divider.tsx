import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';

import * as styleRefs from './Divider.treat';

export const Divider: FunctionComponent = () => {
	const styles = useStyles(styleRefs);

	return (
		<Box position='relative'>
			<Box position='absolute' className={styles.line} width='full' />
		</Box>
	);
};
