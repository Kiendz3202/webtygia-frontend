import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function GiaVangView() {
	return (
		<>
			<Head>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>Gia vang</div>
			</MainLayout>
		</>
	);
}

export default GiaVangView;
