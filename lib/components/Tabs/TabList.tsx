import React, { Children, FunctionComponent } from 'react';

import { IndexContext } from './context';
import style from './style.scss';

export const TabList: FunctionComponent = ({ children }) => (
	<div role="tablist" className={style.tabsList}>
		{Children.map(children, (child, index) => (
			<IndexContext.Provider value={index}>{child}</IndexContext.Provider>
		))}
	</div>
);
