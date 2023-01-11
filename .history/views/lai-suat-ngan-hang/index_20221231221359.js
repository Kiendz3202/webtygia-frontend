import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function LaiSuatNganHangView() {
	return (
		<>
			<Head>
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>LaiSuatNganHangView</div>
			</MainLayout>
		</>
	);
}

export default LaiSuatNganHangView;