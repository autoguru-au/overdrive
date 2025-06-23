import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';

import { Flex } from './Flex';

const Item = ({ children }: React.PropsWithChildren) => (
	<Box
		padding="4"
		borderStyle="solid"
		borderWidth="1"
		borderColor="muted"
		style={{ minWidth: '100px' }}
		textAlign="center"
	>
		{children}
	</Box>
);

const Content = () => (
	<>
		<Item>1</Item>
		<Item>2</Item>
		<Item>3</Item>
		<Item>4</Item>
		<Item>5</Item>
		<Item>6</Item>
		<Item>7</Item>
		<Item>8</Item>
		<Item>9</Item>
		<Item>10</Item>
		<Item>11</Item>
		<Item>12</Item>
		<Item>13</Item>
		<Item>14</Item>
		<Item>15</Item>
		<Item>16</Item>
		<Item>17</Item>
		<Item>18</Item>
		<Item>19</Item>
		<Item>20</Item>
	</>
);

const meta = {
	title: 'Layout/Flex',
	tags: [],
	component: Flex,
	args: {
		children: <Content />,
		gap: '4',
	},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	args: {
		// alignItems: 'center',
		horz: true,
		// justifyContent: 'center',
	},
};

export const Vertical: Story = {
	args: {
		vert: true,
	},
};
