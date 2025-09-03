import { describe, expect, it } from 'vitest';

import { responsiveStyle } from './responsiveStyle';

describe('responsiveStyle', () => {
	it('applies mobile styles directly', () => {
		const result = responsiveStyle({
			mobile: {
				color: 'red',
				fontSize: '16px',
			},
		});

		expect(result).toEqual({
			color: 'red',
			fontSize: '16px',
		});
	});

	it('wraps non-mobile styles in media queries', () => {
		const result = responsiveStyle({
			tablet: {
				color: 'blue',
			},
		});

		expect(result).toEqual({
			'@media': {
				'screen and (min-width: 768px)': {
					color: 'blue',
				},
			},
		});
	});

	it('combines mobile and responsive styles', () => {
		const result = responsiveStyle({
			mobile: {
				color: 'red',
				fontSize: '14px',
			},
			tablet: {
				fontSize: '16px',
			},
			desktop: {
				color: 'blue',
			},
		});

		expect(result).toEqual({
			color: 'red',
			fontSize: '14px',
			'@media': {
				'screen and (min-width: 768px)': {
					fontSize: '16px',
				},
				'screen and (min-width: 1024px)': {
					color: 'blue',
				},
			},
		});
	});

	it('handles multiple media queries', () => {
		const result = responsiveStyle({
			tablet: {
				padding: '16px',
			},
			desktop: {
				padding: '24px',
			},
			largeDesktop: {
				padding: '32px',
			},
		});

		expect(result).toEqual({
			'@media': {
				'screen and (min-width: 768px)': {
					padding: '16px',
				},
				'screen and (min-width: 1024px)': {
					padding: '24px',
				},
				'screen and (min-width: 1920px)': {
					padding: '32px',
				},
			},
		});
	});

	it('handles empty input', () => {
		const result = responsiveStyle({});

		expect(result).toEqual({});
	});

	it('handles only mobile styles', () => {
		const result = responsiveStyle({
			mobile: {
				margin: '8px',
				padding: '4px',
			},
		});

		expect(result).toEqual({
			margin: '8px',
			padding: '4px',
		});
	});

	it('handles only responsive styles', () => {
		const result = responsiveStyle({
			desktop: {
				maxWidth: '1200px',
			},
		});

		expect(result).toEqual({
			'@media': {
				'screen and (min-width: 1024px)': {
					maxWidth: '1200px',
				},
			},
		});
	});

	it('preserves complex style values', () => {
		const result = responsiveStyle({
			mobile: {
				background: 'linear-gradient(to right, red, blue)',
				transform: 'translateX(10px) scale(1.2)',
			},
			tablet: {
				background: 'radial-gradient(circle, green, yellow)',
			},
		});

		expect(result).toEqual({
			background: 'linear-gradient(to right, red, blue)',
			transform: 'translateX(10px) scale(1.2)',
			'@media': {
				'screen and (min-width: 768px)': {
					background: 'radial-gradient(circle, green, yellow)',
				},
			},
		});
	});
});
