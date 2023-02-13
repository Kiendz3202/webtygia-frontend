import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function TinTucView() {
	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					TinTuc
				</div>
			</MainLayout>
		</>
	);
}

export default TinTucView;
