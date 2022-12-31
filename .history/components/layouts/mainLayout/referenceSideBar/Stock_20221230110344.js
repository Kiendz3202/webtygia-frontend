import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchStocks = async () => {
	return axios
		.get('http://66.42.58.72/api/v1/stock/top-rank')
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function Stock() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'stock-top-rank',
		fetchStocks,
		{
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 900000,
			refetchInterval: 900000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className="shadow-shadow-custom rounded-[1rem] bg-white-text mt-[2.4rem] mr-[2rem]">
			<div className="pt-[1.5rem] pl-[1.7rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Cổ phiếu(VND)
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li className="ml-[-3rem]">Giá</li>
						<li className="ml-[-1rem]">Thay đổi</li>
					</ul>
					{data &&
						data.map((stock) => (
							<ul
								key={stock.symbol}
								className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem] "
							>
								<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
									{stock.symbol.toUpperCase()}
								</li>
								<li className="text-[1.4rem] font-medium ml-[-3rem]">
									{parseFloat(stock.currentPrice) * 1000}
								</li>
								<li className="text-[1.4rem] font-medium text-price-increase ml-[-1rem]">
									{stock.changePercent}
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default Stock;
