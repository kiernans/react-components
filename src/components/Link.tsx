import React from 'react';
import classNames from 'classnames';
import useNavigation from '../hooks/useNavigation';

type LinkProps = {
	to: string;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
};

const Link = ({ to, children, className, activeClassName }: LinkProps) => {
	const { navigate, currentPath } = useNavigation();

	const classes = classNames(
		'text-blue-500',
		className,
		currentPath === to && activeClassName
	);

	const handleClick = (e: React.SyntheticEvent | React.KeyboardEvent) => {
		let keyboardEvent = e as React.KeyboardEvent;
		let clickEvent = e as React.SyntheticEvent;
		// Allow for opening in new tab if ctrl key held
		if (keyboardEvent.metaKey || keyboardEvent.ctrlKey) {
			return;
		}
		clickEvent.preventDefault();
		navigate(to);
	};

	return (
		<a className={classes} onClick={handleClick} href={to}>
			{children}
		</a>
	);
};

export default Link;
