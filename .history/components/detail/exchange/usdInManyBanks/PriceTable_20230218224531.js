import { useUsd } from '@services/foreignCurrency/useUsd';
import React from 'react';

function PriceTable() {
	const { data, isLoading, isError, error, isFetching } = useUsd();
	console.log(data);
	return (
		<div className="overflow-x-auto w-full">
			<table className="w-[104rem] mt-[4rem]">
				<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
					<tr>
						<th className="w-[25rem] bg-back-ground-1  rounded-[0.6rem] ">
							Ngân hàng
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Mua tiền mặt
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Mua chuyển khoản
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Bán tiền mặt
						</th>
						<th className=" bg-back-ground-1 text-center ">
							Bán chuyển khoản
						</th>
					</tr>
				</thead>
				<tbody className=" h-[4.5rem] text-[1.4rem]">
					{data &&
						data.data.map((item) => (
							<tr key={index}>
								<td className=" bg-back-ground-1 text-center ">
									{item.name}
								</td>
								<td className=" bg-back-ground-1 text-center ">
									{item.buyCast}
								</td>
								<td className=" bg-back-ground-1 text-center ">
									{item.buyTransfer}
								</td>
								<td className=" bg-back-ground-1 text-center ">
									{item.sellCast}
								</td>
								<td className=" bg-back-ground-1 text-center ">
									{item.sellTransfer}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default PriceTable;
