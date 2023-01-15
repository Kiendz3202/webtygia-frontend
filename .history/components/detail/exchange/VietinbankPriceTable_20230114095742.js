import React from 'react';

function VietinbankPriceTable({ data }) {
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
					{data?.usdBuyCast &&
						parseFloat(data?.usdBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdBuyTransfer &&
						parseFloat(data?.usdBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.usdSell &&
						parseFloat(data?.usdSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">EUR</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurBuyCast &&
						parseFloat(data?.eurBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurBuyTransfer &&
						parseFloat(data?.eurBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.eurSell &&
						parseFloat(data?.eurSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">AUD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audBuyCast &&
						parseFloat(data?.audBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audBuyTransfer &&
						parseFloat(data?.audBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.audSell &&
						parseFloat(data?.audSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CAD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadBuyCast &&
						parseFloat(data?.cadBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadBuyTransfer &&
						parseFloat(data?.cadBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cadSell &&
						parseFloat(data?.cadSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CHF</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfBuyCast &&
						parseFloat(data?.chfBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfBuyTransfer &&
						parseFloat(data?.chfBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.chfSell &&
						parseFloat(data?.chfSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CNY</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cnyBuyCast &&
						parseFloat(data?.cnyBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cnyBuyTransfer &&
						parseFloat(data?.cnyBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.cnySell &&
						parseFloat(data?.cnySell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">DKK</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.dkkBuyCast &&
						parseFloat(data?.dkkBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.dkkBuyTransfer &&
						parseFloat(data?.dkkBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.dkkSell &&
						parseFloat(data?.dkkSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">GBP</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpBuyCast &&
						parseFloat(data?.gbpBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpBuyTransfer &&
						parseFloat(data?.gbpBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.gbpSell &&
						parseFloat(data?.gbpSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">HKD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdBuyCast &&
						parseFloat(data?.hkdBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdBuyTransfer &&
						parseFloat(data?.hkdBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.hkdSell &&
						parseFloat(data?.hkdSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">JPY</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpyBuyCast &&
						parseFloat(data?.jpyBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpyBuyTransfer &&
						parseFloat(data?.jpyBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.jpySell &&
						parseFloat(data?.jpySell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">KRW</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyCast &&
						parseFloat(data?.krwBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwBuyTransfer &&
						parseFloat(data?.krwBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.krwSell &&
						parseFloat(data?.krwSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">LAK</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.lakBuyCast &&
						parseFloat(data?.lakBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.lakBuyTransfer &&
						parseFloat(data?.lakBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.lakSell > 1000
						? parseFloat(data?.lakSell).toLocaleString()
						: data?.lakSell}
				</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">NOK</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nokBuyCast &&
						parseFloat(data?.nokBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nokBuyTransfer &&
						parseFloat(data?.nokBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nokSell &&
						parseFloat(data?.nokSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">NZD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdBuyCast &&
						parseFloat(data?.nzdBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdBuyTransfer &&
						parseFloat(data?.nzdBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nzdSell &&
						parseFloat(data?.nzdSell).toLocaleString()}
				</div>
			</div>

			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">SEK</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sekBuyCast &&
						parseFloat(data?.sekBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sekBuyTransfer &&
						parseFloat(data?.sekBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sekSell &&
						parseFloat(data?.sekSell).toLocaleString()}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">SGD</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdBuyCast &&
						parseFloat(data?.sgdBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdBuyTransfer &&
						parseFloat(data?.sgdBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sgdSell &&
						parseFloat(data?.sgdSell).toLocaleString()}
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

export default VietinbankPriceTable;
