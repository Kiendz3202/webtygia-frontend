import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// const CoinList = dynamic(
// 	() => import('../../components/listItem/coin/CoinList'),
// 	{
// 		ssr: false,
// 	}
// );
import CoinList from '@components/listItem/coin/CoinList';
import MainLayout from '@components/layouts/mainLayout';
import PaginationCoinList from '@components/pagination/PaginationCoinList';
import { useCoinList } from '@services/coin/useCoin';

function CoinPageView() {
	const [pageNumber, setPageNumber] = useState(1);
	const { data, isLoading, isError, error, isFetching } =
		useCoinList(pageNumber);
	console.log(pageNumber);
	return (
		<>
			<MainLayout>
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<h1 className="text-[2.8rem] font-semibold">
						Tỷ giá tiền điện tử hôm nay
					</h1>
					<div className="overflow-x-auto w-full">
						<table className="w-[78.9rem] mt-[4rem]">
							<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
								<tr>
									<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
										#
									</th>
									<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
										Tên
									</th>
									<th className=" bg-[#F5F5F5] text-start">
										Giá
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										24h%
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										7d%
									</th>
									<th className=" bg-back-ground-1 text-start pl-[3rem]">
										Vốn hoá thị trường
									</th>
									<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
										Khối lượng(24h)
									</th>
								</tr>
							</thead>
							<tbody className="w-full">
								<CoinList
									data={data?.coinList}
									isLoading={isLoading}
									isError={isError}
								/>
							</tbody>
						</table>
						<div className="">
							<PaginationCoinList setPageNumber={setPageNumber} />
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default CoinPageView;
