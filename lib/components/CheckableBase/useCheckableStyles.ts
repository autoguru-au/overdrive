import clsx from 'clsx';
import { useStyles } from 'react-treat';

import * as styleRefs from './CheckableBase.treat';

export const useCheckableStyles: () => {
	checkable: string;
	checkableItem: string;
} = () => {
	const styles = useStyles(styleRefs);

	return {
		checkable: clsx(styles.checkable, styles.tappable),
		checkableItem: styles.checkableItem,
	};
};
