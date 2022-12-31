import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import CoinItem from '@components/item/coin/CoinItem';
import useGetCoinList from '@services/coin/useGetCoinList';

const fetchCoins = async () => {
	return axios
		.get('http://66.42.58.72/api/v1/coin/markets?per_page=100&page=1')
		.then((res) => res.data.data.coinList)
		.catch((err) => console.log(err));
};

function CoinList() {
	const router = useRouter();
	const path = router.asPath;

	// const { data, isLoading, isError, error, isFetching } = useQuery(
	// 	'coinList',
	// 	fetchCoins,
	// 	{
	// 		cacheTime: 3600000,
	// 		// refetchOnWindowFocus: false,
	// 		staleTime: 300000,
	// 		// refetchInterval: 120000,
	// 	}
	// );
	const getListQuery = useGetCoinList();
	const { data, isLoading, isError, error, isFetching } = getListQuery;
	console.log(data);

	if (isLoading) {
		return (
			<tr>
				<td>Đang tải</td>
			</tr>
		);
	}
	if (isError) {
		return (
			<tr>
				<td>{error.message}</td>
			</tr>
		);
	}
	return (
		<>
			{data &&
				data.map((coin, index) => (
					<CoinItem key={coin.nameId} coin={coin} index={index} />
				))}
		</>
	);
}

export default CoinList;
