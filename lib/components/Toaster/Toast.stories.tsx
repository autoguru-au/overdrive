import * as React from 'react';

import { Actions } from '../Actions';
import { Button } from '../Button';
import { StandardModal } from '../StandardModal';
import { Text } from '../Text';

import { ToastProvider, useToast } from '.';

export default {
	title: 'Components/Toaster',
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
