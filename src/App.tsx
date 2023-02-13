import Accordion from './components/Accordion';

function App() {
	const items = [
		{
			id: 'lk1j23',
			label: 'Lorem ipsum dolor sit amet?',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo voluptates suscipit temporibus tenetur, porro, quae dicta veniam sunt facere aut magnam quidem laudantium atque?',
		},
		{
			id: 'asdf09',
			label: 'Lorem ipsum dolor sit amet?',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo voluptates suscipit temporibus tenetur, porro, quae dicta veniam sunt facere aut magnam quidem laudantium atque?',
		},
		{
			id: 'puio3',
			label: 'Lorem ipsum dolor sit amet?',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo voluptates suscipit temporibus tenetur, porro, quae dicta veniam sunt facere aut magnam quidem laudantium atque?',
		},
	];

	return (
		<div className='App'>
			<Accordion items={items} />
		</div>
	);
}

export default App;
