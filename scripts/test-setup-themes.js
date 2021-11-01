import { baseThemeVars } from '@autoguru/overdrive/lib/themes';

jest.mock('@testing-library/react', () => {
	const originalModule = jest.requireActual('@testing-library/react');
	const { OverdriveProvider } = jest.requireActual(
		'../packages/overdrive/lib/components/OverdriveProvider/OverdriveProvider',
	);
	const { baseThemeVars } = jest.requireActual(
		'../packages/overdrive/lib/themes/',
	);
	const React = jest.requireActual('react');

	return {
		...originalModule,
		render(ui, options) {
			return originalModule.render(ui, {
				...options,
				wrapper({ children }) {
					return React.createElement(
						OverdriveProvider,
						{ theme: baseThemeVars },
						[children],
					);
				},
			});
		},
	};
});
