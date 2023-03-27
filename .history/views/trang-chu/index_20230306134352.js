import React, { useEffect, useState } from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';
import Rank1WithChart from '@components/homepage/rank1/Rank1WithChart';
import { useUserFollowAndInterest } from '@services/user/useUser';
import Rank2List from '@components/homepage/rank2/Rank2List';
import NewsLatest from '@components/homepage/news/NewsLatest';
import axios from 'axios';

function TrangChuView() {
	const [rank2ListData, setRank2ListData] = useState();
	const [referenceRank1, setReferenceRank1] = useState();
	const { data, isLoading, isError, error, isFetching } =
		useUserFollowAndInterest();

	useEffect(() => {
		// let rank1WithChart;
		if (data?.data) {
			const interestWithChart = data?.data.filter(
				(item) =>
					item?.detailModel === 'Coin' ||
					item?.detailModel === 'StockDetail' ||
					item?.detailModel === 'Sjc' ||
					item?.detailModel === 'ExchangeUsdToVnd'
			);
			//get the largest score item
			// const max = interestWithChart?.reduce(function (prev, current) {
			// 	return prev.score > current.score ? prev : current;
			// });
			const max = interestWithChart[0];

			// const referenceData = interestWithChart?.filter(
			// 	(item) =>
			// 		item?.detailModel === max?.detailModel &&
			// 		item?.score < max?.score
			// );
			const referenceData = data?.referenceRank1;

			// const rank2ListItem = interestWithChart?.filter(
			// 	(item) => item?.detailModel !== max?.detailModel
			// );
			const rank2ListItem = interestWithChart?.slice(1).filter((obj) => {
				return !referenceData.some((obj2) => {
					return obj._id === obj2._id;
				});
			});
			console.log(rank2ListItem);

			if (rank2ListItem.length > 0) {
				let arr = [];
				for (let i = 0; i < rank2ListItem.length; i++) {
					if (rank2ListItem[i].detailModel === 'Coin') {
						arr.push({
							name: rank2ListItem[i].detail.symbol,
							tranferTo: 'USD',
							currentPrice: rank2ListItem[i].detail.currentPrice,
							change24hPercent:
								rank2ListItem[i].detail.priceChange24hPercent,
							href: `/coin/${rank2ListItem[i].detail.nameId}`,
						});
					}
					if (rank2ListItem[i].detailModel === 'StockDetail') {
						arr.push({
							name: rank2ListItem[i].detail.symbol,
							tranferTo: 'VND',
							currentPrice: rank2ListItem[i].detail.currentPrice,
							change24hPercent:
								rank2ListItem[i].detail.changePercent,
							href: `/co-phieu/${rank2ListItem[i].detail.symbol}`,
						});
					}
					if (rank2ListItem[i].detailModel === 'ExchangeUsdToVnd') {
						arr.push({
							name: rank2ListItem[i].detail.name,
							tranferTo: 'VND',
							currentPrice: rank2ListItem[i].detail.usdSell,
							change24hPercent: '',
							href: `/ty-gia-ngoai-te`,
						});
					}
					if (rank2ListItem[i].detailModel === 'Sjc') {
						arr.push({
							name: rank2ListItem[i].detail.name,
							tranferTo: 'VND',
							currentPrice: rank2ListItem[i].detail.sjc1l10lBuy,
							change24hPercent: '',
							href: '/gia-vang/sjc',
						});
					}
				}
				setRank2ListData(arr);
				setReferenceRank1(referenceData);
			} else {
				const fetchInitialRank2 = async () => {
					try {
						const data = await axios
							.get(
								`${process.env.PRODUCT}/list-rank2-without-chart`
							)
							.then((res) => res.data);

						setRank2ListData(data.data);
						// console.log(data?.data);
					} catch (error) {
						console.log(error);
					}
				};
				fetchInitialRank2();
			}
		}
	}, [data]);
	return (
		<>
			<MainLayout>
				<div className=" text-[2.8rem] mt-[4.6rem]  bg-white rounded-[1.5rem] px-[2.5rem] shadow-shadow-custom mb-[2.5rem]">
					<div className="pt-[3rem]">
						<Rank1WithChart
							data={data?.data}
							referenceRank1={referenceRank1}
						/>
					</div>
					{/* <div className="pt-[3rem]">
						<Rank1WithoutChart />
					</div> */}
					<div className="mt-[3rem]">
						<div className="flex">
							<Rank2List rank2ListData={rank2ListData} />
							<NewsLatest />
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TrangChuView;
