import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import * as React from 'react';
import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { withModal, Modal } from '.';
import { Portal } from '../Portal';

const NakedModal = withModal(({ children, isOpen }) =>
	isOpen ? (
		<div
			style={{
				padding: '25px',
				borderRadius: '4px',
				backgroundColor: 'white',
				display: 'grid',
				gridGap: '16px',
			}}>
			{children}
		</div>
	) : null,
);

export default {
	title: 'Utility|Modal',
	component: Modal,
};

export const withModalDefault = () => (
	<NakedModal
		isOpen={boolean('isOpen', true)}
		onRequestClose={action('onRequestClose')}>
		<p>Hello, I am a modal body!</p>
	</NakedModal>
);

export const withModalTriggeredWithAButton = () => {
	const Example = () => {
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
				<NakedModal isOpen={isOpen} onRequestClose={onRequestClose}>
					<p>Hello, I am a modal body!</p>
				</NakedModal>
			</>
		);
	};

	return <Example />;
};

export const withModalCloseWithInternalButton = () => {
	const Example = () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<Button
					variant="primary"
					onClick={useCallback(() => setIsOpen(true), [])}>
					Click Me
				</Button>
				<NakedModal isOpen={isOpen}>
					<p>Hello, I am a modal body!</p>
					<Button
						children="Close Me"
						isFullWidth
						size="small"
						onClick={useCallback(() => setIsOpen(false), [])}
					/>
				</NakedModal>
			</>
		);
	};

	return <Example />;
};
