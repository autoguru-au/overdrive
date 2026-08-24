import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { StickyFooterModal } from './StickyFooterModal';

const GUIDE = `
A modal shell with a fixed header, a scrollable body, and a sticky footer of
CTAs. The title and CTAs stay in view while the body scrolls, so the user
never loses sight of what they're about to confirm — even in a long form
or list.

> ⚠️ **This is not a lightweight modal.** If the content fits without scrolling,
> or there is nothing to commit, reach for [Modal: Minimal](/docs/components-modal-modal-minimal--docs)
> or [Modal: Standard with Title](/docs/components-modal-standard-with-title--docs)
> instead.

## Choosing a footer layout

| \`footer\` | Shows | Use it for |
| --- | --- | --- |
| \`dual-cta\` *(default)* | secondary + primary, right-aligned with a 12px gap | The usual case — the user can commit or cancel |
| \`single-cta\` | one primary, right-aligned | A task with only one meaningful action, where dismiss is enough of a "no" |

Reach for \`dual-cta\` whenever the primary action is destructive or irreversible,
so cancel is a first-class option rather than something the user has to hunt
for. Use \`single-cta\` only when a plain dismiss (backdrop, Escape, close ×) is
a safe "back out".

## Anatomy

Three regions in a fixed vertical stack.

**Header** — the title in \`H2\` weight and a 32×32 close × icon on the right,
with a 1px \`color/border/default\` divider along the bottom. 32px horizontal
padding, 24px vertical.

**Body** — full width, flexible height, scrolls vertically. 24px horizontal
padding, 16px vertical. A soft shadow appears at the top edge as soon as
the body has scrolled, so the header reads as floating above the content.

**Sticky footer** — buttons right-aligned with a 12px gap and a 1px
\`color/border/default\` divider along the top. 32px horizontal padding, 24px
vertical. In \`dual-cta\` the secondary sits before the primary; in \`single-cta\`
the primary sits alone.

The shell has \`border/radius/xlarge\` corners, sits on top of a semi-transparent
backdrop, and never shrinks below 400px tall.

## What the handlers decide

Consumers pass one \`onRequestClose\` and, optionally, the primary/secondary
click handlers. \`onRequestClose\` fires with a reason so a single handler can
route every exit path.

| Reason | Fired when |
| --- | --- |
| \`'button'\` | The close × is clicked |
| \`'backdrop'\` | The backdrop overlay is clicked |
| \`'escapeKeyDown'\` | The user presses Escape |
| \`'primary'\` | The primary CTA is clicked (after \`onPrimaryClick\`) |
| \`'secondary'\` | The secondary CTA is clicked (after \`onSecondaryClick\`) |

Primary and secondary clicks auto-close by default. Opt out with
\`closeOnPrimary={false}\` / \`closeOnSecondary={false}\` when the CTA validates
or performs async work and you want to keep the modal open until it's done.

\`primaryDisabled\` disables the primary CTA — it still owns focus order and
keyboard events, but click and Enter/Space no longer fire.

## States

Two: default and scrolled.

At rest the header sits flush against the body with just the 1px divider. As
soon as the body has scrolled below its top edge, a soft drop-shadow appears
under the header so it reads as floating above the content. The shadow
disappears again once the body is scrolled back to the top. There is no
separate story for it — scroll the Dual or Single CTA examples to see it.

## Interactions

**Opening.** Backdrop fades in and the modal scales from 95% → 100% while
fading in (200ms ease-out). Focus jumps into the modal and stays trapped
there; body scroll on the page underneath is locked.

**Closing.** From every exit path (×, backdrop, Escape, primary, secondary)
the modal fades out and scales back to 95% while the backdrop fades out.
Focus returns to the element that opened the modal.

**Scrolling.** The body scrolls vertically. Header and footer stay put. A top
shadow appears on the body as a scroll hint, and disappears when the body
scrolls back to the top.

## Do and don't

| ✓ Do | ✗ Don't |
| --- | --- |
| Use a clear, action-oriented title that describes the task | Use vague titles like *"Are you sure?"* or *"Confirm"* |
| Keep primary CTA text short and specific (e.g. *"Add asset"*) | Stack more than two buttons in the footer |
| Use \`dual-cta\` when the action is destructive or irreversible | Nest modals inside other modals |
| Allow Escape key and backdrop click to dismiss | Use \`single-cta\` without an alternative dismiss path |
| Return focus to the trigger element on close | Place navigation or complex multi-step flows inside the modal |
| Show a scroll shadow when body content overflows | Disable backdrop dismiss without clear visual feedback |

## Accessibility

The modal must be fully operable without a mouse and announce correctly to
screen readers.

**Keyboard.** \`Tab\` and \`Shift+Tab\` move focus between interactive elements
inside the modal, and focus is trapped there while it is open. \`Escape\` closes
the modal and fires \`onRequestClose('escapeKeyDown')\`. \`Enter\` and \`Space\`
activate the focused CTA. Arrow keys navigate within body content.

**ARIA.** The dialog is announced with \`role="dialog"\` and \`aria-modal="true"\`,
and \`aria-labelledby\` points at the title so the screen reader reads it on
open. Pass \`aria-describedby\` with the id of a description element in the
body if there is extra context worth reading out. The close × is a real
\`<button>\` with \`aria-label="Close dialog"\`.

**Visual.** Focus ring is drawn in \`color/info/foreground\` at 2px, with a
minimum 44×44 touch target on the close × and both CTAs (WCAG 2.5.5 Target
Size Enhanced). Text meets 4.5:1 contrast, and the scroll shadow is a visible
overflow cue. Screen readers announce the modal on open and dismiss on close.

**Motion.** Entry runs at 200ms ease-out; exit at 200ms with the same easing.
Focus trap activates immediately on open. Under \`prefers-reduced-motion\` all
transitions are skipped, including the 95% → 100% scale on the modal panel.
There is no auto-dismiss or timeout.

## Responsive

From tablet up the modal centres in the viewport with a max-width and equal
margin from the edges. On mobile it docks to the bottom of the screen, top
corners rounded, filling the viewport width — so the CTAs sit within thumb
reach.
`;

