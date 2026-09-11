import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';
import { ModalFooter } from '../ModalFooter/ModalFooter';
import { Text } from '../Text/Text';

import { StandardModal } from './StandardModal';

const meta = {
	title: 'Components/Modal: Standard with Title',
	tags: ['skip-themes'],
	component: StandardModal,
	argTypes: {
		children: { control: false },
	},
} satisfies Meta<typeof StandardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const withPageBackground: Decorator = (Story) => (
	<div style={{ minHeight: '880px' }}>
		<Story />
		<Text size="p1" color="secondary">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
			convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi
			venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt
			tempor. Suspendisse potenti. Praesent faucibus posuere risus, at
			congue mauris porttitor ut. Donec sit amet elit vitae purus dictum
			aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis
			parturient montes, nascetur ridiculus mus. Vestibulum dui sapien,
			porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus,
			pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat
			eros a volutpat.
		</Text>
		<br />
		<Text size="p1" color="secondary">
			Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt
			mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus, a
			posuere magna. Pellentesque finibus arcu vitae orci luctus sagittis.
			Proin porta metus ut dapibus pharetra. Sed interdum mi et tristique
			aliquam. Curabitur finibus at dolor eu fermentum. Cras diam mauris,
			malesuada quis lacinia eu, porttitor at lectus. Duis pellentesque
			ante eget efficitur lacinia. Vivamus ornare venenatis tortor euismod
			imperdiet.
		</Text>
		<br />
		<Text size="p1" color="secondary">
			Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla tempus
			semper velit, id ullamcorper orci molestie vel. Sed maximus nisi ac
			risus malesuada, quis varius purus interdum. Donec volutpat dolor in
			euismod hendrerit. Integer posuere tortor sit amet turpis viverra
			euismod. Mauris scelerisque ex diam, eget sodales erat accumsan vel.
			Etiam interdum odio a tortor fermentum, molestie interdum tellus
			bibendum. Vivamus vitae pulvinar ante. Aenean convallis aliquam
			velit congue ultricies. Aenean vel blandit erat. Mauris quis auctor
			nibh. Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar
			nunc.
		</Text>
		<br />
		<Text size="p1" color="secondary">
			Morbi mollis massa in eros tempus, ut venenatis ligula posuere. Nam
			ut ante lectus. Integer congue risus arcu, et ornare odio hendrerit
			eu. Mauris arcu ligula, interdum vitae consectetur vitae, volutpat a
			elit. Nulla luctus faucibus ipsum vitae maximus. Quisque in est nec
			libero commodo egestas. Donec faucibus, felis eget euismod
			facilisis, urna tortor molestie ex, eu eleifend leo tellus vel
			ligula. Mauris et urna massa. Integer ultrices massa commodo
			eleifend facilisis. Vestibulum dapibus magna cursus metus
			pellentesque tempor. Donec blandit elementum feugiat. Sed nec congue
			est.
		</Text>
		<br />
		<Text size="p1" color="secondary">
			Nulla quam magna, aliquet et odio non, porta condimentum tellus.
			Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis
			diam tempus laoreet. Fusce gravida arcu et lectus ultricies
			suscipit. Quisque sagittis tempus diam, malesuada posuere lorem
			sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc
			consequat porta.
		</Text>
		<br />
		<Text size="p1" color="secondary">
			Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada
			tellus. In nec fringilla elit. Cras vitae metus et leo convallis
			consectetur. Cras quis congue sapien, vitae aliquet ante. Integer
			sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit
			pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum
			justo, a faucibus ex dictum non. Vestibulum et dui diam.
		</Text>
	</div>
);

