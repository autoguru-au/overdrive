jest.mock('@testing-library/react', () => {
	const originalModule = jest.requireActual('@testing-library/react');
	const { OverdriveProvider } = jest.requireActual(
		'../packages/overdrive/lib/components/OverdriveProvider/OverdriveProvider',
	);
	const { baseTheme } = jest.requireActual(
		'../packages/overdrive/lib/themes/index',
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
						{ theme: baseTheme },
						[children],
					);
				},
			});
		},
	};
});
