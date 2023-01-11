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
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn tròn trơn 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.nhanTronTronBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangRongThangLong?.nhanTronTronSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Quà Mừng Vàng</div>
				<div className=" col-span-2 p-[1rem]">
					Quà mừng bản vị vàng 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.quaMungVang?.quaMungBanViVangBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.quaMungVang?.quaMungBanViVangBuy}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng SJC</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangSjc?.vangMiengSjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangSjc?.vangMiengSjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng BTMC</div>
				<div className=" col-span-2 p-[1rem]">
					Trang sức bằng Vàng Rồng Thăng Long 999.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong9999Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong9999Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Trang sức bằng Vàng Rồng Thăng Long 99.9 (24k)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong999Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangBTMC?.trangSucBangVangRongThangLong999Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Vàng HTBT</div>
				<div className=" col-span-2 p-[1rem]">Vàng 999.9 (24k)</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangHTBT?.vangHTBTBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.vangHTBT?.vangHTBTBuy}
				</div>
			</div>
		</div>
	);
}

export default BaoTinMinhChauPriceTable;
