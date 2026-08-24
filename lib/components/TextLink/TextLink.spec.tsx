import { ArrowRightIcon } from '@autoguru/icons';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

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

	describe('DS-2026 linked text', () => {
		it('should leave the default appearance untouched when variant is unset', () => {
			const { container } = render(
				<TextLink href="/test">Link text</TextLink>,
			);

			// The legacy underline lives on the root; the linked-text recipe
			// must not be applied unless `variant` is set.
			expect(container.querySelector('[class*="linkedText"]')).toBeNull();
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

		it('should not mark a disabled link unavailable without a variant', () => {
			render(
				<TextLink href="/test" disabled>
					Link text
				</TextLink>,
			);

			expect(screen.getByRole('link')).not.toHaveAttribute(
				'aria-disabled',
			);
		});

		it('should order the icon around the label', () => {
			const iconSelector = '[data-od-component="icon"]';

			const { rerender } = render(
				<TextLink href="/test" variant="primary" icon={ArrowRightIcon}>
					Link text
				</TextLink>,
			);

			const trailing = screen.getByRole('link');
			expect(trailing.querySelector(iconSelector)).toBe(
				trailing.lastElementChild,
			);

			rerender(
				<TextLink
					href="/test"
					variant="primary"
					icon={ArrowRightIcon}
					iconPosition="left"
				>
					Link text
				</TextLink>,
			);

			const leading = screen.getByRole('link');
			expect(leading.querySelector(iconSelector)).toBe(
				leading.firstElementChild,
			);
		});
	});
});
