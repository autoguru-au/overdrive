import { AccountBoxIcon } from '@autoguru/icons';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';

import { Button } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Anchor } from '../Anchor';

export default {
	title: 'Components/Buttons',
	component: Button,
	decorators: [
		(story) => (
			<div
				style={{
					display: 'grid',
					gridGap: '12px',
					gridAutoFlow: 'row dense',
				}}>
				{story()}
			</div>
		),
	],
	argTypes:{
		is: {
			options: ['button', 'a'],
		},
	}
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => (
	<div
		style={{
			width: 200
		}}>
	<Button {...args} />
	</div>
);

const TemplateMulti: ComponentStory<typeof Button> = (args) => (
	<>
		<Columns space="3">
			<Column>
				<Button {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button {...args}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button isLoading {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button disabled {...args}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button rounded {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded {...args}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button rounded isLoading {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded disabled {...args}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button minimal {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal {...args}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button minimal isLoading {...args}>
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal disabled {...args}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button minimal rounded {...args}>
					1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded {...args}>
					<Icon icon={AccountBoxIcon} />1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded {...args}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button minimal rounded isLoading {...args}>
					1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded disabled {...args}>
					1
				</Button>
			</Column>
		</Columns>
		<Button isFullWidth {...args}>
			Full Width
		</Button>
	</>
);

const standardProps: ComponentProps<typeof Button> = {
	isFullWidth: void 0,
	size: void 0,
	variant: void 0,
	children: 'Login',
};

export const standard = Template.bind(standardProps);
standard.args = standardProps;

const primarySmallProps: Omit<ComponentProps<typeof Button>, 'children'>= {
	size: 'small',
	variant: 'primary',
};
export const primarySmall = TemplateMulti.bind(primarySmallProps);
primarySmall.args = primarySmallProps;

const primaryMediumProps: Omit<ComponentProps<typeof Button>, 'children'>= {
	size: 'medium',
	variant: 'primary',
};
export const primaryMedium = TemplateMulti.bind(primaryMediumProps);
primaryMedium.args = primaryMediumProps;

const secondarySmallProps: Omit<ComponentProps<typeof Button>, 'children'>= {
	size: 'small',
	variant: 'secondary',
};
export const secondarySmall = TemplateMulti.bind(secondarySmallProps);
secondarySmall.args = secondarySmallProps;

const secondaryMediumProps: Omit<ComponentProps<typeof Button>, 'children'>= {
	size: 'medium',
	variant: 'secondary',
};
export const secondaryMedium = TemplateMulti.bind(secondaryMediumProps);
secondaryMedium.args = secondaryMediumProps;
