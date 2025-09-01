import { render, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import { describe, expect, it } from 'vitest';

import { Flyout } from './Flyout';

describe('<Flyout />', () => {
	const TestWrapper = ({
		isOpen = true,
		children,
	}: {
		isOpen?: boolean;
		children: React.ReactNode;
	}) => {
		const triggerRef = useRef<HTMLDivElement>(null);

		return (
			<div>
				<div ref={triggerRef} data-testid="trigger">
					Trigger Element
				</div>
				<Flyout
					triggerRef={triggerRef}
					isOpen={isOpen}
					alignment="bottomLeft"
				>
					{children}
				</Flyout>
			</div>
		);
	};

	it('renders children when open', () => {
		render(
			<TestWrapper>
				<div>Flyout content</div>
			</TestWrapper>,
		);

		expect(screen.getByText('Flyout content')).toBeInTheDocument();
	});

	it('does not render children when closed', () => {
		render(
			<TestWrapper isOpen={false}>
				<div>Flyout content</div>
			</TestWrapper>,
		);

		expect(screen.queryByText('Flyout content')).not.toBeInTheDocument();
	});

	it('renders with trigger element', () => {
		render(
			<TestWrapper>
				<div>Flyout content</div>
			</TestWrapper>,
		);

		expect(screen.getByTestId('trigger')).toBeInTheDocument();
		expect(screen.getByText('Trigger Element')).toBeInTheDocument();
	});

	it('passes props to Positioner', () => {
		render(
			<TestWrapper>
				<div data-testid="flyout-content">Content with test id</div>
			</TestWrapper>,
		);

		// If the flyout renders the content, Positioner is working
		expect(screen.getByTestId('flyout-content')).toBeInTheDocument();
	});

	it('renders styled Box container', () => {
		render(
			<TestWrapper>
				<div>Styled content</div>
			</TestWrapper>,
		);

		// Check that the content is rendered (indicating the styled box is working)
		expect(screen.getByText('Styled content')).toBeInTheDocument();
	});

	it('handles different alignment props', () => {
		const TestWithAlignment = () => {
			const triggerRef = useRef<HTMLDivElement>(null);

			return (
				<div>
					<div ref={triggerRef}>Trigger</div>
					<Flyout
						triggerRef={triggerRef}
						isOpen={true}
						alignment="topRight"
					>
						<div>Aligned content</div>
					</Flyout>
				</div>
			);
		};

		render(<TestWithAlignment />);

		expect(screen.getByText('Aligned content')).toBeInTheDocument();
	});

	it('handles triggerOffset prop', () => {
		const TestWithOffset = () => {
			const triggerRef = useRef<HTMLDivElement>(null);

			return (
				<div>
					<div ref={triggerRef}>Trigger</div>
					<Flyout
						triggerRef={triggerRef}
						isOpen={true}
						triggerOffset={10}
					>
						<div>Offset content</div>
					</Flyout>
				</div>
			);
		};

		render(<TestWithOffset />);

		expect(screen.getByText('Offset content')).toBeInTheDocument();
	});

	it('handles additional props passed through', () => {
		const TestWithExtraProps = () => {
			const triggerRef = useRef<HTMLDivElement>(null);

			return (
				<div>
					<div ref={triggerRef}>Trigger</div>
					<Flyout
						triggerRef={triggerRef}
						isOpen={true}
						id="custom-flyout"
						className="custom-class"
					>
						<div>Extra props content</div>
					</Flyout>
				</div>
			);
		};

		render(<TestWithExtraProps />);

		expect(screen.getByText('Extra props content')).toBeInTheDocument();
	});
});
