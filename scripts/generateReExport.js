const fs = require('fs');
const glob = require('glob');
const path = require('path');

const components = path.join(__dirname, '../lib/components');

const componentEntryFiles = glob
	.sync('*/index.+(ts|tsx)', { cwd: components })
	.sort()
	.map(item => item.replace(/\/index\.tsx?/, '')) // Removes the file extension, node includes the index files first.
	.map(item => item.replace(/([\/\\]+)$/, ''))
	.map(item => `export * from './${item}';`)
	.join('\n');

const script = `/**
 * -----------------------------------------------------------------------------
 * THIS FILE IS GENERATED - Please do not edit.
 * Run to re-generate:
 *     node scripts/generateReExport.js
 * -----------------------------------------------------------------------------
 */

${componentEntryFiles}
`;

fs.writeFileSync(
	path.join(components, '/index.ts'),
	require('prettier').format(script, {
		parser: 'babel',
		...require('cosmiconfig')('prettier').searchSync(__dirname).config,
	}),
	'utf8'
);
