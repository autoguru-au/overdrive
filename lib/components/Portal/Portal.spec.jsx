import { render } from '@testing-library/react';
import * as React from 'react';

import { OverdriveProvider } from '../OverdriveProvider';

import { Portal } from './Portal';

const portalWrapper = () =>
	document.body.querySelector('[data-testid="portal-child"]')?.parentElement;

describe('<Portal />', () => {
	it('should not throw', () => {
		expect(() => render(<Portal />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Portal />).container.firstChild).toMatchSnapshot();
	});

	it('carries the provider colour overrides onto its wrapper', () => {
		render(
			<OverdriveProvider
				colorOverrides={{ primaryBackground: '#0e893c' }}
			>
				<Portal>
					<div data-testid="portal-child" />
				</Portal>
			</OverdriveProvider>,
		);

		// Read the attribute rather than `.style.cssText` — jsdom omits custom
		// properties from the latter.
		expect(portalWrapper().getAttribute('style')).toContain(
			'--od-color-brand-solid: #0e893c',
		);
	});

	it('leaves the wrapper unstyled when no overrides are supplied', () => {
		render(
			<OverdriveProvider>
				<Portal>
					<div data-testid="portal-child" />
				</Portal>
			</OverdriveProvider>,
		);

		expect(portalWrapper().hasAttribute('style')).toBe(false);
	});
});
