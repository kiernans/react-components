import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
	return (
		<div>
			<div>
				<Button primary rounded>
					<GoBell />
					Click!
				</Button>
			</div>
			<div>
				<Button success rounded outline>
					<GoCloudDownload />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase />
					See Deal!
				</Button>
			</div>
			<div>
				<Button danger>Click</Button>
			</div>
			<div>
				<Button secondary outline>
					Click
				</Button>
			</div>
		</div>
	);
};

export default ButtonPage;
