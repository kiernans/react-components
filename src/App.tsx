import { useState } from 'react';
import Dropdown from './components/Dropdown';
import { Option } from './components/Dropdown';

function App() {
	const [selection, setSelection] = useState<Option | null>(null);

	const handleSelection = (option: Option) => {
		setSelection(option);
	};

	const options = [
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Blue', value: 'blue' },
	];

	return (
		<div className='flex'>
			<Dropdown
				options={options}
				value={selection}
				onChange={handleSelection}
			/>
			<Dropdown
				options={options}
				value={selection}
				onChange={handleSelection}
			/>
		</div>
	);
}

export default App;
