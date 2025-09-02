import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { OverdriveProvider, useTheme } from './OverdriveProvider';

// Test component to verify provider context
const TestComponent = () => {
	const theme = useTheme();
	return <div data-testid="themed-component">Theme: {theme.themeName}</div>;
};

describe('<OverdriveProvider />', () => {
	it('should provide theme context to children', () => {
		render(
			<OverdriveProvider>
				<TestComponent />
			</OverdriveProvider>,
		);

		const component = screen.getByTestId('themed-component');
		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('Theme:');
	});

	it('should render children correctly', () => {
		render(
			<OverdriveProvider>
				<div data-testid="child-element">Child content</div>
			</OverdriveProvider>,
		);

		const child = screen.getByTestId('child-element');
		expect(child).toBeInTheDocument();
		expect(child).toHaveTextContent('Child content');
	});

	it('should accept custom theme prop', () => {
		// Simple test that just verifies the provider accepts the theme prop
		render(
			<OverdriveProvider theme={undefined}>
				<div data-testid="themed-content">Themed content</div>
			</OverdriveProvider>,
		);

		const content = screen.getByTestId('themed-content');
		expect(content).toBeInTheDocument();
	});

	it('should handle portal mount point prop', () => {
		const portalRef = { current: null };

		render(
			<OverdriveProvider portalMountPoint={portalRef}>
				<div data-testid="portal-test">Portal test</div>
			</OverdriveProvider>,
		);

		const element = screen.getByTestId('portal-test');
		expect(element).toBeInTheDocument();
	});

	it('should support noBodyLevelTheming prop', () => {
		render(
			<OverdriveProvider noBodyLevelTheming>
				<div data-testid="no-body-theming">No body theming</div>
			</OverdriveProvider>,
		);

		const element = screen.getByTestId('no-body-theming');
		expect(element).toBeInTheDocument();
	});
});
