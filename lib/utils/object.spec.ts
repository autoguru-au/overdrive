import { arrayFromKeys } from './object';

describe('object utilities', () => {
	describe('arrayFromKeys', () => {
		it('returns array of object keys with proper typing', () => {
			const testObj = {
				name: 'John',
				age: 30,
				active: true,
			};

			const keys = arrayFromKeys(testObj);

			expect(keys).toEqual(['name', 'age', 'active']);
			expect(keys).toHaveLength(3);
		});

		it('works with empty objects', () => {
			const emptyObj = {};
			const keys = arrayFromKeys(emptyObj);

			expect(keys).toEqual([]);
			expect(keys).toHaveLength(0);
		});

		it('preserves key order', () => {
			const orderedObj = {
				first: 1,
				second: 2,
				third: 3,
				fourth: 4,
			};

			const keys = arrayFromKeys(orderedObj);

			expect(keys).toEqual(['first', 'second', 'third', 'fourth']);
		});

		it('works with objects containing different value types', () => {
			const mixedObj = {
				string: 'text',
				number: 42,
				boolean: false,
				array: [1, 2, 3],
				object: { nested: true },
				nullValue: null,
				undefinedValue: undefined,
				functionValue: () => {},
			};

			const keys = arrayFromKeys(mixedObj);

			expect(keys).toEqual([
				'string',
				'number',
				'boolean',
				'array',
				'object',
				'nullValue',
				'undefinedValue',
				'functionValue',
			]);
			expect(keys).toHaveLength(8);
		});

		it('works with objects having symbol keys (should be excluded)', () => {
			const symbolKey = Symbol('test');
			const objWithSymbol = {
				normalKey: 'value',
				[symbolKey]: 'symbol value',
			};

			const keys = arrayFromKeys(objWithSymbol);

			// Object.keys() only returns enumerable string keys, not symbols
			expect(keys).toEqual(['normalKey']);
			expect(keys).toHaveLength(1);
		});

		it('works with objects having numeric string keys', () => {
			const numericKeysObj = {
				'0': 'zero',
				'1': 'one',
				'10': 'ten',
				'2': 'two',
			};

			const keys = arrayFromKeys(numericKeysObj);

			// Object.keys() returns numeric keys in ascending order, then other keys
			expect(keys).toEqual(['0', '1', '2', '10']);
			expect(keys).toHaveLength(4);
		});

		it('works with objects created with null prototype', () => {
			const nullProtoObj = Object.create(null);
			nullProtoObj.key1 = 'value1';
			nullProtoObj.key2 = 'value2';

			const keys = arrayFromKeys(nullProtoObj);

			expect(keys).toEqual(['key1', 'key2']);
			expect(keys).toHaveLength(2);
		});

		it('ignores inherited properties', () => {
			// Create a prototype object
			const proto = { inheritedProp: 'inherited' };

			// Create object that inherits from proto
			const obj = Object.create(proto);
			obj.ownProp1 = 'own1';
			obj.ownProp2 = 'own2';

			const keys = arrayFromKeys(obj);

			// Should only include own properties, not inherited ones
			expect(keys).toEqual(['ownProp1', 'ownProp2']);
			expect(keys).toHaveLength(2);
		});

		it('works with array-like objects', () => {
			const arrayLikeObj = {
				'0': 'a',
				'1': 'b',
				'2': 'c',
				length: 3,
			};
			const keys = arrayFromKeys(arrayLikeObj);

			// Array-like objects have numeric string keys + length
			expect(keys).toEqual(['0', '1', '2', 'length']);
			expect(keys).toHaveLength(4);
		});

		it('maintains type safety with specific object types', () => {
			const typedObj = {
				prop1: 'test',
				prop2: 123,
			} as Record<string, unknown>;

			const keys = arrayFromKeys(typedObj);

			// TypeScript should infer the correct key type
			expect(keys).toEqual(['prop1', 'prop2']);

			// This ensures the return type is properly typed
			const firstKey = keys[0]; // Should be string
			expect(['prop1', 'prop2']).toContain(firstKey);
		});

		it('works with readonly objects', () => {
			const readonlyObj = {
				readonly1: 'value1',
				readonly2: 'value2',
			} as const;

			const keys = arrayFromKeys(readonlyObj);

			expect(keys).toEqual(['readonly1', 'readonly2']);
			expect(keys).toHaveLength(2);
		});
	});
});
