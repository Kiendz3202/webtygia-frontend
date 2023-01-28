import React from 'react';

function ManyBanksPriceTable() {
	return (
		<div className="w-full  mt-[2rem]">
			<div className="grid grid-cols-12 gap-x-[2rem] overflow-x-auto w-full text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-2 p-[1rem]">Ngân hàng</div>
				<div className=" col-span-1 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-1 p-[1rem]">01 tháng</div>
				<div className=" col-span-1 p-[1rem]">03 tháng</div>
				<div className=" col-span-1 p-[1rem]">06 tháng</div>
				<div className=" col-span-1 p-[1rem]">09 tháng</div>
				<div className=" col-span-1 p-[1rem]">12 tháng</div>
				<div className=" col-span-1 p-[1rem]">13 tháng</div>
				<div className=" col-span-1 p-[1rem]">18 tháng</div>
				<div className=" col-span-1 p-[1rem]">24 tháng</div>
				<div className=" col-span-1 p-[1rem]">36 tháng</div>
			</div>
		</div>
	);
}

export default ManyBanksPriceTable;
