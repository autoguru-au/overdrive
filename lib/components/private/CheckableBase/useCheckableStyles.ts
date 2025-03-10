import * as styles from './CheckableBase.css';

/**
 * @deprecated import the `CheckableBase.css` file directly
 */
export const useCheckableStyles: () => {
	checkableItem: string;
} = () => ({
	checkableItem: styles.checkableItem,
});
