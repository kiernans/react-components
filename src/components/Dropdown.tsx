import React, { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

type DropdownProps = {
	options: Option[];
	value: Option | null;
	onChange: (option: Option) => void;
};

export type Option = {
	label: string;
	value: string;
};

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const divEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (!divEl.current) {
				return;
			}

			if (!divEl.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handler, true);

		return () => document.removeEventListener('click', handler);
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: Option) => {
		//Close dropdown
		setIsOpen(false);
		// Get option value
		onChange(option);
	};

	const renderedOptions = options.map((option) => {
		return (
			<div
				className='hover:bg-sky-100 rounded cursor-pointer p-1'
				onClick={() => handleOptionClick(option)}
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={divEl} className='w-48 relative'>
			<Panel
				className='flex justify-between items-center cursor-pointer '
				onClick={handleClick}
			>
				{value?.label || 'Select...'}
				<GoChevronDown className='text-lg' />
			</Panel>
			{isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
		</div>
	);
};

export default Dropdown;
