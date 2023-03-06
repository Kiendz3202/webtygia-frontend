import { useUsd } from '@services/foreignCurrency/useUsd';
import React from 'react';

function PriceTable() {
	const { data, isLoading, isError, error, isFetching } = useUsd();
	console.log(data);
	return (
		<div className="overflow-x-auto w-full">
			<table className="w-[104rem] mt-[4rem] border-separate border-spacing-y-[4px]">
				<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text pb-[10px]">
					<tr>
						<th className="w-[25rem] bg-back-ground-1  rounded-[0.6rem] ">
							Ngân hàng
						</th>
						<th className="w-[20px] bg-white h-auto"></th>
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
				<tbody className=" h-[4.5rem] text-[1.6rem]">
					{data &&
						data.data.map((item, index) => (
							<tr key={index}>
								<td className=" bg-back-ground-1 text-center py-[1rem]">
									{item.name}
								</td>
								<td className="w-[20px] bg-white h-auto"></td>
								<td className=" bg-back-ground-1 text-center py-[1rem]">
									{item.buyCast}
								</td>
								<td className=" bg-back-ground-1 text-center py-[1rem]">
									{item.buyTransfer}
								</td>
								<td className=" bg-back-ground-1 text-center py-[1rem]">
									{item.sellCast}
								</td>
								<td className=" bg-back-ground-1 text-center py-[1rem]">
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