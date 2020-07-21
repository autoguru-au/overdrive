import clsx from 'clsx';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../../Box';
import * as styleRefs from './CheckableBase.treat';

export const useCheckableStyles: () => {
	checkable: string;
	checkableItem: string;
} = () => {
	const styles = useStyles(styleRefs);

	return {
		checkable: clsx(
			styles.checkable,
			useBoxStyles({ is: 'button', position: 'absolute' }),
		),
		checkableItem: styles.checkableItem,
	};
};
