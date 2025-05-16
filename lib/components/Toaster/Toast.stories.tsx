import * as React from 'react';

import { Actions } from '../Actions/Actions';
import { Button } from '../Button/Button';
import { StandardModal } from '../StandardModal/StandardModal';
import { Text } from '../Text/Text';

import { ToastProvider, useToast } from './Toast';

export default {
	title: 'Components/Toast (useToast)',
	decorators: [
		(Story) => (
			<ToastProvider>
				<Story />
			</ToastProvider>
		),
	],
};

export const Standard = () => {
	const toast = useToast();

	return (
		<Actions>
			<Button onClick={() => toast.success('Successful message!')}>
				Success
			</Button>
			<Button onClick={() => toast.danger('Danger  message!')}>
				Danger
			</Button>
			<Button
				onClick={() =>
					toast.information(
						<Text>
							Im some text, which is <Text strong>bolded!</Text>
						</Text>,
					)
				}
			>
				Custom
			</Button>
		</Actions>
	);
};

export const InsideModal = {
	render: () => {
		const toast = useToast();

		return (
			<StandardModal isOpen title="Test inside modal">
				<div style={{ padding: 20 }}>
					<Button
						onClick={() => toast.success('Successful message!')}
					>
						Success
					</Button>
				</div>
			</StandardModal>
		);
	},

	parameters: {
		chromatic: { disable: true },
	},
};
