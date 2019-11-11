import React, {
	Dispatch,
	FunctionComponent,
	ReactElement,
	ReactText,
	Reducer,
	ReducerAction,
	useEffect,
	useLayoutEffect,
	useReducer,
} from 'react';
import { render } from 'react-dom';

import { Alert, EAlertIntent } from '../Alert';
import styles from './Toaster.scss';

type MessageType = ReactText | ReactElement;

interface MessageConfig {
	message: MessageType;
	intent: EAlertIntent;
	id: number;
	duration: number;
}

interface ToastFn
	extends Required<
		Record<
			EAlertIntent,
			(message: MessageType, duration?: number) => () => void
		>
	> {
	(message: MessageType, duration?: number): () => void;
}

enum ActionTypes {
	ADD,
	REMOVE,
}

type Actions =
	| { type: ActionTypes.ADD; config: MessageConfig }
	| { type: ActionTypes.REMOVE; id: number };

let portalInstance = null;
let dispatchFn: Dispatch<Actions>;
let preMountQueue: Array<Readonly<MessageConfig>> = [];
const DEFAULT_DURATION = 5e3;

let ids = -1;
const getNewId = () => ++ids;

const init = () => {
	const onMount = dispatcher => {
		dispatchFn = dispatcher;
		preMountQueue.forEach(config =>
			dispatcher({ type: ActionTypes.ADD, config }),
		);
		preMountQueue = [];
	};

	if (portalInstance === null && typeof window !== 'undefined') {
		portalInstance = document.createElement('div');
		portalInstance.className = styles.root;
		portalInstance.setAttribute('data-toast-owner', 'overdrive');
		document.body.append(portalInstance);

		render(<ToastManager onMount={onMount} />, portalInstance);
	}
};

export const container = () => {
	if (portalInstance === null) {
		init();
	}

	return {
		dispatch(message: MessageType, duration: number, intent: EAlertIntent) {
			const config: MessageConfig = {
				id: getNewId(),
				message,
				intent,
				duration,
			};

			if (portalInstance === null || typeof dispatchFn === 'undefined') {
				preMountQueue.push(config);
			} else {
				dispatchFn({ type: ActionTypes.ADD, config });
			}

			return () => {
				dispatchFn({ type: ActionTypes.REMOVE, id: config.id });
			};
		},
	};
};

type ToastManagerReducer = Reducer<{ messages: MessageConfig[] }, Actions>;
const toastManagerReducer: ToastManagerReducer = (prevState, action) => {
	switch (action.type) {
		default:
		case ActionTypes.ADD: {
			return {
				messages: [...prevState.messages, action.config],
			};
		}

		case ActionTypes.REMOVE: {
			return {
				messages: prevState.messages.filter(
					item => item.id !== action.id,
				),
			};
		}
	}
};

const ToastManager: FunctionComponent<{
	onMount: (dispatch: Dispatch<Actions>) => void;
}> = ({ onMount }) => {
	const [state, dispatch] = useReducer<ToastManagerReducer>(
		toastManagerReducer,
		{ messages: [] },
	);

	useEffect(() => {
		onMount(dispatch);
	}, []);

	return (
		<>
			{state.messages.map(item => (
				<Toast key={item.id} {...item} dispatch={dispatch} />
			))}
		</>
	);
};

const Toast: FunctionComponent<MessageConfig & {
	dispatch: Dispatch<ReducerAction<ToastManagerReducer>>;
}> = ({ dispatch, duration, message, id, intent }) => {
	useLayoutEffect(() => {
		const timeout = setTimeout(() => {
			dispatch({ type: ActionTypes.REMOVE, id });
		}, duration);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<Alert
			dismissible
			intent={intent}
			className={styles.alert}
			onRequestClose={() => {
				dispatch({ type: ActionTypes.REMOVE, id });
			}}>
			{message}
		</Alert>
	);
};

export const toast: ToastFn = (message, duration = DEFAULT_DURATION) =>
	container().dispatch(message, duration, EAlertIntent.info);

toast.success = (message, duration = DEFAULT_DURATION) =>
	container().dispatch(message, duration, EAlertIntent.success);
toast.danger = (message, duration = DEFAULT_DURATION) =>
	container().dispatch(message, duration, EAlertIntent.danger);
toast.info = (message, duration = DEFAULT_DURATION) =>
	container().dispatch(message, duration, EAlertIntent.info);
toast.warning = (message, duration = DEFAULT_DURATION) =>
	container().dispatch(message, duration, EAlertIntent.warning);
