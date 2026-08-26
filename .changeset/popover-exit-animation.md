---
'@autoguru/overdrive': minor
---

`PopoverTrigger` now holds the popover mounted while its exit animation plays.

Closing used to drop the whole subtree in one commit, so a consumer had no way
to animate the popover on its way out. The popover root now picks up a
`data-exiting` attribute when a close is requested, and stays mounted until the
animations running under that root have finished. Endless animations such as a
loading spinner are ignored, and a 1000ms cap covers an animation that stalls or
never settles, so nothing can strand the popover on screen.

`PopoverTrigger` takes no new props and there is nothing to opt into. The
attribute is set before the animations are read, so CSS keyed off
`[data-exiting]` is already running by the time it gets measured, and a popover
with nothing to play unmounts in the same commit it always has, with no extra
render. The tests count renders across the close to prove that rather than take
it on faith. `Popover` itself, which is exported for advanced use, gains two
optional props, `isExiting` and `rootRef`, that `PopoverTrigger` uses to drive
this.

`DatePicker` and `DateField` are the two components in the library using
`PopoverTrigger`. Neither animates, so both behave exactly as before.
