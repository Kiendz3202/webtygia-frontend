import React from 'react';

function ManyBanksPriceTable() {
	return (
		// <div className="w-full overflow-x-auto mt-[2rem]">
		// 	<div className="flex justify-between  text-center min-w-[80rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
		// 		<div className=" p-[1rem]">Ngân hàng</div>
		// 		<div className=" p-[1rem]">Không kỳ hạn</div>
		// 		<div className=" p-[1rem]">01 tháng</div>
		// 		<div className=" p-[1rem]">03 tháng</div>
		// 		<div className=" p-[1rem]">06 tháng</div>
		// 		<div className=" p-[1rem]">09 tháng</div>
		// 		<div className=" p-[1rem]">12 tháng</div>
		// 		<div className=" p-[1rem]">13 tháng</div>
		// 		<div className=" p-[1rem]">18 tháng</div>
		// 		<div className=" p-[1rem]">24 tháng</div>
		// 		<div className=" p-[1rem]">36 tháng</div>
		// 	</div>
		// 	<div className="flex justify-between  text-center min-w-[80rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
		// 		<div className=" p-[1rem]">ABBank</div>
		// 		<div className=" p-[1rem]">0.2</div>
		// 		<div className=" p-[1rem]">4</div>
		// 		<div className=" p-[1rem]">6</div>
		// 		<div className=" p-[1rem]">3,5</div>
		// 		<div className=" p-[1rem]">6.3</div>
		// 		<div className=" p-[1rem]">12</div>
		// 		<div className=" p-[1rem]">13</div>
		// 		<div className=" p-[1rem]">18</div>
		// 		<div className=" p-[1rem]">24</div>
		// 		<div className=" p-[1rem]">36</div>
		// 	</div>
		// </div>
		<div className="overflow-x-auto w-full mt-[2rem]">
			<table className="w-[99.6rem]  mt-[4rem]">
				<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
					<tr>
						<th className="w-[4.8rem]  bg-back-ground-1   rounded-l-[0.6rem]">
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
				{/* <tbody className="w-full">
								{data && <CoinList data={data?.coinList} />}
							</tbody> */}
			</table>
			{/* <div className="">
							{data && (
								<PaginationCoinList
									page={data?.pages}
									setPageNumber={setPageNumber}
									pageNav={pageNumber}
									router={router}
								/>
							)}
						</div> */}
		</div>
	);
}

export default ManyBanksPriceTable;
