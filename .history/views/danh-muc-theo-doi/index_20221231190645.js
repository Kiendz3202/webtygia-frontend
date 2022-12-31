import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function DanhMucTheoDoiView() {
	return (
		<>
			<Head>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div>DanhMucTheoDoi</div>
			</MainLayout>
		</>
	);
}

export default DanhMucTheoDoiView;
