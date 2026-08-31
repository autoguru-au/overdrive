#!/usr/bin/env bash
# a11y.sh [ComponentName] - Section C. Turns the jsx-a11y rules on for THIS RUN only.
# eslint-plugin-jsx-a11y is registered in the shared config but extends no rules,
# so a normal lint run catches none of this. No config file is touched and nothing
# is left switched on afterwards.
#
# No --fix, ever: most a11y findings change focus order or the a11y tree, which is
# a decision, not a cleanup.
#
# Calibration: library-wide this returns 15 findings across 9 files. A long list for
# one component means the invocation is wrong, not that the component is a disaster.
set -uo pipefail
TARGET="${1:+lib/components/$1/**/*.tsx}"
TARGET="${TARGET:-lib/**/*.tsx}"
npx eslint "$TARGET" \
  --rule '{"jsx-a11y/alt-text":"warn","jsx-a11y/aria-props":"warn","jsx-a11y/aria-role":"warn","jsx-a11y/aria-unsupported-elements":"warn","jsx-a11y/click-events-have-key-events":"warn","jsx-a11y/no-static-element-interactions":"warn","jsx-a11y/role-has-required-aria-props":"warn","jsx-a11y/role-supports-aria-props":"warn","jsx-a11y/no-noninteractive-element-interactions":"warn","jsx-a11y/interactive-supports-focus":"warn","jsx-a11y/label-has-associated-control":"warn","jsx-a11y/no-redundant-roles":"warn","jsx-a11y/tabindex-no-positive":"warn","jsx-a11y/heading-has-content":"warn","jsx-a11y/anchor-has-content":"warn","jsx-a11y/no-autofocus":"warn"}'
