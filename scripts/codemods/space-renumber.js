/**
 * jscodeshift codemod — DS-2026 `space` scale renumber (AG-20128 / AG-20161).
 *
 * Repoints consumers of the two `space` keys whose PIXEL VALUE changed, so the
 * rendered size stays identical:
 *
 *   space="8"  (was 48px, now 40px)  ->  space="9"   (48px)
 *   space="9"  (was 96px, now 48px)  ->  space="12"  (96px)
 *
 * Keys 0–7, 10, 11 and `none` are untouched (their meaning did not change).
 *
 * Covers the sprinkles props that read the space scale — long-form AND
 * shorthand aliases (p/px/py/pt…, m/mx/my/mt…, size) — in scalar,
 * responsive-array, and numeric-literal form; sprinkles/atoms object-literal
 * calls; and direct `vars.space['8'|'9']` / `tokens.space[9]` access:
 *
 *   <Box padding="8" />                 -> <Box padding="9" />
 *   <Box p="8" mt={8} />                -> <Box p="9" mt={'9'} />
 *   <Box padding={['3', '6', '8']} />   -> <Box padding={['3', '6', '9']} />
 *   sprinkles({ padding: '8' })         -> sprinkles({ padding: '9' })
 *   vars.space['9'] / vars.space[9]     -> vars.space['12']
 *
 * This is a MECHANICAL, best-effort transform. It cannot know whether a given
 * `8`/`9` was a deliberate visual choice — REVIEW THE DIFF before committing.
 *
 * The object-literal remap is scoped to known styling calls (sprinkles/atoms/
 * css/style/elementStyles/…), so a plain object with a `width`/`size`/`p` key
 * that is NOT a sprinkles call (e.g. Image's WidthScale args) is left alone.
 *
 * Known blind spots it can NOT catch — grep for these by hand:
 *   - destructured token access:   const { space } = vars; space['9']
 *   - variable/templated indexing: vars.space[key], vars.space[`9`]
 *   - spread props:                <Box {...spacingProps} />
 *   - values passed via constants: const GUTTER = '9'; <Box padding={GUTTER} />
 *   - object built then passed in:  const s = { p: '9' }; sprinkles(s)
 *   Suggested follow-up: grep -rn "space\[" src/ and review shorthand props.
 *
 * Note: TypeScript will NOT flag stale keys — `8`/`9` remain valid keys with
 * new pixel values, so an un-migrated usage compiles green and renders wrong.
 *
 * Usage:
 *   npx jscodeshift -t scripts/codemods/space-renumber.js \
 *     --extensions=ts,tsx src/
 */

// props (sprinkles) that resolve against the `space` scale, including every
// shorthand alias defined in lib/styles/sprinkles.css.ts
const SPACE_PROPS = new Set([
	'space',
	'spaceX',
	'spaceY',
	'gap',
	'columnGap',
	'rowGap',
	'padding',
	'paddingX',
	'paddingY',
	'paddingTop',
	'paddingRight',
	'paddingBottom',
	'paddingLeft',
	'p',
	'px',
	'py',
	'pt',
	'pr',
	'pb',
	'pl',
	'margin',
	'marginX',
	'marginY',
	'marginTop',
	'marginRight',
	'marginBottom',
	'marginLeft',
	'm',
	'mx',
	'my',
	'mt',
	'mr',
	'mb',
	'ml',
	'width',
	'height',
	'size',
]);

// old key -> new key (only the two whose px value moved)
const REMAP = { 8: '9', 9: '12' };

// identifiers whose `.space[...]` access reads the Overdrive scale; anything
// else (e.g. an app's own `layout.space` object) is left alone
const TOKEN_OBJECTS = /^(vars|tokens|[a-zA-Z]*[Tt]okens|theme[a-zA-Z]*)$/;

// styling functions whose object-literal argument uses the sprinkles props;
// the object-literal remap is scoped to calls of these to avoid false hits
const STYLE_CALLS = new Set([
	'sprinkles',
	'atoms',
	'css',
	'style',
	'styleVariants',
	'recipe',
	'elementStyles',
	'textStyles',
	'typography',
	'resetStyles',
]);

module.exports = function transform(file, api) {
	const j = api.jscodeshift;
	const root = j(file.source);
	let changed = false;

	// remaps '8'/'9' (string) and 8/9 (numeric) literals to the new key,
	// always emitting the STRING form the scale actually uses ('9'/'12')
	const remapLiteral = (node) => {
		if (
			node.type !== 'StringLiteral' &&
			node.type !== 'NumericLiteral' &&
			node.type !== 'Literal'
		) {
			return;
		}
		const key =
			typeof node.value === 'string' || typeof node.value === 'number'
				? String(node.value)
				: undefined;
		if (key === undefined || REMAP[key] === undefined) return;
		const next = REMAP[key];
		// normalise numeric literals (e.g. vars.space[9]) to the string key
		if (node.type === 'NumericLiteral') node.type = 'StringLiteral';
		node.value = next;
		// drop cached raw text so recast reprints from the new value
		if (node.extra) delete node.extra;
		if ('raw' in node) node.raw = `'${next}'`;
		changed = true;
	};

	const remapValueExpression = (expr) => {
		if (!expr) return;
		if (expr.type === 'ArrayExpression') {
			expr.elements.forEach((el) => el && remapLiteral(el));
		} else {
			remapLiteral(expr);
		}
	};

	// JSX attributes: padding="8", p={8}, padding={[...]}, mt={'8'}
	root.find(j.JSXAttribute).forEach((path) => {
		const name = path.node.name && path.node.name.name;
		if (!SPACE_PROPS.has(name)) return;

		const value = path.node.value;
		if (!value) return;

		if (value.type === 'StringLiteral' || value.type === 'Literal') {
			remapLiteral(value);
			return;
		}

		if (value.type === 'JSXExpressionContainer') {
			remapValueExpression(value.expression);
		}
	});

	// object-literal form: sprinkles({ padding: '8' }), atoms({ p: 9 }), etc.
	// SCOPED to known styling calls so unrelated object literals with a
	// `width`/`size`/`p` key (e.g. Image's WidthScale args) are NOT rewritten.
	const propName = (key) =>
		key.type === 'Identifier'
			? key.name
			: key.type === 'StringLiteral' || key.type === 'Literal'
				? key.value
				: undefined;

	root.find(j.CallExpression).forEach((path) => {
		const callee = path.node.callee;
		const calleeName =
			callee.type === 'Identifier'
				? callee.name
				: callee.type === 'MemberExpression' &&
					  callee.property.type === 'Identifier'
					? callee.property.name
					: undefined;
		if (!calleeName || !STYLE_CALLS.has(calleeName)) return;

		j(path)
			.find(j.ObjectProperty)
			.forEach((propPath) => {
				const name = propName(propPath.node.key);
				if (!SPACE_PROPS.has(name) || propPath.node.computed) return;
				remapValueExpression(propPath.node.value);
			});
	});

	// vars.space['8'] / tokens.space[9]  (computed member access) — only on
	// recognised token objects, so app-local `*.space` objects are untouched
	root.find(j.MemberExpression, {
		computed: true,
		object: {
			type: 'MemberExpression',
			property: { name: 'space' },
		},
	}).forEach((path) => {
		const owner = path.node.object.object;
		if (owner.type !== 'Identifier' || !TOKEN_OBJECTS.test(owner.name)) {
			return;
		}
		remapLiteral(path.node.property);
	});

	return changed ? root.toSource({ quote: 'single' }) : null;
};

module.exports.parser = 'tsx';
