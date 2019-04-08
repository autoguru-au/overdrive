import { EDirection, EGridSpace, EWrap } from './enums';
import { IGridContext } from './Grid';

export const GridDefaults: IGridContext = {
	direction: EDirection.Row,
	wrap: EWrap.Wrap,
	padding: EGridSpace.Space0,
	gutter: EGridSpace.Space0,
};
