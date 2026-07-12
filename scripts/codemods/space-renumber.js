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
 * Covers the sprinkles props that read the space scale, in both scalar and
 * responsive-array form, plus direct `vars.space['8'|'9']` access:
 *
 *   <Box padding="8" />                 -> <Box padding="9" />
 *   <Box padding={['3', '6', '8']} />   -> <Box padding={['3', '6', '9']} />
 *   vars.space['9']                     -> vars.space['12']
 *
 * This is a MECHANICAL, best-effort transform. It cannot know whether a given
 * `8`/`9` was a deliberate visual choice — REVIEW THE DIFF before committing.
 *
 * Usage:
 *   npx jscodeshift -t scripts/codemods/space-renumber.js \
 *     --extensions=ts,tsx src/
 */

// props (sprinkles) that resolve against the `space` scale
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
	'margin',
	'marginX',
	'marginY',
	'marginTop',
	'marginRight',
	'marginBottom',
	'marginLeft',
	'width',
	'height',
]);

// old key -> new key (only the two whose px value moved)
const REMAP = { 8: '9', 9: '12' };

module.exports = function transform(file, api) {
	const j = api.jscodeshift;
	const root = j(file.source);
	let changed = false;

	const remapStringLiteral = (node) => {
		if (
			(node.type === 'StringLiteral' || node.type === 'Literal') &&
			typeof node.value === 'string' &&
			REMAP[node.value] !== undefined
		) {
			node.value = REMAP[node.value];
			changed = true;
		}
	};

	// JSX attributes: padding="8" and padding={[...]} / padding={'8'}
	root.find(j.JSXAttribute).forEach((path) => {
		const name = path.node.name && path.node.name.name;
		if (!SPACE_PROPS.has(name)) return;

		const value = path.node.value;
		if (!value) return;

		// padding="8"
		if (value.type === 'StringLiteral' || value.type === 'Literal') {
			remapStringLiteral(value);
			return;
		}

		// padding={ ... }
		if (value.type === 'JSXExpressionContainer') {
			const expr = value.expression;
			if (expr.type === 'ArrayExpression') {
				expr.elements.forEach((el) => el && remapStringLiteral(el));
			} else {
				remapStringLiteral(expr);
			}
		}
	});

	// vars.space['8'] / tokens.space['9']  (computed member access)
	root.find(j.MemberExpression, {
		computed: true,
		object: { property: { name: 'space' } },
	}).forEach((path) => {
		remapStringLiteral(path.node.property);
	});

	return changed ? root.toSource({ quote: 'single' }) : null;
};

module.exports.parser = 'tsx';
