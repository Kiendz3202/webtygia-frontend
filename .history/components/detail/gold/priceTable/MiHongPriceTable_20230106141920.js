import React from 'react';

function MiHongPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Khu vực</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hồ Chí Minh</div>
				<div className=" col-span-2 p-[1rem]">Vàng miếng SJC</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjcBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjcSell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 99,9%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang999Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang999Sell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 98,5%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang985Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang985Sell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 98,0%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang980Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang980Sell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 95,0%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang950Buy}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vang950Sell || ''}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 75,0%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang750Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang750Sell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 68,0%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang680Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang680Sell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 61,0%</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang610Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang610Sell}</div>
			</div>
		</div>
	);
}

export default MiHongPriceTable;
