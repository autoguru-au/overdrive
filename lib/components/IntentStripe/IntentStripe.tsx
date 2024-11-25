import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box } from '../Box';
import { backgroundColours } from '../Box/useBoxStyles.css';

import * as styles from './IntentStripe.css';

type Intent = keyof Pick<
	typeof backgroundColours,
	'danger' | 'information' | 'success' | 'warning'
>;

export interface Props {
	className?: string;
	intent: Intent;
}

export const IntentStripe: FunctionComponent<Props> = ({
	className = '',
	intent = 'success',
}) => (
	<Box
		className={[className, styles.intentBox]}
		position="absolute"
		height="full"
		backgroundColour={intent}
	/>
);

export default IntentStripe;
