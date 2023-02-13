import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function DanhMucTheoDoiView() {
	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					DanhMucTheoDoi
				</div>
			</MainLayout>
		</>
	);
}

export default DanhMucTheoDoiView;
