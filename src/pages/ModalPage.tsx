import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

type ModalPageProps = {
	containerRef: React.RefObject<HTMLDivElement>;
};

const ModalPage = ({ containerRef }: ModalPageProps) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>
				I Accept
			</Button>
		</div>
	);

	const modal = (
		<Modal
			onClose={handleClose}
			container={document.querySelector('.modal-container') as HTMLElement}
			actionBar={actionBar}
		>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);

	return (
		<div className='relative'>
			<Button primary onClick={handleClick}>
				Open Modal
			</Button>
			{showModal && containerRef.current && modal}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, amet. Nisi
				maxime assumenda quisquam quas. Officia iusto nemo necessitatibus
				numquam assumenda, esse commodi tenetur impedit, vel praesentium debitis
				cumque temporibus ipsum, repudiandae corporis tempore odit asperiores
				minima optio. Sequi ad, esse reprehenderit eaque id labore numquam
				delectus ut dolorem illo?
			</p>
		</div>
	);
};

export default ModalPage;
