import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Box } from './Box';
import * as stories from './Box.stories';

const { ComponentAsProp, DataAttributes, ResponsiveProps, Standard } =
	composeStories(stories);

describe('Box', async () => {
	await it('renders the standard Box story', async () => {
		await Standard.run();
		const text = Standard.args.children;
		const boxElement = screen.getByText(text);
		expect(boxElement.tagName).toBe('DIV');
	});

	await it('renders the Box story with responsive props', async () => {
		await ResponsiveProps.run();
		const boxElement = screen.getByText('Resize the viewport');
		expect(boxElement.className).toMatchSnapshot();
	});

	// Test suite for className prop
	await it('merges custom className with component styles', () => {
		render(
			<Box padding="3" className="my-custom-class another-class">
				Custom Class Box
			</Box>,
		);
		const boxElement = screen.getByText('Custom Class Box');
		expect(boxElement.className).toContain('my-custom-class');
		expect(boxElement.className).toContain('another-class');
		expect(boxElement).not.toHaveAttribute('padding');
		expect(boxElement.className).toMatchSnapshot();
	});

	// Test suite for the 'as' prop
	await it('renders as a button element', () => {
		render(<Box as="button">Button Box</Box>);
		const buttonElement = screen.getByRole('button', {
			name: 'Button Box',
		});
		expect(buttonElement.tagName).toBe('BUTTON');
	});

	await it('renders using a React element passed to "as" prop', async () => {
		await ComponentAsProp.run();
		const boxElement = screen.getByText(
			'Styled props merged with custom component',
		);
		expect(boxElement.tagName).toBe('A');
		expect(boxElement).toHaveAttribute('href', '#hello');
		expect(boxElement.className).toContain('keep-my-custom-class-name');
		expect(boxElement).not.toHaveAttribute('backgroundColor');
		expect(boxElement).not.toHaveAttribute('borderColor');
		expect(boxElement).not.toHaveAttribute('borderWidth');
		expect(boxElement).not.toHaveAttribute('p');
	});

	await it('renders as an anchor tag with href', () => {
		render(
			<Box as="a" href="/test-link">
				Anchor Box
			</Box>,
		);
		const anchorElement = screen.getByRole('link', {
			name: 'Anchor Box',
		});
		expect(anchorElement.tagName).toBe('A');
		expect(anchorElement).toHaveAttribute('href', '/test-link');
	});

	// Test suite for data attributes
	await it('renders with odComponent and testId props', async () => {
		await DataAttributes.run();
		const boxElement = screen.getByText('The most basic box (or is it?)');
		expect(boxElement).toHaveAttribute('id', 'so-basic');
		expect(boxElement).toHaveAttribute('data-od-component', 'box-basic');
		expect(boxElement).toHaveAttribute('data-test-id', 'basically-perfect');
		expect(boxElement).toHaveAttribute(
			'data-custom-attribute',
			'somewhat less basic',
		);
	});

	// Test suite for style props
	await it('applies basic style props (padding)', () => {
		render(<Box padding="4">Padded Box</Box>);
		const boxElement = screen.getByText('Padded Box');
		expect(boxElement.className).toMatchSnapshot();
	});

	await it('applies responsive style props for padding', () => {
		render(<Box padding={['2', '4', '6']}>Responsive Padded Box</Box>);
		const boxElement = screen.getByText('Responsive Padded Box');
		expect(boxElement.className).toMatchSnapshot();
	});

	await it('applies colour and backgroundColour props', () => {
		render(
			<Box color="onSurface" backgroundColor="danger">
				Coloured Box
			</Box>,
		);
		const boxElement = screen.getByText('Coloured Box');
		expect(boxElement.className).toMatchSnapshot();
	});

	await it('applies border props correctly', () => {
		render(
			<Box borderColor="warning" borderWidth="2">
				Bordered Box
			</Box>,
		);
		const boxElement = screen.getByText('Bordered Box');
		expect(boxElement.className).toMatchSnapshot();
	});
});
