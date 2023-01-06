import React from 'react';

function DojiPriceTable({ data }) {
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
				<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2 border border-opacity-30 border-grey-text">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">SJC</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.sjcHNBuy}</div>
					<div className=" col-span-1">{data?.sjcHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.sjcDNBuy}</div>
					<div className=" col-span-1">{data?.sjcDNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.sjcHCMBuy}</div>
					<div className=" col-span-1">{data?.sjcHCMSell}</div>
				</div>
			</div>
		</div>
	);
}

export default DojiPriceTable;