const meta = {
	title: 'Components/Modal: Sticky footer CTAs',
	tags: ['skip-themes'],
	component: StickyFooterModal,
	argTypes: {
		children: { control: false },
	},
	parameters: {
		docs: {
			description: { component: GUIDE },
			story: { inline: false, iframeHeight: 620 },
		},
	},
} satisfies Meta<typeof StickyFooterModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const longBody = (
	<Box paddingX="5" paddingY="7">
		{Array.from({ length: 8 }).map((_, i) => (
			<React.Fragment key={i}>
				<Text size="p1" color="secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Duis convallis neque a laoreet maximus. Vestibulum
					hendrerit quam at mi venenatis faucibus at vel nisi. In ut
					risus et ipsum tincidunt tempor. Suspendisse potenti.
					Praesent faucibus posuere risus, at congue mauris porttitor
					ut. Donec sit amet elit vitae purus dictum aliquet quis ut
					ligula. Orci varius natoque penatibus et magnis dis
					parturient montes, nascetur ridiculus mus. Vestibulum dui
					sapien, porttitor ac erat vel, malesuada rutrum mauris.
				</Text>
				<br />
			</React.Fragment>
		))}
	</Box>
);

export const DualCTA: Story = {
	args: {
		title: 'Heading',
		isOpen: true,
		onRequestClose: action('onRequestClose'),
		footer: 'dual-cta',
		primaryLabel: 'Primary',
		secondaryLabel: 'Secondary',
		onPrimaryClick: action('onPrimaryClick'),
		onSecondaryClick: action('onSecondaryClick'),
		children: longBody,
	},
};

export const SingleCTA: Story = {
	args: {
		title: 'Heading',
		isOpen: true,
		onRequestClose: action('onRequestClose'),
		footer: 'single-cta',
		primaryLabel: 'Primary',
		onPrimaryClick: action('onPrimaryClick'),
		children: longBody,
	},
};
