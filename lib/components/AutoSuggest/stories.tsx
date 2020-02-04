import { CarIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { StandardModal } from '../StandardModal';
import { AutoSuggest } from '.';
import { AutoSuggestValue } from './AutoSuggest';

type Value = string;

const mockSuggestions = [
	'Alfa Romeo',
	'Aston Martin',
	'Bentley',
	'BMW',
	'Bugatti',
	'Ferrari',
	'Jaguar',
	'Koenigsegg',
	'Lamborghini',
	'Lotus',
	'Maserati',
	'McLaren',
	'Pontiac',
	'Porsche',
];

export default {
	title: 'Components|Inputs/AutoSuggest',
	component: AutoSuggest,
	decorators: [
		story => (
			<div style={{ maxWidth: 500, margin: '0 auto' }}>{story()}</div>
		),
	],
};

const Impl = () => {
	type SuggestionValue = AutoSuggestValue<Value>;
	const [value, setValue] = useState<SuggestionValue>({
		text: '',
		payload: null,
	});
	const [suggestions, setSuggestions] = useState<SuggestionValue[]>([]);

	useEffect(() => {
		setSuggestions(
			value.text === ''
				? mockSuggestions.map(item => ({ text: item, payload: item }))
				: mockSuggestions
						.filter(item =>
							item
								.toLowerCase()
								.startsWith(value.text.toLowerCase()),
						)
						.map(item => ({ text: item, payload: item })),
		);
	}, [value.text]);

	return (
		<AutoSuggest
			name="example"
			placeholder="Pick an exotic car brand"
			value={value}
			suggestions={[
				{
					text: 'Skip me',
					skip: true,
					payload: null,
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

export const Standard = () => (
	<div>
		<div style={{ height: '400px' }} />
		<Impl />
	</div>
);

export const WithNoItems = () => (
	<AutoSuggest
		value={null}
		suggestions={[]}
		name="test"
		placeholder="Pick nothing..."
	/>
);

export const InsideModal = () => (
	<StandardModal isOpen title="Test inside modal">
		<div style={{ padding: 20 }}>
			<Impl />
		</div>
	</StandardModal>
);

InsideModal.story = {
	parameters: {
		chromatic: { disable: true },
	},
};
