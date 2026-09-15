import { ArrowRightIcon } from '@autoguru/icons';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Box } from '../Box/Box';

import { TextLink } from './TextLink';

describe('<TextLink />', () => {
	it('should render as anchor by default', () => {
		render(<TextLink href="/test">Link text</TextLink>);

		const link = screen.getByRole('link');
		expect(link.tagName).toBe('A');
		expect(link).toHaveAttribute('href', '/test');
		expect(link).toHaveTextContent('Link text');
	});

	it('should render with different element using as prop', () => {
		render(
			<TextLink as="button" data-testid="link-button">
				Button link
			</TextLink>,
		);

		const button = screen.getByTestId('link-button');
		expect(button.tagName).toBe('BUTTON');
		expect(button).toHaveTextContent('Button link');
	});

	it('should colour the label on the as path', () => {
		// The `as` path never receives the root class, so the label is the only
		// place the link colour can live — 4 MFE call sites rely on this.
		render(
			<TextLink as={<Box as="a" href="/test" data-testid="as-link" />}>
				Link text
			</TextLink>,
		);

		expect(
			screen.getByTestId('as-link').firstElementChild?.className,
		).toContain('legacyLabel');
	});

	describe('linked text', () => {
		it('should keep the established appearance without a variant', () => {
			render(<TextLink href="/test">Link text</TextLink>);

			expect(screen.getByRole('link').className).not.toContain(
				'linkedText',
			);
		});

		it('should keep the established appearance for muted', () => {
			render(
				<TextLink href="/test" muted>
					Link text
				</TextLink>,
			);

			expect(screen.getByRole('link').className).not.toContain(
				'linkedText',
			);
		});

		it.each(['primary', 'secondary', 'critical'] as const)(
			'should render the %s variant',
			(variant) => {
				render(
					<TextLink href="/test" variant={variant}>
						Link text
					</TextLink>,
				);

				const link = screen.getByRole('link');
				expect(link).toHaveTextContent('Link text');
				expect(link.className).toContain('linkedText');
			},
		);

		it('should mark a disabled variant as unavailable', () => {
			render(
				<TextLink href="/test" variant="primary" disabled>
					Link text
				</TextLink>,
			);

			const link = screen.getByRole('link');
			expect(link).toHaveAttribute('aria-disabled', 'true');
			expect(link).toHaveAttribute('tabindex', '-1');
		});

		it('should not activate when disabled, even programmatically', () => {
			const onClick = vi.fn();
			render(
				<TextLink
					href="/test"
					variant="primary"
					disabled
					onClick={onClick}
				>
					Link text
				</TextLink>,
			);

			const link = screen.getByRole('link');
			// `aria-disabled` and `tabIndex` are advisory, and the stylesheet's
			// `pointer-events: none` only stops the mouse — a programmatic
			// click would otherwise still navigate and still run the handler.
			fireEvent.click(link);
			expect(onClick).not.toHaveBeenCalled();
		});

		it('should ignore disabled without a variant', () => {
			render(
				<TextLink href="/test" disabled>
					Link text
				</TextLink>,
			);

			expect(screen.getByRole('link')).not.toHaveAttribute(
				'aria-disabled',
			);
		});

		it('should render the icon after the label', () => {
			render(
				<TextLink href="/test" variant="primary" icon={ArrowRightIcon}>
					Link text
				</TextLink>,
			);

			const link = screen.getByRole('link');
			expect(link.querySelector('[data-od-component="icon"]')).toBe(
				link.lastElementChild,
			);
		});
	});
});
