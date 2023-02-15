import { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table, { TableProps } from './Table';

type SortOrderState = 'asc' | 'desc' | null;
type SortByState = string | null;

const SortableTable = (props: TableProps) => {
	const { config, data } = props;
	const [sortOrder, setSortOrder] = useState<SortOrderState>(null);
	const [sortBy, setSortBy] = useState<SortByState>(null);

	const handleClick = (label: string) => {
		if (sortBy && label !== sortBy) {
			setSortOrder('asc');
			setSortBy(label);
			return;
		}

		if (sortOrder === null) {
			setSortOrder('asc');
			setSortBy(label);
		} else if (sortOrder === 'asc') {
			setSortOrder('desc');
			setSortBy(label);
		} else if (sortOrder === 'desc') {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th
					className='cursor-pointer hover:bg-gray-100'
					onClick={() => handleClick(column.label)}
				>
					<div className='flex items-center select-none'>
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	// Only sort data if sortOrder and sortBy are null
	// Make a copy of 'data' prop
	// Find the correct sortValue function and use to sort
	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } =
			config.find((column) => column.label === sortBy) || {};
		sortedData = [...data].sort((a, b) => {
			let valueA, valueB;
			if (sortValue) {
				// Apply sorting function to transform values to expected form
				valueA = sortValue(a);
				valueB = sortValue(b);
			}

			const reverseOrder = sortOrder === 'asc' ? 1 : -1;

			if (typeof valueA === 'string') {
				return valueA.localeCompare(valueB) * reverseOrder;
			} else {
				return (valueA - valueB) * reverseOrder;
			}
		});
	}

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
