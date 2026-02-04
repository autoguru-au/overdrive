import { composeStories } from '@storybook/react-vite';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, it, expect } from 'vitest';

import { MarkdownRenderer } from './MarkdownRenderer';
import * as stories from './MarkdownRenderer.stories';

const { Headings, InlineFormatting, CodeBlock, Lists, Table, FullDocument } =
	composeStories(stories);

describe('<MarkdownRenderer />', () => {
	afterEach(() => {
		cleanup();
	});

	// Story-based tests
	describe('stories', () => {
		it('renders the FullDocument story', () => {
			const { container } = render(<FullDocument />);
			// Headings
			expect(
				screen.getByRole('heading', { level: 1, name: 'Getting Started with Overdrive' }),
			).toBeInTheDocument();
			// Links
			expect(
				screen.getByRole('link', { name: 'AutoGuru' }),
			).toBeInTheDocument();
			// Table
			expect(screen.getByRole('table')).toBeInTheDocument();
			// Blockquote
			expect(container.querySelector('blockquote')).toBeInTheDocument();
			// Code block
			expect(container.querySelector('pre')).toBeInTheDocument();
			// Image
			expect(screen.getByRole('img')).toBeInTheDocument();
			// Lists
			expect(container.querySelector('ul')).toBeInTheDocument();
			expect(container.querySelector('ol')).toBeInTheDocument();
		});

		it('renders the Headings story with all levels', () => {
			render(<Headings />);
			expect(
				screen.getByRole('heading', { level: 1, name: 'Heading 1' }),
			).toBeInTheDocument();
			expect(
				screen.getByRole('heading', { level: 2, name: 'Heading 2' }),
			).toBeInTheDocument();
			expect(
				screen.getByRole('heading', { level: 6, name: 'Heading 6' }),
			).toBeInTheDocument();
		});

		it('renders the InlineFormatting story', () => {
			const { container } = render(<InlineFormatting />);
			expect(screen.getByText('bold')).toBeInTheDocument();
			expect(container.querySelector('em')).toBeInTheDocument();
			expect(container.querySelector('del')).toBeInTheDocument();
			expect(container.querySelector('code')).toBeInTheDocument();
		});

		it('renders the CodeBlock story', () => {
			const { container } = render(<CodeBlock />);
			expect(container.querySelector('pre')).toBeInTheDocument();
			expect(container.querySelector('pre code')).toBeInTheDocument();
		});

		it('renders the Lists story with ul, ol, and task items', () => {
			const { container } = render(<Lists />);
			expect(container.querySelector('ul')).toBeInTheDocument();
			expect(container.querySelector('ol')).toBeInTheDocument();
			expect(container.querySelectorAll('li').length).toBeGreaterThanOrEqual(
				8,
			);
		});

		it('renders the Table story', () => {
			render(<Table />);
			expect(screen.getByRole('table')).toBeInTheDocument();
			expect(screen.getByText('Feature')).toBeInTheDocument();
			expect(screen.getByText('Headings')).toBeInTheDocument();
		});

	});

	// Component-level tests
	describe('rendering', () => {
		it('renders paragraph content', () => {
			render(<MarkdownRenderer content="Hello world" />);
			expect(screen.getByText('Hello world')).toBeInTheDocument();
		});

		it('renders headings at correct levels', () => {
			render(
				<MarkdownRenderer
					content={'# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6'}
				/>,
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

		it('renders external links with target="_blank"', () => {
			render(
				<MarkdownRenderer content="[External](https://example.com)" />,
			);
			const link = screen.getByRole('link', { name: 'External' });
			expect(link).toHaveAttribute('target', '_blank');
			expect(link).toHaveAttribute('rel', 'noopener noreferrer');
		});

		it('renders internal links without target="_blank"', () => {
			render(<MarkdownRenderer content="[Internal](/about)" />);
			const link = screen.getByRole('link', { name: 'Internal' });
			expect(link).not.toHaveAttribute('target', '_blank');
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

		it('renders inline code', () => {
			const { container } = render(
				<MarkdownRenderer content="Use `console.log` for debugging" />,
			);
			const code = container.querySelector('code');
			expect(code).toBeInTheDocument();
			expect(code).toHaveTextContent('console.log');
		});

		it('renders fenced code blocks', () => {
			const { container } = render(
				<MarkdownRenderer content={'```\nconst x = 1;\n```'} />,
			);
			expect(container.querySelector('pre')).toBeInTheDocument();
			expect(container.querySelector('pre code')).toBeInTheDocument();
			expect(screen.getByText('const x = 1;')).toBeInTheDocument();
		});

		it('renders unordered and ordered lists', () => {
			const { container } = render(
				<MarkdownRenderer
					content={'- item A\n- item B\n\n1. first\n2. second'}
				/>,
			);
			expect(container.querySelector('ul')).toBeInTheDocument();
			expect(container.querySelector('ol')).toBeInTheDocument();
			expect(
				container.querySelectorAll('li').length,
			).toBeGreaterThanOrEqual(4);
		});

		it('renders task list items with checkboxes', () => {
			const { container } = render(
				<MarkdownRenderer
					content={'- [x] Done\n- [ ] Not done'}
				/>,
			);
			const checkboxes = container.querySelectorAll(
				'input[type="checkbox"]',
			);
			expect(checkboxes.length).toBe(2);
			expect(checkboxes[0]).toBeChecked();
			expect(checkboxes[1]).not.toBeChecked();
		});

		it('renders tables with headers and rows', () => {
			const { container } = render(
				<MarkdownRenderer
					content={'| A | B |\n| --- | --- |\n| 1 | 2 |'}
				/>,
			);
			expect(screen.getByRole('table')).toBeInTheDocument();
			expect(container.querySelectorAll('th').length).toBe(2);
			expect(container.querySelectorAll('td').length).toBe(2);
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

		it('renders images with alt text', () => {
			render(
				<MarkdownRenderer content="![Alt text](https://placehold.co/100x100)" />,
			);
			const img = screen.getByRole('img', { name: 'Alt text' });
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute(
				'src',
				'https://placehold.co/100x100',
			);
		});

		it('renders horizontal rules', () => {
			const { container } = render(
				<MarkdownRenderer content={'Above\n\n---\n\nBelow'} />,
			);
			expect(
				container.querySelector('[data-od-component="divider-line"]'),
			).toBeInTheDocument();
		});
	});

	// Props and attributes
	describe('props', () => {
		const OD_COMPONENT_SELECTOR =
			'[data-od-component="markdown-renderer"]';

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
			const root = container.querySelector(OD_COMPONENT_SELECTOR);
			expect(root?.className).toContain('custom-class');
		});

		it('sets data-od-component="markdown-renderer"', () => {
			const { container } = render(
				<MarkdownRenderer content="test" />,
			);
			expect(
				container.querySelector(OD_COMPONENT_SELECTOR),
			).toBeInTheDocument();
		});

		it('forwards ref to the root element', () => {
			const ref = React.createRef<HTMLDivElement>();
			const { container } = render(
				<MarkdownRenderer content="test" ref={ref} />,
			);
			const root = container.querySelector(OD_COMPONENT_SELECTOR);
			expect(ref.current).toBe(root);
		});

		it('renders empty content without errors', () => {
			const { container } = render(
				<MarkdownRenderer content="" />,
			);
			expect(
				container.querySelector(OD_COMPONENT_SELECTOR),
			).toBeInTheDocument();
		});
	});
});
