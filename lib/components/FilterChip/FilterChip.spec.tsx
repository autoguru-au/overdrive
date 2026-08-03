import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { FilterChip } from '.';

describe('<FilterChip />', () => {
	it('should not throw', () => {
		expect(() =>
			render(<FilterChip label="Vehicle type:" />),
		).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(
				<FilterChip
					label="Vehicle type:"
					value="Truck"
					onClick={() => {}}
					onRemove={() => {}}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should render a static element when given no handlers', () => {
		const { container } = render(
			<FilterChip label="Truck" type="simple" />,
		);

		expect(container.querySelectorAll('button')).toHaveLength(0);
	});

	it('should render sibling buttons, never nested ones', () => {
		const { container } = render(
			<FilterChip
				label="Vehicle type:"
				value="Truck"
				onClick={() => {}}
				onRemove={() => {}}
			/>,
		);

		expect(container.querySelectorAll('button')).toHaveLength(2);
		expect(container.querySelector('button button')).toBeNull();
	});

	it('should not render a remove button for the add chip', () => {
		const { container } = render(
			// @ts-expect-error — an `add` chip has no filter to remove, so the
			// union rejects `onRemove`. Asserted here so the runtime stays
			// defensive for JavaScript consumers.
			<FilterChip
				label="Add Filter"
				type="add"
				onClick={() => {}}
				onRemove={() => {}}
			/>,
		);

		expect(container.querySelectorAll('button')).toHaveLength(1);
	});

	it('should still warn when an add chip has no onClick', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

		// @ts-expect-error — the union makes `onClick` required on an `add`
		// chip, so this is unreachable from TypeScript. The runtime guard is
		// what a JavaScript consumer gets instead.
		render(<FilterChip label="Add Filter" type="add" />);

		expect(warn).toHaveBeenCalledWith(
			expect.stringContaining('an "add" chip needs an onClick'),
			expect.any(String),
		);

		warn.mockRestore();
	});

	describe('content', () => {
		it('should render the operator only for a numeric chip', () => {
			const { rerender } = render(
				<FilterChip
					label="Usage (km):"
					operator="over"
					type="numeric"
					value="100,000 km"
				/>,
			);

			expect(screen.getByText('over')).toBeInTheDocument();

			rerender(
				// @ts-expect-error — only `numeric` takes an operator.
				<FilterChip
					label="Usage (km):"
					operator="over"
					type="select"
					value="100,000 km"
				/>,
			);

			expect(screen.queryByText('over')).not.toBeInTheDocument();
		});

		it('should not render a value for simple or add chips', () => {
			render(
				// @ts-expect-error — a `simple` chip is a bare label.
				<FilterChip label="Truck" type="simple" value="ignored" />,
			);

			expect(screen.queryByText('ignored')).not.toBeInTheDocument();
		});

		it('should render an icon for the add chip only', () => {
			const { container, rerender } = render(
				<FilterChip
					label="Add Filter"
					type="add"
					onClick={() => {}}
				/>,
			);

			expect(container.querySelector('svg')).not.toBeNull();

			rerender(<FilterChip label="Truck" type="simple" />);

			expect(container.querySelector('svg')).toBeNull();
		});
	});

	describe('accessible state', () => {
		it('should not report a toggle state unless told it is a toggle', () => {
			render(
				<FilterChip
					label="State:"
					onClick={() => {}}
					selected
					value="QLD"
				/>,
			);

			// `selected` is a visual state — announcing an applied filter as
			// "not pressed" would contradict the chip's own text.
			expect(screen.getByRole('button')).not.toHaveAttribute(
				'aria-pressed',
			);
		});

		it('should report aria-pressed when it is a toggle', () => {
			render(
				<FilterChip
					label="Serviced"
					pressed
					type="simple"
					onClick={() => {}}
				/>,
			);

			expect(screen.getByRole('button')).toHaveAttribute(
				'aria-pressed',
				'true',
			);
		});

		it('should report a disclosure when it controls a popover', () => {
			render(
				<FilterChip
					expanded={false}
					label="State:"
					onClick={() => {}}
					value="QLD"
				/>,
			);
			const body = screen.getByRole('button');

			expect(body).toHaveAttribute('aria-expanded', 'false');
			expect(body).toHaveAttribute('aria-haspopup', 'true');
			expect(body).not.toHaveAttribute('aria-pressed');
		});

		it('should let a consumer override aria-haspopup', () => {
			render(
				<FilterChip
					aria-haspopup="dialog"
					expanded
					label="State:"
					onClick={() => {}}
					value="QLD"
				/>,
			);

			expect(screen.getByRole('button')).toHaveAttribute(
				'aria-haspopup',
				'dialog',
			);
		});
	});

	describe('remove button', () => {
		it('should name the filter and its value, stripping the trailing colon', () => {
			render(
				<FilterChip label="State:" onRemove={() => {}} value="QLD" />,
			);

			expect(
				screen.getByRole('button', { name: 'Remove State QLD filter' }),
			).toBeInTheDocument();
		});

		it('should distinguish two chips from the same category', () => {
			render(
				<>
					<FilterChip
						label="State:"
						onRemove={() => {}}
						value="QLD"
					/>
					<FilterChip
						label="State:"
						onRemove={() => {}}
						value="NSW"
					/>
				</>,
			);

			expect(screen.getAllByRole('button')).toHaveLength(2);
			expect(
				screen.getByRole('button', { name: 'Remove State NSW filter' }),
			).toBeInTheDocument();
		});

		it('should include the operator for a numeric chip', () => {
			render(
				<FilterChip
					label="Usage (km):"
					operator="over"
					onRemove={() => {}}
					type="numeric"
					value="100,000 km"
				/>,
			);

			expect(
				screen.getByRole('button', {
					name: 'Remove Usage (km) over 100,000 km filter',
				}),
			).toBeInTheDocument();
		});

		it('should defer to an explicit removeLabel', () => {
			render(
				<FilterChip
					label="State:"
					onRemove={() => {}}
					removeLabel="Clear state"
					value="QLD"
				/>,
			);

			expect(
				screen.getByRole('button', { name: 'Clear state' }),
			).toBeInTheDocument();
		});
	});

	describe('consumer escape hatches', () => {
		it('should forward a ref to the chip body', () => {
			const ref = createRef<HTMLButtonElement>();

			render(
				<FilterChip
					label="State:"
					onClick={() => {}}
					onRemove={() => {}}
					ref={ref}
					value="QLD"
				/>,
			);

			// The body, not the container — this is what Popover anchors to.
			expect(ref.current).toBeInstanceOf(HTMLButtonElement);
			expect(ref.current).toHaveTextContent('QLD');
		});

		it('should pass id and aria attributes to the chip body', () => {
			render(
				<FilterChip
					aria-controls="state-popover"
					expanded
					id="state-chip"
					label="State:"
					onClick={() => {}}
					onRemove={() => {}}
					value="QLD"
				/>,
			);
			// The body precedes the `×` in document order, and is where these
			// belong — the remove button has its own name and no disclosure.
			const [body, remove] = screen.getAllByRole('button');

			expect(remove).toHaveAccessibleName('Remove State QLD filter');
			expect(body).toHaveAttribute('id', 'state-chip');
			expect(body).toHaveAttribute('aria-controls', 'state-popover');
		});
	});
});
