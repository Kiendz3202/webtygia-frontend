import React from 'react';

function PhuQuySjcPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Khu vực</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hà Nội</div>
				<div className=" col-span-2 p-[1rem]">Vàng miếng SJC - SJC</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjcBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjcSell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC nhỏ - SJN
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjnBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjnSell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn tròn Phú Quý 9999 - NPQ
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.npqBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.npqSell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Phú Quý Cát Tường (24K 999.9) - TTPQ
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.cngBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.cngSell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					VÀNG TS 99 - PHÚ QUÝ - 099PQ
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang099Buy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.vang099Sell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 75%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang75percentBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang75percentSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 58,3%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang58_3percentBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang58_3percentSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 41,7%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang41_7percentBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang41_7percentSell}
				</div>
			</div>
		</div>
	);
}

export default PhuQuySjcPriceTable;
