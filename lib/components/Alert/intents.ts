import {
	CheckCircleIcon,
	IconType,
	InfoIcon,
	WarningCircleIcon,
	WarningIcon,
} from '@autoguru/icons';
import type { ComponentProps } from 'react';

import { sprinkles } from '../../styles';
import { IntentStripe } from '../IntentStripe/IntentStripe';

import type { StyledAlertProps } from './Alert.css';

export type IntentStripeProps = ComponentProps<typeof IntentStripe>;
export type Intent = IntentStripeProps['intent'];

/**
 * The two DS-2026 layouts. Omitting `appearance` keeps the established render.
 */
export type AlertAppearance = NonNullable<StyledAlertProps['appearance']>;

export const iconMapForIntent: Record<Intent, IconType> = {
	danger: WarningCircleIcon,
	information: InfoIcon,
	success: CheckCircleIcon,
	warning: WarningIcon,
};

export const textColorForIntent: Record<
	Intent,
	Parameters<typeof sprinkles>[0]['color']
> = {
	danger: 'alertForeground',
	information: 'infoForeground',
	success: 'successForeground',
	warning: 'warningForeground',
};
