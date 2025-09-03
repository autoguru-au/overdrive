import { cssVarUnwrap, getThemeTokenValue } from './css';

describe('css utilities', () => {
	describe('cssVarUnwrap', () => {
		it('extracts CSS variable name from var() function', () => {
			expect(cssVarUnwrap('var(--color-primary)')).toBe(
				'--color-primary',
			);
			expect(cssVarUnwrap('var(--spacing-2)')).toBe('--spacing-2');
			expect(cssVarUnwrap('var(--border-radius, 4px)')).toBe(
				'--border-radius, 4px',
			);
		});

		it('returns original value if not a CSS variable', () => {
			expect(cssVarUnwrap('#ff0000')).toBe('#ff0000');
			expect(cssVarUnwrap('16px')).toBe('16px');
			expect(cssVarUnwrap('solid')).toBe('solid');
		});

		it('handles edge cases', () => {
			expect(cssVarUnwrap('')).toBe('');
			expect(cssVarUnwrap('var()')).toBe('var()');
			expect(cssVarUnwrap('var')).toBe('var');
		});
	});

	describe('getThemeTokenValue', () => {
		beforeEach(() => {
			// Clean up any existing test elements
			document
				.querySelectorAll('.test-theme')
				.forEach((el) => el.remove());
		});

		afterEach(() => {
			// Clean up test elements
			document
				.querySelectorAll('.test-theme')
				.forEach((el) => el.remove());
		});

		it('returns empty string when themeClass is null/undefined', () => {
			expect(getThemeTokenValue(null, '--color-primary')).toBe('');
			expect(getThemeTokenValue(undefined, '--color-primary')).toBe('');
		});

		it('returns empty string when token is null/undefined', () => {
			expect(getThemeTokenValue('theme-class', null)).toBe('');
			expect(getThemeTokenValue('theme-class')).toBe('');
		});

		it('returns empty string when element is not found', () => {
			expect(
				getThemeTokenValue('non-existent-theme', '--color-primary'),
			).toBe('');
		});

		it('returns CSS custom property value from themed element', () => {
			// Create a test element with CSS custom properties
			const testElement = document.createElement('div');
			testElement.className = 'test-theme';
			testElement.style.setProperty('--color-primary', '#ff0000');
			testElement.style.setProperty('--spacing-large', '24px');
			document.body.append(testElement);

			expect(
				getThemeTokenValue('test-theme', 'var(--color-primary)'),
			).toBe('#ff0000');
			expect(getThemeTokenValue('test-theme', '--spacing-large')).toBe(
				'24px',
			);
		});

		it('trims whitespace from computed values', () => {
			const testElement = document.createElement('div');
			testElement.className = 'test-theme';
			testElement.style.setProperty('--color-with-spaces', '  #ff0000  ');
			document.body.append(testElement);

			expect(
				getThemeTokenValue('test-theme', '--color-with-spaces'),
			).toBe('#ff0000');
		});

		it('returns empty string for non-existent CSS variables', () => {
			const testElement = document.createElement('div');
			testElement.className = 'test-theme';
			document.body.append(testElement);

			expect(getThemeTokenValue('test-theme', '--non-existent-var')).toBe(
				'',
			);
		});
	});
});
