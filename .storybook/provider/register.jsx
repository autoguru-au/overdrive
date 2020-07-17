import addons, { types } from '@storybook/addons';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

// TODO: Figure out a nicer way to pull this in
const THEMES = ['baseTheme'];

const ThemeProviderSetter = ({ api }) => {
	const channel = addons.getChannel();
	const [values, setValues] = useState({ theme: THEMES[0] });

	const onThemeChange = useCallback((e) => {
		let newValue = e.target.value || undefined;
		setValues((old) => {
			channel.emit('overdrive-provider/updated', newValue);
			return { ...old, theme: newValue };
		});
	}, []);

	useEffect(() => {
		const storySwapped = () =>
			void channel.emit('overdrive-provider/updated', values);
		channel.on('rsp/ready-for-update', storySwapped);
		return () =>
			void channel.removeListener('rsp/ready-for-update', storySwapped);
	});

	return (
		<div
			style={{
				display: 'inline-grid',
				alignSelf: 'center',
				gridAutoFlow: 'column dense',
				gridGap: 10,
			}}
		>
			<label htmlFor="theme">Theme:</label>
			<select
				id="theme"
				name="theme"
				value={values.theme}
				onChange={onThemeChange}
			>
				{THEMES.map((theme) => (
					<option value={theme} key={theme}>
						{theme}
					</option>
				))}
			</select>
		</div>
	);
};

addons.register('OverdriveProvider', (api) => {
	addons.add('OverdriveProvider', {
		title: 'overdriveProvider',
		type: types.TOOL,
		match: ({ viewMode }) => viewMode === 'story',
		render: () => <ThemeProviderSetter api={api} />,
	});
});
