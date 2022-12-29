import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchStocks = async () => {
	return axios
		.get('http://localhost:5000/api/v1/stock/top-rank')
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function Stock() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'stock-top-rank',
		fetchStocks,
		{
			// cacheTime: 600000,
			// refetchOnWindowFocus: false,
			// staleTime: 300000,
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
		<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem] bg-white-text">
			<div className="pt-[1.5rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Cổ phiếu(VND)
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li className="ml-[-3rem]">Giá</li>
						<li>Thay đổi</li>
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
								<li className="text-[1.4rem] font-medium text-price-increase">
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
