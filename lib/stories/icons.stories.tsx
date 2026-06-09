import * as iconset from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useMemo, useState } from 'react';

import { Box } from '../components/Box';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { Icon } from '../components/Icon/Icon';
import { Inline } from '../components/Inline';
import { SearchBar } from '../components/SearchBar';
import { Text } from '../components/Text/Text';
import { sprinkles } from '../styles/sprinkles.css';

import {
	categoryCount as categoryCountStyle,
	headerMeta as headerMetaStyle,
	icon as iconStyle,
	stickyHeader,
} from './helpers/styles.css';
import { iconCategory, iconCategoryOrder } from './iconCategories';

type IconEntry = [name: string, icon: unknown];

const OTHER_CATEGORY = 'Other' as const;

/** Turn `CarMultipleIcon` into a readable `Car Multiple` label. */
const labelFor = (name: string): string =>
	name
		.replace('Icon', '')
		.split(/(?=[A-Z])/)
		.join(' ');

const IconCell = ({ name, icon }: { name: string; icon: unknown }) => (
	<li className={iconStyle}>
		<Icon icon={icon as never} size="large" />
		<div className={sprinkles({ marginTop: '4' })}>{labelFor(name)}</div>
	</li>
);

const IconGrid = ({ entries }: { entries: IconEntry[] }) => (
	<ul
		className={sprinkles({
			display: 'flex',
			flexWrap: 'wrap',
			gap: '4',
			paddingLeft: 'none',
		})}
	>
		{entries.map(([name, icon]) =>
			icon ? <IconCell key={name} name={name} icon={icon} /> : null,
		)}
	</ul>
);

const IconSetExplorer = () => {
	const [query, setQuery] = useState('');

	// All renderable icon exports (skips the `IconType` type export, which is
	// absent at runtime, and any other non-component members).
	const allEntries = useMemo<IconEntry[]>(
		() => Object.entries(iconset).filter(([, icon]) => Boolean(icon)),
		[],
	);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return allEntries;
		return allEntries.filter(
			([name]) =>
				name.toLowerCase().includes(q) ||
				labelFor(name).toLowerCase().includes(q),
		);
	}, [allEntries, query]);

	// Bucket the filtered icons by category, preserving the design-system order
	// and dropping any category that has no matches.
	const grouped = useMemo(() => {
		const buckets = new Map<string, IconEntry[]>();
		for (const entry of filtered) {
			const category: string = iconCategory[entry[0]] ?? OTHER_CATEGORY;
			const bucket = buckets.get(category);
			if (bucket) bucket.push(entry);
			else buckets.set(category, [entry]);
		}
		const order: readonly string[] = [...iconCategoryOrder, OTHER_CATEGORY];
		return order
			.filter((category) => buckets.has(category))
			.map((category) => ({
				category,
				entries: buckets.get(category) as IconEntry[],
			}));
	}, [filtered]);

	return (
		<FlexStack gap="6">
			<Box as="header" className={stickyHeader} py="4">
				<FlexStack gap="3">
					<Inline alignY="center" space="3" noWrap>
						<Heading as="h2">Icon Set</Heading>
						<Text className={headerMetaStyle}>
							{filtered.length === allEntries.length
								? `${allEntries.length} icons`
								: `${filtered.length} of ${allEntries.length} icons`}
						</Text>
					</Inline>
					<Text className={headerMetaStyle}>
						@autoguru/icons · Phosphor 2.1 · 2px stroke at 32×32
					</Text>
					<SearchBar
						placeholder="Search icons by name…"
						onChange={setQuery}
					/>
				</FlexStack>
			</Box>

			{grouped.length === 0 ? (
				<Text>No icons match “{query}”.</Text>
			) : (
				grouped.map(({ category, entries }) => (
					<FlexStack key={category} gap="4">
						<Heading as="h3">
							{category}{' '}
							<span className={categoryCountStyle}>
								({entries.length})
							</span>
						</Heading>
						<IconGrid entries={entries} />
					</FlexStack>
				))
			)}
		</FlexStack>
	);
};

const meta: Meta = {
	title: 'Foundation/Icon Set',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const IconSet: Story = {
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	render: () => <IconSetExplorer />,
};
