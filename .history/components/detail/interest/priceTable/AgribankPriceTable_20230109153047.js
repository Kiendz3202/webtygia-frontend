import React from 'react';

function AgribankPriceTable() {
	return (
		<div className="w-full">
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">Lãi suất %/năm</div>
				<div className=" col-span-2 p-[1rem]">Lãi suất %/năm</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
