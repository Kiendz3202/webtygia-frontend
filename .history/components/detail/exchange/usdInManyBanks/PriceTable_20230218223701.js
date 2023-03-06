import React from 'react';

function PriceTable() {
	return (
		<div className="overflow-x-auto w-full">
			<table className="w-[104rem] mt-[4rem]">
				<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
					<tr>
						{/* w-[4.8rem] */}
						<th className="w-[20rem] bg-back-ground-1  rounded-[0.6rem] ">
							Ngân hàng
						</th>
						{/* <th className="w-[16rem] max-w-[16rem] bg-back-ground-1 text-center pl-[3rem]">
        Tên cổ phiếu
    </th> */}
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
				<tbody className=" h-[4.5rem] text-blue-text">
					{/* <StockList
                saveStocks={saveStocks}
                deleteStocks={deleteStocks}
                user={user}
                data={data?.stockList}
                isLoading={isLoading}
                isError={isError}
                // exchangeName={exchangeName}
            /> */}
				</tbody>
			</table>
		</div>
	);
}

export default PriceTable;
