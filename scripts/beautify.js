const prettier = require('prettier');
const cosmiconfig = require('cosmiconfig');

const { config } = cosmiconfig('prettier').searchSync();

module.exports = {
	beautify(code, parser = 'babel') {
		return prettier.format(code, {
			parser,
			...config,
		});
	},
};
