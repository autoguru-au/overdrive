---
name: od-best-practice
description: Check an Overdrive component against the OD component best-practice checklist - clean DOM, props and data attributes, accessibility, and Storybook coverage - then fix the mechanical problems and report the ones needing judgement. Use when someone asks whether a component follows OD standards or best practice, wants the component checklist run over their work, asks to tidy a component up before raising it, or names a component and asks "is this right". Nothing here blocks a commit or a PR; it is a helper you run on demand, on one component or on the current diff.
---

# Overdrive Component Best Practice

Runs the OD component checklist over a component, fixes what can be fixed mechanically, and reports what needs a person. Nothing here is a gate — it never blocks a commit, a push or a PR. Run it as often or as rarely as is useful.

The checklist has four sections: **Code Quality & Structure**, **Props & Attributes**, **Accessibility**, **Testing**. The rules themselves live in [AGENTS.md](../../../AGENTS.md) — that is the single source of truth. Where other files in this repo restate the rules and disagree (`.claude/commands/pr.md`, `.claude/commands/component.md`, `.claude/agents/component-enhancer.md`, `.github/copilot-instructions.md`), **AGENTS.md wins**. The known conflict is story count: AGENTS.md says one Interaction Test minimum, `pr.md` says three, `component.md` says five. Use one.

## Not the same job as `od-prereview`

`od-prereview` is a read-only PR gate covering custom CSS, token duplication, build/test, and MFE blast radius. This skill writes fixes and covers component-authoring quality. They do not overlap; running one does not cover the other.

## When to run

On demand: while building a component, before raising it, or when reviewing someone's component. Not wired to any hook or CI job, by design.

## Pick the target

With a component name, work on `lib/components/<Name>/`. With no name, scope to the components touched by the current branch:

```bash
git fetch origin main --quiet
BASE=origin/main...HEAD
git diff --name-only $BASE -- 'lib/components/**' | cut -d/ -f1-3 | sort -u
```

When a check needs **added lines with real file:line numbers**, use this helper — piping `git diff` into `grep -n` numbers the diff stream, not the file, which gives the author useless line numbers:

```bash
added() {  # added <base> [pathspec...]
  git diff -U0 "$@" | awk '
    /^\+\+\+ b\// { file = substr($0, 7); next }
    /^@@/ { match($0, /\+[0-9]+/); ln = substr($0, RSTART+1, RLENGTH-1); next }
    /^\+/ { print file ":" ln ":" substr($0,2); ln++ }
  '
}
```

Read the component's `.tsx`, `.css.ts` and `.stories.tsx` before judging anything. Most of Section A cannot be grepped.

## Fix policy

Two buckets. Get this wrong and the skill becomes something people stop running.

**Safe to fix** — mechanical, no change to rendered behaviour or public API:

- missing `displayName`
- props type not extending `TestIdProp` / `WithTestId` / `ConsistentComponentProps`, and threading `testId` through to `Box`/`useBox`
- missing `odComponent` on the root
- props interface declared but not exported
- missing JSDoc on props (draft it from how the prop is used)
- camelCase sprinkles values where a kebab alias exists
- unused imports

**Report, never fix silently** — changes behaviour, the public API, or needs a decision:

- anything that renames or removes a prop (breaking for MFEs)
- `any` → a real type
- `no-autofocus` and any other a11y finding that alters focus or interaction
- adding `cssLayerComponent` to styles that don't have it — this changes cascade priority and can shift which rules win in a consuming MFE. Only add a layer to styles you are authoring from scratch
- converting hand-rolled variants to a `recipe`
- everything in Section A
- anything in Section D — this skill does not write tests

Say what you fixed, as a list. Nothing should land invisibly.

## Section A — Code Quality & Structure

Read the component and judge. No commands here.

- **Clean DOM.** Semantic element chosen via `as`. No wrapper that only forwards a single child. No nested element doing what one sprinkles prop would do. Decorative elements carry `aria-hidden`.
- **Efficient state.** Object or array literals created inline in render, components declared inside components, unstable callbacks handed to many children. React 19's compiler handles ordinary memoisation, so only flag heavy computation, large transformations, and genuinely expensive child renders — do not suggest adding `useMemo`/`useCallback` for their own sake.
- **Modularity.** Single responsibility. Logic that wants to be a hook. Composed from `useBox`, `Text`, `FlexStack` rather than new base elements.
- **Localisable.** User-facing copy hardcoded inside the component instead of arriving as props or children. Dates, times, numbers and currency assembled by concatenation or slicing rather than `Intl`. Layout that assumes English string length.

## Section B — Props & Attributes

```bash
C=lib/components/<Name>/<Name>.tsx

grep -n 'odComponent' "$C"                      # present on the root?
grep -nE 'TestIdProp|WithTestId|ConsistentComponentProps' "$C"
grep -n 'displayName' "$C"
grep -n 'export \(interface\|type\) ' "$C"      # props type exported?
grep -nE "['\"](flexEnd|flexStart|spaceBetween|spaceAround)['\"]" "$C" lib/components/<Name>/*.css.ts
grep -n 'recipe(' lib/components/<Name>/<Name>.css.ts
```

