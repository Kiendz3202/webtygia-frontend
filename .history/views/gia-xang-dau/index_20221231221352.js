import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function GiaXangDauView() {
	return (
		<>
			<Head>
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>GiaXangDauView</div>
			</MainLayout>
		</>
	);
}

export default GiaXangDauView;
