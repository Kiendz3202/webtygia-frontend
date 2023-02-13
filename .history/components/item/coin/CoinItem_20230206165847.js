import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function CoinItem({ coin, index, deleteCoins, user }) {
	const router = useRouter();
	const path = router.pathname;
	// console.log(path);
	// console.log(router.pathname);
	console.log(user);
	const deleteSaveHandle = (id) => {
		deleteCoins(id);
		// console.log('3rew');
	};
	return (
		<tr
			key={coin?.nameId}
			className=" text-[1.8rem] font-normal h-[4.5rem] text-start"
		>
			<td className="w-[4.8rem]  z-10 text-center">
				<StarOutlineIcon
					className={
						user
							? user.followCoins.filter((user) => {
									if ('bitcoin' === coin?.nameId) {
										return 'text-green-500 cursor-pointer hover:opacity-80';
									}
							  })
							: 'text-blue-500'
					}
					onClick={() => deleteSaveHandle(coin?._id)}
					sx={{
						fontSize: '24px',
						marginRight: '3px',
						marginBottom: '3px',
					}}
				/>
				{index + 1}
			</td>
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
