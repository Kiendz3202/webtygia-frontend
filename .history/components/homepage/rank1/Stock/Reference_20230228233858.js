import { useUserCoinReference } from '@services/coin/useCoin';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useUserStockReference } from '@services/stock/useStock';

function Reference() {
	const [email, setEmail] = useState();
	const [reference, setReference] = useState([]);
	const { data, isLoading, isError, error, isFetching } =
		useUserStockReference(email);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		if (data?.data) {
			const arr = data.data.sort(({ score: a }, { score: b }) => b - a);
			setReference(arr.slice(1, 5));
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
							<Link href={`/co-phieu/${item.detail.symbol}`}>
								<p className="text-[16px] font-medium border-b border-grey-boder hover:opacity-80">
									{item.detail.symbol.toUpperCase()}
								</p>
							</Link>
							<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
								{parseFloat(
									item.detail.currentPrice * 1000
								).toFixed(2)}
							</span>
							<span
								className={`${
									+item.detail?.change > 0
										? 'text-price-increase'
										: 'text-price-decrease'
								}  text-end text-[1.5rem] font-medium`}
							>
								{item.detail.change}
							</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Reference;