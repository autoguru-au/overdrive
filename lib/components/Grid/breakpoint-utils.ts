export interface IBreakPoint {
	label: string;
	lower: number;
	upper?: number;
}

export enum EBreakpointLabels {
	Mobile = 'mobile',
	Desktop = 'desktop',
	LargeDesktop = 'large_desktop',
}

// tslint:disable prefer-template
export const getBreakpointMediaQuery = (
	breakpoint: IBreakPoint,
	mediaType?: string
): string =>
	`${mediaType ? mediaType + ' and ' : ''}(min-width: ${breakpoint.lower}px)${
		breakpoint.upper ? ' and (max-width: ' + breakpoint.upper + 'px)' : ''
	}`;
// tslint:enable prefer-template
