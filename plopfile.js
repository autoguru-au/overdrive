module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Generate a new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name?',
			},
		],
		actions() {
			return [
				{
					type: 'addMany',
					destination:
						'packages/overdrive/lib/components/{{ pascalCase name }}',
					base: 'templates/component/',
					templateFiles: 'templates/component/**/*',
				},
			];
		},
	});
};
