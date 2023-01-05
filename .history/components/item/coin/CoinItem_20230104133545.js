import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function CoinItem({ coin, index }) {
	const router = useRouter();
	const path = router.asPath;
	return (
		<tr
			key={coin.nameId}
			className=" text-[1.4rem] font-medium h-[4.5rem] text-start"
		>
			<td className="w-[4.8rem]  z-10 text-center">{index + 1}</td>
			<td className="w-[16rem] text-start cursor-pointer ">
				<Link href={`${path}/${coin.nameId}`}>
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
			<td className=" text-black-text">${coin.currentPrice}</td>
			<td
				className={`${
					+coin.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{+coin.priceChange24hPercent > 0 ? '+' : ''}
				{coin.priceChange24hPercent.slice(0, 7)}%
			</td>
			<td
				className={`${
					+coin.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{+coin.priceChange24hPercent > 0 ? '+' : ''}
				{coin.priceChange7dPercent.slice(0, 7)}%
			</td>
			<td className="text-black-text pl-[3rem]">
				${coin.marketCap.split('.')[0]}
			</td>
			<td className="text-black-text">${coin.volume24h.split('.')[0]}</td>
		</tr>
	);
}

export default CoinItem;
