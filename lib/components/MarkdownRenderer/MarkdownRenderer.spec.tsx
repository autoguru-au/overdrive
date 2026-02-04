import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, it, expect } from 'vitest';

import { MarkdownRenderer } from './MarkdownRenderer';

describe('<MarkdownRenderer />', () => {
	afterEach(() => {
		cleanup();
	});

	it('renders paragraph content', () => {
		render(<MarkdownRenderer content="Hello world" />);
		expect(screen.getByText('Hello world')).toBeInTheDocument();
	});

	it('renders headings at correct levels', () => {
		render(
			<MarkdownRenderer content={'# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6'} />,
		);
		expect(
			screen.getByRole('heading', { level: 1, name: 'H1' }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 2, name: 'H2' }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 3, name: 'H3' }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 4, name: 'H4' }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 5, name: 'H5' }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 6, name: 'H6' }),
		).toBeInTheDocument();
	});

	it('renders links with correct href', () => {
		render(
			<MarkdownRenderer content="[Click here](https://example.com)" />,
		);
		const link = screen.getByRole('link', { name: 'Click here' });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://example.com');
	});

	it('renders inline formatting (bold, italic, strikethrough)', () => {
		const { container } = render(
			<MarkdownRenderer content="**bold** *italic* ~~strikethrough~~" />,
		);
		expect(screen.getByText('bold')).toBeInTheDocument();
		expect(screen.getByText('italic')).toBeInTheDocument();
		expect(container.querySelector('em')).toBeInTheDocument();
		expect(container.querySelector('del')).toBeInTheDocument();
	});

	it('renders code blocks', () => {
		const { container } = render(
			<MarkdownRenderer content={'```\nconst x = 1;\n```'} />,
		);
		expect(container.querySelector('pre')).toBeInTheDocument();
		expect(container.querySelector('code')).toBeInTheDocument();
		expect(screen.getByText('const x = 1;')).toBeInTheDocument();
	});

	it('renders unordered and ordered lists', () => {
		const { container } = render(
			<MarkdownRenderer content={'- item A\n- item B\n\n1. first\n2. second'} />,
		);
		expect(container.querySelector('ul')).toBeInTheDocument();
		expect(container.querySelector('ol')).toBeInTheDocument();
		expect(container.querySelectorAll('li').length).toBeGreaterThanOrEqual(4);
	});

	it('renders tables', () => {
		render(
			<MarkdownRenderer content={'| A | B |\n| --- | --- |\n| 1 | 2 |'} />,
		);
		expect(screen.getByRole('table')).toBeInTheDocument();
		expect(screen.getByText('A')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	it('renders blockquotes', () => {
		const { container } = render(
			<MarkdownRenderer content="> This is a quote" />,
		);
		expect(container.querySelector('blockquote')).toBeInTheDocument();
		expect(screen.getByText('This is a quote')).toBeInTheDocument();
	});

	it('applies testId as data-testid', () => {
		const { container } = render(
			<MarkdownRenderer content="test" testId="my-markdown" />,
		);
		expect(
			container.querySelector('[data-testid="my-markdown"]'),
		).toBeInTheDocument();
	});

	it('applies className', () => {
		const { container } = render(
			<MarkdownRenderer content="test" className="custom-class" />,
		);
		const root = container.querySelector(
			'[data-od-component="markdown-renderer"]',
		);
		expect(root?.className).toContain('custom-class');
	});

	it('sets data-od-component="markdown-renderer"', () => {
		const { container } = render(
			<MarkdownRenderer content="test" />,
		);
		expect(
			container.querySelector(
				'[data-od-component="markdown-renderer"]',
			),
		).toBeInTheDocument();
	});
});
