import { useRef } from 'react';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
			<Sidebar />
			<div className='col-span-5'>
				<Route path='/accordion'>
					<AccordionPage />
				</Route>
				<Route path='/'>
					<DropdownPage />
				</Route>
				<Route path='/buttons'>
					<ButtonPage />
				</Route>
				<Route path='/modal'>
					<ModalPage containerRef={containerRef} />
				</Route>
				<Route path='/table'>
					<TablePage />
				</Route>
			</div>
			<div ref={containerRef} className='modal-container'></div>
		</div>
	);
}

export default App;
