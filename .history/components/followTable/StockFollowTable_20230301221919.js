import CoinList from '@components/listItem/coin/CoinList';
import StockList from '@components/listItem/stock/StockList';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function StockFollowTable({ data, populateField }) {
	const [stockData, setStockData] = useState();
	const router = useRouter();
	const path = router.pathname;

	useEffect(() => {
		setStockData(data);
	}, [data]);

	const deleteCoins = async (id) => {
		const res = await axios
			.post(`${process.env.NEXT_PUBLIC_BASE_URL}/delete-stocks`, {
				email: localStorage.getItem('email'),
				stocksId: id,
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
				`${
					process.env.NEXT_PUBLIC_BASE_URL
				}/user-populate/${localStorage.getItem(
					'email'
				)}?populate=${populateField}`
			)
			.then((res) => res.data.data[0]);
		setStockData(data);
		console.log(123);
	};

	return (
		<div className="overflow-x-auto w-full">
			<table className="w-[99.6rem] mt-[4rem] border-separate border-spacing-y-[6px]">
				<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
					<tr>
						{/* w-[4.8rem] */}
						<th className="w-[8rem]  bg-back-ground-1  rounded-[0.6rem] ">
							Mã
						</th>
						<th className="w-[10px] bg-white"></th>
						{/* <th className="w-[16rem] max-w-[16rem] bg-back-ground-1 text-center pl-[3rem]">
                                Tên cổ phiếu
                            </th> */}
						<th className=" bg-[#F5F5F5] block h-[4.5rem] leading-[4.5rem]  rounded-l-[0.6rem] text-center">
							Tham chiếu
						</th>
						<th className=" bg-back-ground-1 text-center w-[6rem]">
							Cao
						</th>
						<th className=" bg-back-ground-1 text-center pl-[1rem]">
							Thấp
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Thay đổi
						</th>
						<th className=" bg-back-ground-1  text-center ">
							Thay đổi %
						</th>
						<th className=" bg-back-ground-1  text-center rounded-r-[0.6rem]">
							Khối lượng
						</th>
					</tr>
					<tr className="h-[4px] bg-white"></tr>
				</thead>
				<tbody className=" h-[4.5rem] text-blue-text">
					<StockList
						deleteStocks={deleteStocks}
						user={user}
						data={data?.stockList}
						isLoading={isLoading}
						isError={isError}
						// exchangeName={exchangeName}
					/>
				</tbody>
			</table>
		</div>
	);
}

export default StockFollowTable;