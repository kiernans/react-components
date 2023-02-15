import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

const TablePage = () => {
	const data = [
		{ name: 'Orange', color: 'bg-orange-500', score: 5 },
		{ name: 'Apple', color: 'bg-red-500', score: 3 },
		{ name: 'Banana', color: 'bg-yellow-500', score: 1 },
		{ name: 'Lime', color: 'bg-green-500', score: 4 },
	];

	const config = [
		{
			label: 'Name',
			render: (fruit: any) => fruit.name,
			sortValue: (fruit: any) => fruit.name,
		},
		{
			label: 'Color',
			render: (fruit: any) => <div className={`p-3 m-2 ${fruit.color}`} />,
		},
		{
			label: 'Score',
			render: (fruit: any) => fruit.score,
			sortValue: (fruit: any) => fruit.score,
		},
		{
			label: 'Score Squared',
			render: (fruit: any) => fruit.score ** 2,
			sortValue: (fruit: any) => fruit.score ** 2,
		},
	];

	const keyFn = (fruit: any) => {
		return fruit.name;
	};

	return (
		<div className='flex gap-8'>
			<Table data={data} config={config} keyFn={keyFn} />
			<SortableTable data={data} config={config} keyFn={keyFn} />
		</div>
	);
};

export default TablePage;
