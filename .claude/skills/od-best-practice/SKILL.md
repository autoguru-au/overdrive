---
name: od-best-practice
description: Check an Overdrive component against the OD component best-practice checklist - clean DOM, props and data attributes, accessibility, and Storybook coverage - then fix the mechanical problems and report the ones needing judgement. Use when someone asks whether a component follows OD standards or best practice, wants the component checklist run over their work, asks to tidy a component up before raising it, or names a component and asks "is this right". Add `fix` to the invocation to also apply the judgement calls, including breaking ones - use that when someone asks to fix everything, clean a component up properly, or says they do not just want a report. Nothing here blocks a commit or a PR; it is a helper you run on demand, on one component or on the current diff.
---

# Overdrive Component Best Practice

Runs the OD component checklist over a component, fixes what can be fixed mechanically, and reports what needs a person. Add `fix` to the invocation and it will apply the judgement calls too — see [`fix` mode](#fix-mode). Nothing here is a gate — it never blocks a commit, a push or a PR. Run it as often or as rarely as is useful.

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

Three helpers ship with this skill. Run them **from the repo root** — they use repo-relative paths:

```bash
OD=.claude/skills/od-best-practice/scripts

$OD/scan.sh <Name>     # Sections B and D — everything greppable, one pass
$OD/a11y.sh <Name>     # Section C
$OD/added.sh <base>    # added lines as file:line:content
```

Use `added.sh` whenever a finding needs **a real file:line**. Piping `git diff` into `grep -n` numbers the diff stream rather than the file, which hands the author line numbers pointing at nothing.

Read the component's `.tsx`, `.css.ts` and `.stories.tsx` before judging anything. The scans are pointers, not verdicts, and none of Section A can be grepped at all.

## Fix policy

Two buckets. Get this wrong and the skill becomes something people stop running.

**Safe to fix** — mechanical, no change to rendered behaviour or public API:

- missing `displayName`
- props type not extending `TestIdProp` / `WithTestId` / `ConsistentComponentProps`, and threading `testId` through to `Box`/`useBox`
- missing `odComponent` on the root
- props interface declared but not exported **from the component file**
- missing JSDoc on props (draft it from how the prop is used)
- camelCase sprinkles values where a kebab alias exists
- unused imports

**Report, never fix silently** — changes behaviour, the public API, or needs a decision. An explicit `fix` request opens this bucket up; see [`fix` mode](#fix-mode):

- anything that renames or removes a prop (breaking for MFEs)
- `any` → a real type
- `no-autofocus` and any other a11y finding that alters focus or interaction
- adding `cssLayerComponent` to styles that don't have it — this changes cascade priority and can shift which rules win in a consuming MFE. Only add a layer to styles you are authoring from scratch
- converting hand-rolled variants to a `recipe`
- adding the props type to `lib/index.ts` or `lib/components/index.ts`. Exporting the interface from the component file is tidying; threading it into those barrels adds to a hand-curated public API, and only 18 of 79 components are in there — so a lone addition is a new export to publish, not consistency
- everything in Section A
- anything in Section D — this skill does not write tests

**Snapshots.** Adding `odComponent` or `testId` changes rendered markup, so committed snapshots will fail — and a red suite you didn't explain reads as if you broke something. Run `yarn test run <Name>` after the mechanical fixes. If the only difference is the attribute you just added, refresh with `yarn test run <Name> -u` and say so in the report. If anything else moved, stop and report it instead: reflexive `-u` is how a real regression gets committed as a snapshot update.

Say what you fixed, as a list. Nothing should land invisibly.

## `fix` mode

`/od-best-practice-fix <Name>` is the way in. The word `fix` in an ordinary request works too — `/od-best-practice fix Switch`, or an ask like "fix everything" / "clean this up properly" — but the dedicated command is explicit-invocation-only, so this mode is never entered on anyone's initiative but yours.

Either route opens the **Report, never fix silently** bucket up for editing. Default mode is unchanged; this is the only way to get behaviour or API changes out of this skill.

The bucket splits in two, and the halves are not treated alike.

**Apply, then say so.** Changes behaviour or internal shape, but nothing an MFE names in its own source can fail on:

- `any` → a real type
- inert ARIA fixes — `no-redundant-roles`, `aria-props` typos, `anchor-has-content`, `heading-has-content`
- hand-rolled variants → a `recipe` with `RecipeVariants`
- Section A structural work: collapsing a single-child wrapper, hoisting a component out of a `useCallback`, lifting logic into a hook
- adding the props type to the `lib/index.ts` / `lib/components/index.ts` barrels

**Name it and wait for a yes.** Each of these breaks a consumer either at compile time or at render, and the person who finds out is an MFE author in their own PR rather than you in this one:

- renaming or removing a prop, or narrowing a props type — dropping an accepted prop is the same break as renaming it, even when nothing in this repo passes it
- adding `cssLayerComponent` to styles that don't have it — cascade priority moves, so an unlayered MFE override that used to lose now wins
- anything that moves focus or reshapes the a11y tree — `no-autofocus`, `tabIndex` changes, adding or changing a `role`
- changing a rendered element (`div` → `span`, `as` defaults) — MFE CSS and DOM snapshots select on these

For each one: say what it breaks, who for, and what you'd do instead if the answer is no. Then wait. Applying these silently is how the skill stops being something people run — which is the whole reason the two buckets exist.

**Changeset severity changes in `fix` mode.** Mechanical fixes are a `patch`. Adding a prop or an export is a `minor`. Removing or renaming a prop, narrowing a type, or moving cascade priority is a `major`. Say which and why — still don't create it.

**Verify before reporting.** After behaviour changes, run `npx tsc --noEmit` and `yarn test run <Name>`, and report what you saw. A "fix" that breaks the build or the suite is not a fix, and in this mode you can no longer lean on "I only touched mechanical things" as evidence it's safe.

`fix` mode does not change the hard constraints below, and it still writes no tests and creates no changeset. It also does not measure MFE blast radius — that's `od-prereview`, and after a breaking change you want it.

## Section A — Code Quality & Structure

Read the component and judge. No commands here.

- **Clean DOM.** Semantic element chosen via `as`. No wrapper that only forwards a single child. No nested element doing what one sprinkles prop would do. Decorative elements carry `aria-hidden`.
- **Efficient state.** Object or array literals created inline in render, components declared inside components, unstable callbacks handed to many children. React 19's compiler handles ordinary memoisation, so only flag heavy computation, large transformations, and genuinely expensive child renders — do not suggest adding `useMemo`/`useCallback` for their own sake.
- **Modularity.** Single responsibility. Logic that wants to be a hook. Composed from `useBox`, `Text`, `FlexStack` rather than new base elements.
- **Localisable.** User-facing copy hardcoded inside the component instead of arriving as props or children. Dates, times, numbers and currency assembled by concatenation or slicing rather than `Intl`. Layout that assumes English string length.

## Section B — Props & Attributes

`$OD/scan.sh <Name>` covers this section and Section D in one pass.

- **`data-od-component`** — root element sets `odComponent`. `useBox` only lowercases the value (`lib/components/Box/useBox/useBox.ts:275`), so pass the kebab-case name you want in the markup: `odComponent="progress-spinner"`, not `"ProgressSpinner"`. House examples: `Badge` → `"badge"`, `ProgressSpinner` → `"progress-spinner"`.
- **`testId`** — props extend one of the interfaces in `lib/types/index.ts:31-48` and pass `testId` down. Note AGENTS.md also says tests should use semantic queries over test IDs: the prop exists for consumers, not as an excuse for `getByTestId` in our own stories.
- **Consistent naming** — `color` for new design-system tokens, `colour` for the legacy palette. Renaming an existing prop is breaking; report it.
- **Clear interface** — props type exported from the component file, every prop carrying JSDoc. `Badge.tsx` is the reference shape for props, though not for the rest of the checklist: it has no `displayName`, no interaction test, and its JSDoc points consumers at a `styledBadge` recipe that no barrel exports.
- **Barrel exports** — whether the props type also appears in `lib/index.ts` / `lib/components/index.ts` is a separate question from whether it is exported at all. Those files are hand-curated export lists and only 18 of 79 components appear in them, so report it rather than adding one.
- **Styling props from sprinkles** — CSS-like props come from `sprinkles` (`lib/styles/sprinkles.css.ts`), with kebab-case values (`'flex-end'`, `'space-between'`). Sprinkles accepts the camelCase spelling too, but kebab is house style. Do **not** edit the alias table at `lib/styles/sprinkles.css.ts:17-33` — those aliases are public API and MFEs use them.

  Match **quoted values only**, as `scan.sh` does. Matching the bare word instead pulls in two things that are correct and must be left alone: the `spaceBetween` boolean shortcut prop on `Flex`/`FlexInline`/`inline()`, and recipe variant *keys* like `flexEnd: [borderRoundTop]` in `MinimalModal.css.ts`. Library-wide the tightened grep returns two genuine hits — `Calendar.css.ts:23` and `HorizontalAutoScroller.tsx:178` — so more than a couple per component means the pattern has drifted.
- **Variants** — variant-bearing styles use a `recipe` and the component derives its prop types from `RecipeVariants`. `lib/components/Badge/Badge.css.ts` + `Badge.tsx` is the canonical pair. About 17 components do this; the rest hand-roll, so report rather than convert.
- **No `any`** — report with the type you would use.

## Section C — Accessibility

`eslint-plugin-jsx-a11y` is registered in the shared config but extends no rules, so a normal lint run catches none of this. `$OD/a11y.sh <Name>` switches the 16 rules on for that invocation only — no config change, nothing left switched on afterwards. Called with no argument it scans the whole library.

Never add `--fix`. For calibration, library-wide the script returns 15 findings across 9 files, so per-component output should be short — a long list means the invocation is wrong, not that the component is catastrophic.

- **ARIA** — fix only the inert ones: `no-redundant-roles`, `aria-props` typos, `anchor-has-content`, `heading-has-content`. Report the rest.
- **Keyboard** — interactive element with `onClick` and no key handling, or a non-interactive element given interaction. React Aria (`@react-aria/*`) is the house fix; suggest it, don't rewrite the component unasked.
- **Visible focus** — check for `:focus-visible` or `focusOutline` from `lib/styles/focusOutline.css.ts`.

## Section D — Testing

Report only, then hand off — do not write tests here.

`$OD/scan.sh <Name>` covers the story and spec checks.

- At least one story with an Interaction `play` function (AGENTS.md: one per component minimum). Play functions use `getAllByRole` and take the first item, and split into `step` calls. Library-wide only 17 of 89 story files have one, so expect this to be the most common gap.

  If you check by hand, word-bound the search: `grep 'play:'` also matches `display:`, so it reports phantom interaction tests on components that have none — `Badge.stories.tsx` returns two such false hits and has no `play` function at all. Same trap as the sprinkles grep above, and worth remembering whenever a short token could sit inside a longer word.
- A leftover spec whose coverage a story could carry. Check **both** extensions: `.spec.jsx` (43 files) actually outnumbers `.spec.tsx` (39), and the untyped ones are where stale props hide, since `.jsx` skips typechecking. Against 89 story files this migration is clearly live — AGENTS.md keeps unit tests only for primitives with complex internal logic.
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

(in `fix` mode, add:)

### Applied by request
- <file>:<line> — the judgement call taken, and why that option

### Waiting on you
- <file>:<line> — what this breaks, who for, and the fallback if it's a no

### Changeset
<needed (patch) because … | not needed — no publishable source changed>
```

Give every finding a real file and line so the author can jump straight to it. "Missing `odComponent`" is not a finding; `lib/components/Button/Button.tsx:112 — root Box has no odComponent` is.
