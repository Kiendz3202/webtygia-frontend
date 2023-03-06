import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';
import Rank1WithChart from '@components/homepage/rank1/Rank1WithChart';
import Rank1WithoutChart from '@components/homepage/rank1/Rank1WithoutChart';

function TrangChuView() {
	return (
		<>
			<MainLayout>
				<div className=" text-[2.8rem] mt-[4.6rem]  bg-white rounded-[1.5rem] px-[2.5rem] shadow-shadow-custom mb-[2.5rem]">
					<div className="pt-[3rem]">
						<Rank1WithChart />
					</div>
					{/* <div className="pt-[3rem]">
						<Rank1WithoutChart />
					</div> */}
				</div>
			</MainLayout>
		</>
	);
}

export default TrangChuView;