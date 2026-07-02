import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { colourMap } from '../themes/base/colours';
import {
	contrastGuideColour,
	type ContrastColourToken,
} from '../themes/base/contrastGuide';
import { getContrastRatio } from '../themes/helpers';
import { overdriveTokens } from '../themes/theme.css';

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

const contrastOf = (foreground: string, background: string): string =>
	(1 / getContrastRatio(foreground, background)).toFixed(1);

interface PairingSwatch {
	label: string;
	foreground: string;
	background: string;
}

interface Proposal {
	token: string;
	issue: string;
	current: PairingSwatch;
	proposed?: PairingSwatch;
	note?: string;
}

/**
 * Token pairings that fail the Design System 2026 contrast guide, with the
 * guide-compliant replacement proposed for design sign-off. Values here are
 * proposals only — the shipped tokens are unchanged until approved.
 */
const proposals: Proposal[] = [
	{
		token: 'color.content.success',
		issue: 'green-600/700 text on white is not in the contrast guide',
		current: {
			label: 'green-700',
			foreground: colourMap.green['700'],
			background: colourMap.white,
		},
		proposed: {
			label: 'green-800',
			foreground: colourMap.green['800'],
			background: colourMap.white,
		},
	},
	{
		token: 'color.content.warning',
		issue: 'the guide allows no yellow text on white at all',
		current: {
			label: 'yellow-800',
			foreground: colourMap.yellow['800'],
			background: colourMap.white,
		},
		note: 'No compliant yellow exists — design decision needed (e.g. gray-900 text on a warning surface instead of yellow text).',
	},
	{
		token: 'color.content.danger',
		issue: 'the guide restricts red-600 on white to icons only',
		current: {
			label: 'red-600',
			foreground: colourMap.red['600'],
			background: colourMap.white,
		},
		proposed: {
			label: 'red-700',
			foreground: colourMap.red['700'],
			background: colourMap.white,
		},
	},
	{
		token: 'color.surface.success (+ content.inverse)',
		issue: 'white text on green-700 fails AA',
		current: {
			label: 'white on green-700',
			foreground: colourMap.white,
			background: colourMap.green['700'],
		},
		proposed: {
			label: 'white on green-800',
			foreground: colourMap.white,
			background: colourMap.green['800'],
		},
	},
	{
		token: 'color.surface.warning (+ content.inverse)',
		issue: 'white text on yellow fails AA on every step',
		current: {
			label: 'white on yellow-800',
			foreground: colourMap.white,
			background: colourMap.yellow['800'],
		},
		proposed: {
			label: 'gray-900 on yellow-800',
			foreground: colourMap.gray['900'],
			background: colourMap.yellow['800'],
		},
	},
	{
		token: 'color.interactive.link',
		issue: 'green-600 on white is icon-only in the guide',
		current: {
			label: 'green-600',
			foreground: colourMap.green['600'],
			background: colourMap.white,
		},
		proposed: {
			label: 'green-800',
			foreground: colourMap.green['800'],
			background: colourMap.white,
		},
	},
	{
		token: 'color.interactive.linkVisited',
		issue: 'green-700 text on white is not in the contrast guide',
		current: {
			label: 'green-700',
			foreground: colourMap.green['700'],
			background: colourMap.white,
		},
		proposed: {
			label: 'green-900',
			foreground: colourMap.green['900'],
			background: colourMap.white,
		},
	},
];

const PairingChip = ({ label, foreground, background }: PairingSwatch) => (
	<div
		style={{
			background,
			color: foreground,
			borderRadius: 8,
			boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
			minWidth: 148,
			padding: '10px 12px',
		}}
	>
		<div style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.4 }}>
			{label}
		</div>
		<div style={{ fontSize: 11, opacity: 0.85, lineHeight: 1.4 }}>
			Aa · {contrastOf(foreground, background)}:1
		</div>
	</div>
);

const VerdictBadge = ({ passes }: { passes: boolean }) => (
	<span
		style={{
			background: passes ? colourMap.green['200'] : colourMap.red['200'],
			color: passes ? colourMap.green['900'] : colourMap.red['900'],
			borderRadius: 4,
			padding: '1px 6px',
			fontWeight: 600,
			fontSize: 11,
			whiteSpace: 'nowrap',
		}}
	>
		{passes ? 'AA' : 'fails AA'}
	</span>
);