export const Standard: Story = {
	args: {
		title: 'Title',
		isOpen: true,
		onRequestClose: action('onChange'),
		children: (
			<Box padding="7">
				<Text size="p1" color="secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Duis convallis neque a laoreet maximus. Vestibulum hendrerit
					quam at mi venenatis faucibus at vel nisi. In ut risus et
					ipsum tincidunt tempor. Suspendisse potenti. Praesent
					faucibus posuere risus, at congue mauris porttitor ut. Donec
					sit amet elit vitae purus dictum aliquet quis ut ligula.
					Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum dui sapien,
					porttitor ac erat vel, malesuada rutrum mauris. Nam arcu
					tellus, pretium ut aliquet eget, ultrices vel est. Maecenas
					dapibus volutpat eros a volutpat.
				</Text>
				<br />
				<Text size="p1" color="secondary">
					Sed ante dui, sagittis sit amet tortor nec, egestas
					tincidunt mauris. Phasellus sed felis arcu. Etiam sit amet
					pharetra risus, a posuere magna. Pellentesque finibus arcu
					vitae orci luctus sagittis. Proin porta metus ut dapibus
					pharetra. Sed interdum mi et tristique aliquam. Curabitur
					finibus at dolor eu fermentum. Cras diam mauris, malesuada
					quis lacinia eu, porttitor at lectus. Duis pellentesque ante
					eget efficitur lacinia. Vivamus ornare venenatis tortor
					euismod imperdiet.
				</Text>
				<br />
				<Text size="p1" color="secondary">
					Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla
					tempus semper velit, id ullamcorper orci molestie vel. Sed
					maximus nisi ac risus malesuada, quis varius purus interdum.
					Donec volutpat dolor in euismod hendrerit. Integer posuere
					tortor sit amet turpis viverra euismod. Mauris scelerisque
					ex diam, eget sodales erat accumsan vel. Etiam interdum odio
					a tortor fermentum, molestie interdum tellus bibendum.
					Vivamus vitae pulvinar ante. Aenean convallis aliquam velit
					congue ultricies. Aenean vel blandit erat. Mauris quis
					auctor nibh. Morbi dui ipsum, lobortis non nisi vitae,
					convallis pulvinar nunc.
				</Text>
				<br />
				<Text size="p1" color="secondary">
					Morbi mollis massa in eros tempus, ut venenatis ligula
					posuere. Nam ut ante lectus. Integer congue risus arcu, et
					ornare odio hendrerit eu. Mauris arcu ligula, interdum vitae
					consectetur vitae, volutpat a elit. Nulla luctus faucibus
					ipsum vitae maximus. Quisque in est nec libero commodo
					egestas. Donec faucibus, felis eget euismod facilisis, urna
					tortor molestie ex, eu eleifend leo tellus vel ligula.
					Mauris et urna massa. Integer ultrices massa commodo
					eleifend facilisis. Vestibulum dapibus magna cursus metus
					pellentesque tempor. Donec blandit elementum feugiat. Sed
					nec congue est.
				</Text>
				<br />
				<Text size="p1" color="secondary">
					Nulla quam magna, aliquet et odio non, porta condimentum
					tellus. Maecenas fringilla sodales erat eu facilisis. Nunc
					rutrum purus quis diam tempus laoreet. Fusce gravida arcu et
					lectus ultricies suscipit. Quisque sagittis tempus diam,
					malesuada posuere lorem sagittis et. Duis eget eros nibh.
					Aenean at augue tincidunt nunc consequat porta.
				</Text>
				<br />
				<Text size="p1" color="secondary">
					Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel
					malesuada tellus. In nec fringilla elit. Cras vitae metus et
					leo convallis consectetur. Cras quis congue sapien, vitae
					aliquet ante. Integer sed lorem pretium, vestibulum arcu eu,
					imperdiet mauris. Nam blandit pharetra feugiat. Maecenas
					eget ante metus. Vivamus pretium ipsum justo, a faucibus ex
					dictum non. Vestibulum et dui diam.
				</Text>
			</Box>
		),
	},
	decorators: [withPageBackground],
};

const shortBody = (
	<Box padding="7">
		<Text size="p1" color="secondary">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
			convallis neque a laoreet maximus.
		</Text>
	</Box>
);

type WithFooterArgs = ComponentProps<typeof StandardModal> & {
	buttonCount: 1 | 2;
};

/**
 * The `footer` prop pins its content to the bottom of the modal with a 1px
 * top divider. The body area above scrolls; the footer stays put.
 * `ModalFooter` is the locked-down footer for it: one primary action and an
 * optional secondary action, with variant, size and ordering fixed so every
 * modal footer looks the same. Use the `buttonCount` control to preview one
 * or two buttons.
 */
export const WithFooterActions: StoryObj<WithFooterArgs> = {
	args: {
		title: 'Add asset',
		isOpen: true,
		onRequestClose: action('onRequestClose'),
		children: shortBody,
		buttonCount: 2,
	},
	argTypes: {
		buttonCount: {
			control: { type: 'inline-radio' },
			options: [1, 2],
		},
		footer: { control: false },
		children: { control: false },
	},
	render: ({ buttonCount, ...args }) => (
		<StandardModal
			{...args}
			footer={
				<ModalFooter
					primaryLabel="Confirm"
					onPrimaryClick={action('confirm')}
					secondaryLabel={buttonCount >= 2 ? 'Cancel' : undefined}
					onSecondaryClick={action('cancel')}
				/>
			}
		/>
	),
	decorators: [withPageBackground],
};
