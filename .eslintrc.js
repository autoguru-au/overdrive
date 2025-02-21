// Combined ESLint configuration from all existing configs
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		ecmaFeatures: { jsx: true },
	},

	extends: [
		'plugin:unicorn/recommended',
		'plugin:promise/recommended',
		'plugin:import/errors',
		// 'plugin:jest/recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'plugin:sonarjs/recommended-legacy',
		'prettier',
		// OVERDRIVE ONLY
		'plugin:storybook/recommended',
	],

	plugins: ['react', 'react-hooks', 'jsx-a11y' /*, 'jest' */, 'sonarjs'],

	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {},
		},
	},

	rules: {
		// Base rules
		'func-names': ['warn', 'always'],
		'no-multi-assign': 'warn',
		'no-void': 'off',
		'new-cap': 'off',
		'no-warning-comments': ['off', { terms: ['TODO'] }],
		camelcase: 'off',

		// Promise rules
		'promise/always-return': 'warn',
		'promise/catch-or-return': 'warn',

		// Unicorn rules
		'unicorn/filename-case': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-reduce': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-push-push': 'off',
		'unicorn/prefer-spread': 'warn',
		'unicorn/import-style': 'off',

		// Import rules
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: { order: 'asc' },
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				pathGroups: [
					{
						pattern: '*.+(treat)',
						group: 'index',
						position: 'after',
						patternOptions: { matchBase: true },
					},
				],
			},
		],
		'import/no-unresolved': 'off',
		'import/default': 'off',
		'import/extensions': [
			'error',
			'never',
			{
				graphql: 'always',
				treat: 'always',
				scss: 'always',
			},
		],
		'import/no-duplicates': 'error',
		'import/namespace': 'off',

		// Jest rules
		// 'jest/prefer-called-with': 'warn',

		// React rules
		'react/button-has-type': 'off',
		'react/jsx-tag-spacing': [
			'error',
			{
				afterOpening: 'never',
				beforeClosing: 'never',
				beforeSelfClosing: 'always',
				closingSlash: 'never',
			},
		],
		'react/no-array-index-key': 'off',
		'react/no-children-prop': 'warn',
		'react/no-unescaped-entities': 'warn',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',

		// JSX A11y rules
		'jsx-a11y/accessible-emoji': 'warn',
		'jsx-a11y/alt-text': 'warn',
		'jsx-a11y/anchor-has-content': 'warn',
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				aspects: ['noHref', 'invalidHref'],
			},
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

		// TypeScript rules
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/generic-type-naming': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-use-before-define': 'warn',

		// SonarJS rules
		'sonarjs/no-duplicate-string': 'warn',
		'sonarjs/slow-regex': 'warn',
		'sonarjs/todo-tag': 'off',

		// LOCAL OVERDRIVE RULES
		'sonarjs/cognitive-complexity': 'warn',
		'sonarjs/no-commented-code': 'off',
		'sonarjs/no-nested-conditional': 'warn',
		'sonarjs/no-nested-functions': 'warn',
		'sonarjs/prefer-default-last': 'warn',
		'sonarjs/pseudo-random': 'off',
		'sonarjs/void-use': 'off',
		'unicorn/prefer-global-this': 'warn',
		'@typescript-eslint/no-empty-object-type': 'warn',
		'@typescript-eslint/no-unsafe-function-type': 'warn',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-unnecessary-type-constraint': 'warn',
	},
};
