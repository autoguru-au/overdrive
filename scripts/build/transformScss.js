const postcss = require('postcss');
const sass = require('node-sass');

const cache = new Map();

async function transformStyles(id) {
	if (cache.has(id)) {
		return cache.get(id);
	}

	const { css, stats } = await new Promise((resolve, reject) => {
		sass.render(
			{
				file: id,
			},
			(err, result) => {
				if (err) return reject(err);
				resolve(result);
			},
		);
	});

	const { messages, css: postcssOutput } = await postcss([
		require('postcss-modules')({
			camelCase: true,
			generateScopedName: 'od-[hash:base64:7]',
			getJSON() {
				// Removed this on purpose
			},
		}),
	]).process(css.toString(), {
		from: undefined,
	});

	const returns = [
		stats.includedFiles,
		postcssOutput,
		messages.find(
			item => item.type === 'export' && item.plugin === 'postcss-modules',
		).exportTokens,
	];

	return cache.set(id, returns).get(id);
}

module.exports = {
	transformStyles,
};
