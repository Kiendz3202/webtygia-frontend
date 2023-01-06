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
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjc1l10lBuy}</div>
				<div className=" col-span-1 p-[1rem]">{data?.sjc1l10lSell}</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng nhẫn SJC 99,99 1 chỉ, 2 chỉ, 5 chỉ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_991chi2chi5chiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_991chi2chi5chiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng nhẫn SJC 99,99 0,5 chỉ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_99_0_5chiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_99_0_5chiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 99,99%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99_99percentBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99_99percentSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 99%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99percentBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99percentSell}
				</div>
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
