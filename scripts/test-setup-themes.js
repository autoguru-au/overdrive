jest.mock('@testing-library/react', () => {
	const originalModule = jest.requireActual('@testing-library/react');
	const { OverdriveProvider } = jest.requireActual(
		'../lib/components/OverdriveProvider/OverdriveProvider',
	);
	const { themeRef } = jest.requireActual('../lib/themes/base/vars.css');
	const { themeContractVars } = jest.requireActual('../lib/themes/theme.css');
	const { tokens } = jest.requireActual('../lib/themes/base/tokens');
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
