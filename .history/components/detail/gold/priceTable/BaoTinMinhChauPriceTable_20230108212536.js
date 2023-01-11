import React from 'react';

function BaoTinMinhChauPriceTable({ data }) {
	console.log(data);
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Thương phẩm</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng Rồng Thăng Long</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.vangMiengVRTLBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.vangMiengVRTLSell}
				</div>
			</div>
		</div>
	);
}

export default BaoTinMinhChauPriceTable;
