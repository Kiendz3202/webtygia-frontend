import React, { useEffect, useState } from 'react';
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
import { useRouter } from 'next/router';
import { useUser, useUserPopulate } from '@services/user/useUser';
import axios from 'axios';

function CoinPageView() {
	const [email, setEmail] = useState();
	// const [coinData, setCoinData] = useState();
	const [populateField, setPopulateField] = useState('followCoins');
	const [pageNumber, setPageNumber] = useState(1);
	const router = useRouter();
	// console.log(router);
	// const [data, setData] = useState();
	// const [isLoading, setIsLoading] = useState();
	// const [isError, setIsError] = useState();
	// useEffect(() => {
	const { data, isLoading, isError, error, isFetching } =
		useCoinList(pageNumber);

	const { data: userPopulate } = useUserPopulate(email, populateField);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		// setCoinData(data);
		// setUser(data);
	}, [typeof window, userPopulate, data]);

	const deleteCoins = async (id) => {
		const res = await axios
			.post('http://localhost:5000/api/v1/delete-coins', {
				email: localStorage.getItem('email'),
				coinsId: id,
			})
			.then(function (response) {
				console.log('success');
			})
			.catch(function (error) {
				console.log(error);
			});
		// const { data } = useUserPopulate(data?.email, populateField);
		const data = await axios
			.get(
				`http://localhost:5000/api/v1/coin/markets?per_page=50&page=${pageNumber}`
			)
			.then((res) => res.data.data);
		setCoinData(data);
		console.log(123);
	};

	// 	setData(data);
	// 	setIsLoading(isLoading);
	// 	setIsError(isError);
	// console.log(data?.coinList);
	// }, [pageNumber]);
	return (
		<>
			<MainLayout>
				{/* mx-[2.1rem] */}
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<h1 className="text-[2.8rem] font-semibold">
						Tỷ giá tiền điện tử hôm nay
					</h1>
					<div className="overflow-x-auto w-full">
						<table className="w-[99.6rem]  mt-[4rem]">
							<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
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
								{data && (
									<CoinList
										deleteCoins={deleteCoins}
										user={userPopulate}
										data={data?.coinList}
									/>
								)}
							</tbody>
						</table>
					</div>
					<div className="">
						{data && (
							<PaginationCoinList
								page={data?.pages}
								setPageNumber={setPageNumber}
								pageNav={pageNumber}
								router={router}
							/>
						)}
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default CoinPageView;
