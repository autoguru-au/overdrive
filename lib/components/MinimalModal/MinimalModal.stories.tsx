import { ArgTypes, Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { action } from 'storybook/actions';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { MinimalModal } from './MinimalModal';
import * as styles from './MinimalModal.css';

const argTypes: ArgTypes = {
	alignItems: {
		options: ['flexStart', 'center', 'flexEnd'],
		control: {
			type: 'select',
		},
	},
};

export default {
	title: 'Components/Modal: Minimal',
	component: MinimalModal,
	parameters: {
		chromatic: { disable: true },
	},
	argTypes,
	decorators: [
		(Story) => (
			<div style={{ minHeight: '660px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof MinimalModal>;

type Story = StoryObj<typeof MinimalModal>;

const Content = ({ alignment }) => (
	<Box
		backgroundColour="white"
		paddingX="4"
		paddingY="3"
		className={styles.borders[alignment]}
	>
		<Text>
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
		<Text>
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
		<Text>
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
		<Text>
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
		<Text>
			Nulla quam magna, aliquet et odio non, porta condimentum tellus.
			Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus quis
			diam tempus laoreet. Fusce gravida arcu et lectus ultricies
			suscipit. Quisque sagittis tempus diam, malesuada posuere lorem
			sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc
			consequat porta.
		</Text>
		<br />
		<Text>
			Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel malesuada
			tellus. In nec fringilla elit. Cras vitae metus et leo convallis
			consectetur. Cras quis congue sapien, vitae aliquet ante. Integer
			sed lorem pretium, vestibulum arcu eu, imperdiet mauris. Nam blandit
			pharetra feugiat. Maecenas eget ante metus. Vivamus pretium ipsum
			justo, a faucibus ex dictum non. Vestibulum et dui diam.
		</Text>
	</Box>
);

const additionalContent = (
	<>
		<Text>
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
		<Text>
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
		<Text>
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
	</>
);

const renderStory = (args: ComponentProps<typeof MinimalModal>) => (
	<>
		<MinimalModal {...args} />
		{additionalContent}
	</>
);

export const Standard: Story = {
	args: {
		isOpen: true,
		onRequestClose: action('onChange'),
		children: <Content alignment="center" />,
	},
	render: renderStory,
};

export const PinnedToTop: Story = {
	args: {
		isOpen: true,
		onRequestClose: action('onChange'),
		children: <Content alignment="flexStart" />,
		alignItems: 'flex-start',
	},
	render: renderStory,
};

export const PinnedToTopCentre: Story = {
	args: {
		isOpen: true,
		onRequestClose: action('onChange'),
		children: <Content alignment="flexEnd" />,
		alignItems: 'center',
	},
	render: renderStory,
};

export const PinnedToTopBottom: Story = {
	args: {
		isOpen: true,
		onRequestClose: action('onChange'),
		children: <Content alignment="flexEnd" />,
		alignItems: 'flex-end',
	},
	render: renderStory,
};
