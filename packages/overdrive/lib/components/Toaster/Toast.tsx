import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import {
	ComponentProps,
	createContext,
	FunctionComponent,
	ReactChild,
	Reducer,
	useCallback,
	useContext,
	useLayoutEffect,
	useMemo,
	useReducer,
} from 'react';
import { useStyles } from 'react-treat';

import { Alert } from '../Alert';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { Stack } from '../Stack';

import * as styleRefs from './Toast.treat';

type MessageType = ReactChild;
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
		case ActionTypes.ADD:
			return { ...state, toasts: [...state.toasts, action.config] };
		case ActionTypes.REMOVE:
			return {
				...state,
				toasts: state.toasts.filter(({ id }) => id !== action.id),
			};
		default:
			return state;
	}
};

const ToastControllerContext = createContext<AddToastFn | null>(null);

const InternalToastProvider = ({ children }) => {
	const styles = useStyles(styleRefs);
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
					width="full"
					display="flex"
					position="fixed"
					alignItems="center"
					justifyContent="center"
					className={styles.root}>
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

		fn.success = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
				intent: 'success',
			});
		fn.neutral = (message, duration = DEFAULT_DURATION) =>
			void addToast({
				message,
				duration,
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
	const styles = useStyles(styleRefs);

	const dismiss = useCallback(() => {
		remove(id);
	}, [id, remove]);

	useLayoutEffect(() => {
		const timeout = setTimeout(() => {
			dismiss();
		}, duration);

		return () => {
			clearTimeout(timeout);
		};
	}, [dismiss]);

	return (
		<Alert
			dismissible
			intent={intent}
			className={styles.alert}
			onRequestClose={dismiss}>
			{message}
		</Alert>
	);
};
