import { base, react, typescript } from '@autoguru/eslint-plugin/config';
import storybook from 'eslint-plugin-storybook';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...base,
	...typescript,
	...react,
	...storybook.configs['flat/recommended'],
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
