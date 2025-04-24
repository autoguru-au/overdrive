import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { overdriveTokens } from '../themes/theme.css';

import { Stack } from './helpers';
import {
	codeVariable,
	gridSwatches,
	labels,
	variantColourSwatch,
} from './helpers/styles.css';

function spacesFromCamelCase(text: string) {
	// eslint-disable-next-line unicorn/prefer-string-replace-all
	return text.replace(/([A-Z])/g, ' $1').trim();
}

function kebabCaseFromCamelCase(text: string) {
	return (
		text
			// eslint-disable-next-line unicorn/prefer-string-replace-all
			.replace(/([A-Z])/g, '-$1')
			.trim()
			.toLocaleLowerCase()
	);
}

const meta: Meta = {
	title: 'Foundation/Theme Colours',
	tags: ['!autodocs', 'updated'],
};
export default meta;

type Story = StoryObj;

export const ThemeColours: Story = {
	render: () => {
		return (
			<Stack>
				<hgroup>
					<Heading>Theme Colours</Heading>
					<p style={{ fontStyle: 'italic' }}>
						These colours are a work in progress. Tokens may be
						added, renamed or colours reassigned.
					</p>
				</hgroup>
				<Stack space="md">
					{Object.entries(overdriveTokens.color)
						.filter(([key]) => key !== 'gamut')
						.map(([group, colours]) => (
							<Stack key={group}>
								<Heading is="h2" className={labels}>
									{group}
								</Heading>

								<div className={gridSwatches}>
									{Object.entries(colours).map(
										([colour, cssVar]) => (
											<Stack space="xxs" key={colour}>
												<div
													className={variantColourSwatch(
														{
															shape: 'rectangle',
														},
													)}
													style={
														{
															background: cssVar,
														} as React.CSSProperties
													}
												></div>

												<div className={labels}>
													{spacesFromCamelCase(
														colour,
													)}
												</div>
												<code className={codeVariable}>
													--od-color-{group}-
													{kebabCaseFromCamelCase(
														colour,
													)}
												</code>
											</Stack>
										),
									)}
								</div>
							</Stack>
						))}
				</Stack>
			</Stack>
		);
	},
};
