import React, { useEffect, useState } from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';
import Rank1WithChart from '@components/homepage/rank1/Rank1WithChart';
import { useUserFollowAndInterest } from '@services/user/useUser';
import Rank2List from '@components/homepage/rank2/Rank2List';
import NewsLatest from '@components/homepage/news/NewsLatest';

function TrangChuView() {
	const { data, isLoading, isError, error, isFetching } =
		useUserFollowAndInterest('kien@gmail.com');

	useEffect(() => {
		// let rank1WithChart;
		if (data) {
			// const interestWithChart = data?.filter(
			// 	(item) =>
			// 		item?.detailModel === 'Coin' ||
			// 		item?.detailModel === 'StockDetail' ||
			// 		item?.detailModel === 'Sjc' ||
			// 		item?.detailModel === 'ExchangeUsdToVnd'
			// );
			//get the largest score item
			const max = data.reduce(function (prev, current) {
				return prev.score > current.score ? prev : current;
			}); //returns object
			console.log(max);
		}
	}, [data]);
	return (
		<>
			<MainLayout>
				<div className=" text-[2.8rem] mt-[4.6rem]  bg-white rounded-[1.5rem] px-[2.5rem] shadow-shadow-custom mb-[2.5rem]">
					<div className="pt-[3rem]">
						<Rank1WithChart data={data} />
					</div>
					{/* <div className="pt-[3rem]">
						<Rank1WithoutChart />
					</div> */}
					<div className="mt-[3rem]">
						<div className="flex">
							<Rank2List />
							<NewsLatest />
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TrangChuView;
