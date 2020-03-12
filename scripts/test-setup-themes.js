jest.mock('@testing-library/react', () => {
	const originalModule = jest.requireActual('@testing-library/react');
	const { OverdriveProvider } = jest.requireActual(
		'../lib/components/OverdriveProvider',
	);
	const { baseTheme } = jest.requireActual('../lib/themes/index');
	const React = jest.requireActual('react');

	return {
		...originalModule,
		render(ui, options) {
			return originalModule.render(ui, {
				...options,
				wrapper({ children }) {
					return React.createElement(
						OverdriveProvider,
						{ theme: baseTheme },
						[children],
					);
				},
			});
		},
	};
});
