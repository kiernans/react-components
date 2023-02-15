import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

type CounterProps = {
	initialCount: number;
};

type CounterState = {
	count: number;
	valueToAdd: number;
};

type CounterAction = {
	type: string;
	payload?: any;
};

const ActionType = {
	INCREMENT_COUNT: 'increment_count',
	DECREMENT_COUNT: 'decrement_count',
	CHANGE_VALUE_TO_ADD: 'change_value_to_add',
	ADD_VALUE_TO_COUNT: 'add_value_to_count',
} as const;
// eslint-disable-next-line @typescript-eslint/no-redeclare
type ActionType = typeof ActionType[keyof typeof ActionType];

const reducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		case ActionType.INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1,
			};
		case ActionType.DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1,
			};
		case ActionType.CHANGE_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload,
			};
		case ActionType.ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0,
			};
		default:
			return state;
	}
};

const CounterPage = ({ initialCount }: CounterProps) => {
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0,
	});

	const incrementCount = () => {
		dispatch({
			type: ActionType.INCREMENT_COUNT,
		});
	};

	const decrementCount = () => {
		dispatch({
			type: ActionType.DECREMENT_COUNT,
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value) || 0;

		dispatch({
			type: ActionType.CHANGE_VALUE_TO_ADD,
			payload: value,
		});
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch({
			type: ActionType.ADD_VALUE_TO_COUNT,
		});
	};

	return (
		<Panel className='m-3'>
			<h1 className='text-lg'>Current Count: {state.count}</h1>
			<div className='flex flex-row'>
				<Button onClick={incrementCount}>Increment</Button>
				<Button onClick={decrementCount}>Decrement</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={state.valueToAdd || ''}
					onChange={handleChange}
					type='number'
					className='p-1 m-3 bg-gray-50 border border-gray-300'
				/>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
};

export default CounterPage;
