import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoins = async () => {
	return axios
		.get('http://localhost:5000/api/v1/coin/markets?per_page=25&page=1')
		.then((res) => res.data.data.coinList)
		.catch((err) => console.log(err));
};

function CoinList() {
	const router = useRouter();
	const path = router.asPath;

	const { data, isLoading, isError, error, isFetching } = useQuery(
		'coinList',
		fetchCoins,
		{
			cacheTime: 600000,
			// refetchOnWindowFocus: false,
			staleTime: 120000,
			// refetchInterval: 120000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<>
			{data &&
				data.map((coin, index) => (
					<tr
						key={coin.nameId}
						className=" text-[1.4rem] font-medium h-[4.5rem] text-start"
					>
						<td className="w-[4.8rem]  z-10 text-center">
							{index + 1}
						</td>
						<td className="w-[16rem] text-start cursor-pointer hover:opacity-80">
							<Link href={`${path}/${coin.nameId}`}>
								<img
									className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
									src={coin.image}
								/>
								<span className=" inline ml-[1rem] text-blue-text">
									{coin.symbol.toUpperCase()}
								</span>
							</Link>
						</td>
						<td className=" text-black-text">
							${coin.currentPrice}
						</td>
						<td
							className={`${
								+coin.priceChange24hPercent > 0
									? 'text-price-increase'
									: 'text-price-decrease'
							} text-price-increase pl-[1rem]`}
						>
							{+coin.priceChange24hPercent > 0 ? '+' : ''}
							{coin.priceChange24hPercent.slice(0, 7)}%
						</td>
						<td
							className={`${
								+coin.priceChange24hPercent > 0
									? 'text-price-increase'
									: 'text-price-decrease'
							} text-price-increase pl-[1rem]`}
						>
							{+coin.priceChange24hPercent > 0 ? '+' : ''}
							{coin.priceChange7dPercent.slice(0, 7)}%
						</td>
						<td className="text-black-text pl-[3rem]">
							${coin.marketCap.split('.')[0]}
						</td>
						<td className="text-black-text">
							${coin.volume24h.split('.')[0]}
						</td>
					</tr>
				))}
		</>
	);
}

export default CoinList;