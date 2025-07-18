import { describe, expect, it } from 'vitest';

import { elementStyles } from './elementStyles';
import type { Sprinkles } from './sprinkles.css';

// Test constants
const MOCK_CLASS_NAME = 'custom-class';
const MockComponent = () => null;

// Type-safe mock sprinkles properties for testing
const createMockSprinklesProps = (props: Partial<Sprinkles>): Sprinkles =>
	props as Sprinkles;

describe('elementStyles', () => {
	describe('with no props', () => {
		it('should return empty string when no props are provided', () => {
			const result = elementStyles({});
			expect(result).toBe('');
		});

		it('should return empty string when only non-string as prop is provided', () => {
			const result = elementStyles({ as: MockComponent });
			expect(result).toBe('');
		});
	});

	describe('with className only', () => {
		it('should return the className when only className is provided', () => {
			const result = elementStyles({ className: MOCK_CLASS_NAME });
			expect(result).toBe(MOCK_CLASS_NAME);
		});

		it('should return the className when className and non-string as prop are provided', () => {
			const result = elementStyles({
				className: MOCK_CLASS_NAME,
				as: MockComponent,
			});
			expect(result).toBe(MOCK_CLASS_NAME);
		});
	});

	describe('with as prop', () => {
		it('should return styles with length when as prop is a valid HTML element', () => {
			const result = elementStyles({ as: 'div' });
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when as prop is a known element with reset styles', () => {
			const result = elementStyles({ as: 'button' });
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when as prop is an unknown element', () => {
			const result = elementStyles({ as: 'custom-element' });
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return only className when as prop is not a string', () => {
			const result = elementStyles({
				as: MockComponent,
				className: 'test-class',
			});
			expect(result).toBe('test-class');
		});
	});

	describe('with style props', () => {
		it('should return styles with length when padding prop is provided', () => {
			const result = elementStyles({
				...createMockSprinklesProps({ padding: '4' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when margin prop is provided', () => {
			const result = elementStyles({
				...createMockSprinklesProps({ margin: '2' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when multiple style props are provided', () => {
			const result = elementStyles({
				...createMockSprinklesProps({
					padding: '4',
					margin: '2',
					backgroundColor: 'transparent',
				}),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('with border props', () => {
		it('should return styles with length when borderColor is provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({ borderColor: 'default' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when borderWidth is provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({ borderWidth: '1' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when borderStyle is provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({ borderStyle: 'solid' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when specific border side props are provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({
					borderTopColor: 'default',
					borderBottomWidth: '2',
				}),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when legacy border colour props are provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({ borderColour: 'gray' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when borderColourX is provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({ borderColourX: 'light' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when borderColourY is provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({ borderColourY: 'dark' }),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when specific side borderColour props are provided', () => {
			const result = elementStyles({
				as: 'div',
				...createMockSprinklesProps({
					borderTopColour: 'primary',
					borderLeftColour: 'secondary',
				}),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('with combined props', () => {
		it('should return styles with length when as, className, and style props are provided', () => {
			const result = elementStyles({
				as: 'div',
				className: MOCK_CLASS_NAME,
				...createMockSprinklesProps({
					padding: '4',
					borderColor: 'default',
				}),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should return styles with length when complex combination of props is provided', () => {
			const result = elementStyles({
				as: 'section',
				className: 'complex-component',
				...createMockSprinklesProps({
					padding: '8',
					margin: '4',
					backgroundColor: 'transparent',
					borderTopWidth: '1',
					borderTopColor: 'default',
					borderBottomColour: 'primary',
				}),
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('edge cases', () => {
		it('should handle undefined className', () => {
			const result = elementStyles({
				as: 'span',
				className: undefined,
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should handle null className', () => {
			const result = elementStyles({
				as: 'section',
				className: null,
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		it('should handle array className', () => {
			const result = elementStyles({
				as: 'ul',
				className: ['class1', 'class2'],
			});
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('type safety', () => {
		it('should accept all optional props', () => {
			// This test verifies that all props are optional by not causing TypeScript errors
			expect(() => {
				elementStyles({});
				elementStyles({ as: 'div' });
				elementStyles({ className: 'test' });
				elementStyles(createMockSprinklesProps({ padding: '4' }));
				elementStyles({
					as: 'div',
					className: 'test',
					...createMockSprinklesProps({
						padding: '4',
						borderColor: 'default',
					}),
				});
			}).not.toThrow();
		});
	});
});
