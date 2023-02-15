import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table, { TableProps } from './Table';
import useSorting, { SortByState, SortOrderState } from '../hooks/useSorting';

const SortableTable = (props: TableProps) => {
	const { config, data } = props;
	const { sortOrder, sortBy, sortedData, setSortColumn } = useSorting(
		data,
		config
	);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th
					className='cursor-pointer hover:bg-gray-100'
					onClick={() => setSortColumn(column.label)}
				>
					<div className='flex items-center select-none'>
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	return (
		<div>
			<Table {...props} data={sortedData} config={updatedConfig} />
		</div>
	);
};

function getIcons(
	label: string,
	sortBy: SortByState,
	sortOrder: SortOrderState
) {
	if (label !== sortBy) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	}
	if (sortOrder === null) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	} else if (sortOrder === 'asc') {
		return (
			<div>
				<GoArrowSmallUp />
			</div>
		);
	} else if (sortOrder === 'desc') {
		return (
			<div>
				<GoArrowSmallDown />
			</div>
		);
	}
}

export default SortableTable;
