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
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.usdBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.usdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">EUR</div>
				<div className=" col-span-1 p-[1rem]">{data?.eurBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.eurSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">AUD</div>
				<div className=" col-span-1 p-[1rem]">{data?.audBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.audSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CAD</div>
				<div className=" col-span-1 p-[1rem]">{data?.cadBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.cadSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CHF</div>
				<div className=" col-span-1 p-[1rem]">{data?.chfBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.chfSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">GBP</div>
				<div className=" col-span-1 p-[1rem]">{data?.gbpBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.gbpSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">HKD</div>
				<div className=" col-span-1 p-[1rem]">{data?.hkdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.hkdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">JPY</div>
				<div className=" col-span-1 p-[1rem]">{data?.jpyBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpyBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.jpySell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">KRW</div>
				<div className=" col-span-1 p-[1rem]">{data?.krwBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.krwSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">NZD</div>
				<div className=" col-span-1 p-[1rem]">{data?.nzdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.nzdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">SGD</div>
				<div className=" col-span-1 p-[1rem]">{data?.sgdBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.sgdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">THB</div>
				<div className=" col-span-1 p-[1rem]">{data?.thbBuyCast}</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.thbSell}</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
