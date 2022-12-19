jest.mock('@testing-library/react', () => {
	const originalModule = jest.requireActual('@testing-library/react');
	const { OverdriveProvider } = jest.requireActual(
		'../packages/overdrive/lib/components/OverdriveProvider/OverdriveProvider',
	);
	const { themeRef } = jest.requireActual(
		'../packages/overdrive/lib/themes/base/vars.css',
	);
	const { themeContractVars } = jest.requireActual(
		'../packages/overdrive/lib/themes/theme.css',
	);
	const { tokens } = jest.requireActual(
		'../packages/overdrive/lib/themes/base/tokens',
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
						{
							themeClass: themeRef,
							tokens,
							vars: themeContractVars,
						},
						[children],
					);
				},
			});
		},
	};
});
