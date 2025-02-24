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
			'@typescript-eslint/no-unsafe-function-type': 'warn',
			'@typescript-eslint/no-unused-expressions': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-unnecessary-type-constraint': 'warn',
			'react/display-name': 'warn',
			'react-hooks/rules-of-hooks': 'warn', // :( :( :(
			'sonarjs/cognitive-complexity': 'warn',
			'sonarjs/no-commented-code': 'off',
			'sonarjs/no-nested-conditional': 'warn',
			'sonarjs/no-nested-functions': 'warn',
			'sonarjs/prefer-default-last': 'warn',
			'sonarjs/pseudo-random': 'off',
			'sonarjs/void-use': 'off',
			'unicorn/prefer-global-this': 'warn',

			// temp overrides
			'@typescript-eslint/ban-ts-comment': 'warn',
		},
	},
];
