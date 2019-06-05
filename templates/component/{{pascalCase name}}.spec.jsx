import React from 'react';
import { mount } from 'enzyme';
import { {{pascalCase name}} } from './{{pascalCase name}}';

describe('<{{pascalCase name}}/>', () => {
	it('should not throw', () => {
		expect(() => mount(<{{pascalCase name}} />).unmount()).not.toThrow();
	});
});
