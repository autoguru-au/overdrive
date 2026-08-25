import type { FunctionComponent, ReactNode } from 'react';
import * as React from 'react';

import { Box } from '../Box/Box';

export interface ModalFooterProps {
	/**
	 * Buttons (or any interactive elements) to render right-aligned in the
	 * footer. Order in source order — the last child sits on the right.
	 */
	children: ReactNode;
	className?: string;
}

/**
 * Layout helper for the `footer` slot on `StandardModal`. Puts its children
 * in a right-aligned row with a 12px gap and standard padding, so the common
 * secondary/primary CTA pattern is one component call, not eight props on the
 * modal.
 *
 * Auto-closing on click is the consumer's job — no primary/secondary click
 * handler on this component closes the modal. That way a Save button that
 * validates or awaits an async call never closes the modal before the work
 * finishes.
 *
 * @example
 * <StandardModal
 *   title="Add asset"
 *   isOpen={open}
 *   onRequestClose={close}
 *   footer={
 *     <ModalFooter>
 *       <Button variant="secondary" onClick={close}>Cancel</Button>
 *       <Button variant="primary" onClick={submit}>Add asset</Button>
 *     </ModalFooter>
 *   }
 * >
 *   {body}
 * </StandardModal>
 */
export const ModalFooter: FunctionComponent<ModalFooterProps> = ({
	children,
	className,
}) => (
	<Box
		display="flex"
		alignItems="center"
		justifyContent="flexEnd"
		gap="3"
		width="full"
		paddingY="5"
		paddingX="5"
		className={className}
	>
		{children}
	</Box>
);
