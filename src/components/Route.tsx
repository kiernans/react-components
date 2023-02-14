import useNavigation from '../hooks/useNavigation';

type RouteProps = {
	path: string;
	children: React.ReactNode;
};

const Route = ({ path, children }: RouteProps) => {
	const { currentPath } = useNavigation();

	if (path === currentPath) {
		return <>{children}</>;
	}

	return null;
};

export default Route;
