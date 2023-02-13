import Accordion from '../components/Accordion';

function AccordionPage() {
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
		<div className=''>
			<Accordion items={items} />
		</div>
	);
}

export default AccordionPage;
