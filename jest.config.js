module.exports = {
	displayName: require('./package.json').name,
	preset: '@autoguru/jest-preset',
	setupFiles: [require.resolve('./jest.setup.js')],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	moduleNameMapper: { '^.+\\.scss$': require.resolve('identity-obj-proxy') },
};
