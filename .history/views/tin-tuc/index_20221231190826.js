import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function TinTucView() {
	return (
		<>
			<Head>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>TinTuc</div>
			</MainLayout>
		</>
	);
}

export default TinTucView;
