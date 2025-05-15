import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box } from '../Box';

import * as styles from './IntentStripe.css';

type Intent = 'danger' | 'information' | 'success' | 'warning';

export interface IntentStripeProps {
	className?: string;
	intent: Intent;
}

export const IntentStripe: FunctionComponent<IntentStripeProps> = ({
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
