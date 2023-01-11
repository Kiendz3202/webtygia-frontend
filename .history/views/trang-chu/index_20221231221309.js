import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function TrangChuView() {
	return (
		<>
			<Head>
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<MainLayout>
				<div className=" text-[2.8rem] mt-[4.6rem] mx-[2.1rem] bg-white rounded-[1.5rem] px-[2.5rem] shadow-shadow-custom h-60 mb-[2.5rem]">
					Trang chủ
				</div>
			</MainLayout>
		</>
	);
}

export default TrangChuView;