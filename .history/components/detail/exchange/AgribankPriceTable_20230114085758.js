import React from 'react';

function AgribankPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Ngoại tệ</div>
				<div className=" col-span-1 p-[1rem]">Mua tiền mặt</div>
				<div className=" col-span-1 p-[1rem]">Mua chuyển khoản</div>
				<div className=" col-span-1 p-[1rem]">Bán</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">USD</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
