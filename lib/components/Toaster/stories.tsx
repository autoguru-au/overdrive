import React from 'react';

import { Button } from '../Button';
import { Text } from '../Typography';
import { toast } from '.';

export default { title: 'Utility|Toaster' };

export const standard = () => {
	const doThing = () => {
		delay(() => toast.success('test'));
		delay(() => toast.danger(<Text>test</Text>));
		delay(() => toast(<Text>test</Text>));
	};

	return <Button onClick={() => doThing()}>Toast 🍻</Button>;
};

let count = 0;

function delay(cb) {
	setTimeout(() => cb(), 1e3 * ++count);
}
