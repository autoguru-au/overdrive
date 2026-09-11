import type { FunctionComponent, MouseEventHandler } from 'react';
import * as React from 'react';

import type { ConsistentComponentProps } from '../../types';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

export interface ModalFooterProps extends ConsistentComponentProps {
	/**
	 * Label for the primary action button, rendered on the far right.
	 */
	primaryLabel: string;
	/**
	 * Called when the primary button is clicked. Closing the modal is the
	 * consumer's job — nothing here closes it, so a Save that validates or
	 * awaits an async call never closes the modal before the work finishes.
	 */
	onPrimaryClick?: MouseEventHandler<HTMLButtonElement>;
	/**
	 * Label for the optional secondary button (e.g. Cancel), rendered to the
	 * left of the primary. Omit for a single-button footer.
	 */
	secondaryLabel?: string;
	/**
	 * Called when the secondary button is clicked.
	 */
	onSecondaryClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Locked-down footer for the `footer` slot on `StandardModal`: one primary
 * action and an optional secondary action, right-aligned with a 12px gap and
 * standard padding. Button variant, size and ordering are fixed so every
 * modal footer looks the same — only the labels and click handlers are the
 * consumer's.
 *
 * @example
 * <StandardModal
 *   title="Add asset"
 *   isOpen={open}
 *   onRequestClose={close}
 *   footer={
 *     <ModalFooter
 *       primaryLabel="Add asset"
 *       onPrimaryClick={submit}
 *       secondaryLabel="Cancel"
 *       onSecondaryClick={close}
 *     />
 *   }
 * >
 *   {body}
 * </StandardModal>
 */
export const ModalFooter: FunctionComponent<ModalFooterProps> = ({
	primaryLabel,
	onPrimaryClick,
	secondaryLabel,
	onSecondaryClick,
	className,
	testId,
}) => (
	<Box
		odComponent="modal-footer"
		testId={testId}
		display="flex"
		alignItems="center"
		justifyContent="flexEnd"
		gap="3"
		width="full"
		paddingY="5"
		paddingX="5"
		className={className}
	>
		{secondaryLabel ? (
			<Button variant="secondary" size="medium" onClick={onSecondaryClick}>
				{secondaryLabel}
			</Button>
		) : null}
		<Button variant="primary" size="medium" onClick={onPrimaryClick}>
			{primaryLabel}
		</Button>
	</Box>
);

ModalFooter.displayName = 'ModalFooter';
