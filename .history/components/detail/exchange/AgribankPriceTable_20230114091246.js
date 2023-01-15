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
					{parseFloat(data?.usdBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.usdSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">EUR</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.eurBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.eurBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.eurSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">AUD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.audBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.audBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.audSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CAD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.cadBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.cadBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.cadSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CHF</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.chfBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.chfBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.chfSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">GBP</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.gbpBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.gbpBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.gbpSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">HKD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.hkdBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.hkdBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.hkdSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">JPY</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.jpyBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.jpyBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.jpySell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">KRW</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyCast &&
						parseFloat(data?.krwBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyTransfer}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.krwSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">NZD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.nzdBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.nzdBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.nzdSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">SGD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.sgdBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.sgdBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.sgdSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">THB</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbBuyCast &&
						parseFloat(data?.thbBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbBuyTransfer &&
						parseFloat(data?.thbBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.thbSell &&
						parseFloat(data?.thbSell).toLocaleString()}
				</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
