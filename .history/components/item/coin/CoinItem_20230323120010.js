import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function CoinItem({ coin, index, user, saveCoins, deleteCoins }) {
	const [userFollowCoin, setUserFollowCoin] = useState();
	const [followCoinsLocalStorage, setFollowCoinsLocalStorage] = useState(
		JSON.parse(localStorage.getItem('followCoins'))
	);
	const router = useRouter();
	const path = router.pathname;
	// console.log(user?.followCoins);
	useEffect(() => {
		if (user?.followCoins[0]?.nameId) {
			const data = user?.followCoins.map((item) => item._id);
			setUserFollowCoin(data);
		} else {
			setUserFollowCoin(user?.followCoins);
		}
	}, [user?.followCoins]);

	useEffect(() => {
		setFollowCoinsLocalStorage(
			JSON.parse(localStorage.getItem('followCoins'))
		);
	}, []);
	return (
		<tr
			key={coin?.nameId}
			className=" text-[1.6rem] font-normal h-[4.5rem] text-start"
		>
			{user ? (
				<td className="flex items-center leading-[4.5rem] px-[2px] w-[6.2rem]  z-10 text-center">
					{/* user?.followCoins?.includes(coin?._id) */}
					{userFollowCoin?.includes(coin?._id) ? (
						<StarOutlineIcon
							onClick={() => deleteCoins(coin?._id)}
							className=" text-green-500 cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					) : (
						<StarOutlineIcon
							onClick={() => saveCoins(coin?._id)}
							className="cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					)}
					<p className="">{coin?.rank}</p>
				</td>
			) : (
				<td className="flex items-center leading-[4.5rem] px-[2px] w-[6.2rem]  z-10 text-center">
					{/* user?.followCoins?.includes(coin?._id) */}
					{followCoinsLocalStorage?.includes(coin?._id) ? (
						<StarOutlineIcon
							onClick={() => deleteCoins(coin?._id)}
							className=" text-green-500 cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					) : (
						<StarOutlineIcon
							onClick={() => saveCoins(coin?._id)}
							className="cursor-pointer hover:opacity-80"
							sx={{
								fontSize: '20px',
								marginRight: '3px',
								marginBottom: '3px',
							}}
						/>
					)}
					<p className="">{coin?.rank}</p>
				</td>
			)}
			<td className="w-[16rem] text-start cursor-pointer">
				<Link
					href={`${path}/${coin?.nameId}`}
					className="block w-full h-full leading-[4.5rem] hover:opacity-80"
				>
					{/* <Link href={`${path}/${coin?.nameId}`}> */}
					<span className="">
						<img
							className="w-[2.8rem] h-[2.8rem] inline-block ml-[1rem]"
							src={coin?.image}
						/>
						<span className=" inline ml-[1rem] text-blue-text">
							{coin?.symbol?.toUpperCase()}
						</span>
					</span>
				</Link>
			</td>
			<td className=" text-black-text">
				${parseFloat(coin?.currentPrice).toLocaleString()}
			</td>
			<td
				className={`${
					+coin?.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{+coin?.priceChange24hPercent > 0 ? '+' : ''}
				{+coin?.priceChange24hPercent < 100
					? coin?.priceChange24hPercent.slice(0, 6)
					: coin?.priceChange24hPercent}
				%
			</td>
			<td
				className={`${
					+coin?.priceChange24hPercent > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}  pl-[1rem]`}
			>
				{+coin?.priceChange24hPercent > 0 ? '+' : ''}
				{+coin?.priceChange24hPercent < 100
					? coin?.priceChange7dPercent.slice(0, 6)
					: coin?.priceChange24hPercent}
				%
			</td>
			<td className="text-black-text pl-[3rem]">
				${parseFloat(coin?.marketCap.split('.')[0]).toLocaleString()}
			</td>
			<td className="text-black-text">
				${parseFloat(coin?.volume24h.split('.')[0]).toLocaleString()}
			</td>
		</tr>
	);
}

export default CoinItem;
