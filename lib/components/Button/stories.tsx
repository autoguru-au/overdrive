import { AccountBoxIcon } from '@autoguru/icons';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Actions } from '../Actions';
import { Icon } from '../Icon';
import { Button, EButtonSize, EButtonVariant } from './Button';

const sizes = EButtonSize;
const variants = EButtonVariant;

const stories = storiesOf('Components|Buttons', module).addDecorator(story => (
	<div
		style={{
			display: 'grid',
			gridGap: '12px',
			gridAutoFlow: 'row dense',
		}}>
		{story()}
	</div>
));

Object.entries(sizes).forEach(([, size]) => {
	Object.entries(variants).forEach(([, variant]) => {
		stories.add(`${variant} ${size}`, () => (
			<>
				<Actions equalWidth={false}>
					<Button variant={variant} size={size}>
						Login
					</Button>
					<Button variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
						Login
					</Button>
					<Button variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
					</Button>
					<Button isLoading variant={variant} size={size}>
						Login
					</Button>
					<Button disabled variant={variant} size={size}>
						Login
					</Button>
				</Actions>
				<Actions equalWidth={false}>
					<Button rounded variant={variant} size={size}>
						Login
					</Button>
					<Button rounded variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
						Login
					</Button>
					<Button rounded variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
					</Button>
					<Button rounded isLoading variant={variant} size={size}>
						Login
					</Button>
					<Button rounded disabled variant={variant} size={size}>
						Login
					</Button>
				</Actions>
				<Actions equalWidth={false}>
					<Button minimal variant={variant} size={size}>
						Login
					</Button>
					<Button minimal variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
						Login
					</Button>
					<Button minimal variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
					</Button>
					<Button minimal isLoading variant={variant} size={size}>
						Login
					</Button>
					<Button minimal disabled variant={variant} size={size}>
						Login
					</Button>
				</Actions>
				<Actions equalWidth={false}>
					<Button minimal rounded variant={variant} size={size}>
						1
					</Button>
					<Button minimal rounded variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />1
					</Button>
					<Button minimal rounded variant={variant} size={size}>
						<Icon icon={AccountBoxIcon} />
					</Button>
					<Button
						minimal
						rounded
						isLoading
						variant={variant}
						size={size}>
						1
					</Button>
					<Button
						minimal
						rounded
						disabled
						variant={variant}
						size={size}>
						1
					</Button>
				</Actions>
			</>
		));
	});
});
