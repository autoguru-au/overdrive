module.exports = {
	displayName: require('./package.json').name,
	preset: '@autoguru/jest-preset',
	moduleNameMapper: { '^.+\\.scss$': require.resolve('identity-obj-proxy') },
	testPathIgnorePatterns: ['/node_modules/', '/templates/component/'],
	setupFilesAfterEnv: [
		require.resolve('@testing-library/jest-dom/extend-expect'),
	],
	collectCoverageFrom: [
		'lib/**/*.{ts,tsx}',
		'!**/*stories*.{ts,tsx}',
		'!lib/icons/**/*',
	],
};
