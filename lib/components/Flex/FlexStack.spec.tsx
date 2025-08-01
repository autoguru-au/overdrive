import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { FlexStack } from './FlexStack';
import * as stories from './FlexStack.stories';

const { Standard } = composeStories(stories);

const COMPONENT_NAME = 'flex-stack';
const DATA_OD_COMPONENT_ATTR = 'data-od-component';
const ARIA_LABEL_ATTR = 'aria-label';

describe('<FlexStack />', () => {
	it('has correct displayName', () => {
		expect(FlexStack.displayName).toBe('FlexStack');
	});

	describe('Component Behavior', () => {
		it('renders with default props', () => {
			render(<Standard data-testid={COMPONENT_NAME} />);

			const container = screen.getByTestId(COMPONENT_NAME);
			expect(container).toHaveAttribute(
				DATA_OD_COMPONENT_ATTR,
				COMPONENT_NAME,
			);
		});

		it('renders children', () => {
			render(<Standard />);

			expect(screen.getByText('1')).toBeInTheDocument();
			expect(screen.getByText('2')).toBeInTheDocument();
			expect(screen.getByText('3')).toBeInTheDocument();
			expect(screen.getByText('4')).toBeInTheDocument();
			expect(screen.getByText('5')).toBeInTheDocument();
		});

		it('renders with custom element using as prop', () => {
			render(<Standard as="section" data-testid={COMPONENT_NAME} />);

			const container = screen.getByTestId(COMPONENT_NAME);
			expect(container?.tagName.toLowerCase()).toBe('section');
		});

		it('renders with nav element using as prop', () => {
			render(<Standard as="nav" data-testid={COMPONENT_NAME} />);

			const container = screen.getByTestId(COMPONENT_NAME);
			expect(container?.tagName.toLowerCase()).toBe('nav');
		});

		it('handles no children gracefully', () => {
			render(<Standard data-testid="empty-flex">{}</Standard>);

			const container = screen.getByTestId('empty-flex');
			expect(container).toHaveAttribute(
				DATA_OD_COMPONENT_ATTR,
				COMPONENT_NAME,
			);
		});

		it('forwards HTML attributes', () => {
			render(
				<Standard
					data-testid="flex-stack-test"
					aria-label="Flex stack container"
					id="test-flex"
				/>,
			);

			const container = screen.getByTestId('flex-stack-test');
			expect(container).toHaveAttribute(
				ARIA_LABEL_ATTR,
				'Flex stack container',
			);
			expect(container).toHaveAttribute('id', 'test-flex');
			expect(container).toHaveAttribute(
				DATA_OD_COMPONENT_ATTR,
				COMPONENT_NAME,
			);
		});
	});

	describe('Accessibility', () => {
		it('supports ARIA attributes', () => {
			render(
				<Standard
					role="group"
					aria-label="Navigation items"
					aria-describedby="nav-description"
				/>,
			);

			const container = screen.getByRole('group');
			expect(container).toHaveAttribute('aria-label', 'Navigation items');
			expect(container).toHaveAttribute(
				'aria-describedby',
				'nav-description',
			);
		});

		it('works with semantic HTML elements', () => {
			render(<Standard as="nav" aria-label="Main navigation" />);

			const nav = screen.getByRole('navigation');
			expect(nav).toHaveAttribute(ARIA_LABEL_ATTR, 'Main navigation');
		});
	});
});
