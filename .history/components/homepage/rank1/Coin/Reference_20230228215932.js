import { useUserCoinReference } from '@services/coin/useCoin';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Reference() {
	const [email, setEmail] = useState();
	const [reference, setReference] = useState([]);
	const { data, isLoading, isError, error, isFetching } =
		useUserCoinReference(email);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		if (data.data) {
			const arr = data.data.sort(({ score: a }, { score: b }) => b - a);
			setReference(arr);
		}
	}, [data, typeof window]);
	console.log(data);
	return (
		<div>
			<p className="text-[24px] font-semibold">So sánh với</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
				{reference &&
					reference.map((item, index) => (
						<div
							key={index}
							className="flex flex-col px-[20px] py-[10px]"
						>
							<p className="text-[16px] font-medium border-b border-grey-boder">
								{item.detail.name}(
								{item.detail.symbol.toUpperCase()})
							</p>
							<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
								${item.detail.currentPrice}
							</span>
							<span
								className={`${
									+item.detail?.priceChange24hPercent > 0
										? 'text-price-increase'
										: 'text-price-decrease'
								}  text-end text-[1.5rem] font-medium`}
							>
								{+item.detail?.priceChange24hPercent > 0
									? '+'
									: ''}
								{item.detail?.priceChange24hPercent.split(
									'.'
								)[0] +
									'.' +
									item.detail?.priceChange24hPercent
										.split('.')[1]
										.slice(0, 2)}
								%
							</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Reference;
