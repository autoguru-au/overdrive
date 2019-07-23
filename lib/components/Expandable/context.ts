import { createContext } from 'react';
import { ListItemMap } from './Expandable';

export interface ExpandableContext {
	openedItemsMap: ListItemMap;
	multi: boolean;

	expandableClicked(id: string): void;
}

export const ExpandableContext = createContext<ExpandableContext>(null);
