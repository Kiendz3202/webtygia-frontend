import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function TyGiaNgoaiTeView() {
	return (
		<>
			<Head>
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>TyGiaNgoaiTeView</div>
			</MainLayout>
		</>
	);
}

export default TyGiaNgoaiTeView;
