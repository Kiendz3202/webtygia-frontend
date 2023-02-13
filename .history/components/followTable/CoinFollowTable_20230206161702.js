import CoinList from '@components/listItem/coin/CoinList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CoinFollowTable({ data, populateField }) {
	const [coinData, sertCoinData] = useState();
	const router = useRouter();
	const path = router.pathname;

	useEffect(() => {
		sertCoinData(data);
	}, [data]);

	const deleteNews = async (id) => {
		const res = await axios
			.post('http://localhost:5000/api/v1/delete-coins', {
				email: localStorage.getItem('email'),
				newsId: id,
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
				`http://localhost:5000/api/v1/user-populate/${localStorage.getItem(
					'email'
				)}?populate=${populateField}`
			)
			.then((res) => res.data.data[0]);
		sertCoinData(data);
		console.log(data);
	};

	return (
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
						<th className=" bg-[#F5F5F5] text-start">Giá</th>
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
					{data && <CoinList data={data[populateField]} />}
				</tbody>
			</table>
		</div>
	);
}

export default CoinFollowTable;
