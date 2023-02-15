import { useState } from 'react';
import { Data, Config } from '../components/Table';

export type SortOrderState = 'asc' | 'desc' | null;
export type SortByState = string | null;

const useSorting = (data: Data[], config: Config[]) => {
	const [sortOrder, setSortOrder] = useState<SortOrderState>(null);
	const [sortBy, setSortBy] = useState<SortByState>(null);

	const setSortColumn = (label: string) => {
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

	return {
		sortOrder,
		sortBy,
		sortedData,
		setSortColumn,
	};
};

export default useSorting;
