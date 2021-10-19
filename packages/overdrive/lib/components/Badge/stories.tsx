import * as React from 'react';
import { ComponentProps } from 'react';

import { Badge } from '.';
import { ComponentStory } from '@storybook/react';

const colours: ReadonlyArray<ComponentProps<typeof Badge>['colour']> = [
	'blue',
	'red',
	'green',
	'yellow',
	'neutral',
] as const;

export default {
	title: 'Components/Badge',
	component: Badge,
	decorators: [
		(story) => (
			<div
				style={{
					display: 'grid',
					gridAutoFlow: 'row dense',
					gridGap: '10px',
				}}>
				<div
					style={{
						display: 'grid',
						gap: '10px',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(10px, max-content))',
					}}>
					{story()}
				</div>
			</div>
		),
	],
};

const template: ComponentStory<typeof Badge> = (args) => (<Badge {...args} />);

const standardProps: ComponentProps<typeof Badge> = {
	label: 'TITANIUM',
	colour: 'neutral',
	look: 'standard',
	size: 'standard',
};
export const Neutral = template.bind(standardProps);
Neutral.args = standardProps;

/*export const Standard = () => (
	<>
		{colours.map((colour) => (
			<Badge key={colour} label={colour} colour={colour} />
		))}
	</>
);*/
/*

export const StandardLarge = () => (
	<>
		{colours.map((colour) => (
			<Badge key={colour} size="large" label={colour} colour={colour} />
		))}
	</>
);

export const Inverted = () => (
	<>
		{colours.map((colour) => (
			<Badge
				key={colour}
				label={colour}
				colour={colour}
				look="inverted"
			/>
		))}
	</>
);

export const InvertedLarge = () => (
	<>
		{colours.map((colour) => (
			<Badge
				key={colour}
				size="large"
				label={colour}
				colour={colour}
				look="inverted"
			/>
		))}
	</>
);
*/
