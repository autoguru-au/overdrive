import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { Modal } from '.';

import { Box } from '../Box';
import { Button } from '../Button';

const Body = ({ children }) => (
	<Box backgroundColour="white" padding="5" borderRadius="2">
		{children}
	</Box>
);

export default {
	title: 'Utility|Modal',
	component: Modal,
	parameters: {
		chromatic: { disable: true },
	},
};

export const Standard = () => (
	<Modal
		isOpen={boolean('isOpen', true)}
		onRequestClose={action('onRequestClose')}>
		<Body>
			<p>Hello, I am a modal body!</p>
		</Body>
	</Modal>
);

export const TriggeredWithAButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onRequestClose = (e) => {
		action('onRequestClose')(e);
		setIsOpen(false);
	};

	return (
		<>
			<Button
				children="Click Me"
				variant="primary"
				onClick={useCallback(() => setIsOpen(true), [])}
			/>
			<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
				<Body>
					<p>Hello, I am a modal body!</p>
				</Body>
			</Modal>
		</>
	);
};

export const CloseByInternalButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button
				variant="primary"
				onClick={useCallback(() => setIsOpen(true), [])}>
				Click Me
			</Button>
			<Modal isOpen={isOpen}>
				<Body>
					<p>Hello, I am a modal body!</p>
					<Button
						children="Close Me"
						isFullWidth
						size="small"
						onClick={useCallback(() => setIsOpen(false), [])}
					/>
				</Body>
			</Modal>
		</>
	);
};
