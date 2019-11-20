import React, { Children, FunctionComponent, useContext } from 'react';

import { IndexContext, TabsContext } from './context';
import styles from './style.scss';

export const TabPanes: FunctionComponent = ({ children }) => {
	const { active } = useContext(TabsContext);
	return (
		<div className={styles.tabPanes}>
			{Children.map(children, (child, index) => {
				return (
					<IndexContext.Provider value={index}>
						{index === active ? child : null}
					</IndexContext.Provider>
				);
			})}
		</div>
	);
};
