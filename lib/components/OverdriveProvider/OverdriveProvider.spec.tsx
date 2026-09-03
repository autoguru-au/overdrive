import { render, screen } from '@testing-library/react';
import React from 'react';
import { useLocale } from 'react-aria';
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

	it('should provide locale to React Aria context when locale prop is set', () => {
		const LocaleDisplay = () => {
			const { locale } = useLocale();
			return <div data-testid="locale-display">{locale}</div>;
		};

		render(
			<OverdriveProvider locale="en-AU">
				<LocaleDisplay />
			</OverdriveProvider>,
		);

		expect(screen.getByTestId('locale-display')).toHaveTextContent('en-AU');
	});

	it('should auto-detect locale from window.i18next when no prop is passed', () => {
		const LocaleDisplay = () => {
			const { locale } = useLocale();
			return <div data-testid="locale-display">{locale}</div>;
		};

		(window as any).i18next = { language: 'en' };

		render(
			<OverdriveProvider>
				<LocaleDisplay />
			</OverdriveProvider>,
		);

		expect(screen.getByTestId('locale-display')).toHaveTextContent('en-AU');

		delete (window as any).i18next;
	});

	it('should fall back to browser default when no locale prop and no i18next', () => {
		const LocaleDisplay = () => {
			const { locale } = useLocale();
			return <div data-testid="locale-display">{locale}</div>;
		};

		delete (window as any).i18next;

		render(
			<OverdriveProvider>
				<LocaleDisplay />
			</OverdriveProvider>,
		);

		expect(screen.getByTestId('locale-display')).toHaveTextContent(
			navigator.language,
		);
	});

	describe('colour overrides', () => {
		const providerStyle = (colorOverrides: Record<string, string>) => {
			const { container } = render(
				<OverdriveProvider colorOverrides={colorOverrides}>
					<div />
				</OverdriveProvider>,
			);
			// The test setup mounts its own provider, so match on the one
			// carrying inline vars rather than the outermost. Read the attribute
			// rather than `.style.cssText` — jsdom omits custom properties there.
			return (
				container
					.querySelector<HTMLElement>(
						'[data-od-component="provider"][style]',
					)
					?.getAttribute('style') ?? ''
			);
		};

		it('brands the accent and the outlined button from the primary background', () => {
			const style = providerStyle({ primaryBackground: '#6d39a8' });

			expect(style).toContain('--od-color-brand-solid: #6d39a8');
			expect(style).toContain(
				'--od-color-button-primary-outlined-border: #6d39a8',
			);
		});

		it('brands links and focus rings from the brand background', () => {
			// Defaults from `primaryBackground`, so a tenant supplying only a
			// brand no longer gets base-theme green links beside its buttons.
			expect(providerStyle({ primaryBackground: '#6d39a8' })).toContain(
				'--od-colours-foreground-link: #6d39a8',
			);

			expect(providerStyle({ linkColor: '#6d39a8' })).toContain(
				'--od-colours-foreground-link: #6d39a8',
			);
		});
	});
});
