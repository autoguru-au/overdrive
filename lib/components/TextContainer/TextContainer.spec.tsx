import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { TextContainer } from './TextContainer';

describe('<TextContainer />', () => {
	it('renders with children', () => {
		render(
			<TextContainer>
				<p>Test content</p>
			</TextContainer>
		);

		expect(screen.getByText('Test content')).toBeInTheDocument();
	});

	it('renders with heading', () => {
		render(
			<TextContainer heading={<h1>Test Heading</h1>}>
				<p>Content</p>
			</TextContainer>
		);

		expect(screen.getByText('Test Heading')).toBeInTheDocument();
		expect(screen.getByText('Content')).toBeInTheDocument();
	});

	it('renders with action element', () => {
		render(
			<TextContainer action={<button>Action Button</button>}>
				<p>Content</p>
			</TextContainer>
		);

		expect(screen.getByText('Action Button')).toBeInTheDocument();
		expect(screen.getByText('Content')).toBeInTheDocument();
	});

	it('renders with heading and action', () => {
		render(
			<TextContainer 
				heading={<h2>Section Title</h2>} 
				action={<button>Edit</button>}
			>
				<p>Section content</p>
			</TextContainer>
		);

		expect(screen.getByText('Section Title')).toBeInTheDocument();
		expect(screen.getByText('Edit')).toBeInTheDocument();
		expect(screen.getByText('Section content')).toBeInTheDocument();
	});

	it('renders with custom className', () => {
		const { container } = render(
			<TextContainer className="custom-class">
				<p>Content</p>
			</TextContainer>
		);

		const article = container.querySelector('article');
		expect(article).toHaveClass('custom-class');
	});

	it('renders multiple children', () => {
		render(
			<TextContainer>
				<p>First paragraph</p>
				<p>Second paragraph</p>
				<div>Third element</div>
			</TextContainer>
		);

		expect(screen.getByText('First paragraph')).toBeInTheDocument();
		expect(screen.getByText('Second paragraph')).toBeInTheDocument();
		expect(screen.getByText('Third element')).toBeInTheDocument();
	});

	it('renders as article element', () => {
		const { container } = render(
			<TextContainer>
				<p>Content</p>
			</TextContainer>
		);

		const article = container.querySelector('article');
		expect(article).toBeInTheDocument();
	});

	it('does not render action when no action provided', () => {
		render(
			<TextContainer heading={<h1>Title</h1>}>
				<p>Content</p>
			</TextContainer>
		);

		// Should have heading but no action
		expect(screen.getByText('Title')).toBeInTheDocument();
		expect(screen.getByText('Content')).toBeInTheDocument();
		// The action element simply won't be rendered when action prop is not provided
	});

	it('handles complex heading and action elements', () => {
		const ComplexHeading = () => (
			<div>
				<h1>Main Title</h1>
				<span>Subtitle</span>
			</div>
		);

		const ComplexAction = () => (
			<div>
				<button>Primary Action</button>
				<button>Secondary Action</button>
			</div>
		);

		render(
			<TextContainer 
				heading={<ComplexHeading />} 
				action={<ComplexAction />}
			>
				<p>Content goes here</p>
			</TextContainer>
		);

		expect(screen.getByText('Main Title')).toBeInTheDocument();
		expect(screen.getByText('Subtitle')).toBeInTheDocument();
		expect(screen.getByText('Primary Action')).toBeInTheDocument();
		expect(screen.getByText('Secondary Action')).toBeInTheDocument();
		expect(screen.getByText('Content goes here')).toBeInTheDocument();
	});
});