import { Fragment } from 'react';

export type TableProps = {
	data: Data[];
	config: Config[];
	keyFn: (rowData: any) => any;
};

export type Data = {
	name: string;
	color: string;
	score: number;
};

export type Config = {
	header?: () => any;
	label: string;
	render: (rowData: any) => any;
	sortValue?: (rowData: any) => any;
};

const Table = ({ data, config, keyFn }: TableProps) => {
	const renderedData = data.map((rowData) => {
		const renderedCells = config.map((column) => {
			return (
				<td className='p-2 text-center' key={column.label}>
					{column.render(rowData)}
				</td>
			);
		});
		return (
			<tr className='border-b' key={keyFn(rowData)}>
				{renderedCells}
			</tr>
		);
	});

	const renderedHeaders = config.map((column) => {
		if (column.header) {
			return <Fragment key={column.label}>{column.header()}</Fragment>;
		}
		return <th key={column.label}>{column.label}</th>;
	});

	return (
		<table className='table-auto border-spacing-2'>
			<thead>
				<tr className='border-b-2'>{renderedHeaders}</tr>
			</thead>
			<tbody>{renderedData}</tbody>
		</table>
	);
};

export default Table;
