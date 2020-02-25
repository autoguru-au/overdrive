import React from 'react';
import { Portal } from './Portal';

export default { title: 'Components|Portal' };

export const Standard = () => (
	<Portal name={'a'}>
		<div>
			test child 1
			<Portal name={'b'}>
				<div>test child 2</div>
			</Portal>
		</div>
	</Portal>
);
