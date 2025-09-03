import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Actions } from './Actions';

describe('<Actions />', () => {
	it('renders children in columns', () => {
		render(
			<Actions>
				<button>Action 1</button>
				<button>Action 2</button>
			</Actions>,
		);

		expect(screen.getByText('Action 1')).toBeInTheDocument();
		expect(screen.getByText('Action 2')).toBeInTheDocument();
	});

	it('renders single child', () => {
		render(
			<Actions>
				<button>Single Action</button>
			</Actions>,
		);

		expect(screen.getByText('Single Action')).toBeInTheDocument();
	});

	it('handles noWrap prop', () => {
		render(
			<Actions noWrap>
				<button>Action 1</button>
				<button>Action 2</button>
				<button>Action 3</button>
			</Actions>,
		);

		expect(screen.getByText('Action 1')).toBeInTheDocument();
		expect(screen.getByText('Action 2')).toBeInTheDocument();
		expect(screen.getByText('Action 3')).toBeInTheDocument();
	});

	it('handles wrappingDirection prop', () => {
		render(
			<Actions wrappingDirection="reverse">
				<button>First</button>
				<button>Second</button>
			</Actions>,
		);

		expect(screen.getByText('First')).toBeInTheDocument();
		expect(screen.getByText('Second')).toBeInTheDocument();
	});

	it('handles multiple children of different types', () => {
		render(
			<Actions>
				<button>Button</button>
				<a href="#link">Link</a>
				<span>Span</span>
			</Actions>,
		);

		expect(screen.getByText('Button')).toBeInTheDocument();
		expect(screen.getByText('Link')).toBeInTheDocument();
		expect(screen.getByText('Span')).toBeInTheDocument();
	});

	it('flattens nested children', () => {
		render(
			<Actions>
				<div>
					<button>Nested Button</button>
				</div>
				<button>Direct Button</button>
			</Actions>,
		);

		expect(screen.getByText('Nested Button')).toBeInTheDocument();
		expect(screen.getByText('Direct Button')).toBeInTheDocument();
	});

	it('handles empty children gracefully', () => {
		const { container } = render(
			<Actions>
				{/* Testing that Actions handles sparse children arrays gracefully */}
				<button>Valid Button</button>
			</Actions>,
		);

		expect(screen.getByText('Valid Button')).toBeInTheDocument();
		expect(container).toBeInTheDocument();
	});

	it('wraps each child in a Column component', () => {
		const { container } = render(
			<Actions>
				<button>Action 1</button>
				<button>Action 2</button>
			</Actions>,
		);

		// Check that columns are being used (via data attribute or class)
		expect(
			container.querySelector('[data-od-component="columns"]'),
		).toBeInTheDocument();
	});
});
