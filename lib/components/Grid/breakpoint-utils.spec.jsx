import { EBreakpointLabels, getBreakpointMediaQuery } from './breakpoint-utils';

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

describe('getBreakpointMediaQuery', () => {
	it('should not throw', () =>
		expect(() =>
			breakpoints.map(breakpoint => getBreakpointMediaQuery(breakpoint))
		).not.toThrow());

	it('should generate correct mobile media query', () =>
		expect(getBreakpointMediaQuery(breakpoints[0])).toEqual(
			'(min-width: 320px) and (max-width: 650px)'
		));

	it('should generate correct mobile media query limited to screen media type', () => {
		expect(getBreakpointMediaQuery(breakpoints[0], 'screen')).toEqual(
			'screen and (min-width: 320px) and (max-width: 650px)'
		);
	});

	it('should generate correct mobile media query limited to print media type', () => {
		expect(getBreakpointMediaQuery(breakpoints[0], 'print')).toEqual(
			'print and (min-width: 320px) and (max-width: 650px)'
		);
	});

	it('should generate correct desktop media query', () =>
		expect(getBreakpointMediaQuery(breakpoints[1])).toEqual(
			'(min-width: 651px) and (max-width: 1200px)'
		));

	it('should generate correct desktop media query limited to screen media type', () => {
		expect(getBreakpointMediaQuery(breakpoints[1], 'screen')).toEqual(
			'screen and (min-width: 651px) and (max-width: 1200px)'
		);
	});

	it('should generate correct desktop media query limited to print media type', () => {
		expect(getBreakpointMediaQuery(breakpoints[1], 'print')).toEqual(
			'print and (min-width: 651px) and (max-width: 1200px)'
		);
	});

	it('should generate correct large desktop media query', () =>
		expect(getBreakpointMediaQuery(breakpoints[2])).toEqual(
			'(min-width: 1201px)'
		));

	it('should generate correct large desktop media query limited to screen media type', () => {
		expect(getBreakpointMediaQuery(breakpoints[2], 'screen')).toEqual(
			'screen and (min-width: 1201px)'
		);
	});

	it('should generate correct large desktop media query limited to print media type', () => {
		expect(getBreakpointMediaQuery(breakpoints[2], 'print')).toEqual(
			'print and (min-width: 1201px)'
		);
	});
});
