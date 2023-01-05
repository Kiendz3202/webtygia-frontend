import React from 'react';

function SjcPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Khu vực</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hồ Chí minh</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjc1l10lBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjc1l10lSell}</div>
			</div>
		</div>
	);
}

export default SjcPriceTable;
