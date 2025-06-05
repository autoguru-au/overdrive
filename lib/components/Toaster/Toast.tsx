/* eslint-disable @typescript-eslint/ban-ts-comment */
import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import {
	ComponentProps,
	createContext,
	FunctionComponent,
	ReactNode,
	Reducer,
	useCallback,
	useContext,
	useLayoutEffect,
	useMemo,
	useReducer,
} from 'react';

import { isBrowser } from '../../utils';
import { Alert } from '../Alert/Alert';
import { Box } from '../Box/Box';
import { Portal } from '../Portal/Portal';
import { Stack } from '../Stack/Stack';

import * as styles from './Toast.css';

type MessageType = ReactNode;
type AlertIntent = Required<ComponentProps<typeof Alert>>['intent'];

interface MessageConfig {
	id: number;
	message: MessageType;
	intent: AlertIntent;
	duration: number;
}

type AddToastFn = (config: Omit<MessageConfig, 'id'>) => void;

interface ToastFn
	extends Required<
		Record<AlertIntent, (message: MessageType, duration?: number) => void>
	> {
	(message: MessageType, duration?: number): void;
}

enum ActionTypes {
	ADD,
	REMOVE,
}

type Actions =
	| { type: ActionTypes.ADD; config: MessageConfig }
	| { type: ActionTypes.REMOVE; id: number };

const DEFAULT_DURATION = 5e3;
let ids = -1;
const getNewId = () => ++ids;

const reducer: Reducer<{ toasts: MessageConfig[] }, Actions> = (
	state,
	action,
) => {
	switch (action.type) {
		case ActionTypes.ADD: {
			return { ...state, toasts: [...state.toasts, action.config] };
		}
		case ActionTypes.REMOVE: {
			return {
				...state,
				toasts: state.toasts.filter(({ id }) => id !== action.id),
			};
		}
		default: {
			return state;
		}
	}
};

const ToastControllerContext = createContext<AddToastFn | null>(null);

const InternalToastProvider = ({ children }) => {
	const [{ toasts }, dispatch] = useReducer(reducer, { toasts: [] });

	const addToast: AddToastFn = useCallback((config) => {
		dispatch({
			type: ActionTypes.ADD,
			config: { ...config, id: getNewId() },
		});
	}, []);

	const removeToast = useCallback((id: number) => {
		dispatch({ type: ActionTypes.REMOVE, id });
	}, []);

	return (
		<ToastControllerContext.Provider value={addToast}>
			{children}
			<Portal>
				<Box
					display="flex"
					position="fixed"
					alignItems="center"
					justifyContent="center"
					className={styles.root}
				>
					<Stack space="2">
						{toasts.map((item) => (
							<Toast
								key={item.id}
								{...item}
								remove={removeToast}
							/>
						))}
					</Stack>
				</Box>
			</Portal>
		</ToastControllerContext.Provider>
	);
};

export const ToastProvider = ({ children }) => {
	const currentContext = useContext(ToastControllerContext);

	if (currentContext !== null) {
		return <>{children}</>;
	}

	return <InternalToastProvider>{children}</InternalToastProvider>;
};

export const useToast = (): ToastFn => {
	const addToast = useContext(ToastControllerContext);

	invariant(addToast !== null, 'No `ToastProvider` setup');

	return useMemo(() => {
		const fn: ToastFn = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				intent: 'information',
			});

		// @ts-ignore
		fn.primary = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				// @ts-ignore
				intent: 'primary',
			});
		// @ts-ignore
		fn.secondary = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				// @ts-ignore
				intent: 'secondary',
			});
		// @ts-ignore
		fn.shine = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				// @ts-ignore
				intent: 'shine',
			});
		fn.success = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				intent: 'success',
			});
		// @ts-ignore
		fn.neutral = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				// @ts-ignore
				intent: 'neutral',
			});
		fn.danger = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				intent: 'danger',
			});
		fn.information = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				intent: 'information',
			});
		fn.warning = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				intent: 'warning',
			});

		return fn;
	}, [addToast]);
};

const Toast: FunctionComponent<
	MessageConfig & {
		remove: (id: number) => void;
	}
> = ({ remove, duration, message, id, intent }) => {
	const dismiss = useCallback(() => {
		remove(id);
	}, [id, remove]);
	if (isBrowser) {
		useLayoutEffect(() => {
			const timeout = setTimeout(() => {
				dismiss();
			}, duration);

			return () => {
				clearTimeout(timeout);
			};
		}, [dismiss]);
	}

	return (
		<Alert
			dismissible
			intent={intent}
			className={styles.alert}
			onRequestClose={dismiss}
		>
			{message}
		</Alert>
	);
};

export default Toast;
