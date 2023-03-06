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
					{/* <StockList
                saveStocks={saveStocks}
                deleteStocks={deleteStocks}
                user={user}
                data={data?.stockList}
                isLoading={isLoading}
                isError={isError}
                // exchangeName={exchangeName}
            /> */}
					<tr>
						<td className=" bg-back-ground-1 text-center ">
							Vietcombank
						</td>
						<td className=" bg-back-ground-1 text-center ">
							23548
						</td>
						<td className=" bg-back-ground-1 text-center ">
							23548
						</td>
						<td className=" bg-back-ground-1 text-center ">
							23548
						</td>
						<td className=" bg-back-ground-1 text-center ">
							23548
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default PriceTable;
