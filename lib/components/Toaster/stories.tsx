import React from 'react';

import { Actions } from '../Actions';
import { Button } from '../Button';
import { Text } from '../Typography';
import { toast } from '.';

export default { title: 'Utility|Toaster' };

export const standard = () => {
	return (
		<Actions equalWidth={false}>
			<Button onClick={() => toast.success('Successful message!')}>
				Success
			</Button>
			<Button onClick={() => toast.danger('Danger  message!')}>
				Danger
			</Button>
			<Button
				onClick={() =>
					toast.info(
						<Text>
							Im some text, which is <Text strong>bolded!</Text>
						</Text>,
					)
				}>
				Custom
			</Button>
		</Actions>
	);
};