- **`data-od-component`** — root element sets `odComponent`. `useBox` only lowercases the value (`lib/components/Box/useBox/useBox.ts:275`), so pass the kebab-case name you want in the markup: `odComponent="progress-spinner"`, not `"ProgressSpinner"`. House examples: `Badge` → `"badge"`, `ProgressSpinner` → `"progress-spinner"`.
- **`testId`** — props extend one of the interfaces in `lib/types/index.ts:31-48` and pass `testId` down. Note AGENTS.md also says tests should use semantic queries over test IDs: the prop exists for consumers, not as an excuse for `getByTestId` in our own stories.
- **Consistent naming** — `color` for new design-system tokens, `colour` for the legacy palette. Renaming an existing prop is breaking; report it.
- **Clear interface** — props type exported, every prop carrying JSDoc. `Badge.tsx` is the reference shape.
- **Styling props from sprinkles** — CSS-like props come from `sprinkles` (`lib/styles/sprinkles.css.ts`), with kebab-case values (`'flex-end'`, `'space-between'`). Sprinkles accepts the camelCase spelling too, but kebab is house style. Do **not** edit the alias table at `lib/styles/sprinkles.css.ts:17-33` — those aliases are public API and MFEs use them.

  Match **quoted values only**, as the grep above does. Matching the bare word instead pulls in two things that are correct and must be left alone: the `spaceBetween` boolean shortcut prop on `Flex`/`FlexInline`/`inline()`, and recipe variant *keys* like `flexEnd: [borderRoundTop]` in `MinimalModal.css.ts`. Library-wide the tightened grep returns two genuine hits — `Calendar.css.ts:23` and `HorizontalAutoScroller.tsx:178` — so more than a couple per component means the pattern has drifted.
- **Variants** — variant-bearing styles use a `recipe` and the component derives its prop types from `RecipeVariants`. `lib/components/Badge/Badge.css.ts` + `Badge.tsx` is the canonical pair. About 17 components do this; the rest hand-roll, so report rather than convert.
- **No `any`** — report with the type you would use.

## Section C — Accessibility

`eslint-plugin-jsx-a11y` is registered in the shared config but extends no rules, so it catches nothing in a normal lint run. Turn the rules on **for this invocation only** — no config change, nothing left switched on afterwards:

```bash
npx eslint "lib/components/<Name>/**/*.tsx" --format json \
  --rule '{"jsx-a11y/alt-text":"warn","jsx-a11y/aria-props":"warn","jsx-a11y/aria-role":"warn","jsx-a11y/aria-unsupported-elements":"warn","jsx-a11y/click-events-have-key-events":"warn","jsx-a11y/no-static-element-interactions":"warn","jsx-a11y/role-has-required-aria-props":"warn","jsx-a11y/role-supports-aria-props":"warn","jsx-a11y/no-noninteractive-element-interactions":"warn","jsx-a11y/interactive-supports-focus":"warn","jsx-a11y/label-has-associated-control":"warn","jsx-a11y/no-redundant-roles":"warn","jsx-a11y/tabindex-no-positive":"warn","jsx-a11y/heading-has-content":"warn","jsx-a11y/anchor-has-content":"warn","jsx-a11y/no-autofocus":"warn"}'
```

Do not add `--fix`. For calibration, library-wide this currently returns 15 findings across 9 files, so per-component output should be short — a long list means the command is wrong, not that the component is catastrophic.

- **ARIA** — fix only the inert ones: `no-redundant-roles`, `aria-props` typos, `anchor-has-content`, `heading-has-content`. Report the rest.
- **Keyboard** — interactive element with `onClick` and no key handling, or a non-interactive element given interaction. React Aria (`@react-aria/*`) is the house fix; suggest it, don't rewrite the component unasked.
- **Visible focus** — check for `:focus-visible` or `focusOutline` from `lib/styles/focusOutline.css.ts`.

## Section D — Testing

Report only, then hand off — do not write tests here.

```bash
ls lib/components/<Name>/
grep -n 'play:' lib/components/<Name>/<Name>.stories.tsx
```

- At least one story with an Interaction `play` function (AGENTS.md: one per component minimum). Play functions use `getAllByRole` and take the first item, and split into `step` calls.
- A leftover `.spec.tsx` whose coverage a story could carry. The library is at 39 spec files against 89 story files, so this migration is live: AGENTS.md keeps unit tests only for primitives with complex internal logic.
- Point at `/testing` for the actual work — it owns test-case limits and the `composeStories` pattern.

## Hard constraints

- **Never** `yarn format` — it rewrites around 30 unrelated files of pre-existing Prettier drift. Format only what you touched: `yarn format:staged <files>`.
- **Never** `yarn lint` or `yarn lint:eslint` — both bake in `--fix` across all of `lib/**` and would mutate the 116 files carrying the existing 250 warnings. Always `npx eslint <specific files>`.
- **Never** run Chromatic or `storybook:build` — metered snapshot quota.
- **Never** commit or push. This skill reports and edits the working tree; the human decides.
- Leave `eslint.config.mjs` and `package.json` untouched. `git diff` on them must be empty when you finish.
- When your fixes touch shipped component behaviour, say a changeset is needed (`patch`) — don't create one.

## Output format

```
## OD best practice — <Name>

A. Code Quality & Structure   ✅ / ⚠️
B. Props & Attributes         ✅ / ⚠️
C. Accessibility              ✅ / ⚠️
D. Testing                    ✅ / ⚠️

### Fixed
- <file>:<line> — what changed

### Needs a decision
- <file>:<line> — what's wrong, and the option you'd take

### Changeset
<needed (patch) because … | not needed — no publishable source changed>
```

Give every finding a real file and line so the author can jump straight to it. "Missing `odComponent`" is not a finding; `lib/components/Button/Button.tsx:112 — root Box has no odComponent` is.
