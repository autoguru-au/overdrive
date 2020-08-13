import { AccountBoxIcon } from '@autoguru/icons';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import { Button } from '.';

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
};

const buildButtons = (
	variant: ComponentProps<typeof Button>['variant'],
	size: ComponentProps<typeof Button>['size'],
) => (
	<>
		<Columns space="3">
			<Column>
				<Button variant={variant} size={size}>
					Login
				</Button>
			</Column>
			<Column>
				<Button variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button isLoading variant={variant} size={size}>
					Login
				</Button>
			</Column>
			<Column>
				<Button disabled variant={variant} size={size}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button rounded variant={variant} size={size}>
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button rounded isLoading variant={variant} size={size}>
					Login
				</Button>
			</Column>
			<Column>
				<Button rounded disabled variant={variant} size={size}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button minimal variant={variant} size={size}>
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button minimal isLoading variant={variant} size={size}>
					Login
				</Button>
			</Column>
			<Column>
				<Button minimal disabled variant={variant} size={size}>
					Login
				</Button>
			</Column>
		</Columns>
		<Columns space="3">
			<Column>
				<Button minimal rounded variant={variant} size={size}>
					1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded variant={variant} size={size}>
					<Icon icon={AccountBoxIcon} />
				</Button>
			</Column>
			<Column>
				<Button minimal rounded isLoading variant={variant} size={size}>
					1
				</Button>
			</Column>
			<Column>
				<Button minimal rounded disabled variant={variant} size={size}>
					1
				</Button>
			</Column>
		</Columns>
		<Button isFullWidth variant={variant} size={size}>
			Full Width
		</Button>
	</>
);

export const primarySmall = () => buildButtons('primary', 'small');
export const primaryMedium = () => buildButtons('primary', 'medium');

export const secondarySmall = () => buildButtons('secondary', 'small');
export const secondaryMedium = () => buildButtons('secondary', 'medium');

export const dangerSmall = () => buildButtons('danger', 'small');
export const dangerMedium = () => buildButtons('danger', 'medium');