const ProposalCard = ({ proposal }: { proposal: Proposal }) => (
	<div
		style={{
			border: `1px solid ${colourMap.gray['300']}`,
			borderRadius: 8,
			padding: 16,
		}}
	>
		<code className={codeVariable}>{proposal.token}</code>
		<div
			style={{
				fontSize: 12,
				color: colourMap.gray['600'],
				margin: '4px 0 12px',
			}}
		>
			{proposal.issue}
		</div>
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 12,
				flexWrap: 'wrap',
			}}
		>
			<FlexStack gap="1">
				<span style={{ fontSize: 11, color: colourMap.gray['600'] }}>
					Current <VerdictBadge passes={false} />
				</span>
				<PairingChip {...proposal.current} />
			</FlexStack>
			<span aria-hidden style={{ color: colourMap.gray['600'] }}>
				→
			</span>
			{proposal.proposed ? (
				<FlexStack gap="1">
					<span
						style={{ fontSize: 11, color: colourMap.gray['600'] }}
					>
						Proposed <VerdictBadge passes />
					</span>
					<PairingChip {...proposal.proposed} />
				</FlexStack>
			) : (
				<div
					style={{
						fontSize: 12,
						color: colourMap.gray['600'],
						maxWidth: 280,
					}}
				>
					{proposal.note}
				</div>
			)}
		</div>
	</div>
);

const meta: Meta = {
	title: 'Foundation/Theme Colours',
	tags: ['!autodocs', 'updated'],
};
export default meta;

type Story = StoryObj;

export const ThemeColours: Story = {
	render: () => {
		return (
			<FlexStack gap="7">
				<hgroup>
					<Heading>Theme Colours</Heading>
					<p style={{ fontStyle: 'italic' }}>
						These colours are a work in progress. Tokens may be
						added, renamed or colours reassigned.
					</p>
				</hgroup>
				<FlexStack gap="7">
					{Object.entries(overdriveTokens.color)
						.filter(([key]) => key !== 'gamut')
						.map(([group, colours]) => (
							<FlexStack gap="4" key={group}>
								<Heading as="h2" className={labels}>
									{group}
								</Heading>

								<div className={gridSwatches}>
									{Object.entries(colours).map(
										([colour, cssVar]) => (
											<FlexStack gap="1" key={colour}>
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
											</FlexStack>
										),
									)}
								</div>
							</FlexStack>
						))}
				</FlexStack>
				<FlexStack gap="4">
					<Heading as="h2" className={labels}>
						Proposed Design System 2026 changes
					</Heading>
					<p style={{ fontSize: 14, maxWidth: 720 }}>
						Pairings below fail the{' '}
						<a href="?path=/docs/foundation-contrast-guide--docs">
							Contrast Guide
						</a>{' '}
						under the 2026 palette, shown next to the
						guide-compliant replacement. These are proposals pending
						design sign-off — the shipped token values are
						unchanged.
					</p>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns:
								'repeat(auto-fill, minmax(420px, 1fr))',
							gap: 12,
						}}
					>
						{proposals.map((proposal) => (
							<ProposalCard
								key={proposal.token}
								proposal={proposal}
							/>
						))}
					</div>
				</FlexStack>
			</FlexStack>
		);
	},
};

interface ProposedToken {
	name: string;
	token: ContrastColourToken;
	was?: ContrastColourToken;
	note?: string;
}

/**
 * The full proposed Design System 2026 semantic set: current values carried
 * over unchanged except where the contrast guide requires a fix (`was`).
 */
