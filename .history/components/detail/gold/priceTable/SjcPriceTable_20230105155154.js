import React from 'react';

function SjcPriceTable() {
	return (
		<div className="w-full">
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Khu vực</div>
				<div className=" col-span-1 p-[1rem]">Hệ thống</div>
				<div className=" col-span-2 p-[1rem]">Mua vào</div>
				<div className=" col-span-2 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-6 gap-x-[2rem] text-[1.6rem]">
				<div className=" col-span-1">Khu vuc</div>
				<div className=" col-span-1">He thong</div>
				<div className=" col-span-2">Mua vao</div>
				<div className=" col-span-2">Ban ras</div>
			</div>
		</div>
	);
}

export default SjcPriceTable;
