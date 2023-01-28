import React from 'react';

function ManyBanksPriceTable() {
	return (
		<div className="w-full mt-[2rem]">
			<div className="grid grid-cols-12 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-2 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-1 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-1 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
				<div className=" col-span-1 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-1 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-1 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
				<div className=" col-span-1 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-1 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-1 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
			</div>
		</div>
	);
}

export default ManyBanksPriceTable;
