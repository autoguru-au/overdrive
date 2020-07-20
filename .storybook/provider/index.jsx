import '@autoguru/overdrive/lib/reset/font-face.css';
import '@autoguru/overdrive/reset';

import addons, { makeDecorator } from '@storybook/addons';
import * as React from 'react';
import { useEffect, useState } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { OverdriveProvider } from '@autoguru/overdrive';

import * as themeRefs from '@autoguru/overdrive/themes';
import { Box, Heading, Stack } from '@autoguru/overdrive';

const THEMES = new Map(Object.entries(themeRefs));

function ThemeProviderUpdater(props) {
	const [values, setValues] = useState();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const channel = addons.getChannel();

		const providerUpdate = (event) => {
			setValues({
				...event,
				theme: THEMES.get(event.theme ?? 'baseTheme'),
			});
			setReady(true);
		};

		channel.on('overdrive-provider/updated', providerUpdate);
		channel.emit('rsp/ready-for-update');

		return () =>
			void channel.removeListener(
				'overdrive-provider/updated',
				providerUpdate,
			);
	}, []);

	return ready ? (
		<OverdriveProvider {...values}>{props.children}</OverdriveProvider>
	) : (
		<p>Loading...</p>
	);
}

export const withOverdriveProvider = makeDecorator({
	name: 'withOverdriveProvider',
	parameterName: 'overdriveProvider',
	wrapper: (getStory, context) =>
		!isChromatic() ? (
			<ThemeProviderUpdater>
				<div style={{ padding: 8 }}>{getStory(context)}</div>
			</ThemeProviderUpdater>
		) : (
			[...THEMES].map(([, theme], i) => (
				<div key={i} data-theme={theme.name}>
					<OverdriveProvider theme={theme}>
						<Box padding="5">
							<Stack space="3">
								<Heading is="h5" colour="light">
									Theme :: {theme.name}
								</Heading>

								{getStory(context)}
							</Stack>
						</Box>
					</OverdriveProvider>
					<hr
						style={{
							margin: 0,
							border: 0,
							height: 1,
							background: '#eee',
						}}
					/>
				</div>
			))
		),
});
