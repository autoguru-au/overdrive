const prettier = require('prettier');
const { cosmiconfigSync } = require('cosmiconfig');

const { config } = cosmiconfigSync('prettier').search(__dirname);

module.exports = {
	beautify(code, parser = 'babel') {
		return prettier.format(code, {
			parser,
			...config,
		});
	},
};
