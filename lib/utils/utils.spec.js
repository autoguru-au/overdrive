import { arrayRingLookup } from './index';

describe('utils', () => {
	describe('when arrayRingLookup', () => {
		it.each([
			['b', 4, ['a', 'b', 'c']],
			['b', 1, ['a', 'b', 'c']],
			['a', 0, ['a', 'b', 'c']],
			['c', -1, ['a', 'b', 'c']],
		])(
			'should return %s for index %d with collection %j',
			(result, index, collection) => {
				expect(arrayRingLookup(collection)(index)).toBe(result);
			},
		);
	});
});
