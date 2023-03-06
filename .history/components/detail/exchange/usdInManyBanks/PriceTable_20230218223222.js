import React from 'react';

function PriceTable() {
	return (
		<div className="overflow-x-auto w-full">
			<table className="w-[99.6rem] mt-[4rem]">
				<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
					<tr>
						{/* w-[4.8rem] */}
						<th className="w-[8rem]  bg-back-ground-1  rounded-[0.6rem] ">
							Mã
						</th>
						{/* <th className="w-[16rem] max-w-[16rem] bg-back-ground-1 text-center pl-[3rem]">
        Tên cổ phiếu
    </th> */}
						<th className=" bg-[#F5F5F5] block h-[4.5rem] leading-[4.5rem] ml-[1rem] rounded-l-[0.6rem] text-center">
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
