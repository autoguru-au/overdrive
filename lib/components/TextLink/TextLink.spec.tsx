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
});
