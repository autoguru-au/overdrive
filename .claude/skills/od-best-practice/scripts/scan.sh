#!/usr/bin/env bash
# scan.sh <ComponentName> - the greppable half of Sections B and D, in one pass.
# Everything here is a pointer, not a verdict: read the file before believing it.
set -uo pipefail
N="${1:?usage: scan.sh <ComponentName>}"
D="lib/components/$N"
C="$D/$N.tsx"
[ -f "$C" ] || { echo "no such component: $C"; exit 1; }

hdr() { printf '\n== %s\n' "$1"; }

hdr "B - data-od-component on the root"
grep -nE "odComponent|'od-component'" "$C" || echo "  (none - root element is untagged)"

hdr "B - testId interface + threading"
grep -nE 'TestIdProp|WithTestId|ConsistentComponentProps' "$C" || echo "  (props extend no test-id interface)"
grep -nE '\btestId\b' "$C" | head -5 || true

hdr "B - displayName"
grep -n 'displayName' "$C" || echo "  (none)"

hdr "B - props type exported from the component file"
grep -nE '^export (interface|type) ' "$C" || echo "  (props type is not exported)"

hdr "B - props type in the hand-curated public barrel (report only, never add silently)"
grep -nE "type ${N}Props" lib/index.ts lib/components/index.ts "$D/index.ts" 2>/dev/null \
  || echo "  (absent - normal: only 18 of 79 components do this. See 'Barrel exports' in SKILL.md)"

hdr "B - camelCase sprinkles values (quoted only; bare words are false positives)"
grep -nE "['\"](flexEnd|flexStart|spaceBetween|spaceAround)['\"]" "$C" "$D"/*.css.ts 2>/dev/null \
  || echo "  (clean)"

hdr "B - recipe / RecipeVariants"
grep -nE 'recipe\(|RecipeVariants' "$D"/*.css.ts "$C" 2>/dev/null || echo "  (hand-rolled variants, if any - report, do not convert)"

hdr "B - any"
grep -nE ':\s*any\b|<any[,>]|\bany\[\]' "$C" || echo "  (clean)"

hdr "C - focus indicator"
grep -nE 'focusVisible|:focus-visible|focusOutline' "$D"/*.css.ts "$C" 2>/dev/null \
  || echo "  (no focus styling found - only a problem if something here is focusable)"

hdr "D - interaction play functions"
# 'play:' as a plain substring also matches 'display:'. Word-bound it, or a
# component with zero interaction tests reads as if it has several.
if ! grep -nE '\bplay\b[[:space:]]*:' "$D/$N.stories.tsx" 2>/dev/null; then
  echo "  (no play function - AGENTS.md minimum is one. Library-wide only 17 of 89 story files have one.)"
fi

hdr "D - spec files (both extensions: .jsx outnumbers .tsx 43 to 39)"
ls "$D" | grep -E '\.spec\.[jt]sx$|__snapshots__' || echo "  (none)"
