import { CarIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { AutoSuggest } from '.';
import { AutoSuggestValue } from './AutoSuggest';

type Value = string;

const mockSuggestions = [
	'Bentley',
	'BMW',
	'Bugatti',
	'Ferrari',
	'Koenigsegg',
	'Lamborghini',
	'Maserati',
	'Porsche',
];

storiesOf('Components|Inputs/AutoSuggest', module).add('default', () => {
	const Impl = () => {
		type SuggestionValue = AutoSuggestValue<Value>;
		const [value, setValue] = useState<SuggestionValue>({
			text: '',
		});
		const [suggestions, setSuggestions] = useState<SuggestionValue[]>([]);

		useEffect(() => {
			setSuggestions(
				value.text === ''
					? mockSuggestions.map(item => ({ text: item }))
					: mockSuggestions
							.filter(item =>
								item
									.toLowerCase()
									.startsWith(value.text.toLowerCase()),
							)
							.map(item => ({ text: item })),
			);
		}, [value.text]);

		return (
			<AutoSuggest<Value>
				name="example"
				placeholder="Pick an exotic car brand"
				value={value}
				suggestions={[
					{
						text: 'Skip me',
						skip: true,
					},
					...suggestions,
				]}
				hintText="Pick a car, any car"
				prefixIcon={CarIcon}
				onChange={thing => {
					setValue(thing);
					action('onChange')(thing);
				}}
			/>
		);
	};

	return <Impl />;
});
