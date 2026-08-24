---
allowed-tools: Bash(.claude/skills/od-best-practice/scripts/*), Bash(npx eslint *), Bash(npx tsc *), Bash(yarn test *), Bash(yarn format:staged *), Bash(git *), Read, Edit, Write, Glob, Grep
argument-hint: [ComponentName]
description: Run the OD component checklist and apply the judgement calls, not just the mechanical fixes
disable-model-invocation: true
---

# OD Best Practice — fix mode

Run the `od-best-practice` skill over **$ARGUMENTS** in `fix` mode.

The checklist itself lives in
[.claude/skills/od-best-practice/SKILL.md](../skills/od-best-practice/SKILL.md) —
read it and follow it. Nothing about the four sections is restated here on
purpose: this repo already carries the checklist in several places and they have
drifted apart, so a second copy would be a third answer to the same question.

With no component name, scope to the components touched by the current branch.

## What this command changes

Plain `/od-best-practice` fixes the mechanical bucket and reports the rest. This
command additionally applies the judgement calls — see the `fix` mode section of
the skill for the split. The half that matters:

**Confirm before applying**, one item at a time, saying what breaks and for whom:

- renaming or removing a prop, or narrowing a props type
- adding `cssLayerComponent` to styles that don't have it
- anything that moves focus or reshapes the accessibility tree
- changing a rendered element

These break consumers at compile time or at render, and the person who finds out
is an MFE author in their own PR rather than you in this one. That is the whole
reason this is a separate command instead of the default: the mode is opt-in, and
so is each break inside it.

## Still off the table

Writing tests, creating the changeset, committing, pushing, Chromatic,
`yarn format` or `yarn lint` repo-wide. `fix` mode widens what gets edited; it
does not relax the hard constraints in the skill.

Report the changeset severity the change actually earns — a removed or renamed
prop is a `major`, not the `patch` the mechanical bucket gets.

MFE blast radius is not measured here. After a breaking change, run
`od-prereview`.
