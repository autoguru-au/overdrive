import { base, react, typescript } from '@autoguru/eslint-plugin/config';
import storybook from 'eslint-plugin-storybook';
import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...base,
	...typescript,
	...react,
	...storybook.configs['flat/recommended'],
	{
		files: ['**/*.css.ts'],
		plugins: {
			'vanilla-extract': vanillaExtract,
		},
		rules: {
			...vanillaExtract.configs.recommended.rules,
			// Disable no-empty-style-blocks as it produces false positives with sprinkles and conditional styles
			'vanilla-extract/no-empty-style-blocks': 'off',
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
