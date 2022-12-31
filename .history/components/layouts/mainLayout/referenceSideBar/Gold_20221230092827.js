import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchGoldSjc = async () => {
	return axios
		.get('http://66.42.58.72/api/v1/gold/sjc')
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function Gold() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'goldSjc',
		fetchGoldSjc,
		{
			cacheTime: Infinity,
			// refetchOnWindowFocus: false,
			staleTime: 1800000,
			refetchInterval: 1800000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className=" shadow-shadow-custom rounded-[1rem] bg-white-text mt-[2.4rem] mr-[2rem]">
			<div className="pt-[1.5rem] pl-[1.7rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Giá vàng SJC (VND/Lượng)
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Vàng</li>
						<li className="ml-[-3rem]">Giá mua</li>
						<li className="ml-[-1rem]">Giá bán</li>
					</ul>
					{data &&
						data.map((gold) => (
							<ul
								key={gold.name}
								className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem] "
							>
								<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
									SJC
								</li>
								<li className="text-[1.4rem] font-medium ml-[-3rem]">
									{parseFloat(
										gold.sjc1l10lBuy
									).toLocaleString()}
								</li>
								<li className="text-[1.4rem] font-medium text-price-increase ml-[-1rem]">
									{parseFloat(
										gold.sjc1l10lSell
									).toLocaleString()}
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default Gold;
