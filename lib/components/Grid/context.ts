import React from 'react';
import { IGridContext } from './grid-utils';

export const GridContext = React.createContext<Partial<IGridContext>>({});
