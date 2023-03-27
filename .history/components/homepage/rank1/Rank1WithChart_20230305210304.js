import React, { useEffect, useState } from 'react';
import Rank1Coin from './Coin';
import Rank1Usd from './Usd';
import Rank1Stock from './Stock';
import Rank1Gold from './Gold';
import axios from 'axios';

function Rank1WithChart({ data }) {
	const [rank1WithChartData, setRank1WithChartData] = useState();

	useEffect(() => {
		if (data?.length > 0) {
			const interestWithChart = data?.filter(
				(item) =>
					item?.detailModel === 'Coin' ||
					item?.detailModel === 'StockDetail' ||
					item?.detailModel === 'Sjc' ||
					item?.detailModel === 'ExchangeUsdToVnd'
			);
			//get the largest score item
			const max = interestWithChart.reduce(function (prev, current) {
				return prev.score > current.score ? prev : current;
			}); //returns object
			console.log(data.length);
			setRank1WithChartData(max.detail);
		} else {
			const fetchInitialRank1 = async () => {
				try {
					const data = await axios
						.get(`${process.env.PRODUCT}/exchangeRate/usd-to-vnd`)
						.then((res) => res.data);

					setRank1WithChartData(data.data[0]);
				} catch (error) {
					console.log(error);
				}
			};
			fetchInitialRank1();
		}
	}, [data]);

	//Coin
	if (rank1WithChartData?.rank) {
		return (
			<Rank1Coin data={data} rank1WithChartData={rank1WithChartData} />
		);
	}
	if (rank1WithChartData?.usdSell) {
		return <Rank1Usd data={data} rank1WithChartData={rank1WithChartData} />;
	}
	if (rank1WithChartData?.ceil) {
		return (
			<Rank1Stock data={data} rank1WithChartData={rank1WithChartData} />
		);
	}
	if (rank1WithChartData?.sjc1l10lBuy) {
		return (
			<Rank1Gold data={data} rank1WithChartData={rank1WithChartData} />
		);
	}
}

export default Rank1WithChart;
