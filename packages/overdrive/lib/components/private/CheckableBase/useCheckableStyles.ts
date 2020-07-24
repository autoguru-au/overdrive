import { useStyles } from 'react-treat';

import * as styleRefs from './CheckableBase.treat';

export const useCheckableStyles: () => {
	checkableItem: string;
} = () => {
	const styles = useStyles(styleRefs);

	return {
		checkableItem: styles.checkableItem,
	};
};
