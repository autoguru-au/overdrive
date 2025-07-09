import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';
import { base, react, typescript } from '@autoguru/eslint-plugin/config';
import storybook from 'eslint-plugin-storybook';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...base,
	...typescript,
	...react,
	...storybook.configs['flat/recommended'],
	{
		files: ['**/*.css.ts'],
		ignores: ['src/themes/theme.css.ts'],
		plugins: {
			'vanilla-extract': vanillaExtract,
		},
		rules: {
			'vanilla-extract/alphabetical-order': 'error',
			// Disable no-empty-style-blocks as it produces false positives with sprinkles and conditional styles
			'vanilla-extract/no-empty-style-blocks': 'off',
			'vanilla-extract/no-unknown-unit': 'error',
			'vanilla-extract/no-zero-unit': 'warn',
		},
	},
	{
		ignores: ['!.storybook'],
		rules: {
			'@typescript-eslint/no-empty-object-type': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'react/display-name': 'warn',
			'react-hooks/rules-of-hooks': 'warn', // because of conditionally calling hooks :( :( :(
			'sonarjs/cognitive-complexity': 'warn',
			'sonarjs/no-commented-code': 'off',
			'sonarjs/pseudo-random': 'off',
			'sonarjs/void-use': 'warn',
			'unicorn/prefer-global-this': 'warn',
		},
	},
	{
		files: ['**/*.stories.{jsx,tsx}'],
		rules: {
			'react-hooks/rules-of-hooks': 'off',
		},
	},
];
