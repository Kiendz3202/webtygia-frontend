import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function CoinItem({ coin, index }) {
	const router = useRouter();
	const path = router.pathname;
	// console.log(path);
	// console.log(router.pathname);
	return (
		<tr
			key={coin.nameId}
			className=" text-[1.8rem] font-normal h-[4.5rem] text-start"
		>
			<td className="w-[4.8rem]  z-10 text-center">{index + 1}</td>
			<td className="w-[16rem] text-start cursor-pointer block h-[4.5rem]">
				<Link
					href={`${path}/${coin.nameId}`}
					className="block w-full h-full"
				>
					{/* <Link href={`${path}/${coin.nameId}`}> */}
					<span className="hover:opacity-80">
						<img
							className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
							src={coin.image}
						/>
						<span className=" inline ml-[1rem] text-blue-text">
							{coin.symbol.toUpperCase()}
						</span>
					</span>
				</Link>
			</td>
			<td className=" text-black-text">
				${parseFloat(coin.currentPrice).toLocaleString()}
			</td>
			<td
				className={`${
					+coin.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{+coin.priceChange24hPercent > 0 ? '+' : ''}
				{+coin.priceChange24hPercent < 100
					? coin.priceChange24hPercent.slice(0, 6)
					: coin.priceChange24hPercent}
				%
			</td>
			<td
				className={`${
					+coin.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{+coin.priceChange24hPercent > 0 ? '+' : ''}
				{+coin.priceChange24hPercent < 100
					? coin.priceChange7dPercent.slice(0, 6)
					: coin.priceChange24hPercent}
				%
			</td>
			<td className="text-black-text pl-[3rem]">
				${parseFloat(coin.marketCap.split('.')[0]).toLocaleString()}
			</td>
			<td className="text-black-text">
				${parseFloat(coin.volume24h.split('.')[0]).toLocaleString()}
			</td>
		</tr>
	);
}

export default CoinItem;
