#!/usr/bin/env bash
# added.sh <base> [pathspec...] - added lines as file:line:content.
# Piping git diff into grep -n numbers the diff stream, not the file, which hands
# the author line numbers that point at nothing. This walks the hunk headers instead.
set -uo pipefail
git diff -U0 "$@" | awk '
  /^\+\+\+ b\// { file = substr($0, 7); next }
  /^@@/ { match($0, /\+[0-9]+/); ln = substr($0, RSTART+1, RLENGTH-1); next }
  /^\+/ { print file ":" ln ":" substr($0,2); ln++ }
'