const proposed2026: Record<string, ProposedToken[]> = {
	surface: [
		{ name: 'page', token: 'white' },
		{ name: 'hard', token: 'gray-900' },
		{ name: 'soft', token: 'gray-700' },
		{ name: 'accent', token: 'green-400' },
		{ name: 'success', token: 'green-800', was: 'green-700' },
		{ name: 'info', token: 'blue-600' },
		{ name: 'danger', token: 'red-600' },
		{ name: 'warning', token: 'yellow-800' },
	],
	content: [
		{ name: 'normal', token: 'gray-900' },
		{ name: 'soft', token: 'gray-700' },
		{ name: 'inverse', token: 'white' },
		{ name: 'info', token: 'blue-600' },
		{ name: 'danger', token: 'red-700', was: 'red-600' },
		{ name: 'success', token: 'green-800', was: 'green-700' },
		{
			name: 'warning',
			token: 'yellow-800',
			was: 'yellow-800',
			note: 'fails AA on white; no yellow passes — pending design decision',
		},
	],
	interactive: [
		{ name: 'border', token: 'gray-300' },
		{ name: 'borderMuted', token: 'gray-200' },
		{ name: 'borderDisabled', token: 'gray-100' },
		{ name: 'surfaceDisabled', token: 'gray-400' },
		{ name: 'contentDisabled', token: 'gray-600' },
		{ name: 'link', token: 'green-800', was: 'green-600' },
		{ name: 'linkVisited', token: 'green-900', was: 'green-700' },
		{ name: 'overlayBg', token: 'gray-300' },
		{ name: 'overlayContainer', token: 'white' },
		{ name: 'placeholder', token: 'gray-700' },
		{ name: 'focusOutline', token: 'blue-500' },
	],
};

// smaller inverted ratio = higher contrast
const textOn = (hex: string): string =>
	getContrastRatio(colourMap.white, hex) <
	getContrastRatio(colourMap.gray['900'], hex)
		? colourMap.white
		: colourMap.gray['900'];

const ChangeBadge = ({ was, note }: Pick<ProposedToken, 'was' | 'note'>) => (
	<span
		style={{
			background: note ? colourMap.yellow['200'] : colourMap.blue['100'],
			color: colourMap.gray['900'],
			borderRadius: 4,
			padding: '1px 6px',
			fontWeight: 600,
			fontSize: 11,
			alignSelf: 'flex-start',
		}}
	>
		{note ?? `changed · was ${was}`}
	</span>
);

const Token2026 = ({ name, token, was, note }: ProposedToken) => {
	const hex = contrastGuideColour(token);
	return (
		<FlexStack gap="1">
			<div
				style={{
					background: hex,
					borderRadius: 8,
					boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
					height: 72,
					padding: '8px 10px',
					display: 'flex',
					alignItems: 'flex-end',
					color: textOn(hex),
					fontSize: 12,
					fontWeight: 600,
				}}
			>
				{token}
			</div>
			<div className={labels}>{spacesFromCamelCase(name)}</div>
			<code className={codeVariable}>{hex.toUpperCase()}</code>
			{was && <ChangeBadge was={was} note={note} />}
		</FlexStack>
	);
};

export const ThemeColours2026: Story = {
	render: () => {
		const changed = Object.entries(proposed2026).flatMap(
			([group, entries]) =>
				entries
					.filter((entry) => entry.was)
					.map((entry) => ({ group, ...entry })),
		);
		return (
			<FlexStack gap="7">
				<hgroup>
					<Heading>Theme Colours 2026</Heading>
					<p style={{ maxWidth: 720 }}>
						The full proposed Design System 2026 semantic set.
						Values are carried over from the current theme except
						where the{' '}
						<a href="?path=/docs/foundation-contrast-guide--docs">
							Contrast Guide
						</a>{' '}
						requires a fix — those tokens carry a badge showing the
						current value they replace. Proposals pending design
						sign-off; the shipped theme is unchanged.
					</p>
				</hgroup>
				<FlexStack gap="7">
					{Object.entries(proposed2026).map(([group, entries]) => (
						<FlexStack gap="4" key={group}>
							<Heading as="h2" className={labels}>
								{group}
							</Heading>
							<div className={gridSwatches}>
								{entries.map((entry) => (
									<Token2026 key={entry.name} {...entry} />
								))}
							</div>
						</FlexStack>
					))}
				</FlexStack>
				<FlexStack gap="4">
					<Heading as="h2" className={labels}>
						What changes vs the current theme
					</Heading>
					<ul style={{ margin: 0, paddingLeft: 20, fontSize: 14 }}>
						{changed.map(({ group, name, token, was, note }) => (
							<li key={`${group}-${name}`}>
								<code className={codeVariable}>
									color.{group}.{name}
								</code>{' '}
								—{' '}
								{was === token
									? `${token} (${note})`
									: `${was} → ${token}`}
							</li>
						))}
					</ul>
				</FlexStack>
			</FlexStack>
		);
	},
};
