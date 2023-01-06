import React from 'react';

function DojiPriceTable({ doji }) {
	return (
		<div className="w-full">
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-2 p-[1rem]">Hà Nội</div>
				<div className=" col-span-2 p-[1rem]">Đà Nẵng</div>
				<div className=" col-span-2 p-[1rem]">Hồ Chí Minh</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-medium ">
				<div className=" col-span-2 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] ">
				<div className=" col-span-2 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
			</div>
		</div>
	);
}

export default DojiPriceTable;
