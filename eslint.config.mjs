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

			// JSX A11y rules
			// in transition
			// https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
			'jsx-a11y/accessible-emoji': 'warn',
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-has-content': 'warn',
			'jsx-a11y/anchor-is-valid': [
				'warn',
				{ aspects: ['noHref', 'invalidHref'] },
			],
			'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
			'jsx-a11y/aria-props': 'warn',
			'jsx-a11y/aria-proptypes': 'warn',
			'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
			'jsx-a11y/aria-unsupported-elements': 'warn',
			'jsx-a11y/heading-has-content': 'warn',
			'jsx-a11y/iframe-has-title': 'warn',
			'jsx-a11y/img-redundant-alt': 'warn',
			'jsx-a11y/no-access-key': 'warn',
			'jsx-a11y/no-distracting-elements': 'warn',
			'jsx-a11y/no-redundant-roles': 'warn',
			'jsx-a11y/role-has-required-aria-props': 'warn',
			'jsx-a11y/role-supports-aria-props': 'warn',
			'jsx-a11y/scope': 'warn',

			// temp overrides
			'@typescript-eslint/ban-ts-comment': 'warn',
		},
	},
];
