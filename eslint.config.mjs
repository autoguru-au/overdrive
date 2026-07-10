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
	// --- Track C / W4-P2 legacy colour guard (docs/ds2026-plan/track-c.md
	// §"Lint rule proposal") ---
	// Blocks NEW internal usage of the frozen legacy colour surface
	// (colours.*, typography.colour, sprinklesLegacyText, legacy sprinkles
	// colour props). Scoped to lib/components/** + lib/styles/** — NOT
	// lib/themes/** (the theme/token files legitimately DEFINE the legacy
	// contract) and NOT sprinkles.css.ts/typography.css.ts (where the legacy
	// sprinkles properties themselves are declared).
	//
	// Severity: intentionally `warn`, not `error` (deviation from a stricter
	// ask — see the W4-P2 build report). track-c.md's own rollout note says
	// "introduce as warn ... flip to error once Track C burn-down reaches
	// zero" (§ Lint rule proposal). Burn-down is measurably NOT at zero yet
	// (Wave-3 folded repoints for Button/CheckBox/Radio/Switch/StarRating/
	// Tabs/Pagination/TextLink/ProgressSpinner/AutoSuggest/DropDown/
	// CheckableBase/InputBase/Alert are still pending) — flipping to `error`
	// today would fail `yarn lint` on dozens of legitimate, already-tracked,
	// not-yet-migrated sites that are NOT documented retentions. Flip to
	// `error` once the Track C per-component burn-down table in
	// docs/ds2026-plan/track-c.md shows zero pending batches.
	{
		files: ['lib/components/**/*.{ts,tsx}', 'lib/styles/**/*.{ts,tsx}'],
		ignores: [
			'**/*.spec.{ts,tsx}',
			'**/*.stories.{ts,tsx}',
			'lib/styles/sprinkles.css.ts',
			'lib/styles/typography.css.ts',
		],
		rules: {
			'no-restricted-imports': [
				'warn',
				{
					paths: [
						{
							name: './typography.css',
							importNames: ['sprinklesLegacyText'],
							message:
								'Legacy colours.* is frozen (Track C). Use semantic `color` on sprinkles / `color.*` tokens.',
						},
						{
							name: '../../styles/typography.css',
							importNames: ['sprinklesLegacyText'],
							message:
								'Legacy colours.* is frozen (Track C). Use semantic `color` on sprinkles / `color.*` tokens.',
						},
						{
							name: '../../../styles/typography.css',
							importNames: ['sprinklesLegacyText'],
							message:
								'Legacy colours.* is frozen (Track C). Use semantic `color` on sprinkles / `color.*` tokens.',
						},
					],
				},
			],
			'no-restricted-syntax': [
				'warn',
				// vars.colours.* / tokens.colours.* / overdriveTokens.colours.* / themeContractVars.colours.*
				{
					selector:
						"MemberExpression[property.name='colours'][object.name=/^(vars|tokens|overdriveTokens|themeContractVars)$/]",
					message:
						'Legacy colours.* is frozen (Track C). Repoint onto semantic color.* (docs/ds2026-plan/track-c.md §1.5).',
				},
				// *.typography.colour
				{
					selector:
						"MemberExpression[property.name='colour'] > MemberExpression[property.name='typography']",
					message:
						'Legacy colours.* is frozen (Track C). Legacy typography.colour.* is frozen — use color.*.',
				},
				// legacy sprinkles JSX props: colour / backgroundColour / border*Colour / borderColourX / borderColourY
				{
					selector:
						'JSXAttribute[name.name=/^(colour|backgroundColour|borderColour|border(Top|Right|Bottom|Left)Colour|borderColour[XY])$/]',
					message:
						'Legacy colours.* is frozen (Track C). Legacy sprinkles colour prop — use color/backgroundColor/border*Color (semantic; C-P1 provides parity).',
				},
				// legacy sprinkles object keys, scoped to sprinkles()-style calls only
				// (tighter than a bare Property selector, to avoid Badge/InputState
				// recipe-variant `colour` keys being flagged as false positives).
				{
					selector:
						"CallExpression[callee.name='sprinkles'] Property[key.name=/^(colour|backgroundColour|borderColour|border(Top|Right|Bottom|Left)Colour)$/]",
					message:
						'Legacy colours.* is frozen (Track C). Legacy sprinkles colour key — use the semantic equivalent (C-P1).',
				},
			],
		},
	},
];
