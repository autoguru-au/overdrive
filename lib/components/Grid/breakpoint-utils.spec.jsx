import {
	EBreakpointLabels,
	getBreakpointMediaQuery,
	IBreakPoint,
	useMedia,
} from './breakpoint-utils';

describe('getBreakpointMediaQuery', () => {
	const breakpoints = [
		{
			label: EBreakpointLabels.Mobile,
			lower: 320,
			upper: 650,
		},
		{
			label: EBreakpointLabels.Desktop,
			lower: 651,
			upper: 1200,
		},
		{
			label: EBreakpointLabels.LargeDesktop,
			lower: 1201,
		},
	];

	const queries = breakpoints.map(breakpoint =>
		getBreakpointMediaQuery(breakpoint)
	);
	it('should not throw', () => expect(queries.length === 3).toBe(true));
});
