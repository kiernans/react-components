import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
	onClose: () => void;
	container: HTMLElement;
	children?: React.ReactNode;
	actionBar?: React.ReactNode;
};

const Modal = ({ onClose, container, children, actionBar }: ModalProps) => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	return ReactDOM.createPortal(
		<div>
			{/* Modal background */}
			<div
				onClick={onClose}
				className='fixed inset-0 bg-gray-300 opacity-80'
			></div>
			{/* Inner modal */}
			<div className='fixed inset-40 p-10 bg-white'>
				<div className='flex flex-col justify-between h-full'>
					{children}
					<div className='flex justify-end'>{actionBar}</div>
				</div>
			</div>
		</div>,
		container
	);
};

export default Modal;
