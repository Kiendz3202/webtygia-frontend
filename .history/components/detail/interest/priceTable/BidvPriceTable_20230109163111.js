import React from 'react';

function BidvPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-2 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">Lãi suất %/năm</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanPersonal}
				</div>
			</div>
		</div>
	);
}

export default BidvPriceTable;
