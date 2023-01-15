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
					{parseFloat(data?.usdBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.usdSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">EUR</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.eurBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.eurBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.eurSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">AUD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.audBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.audBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">{data?.audSell}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CAD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.cadBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.cadBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.cadSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">CHF</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.chfBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.chfBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.chfSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">GBP</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.gbpBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.gbpBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.gbpSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">HKD</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.hkdBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.hkdBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.hkdSell)}
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">JPY</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.jpyBuyCast)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.jpyBuyTransfer)}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{parseFloat(data?.jpySell)}
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
					{data.thbBuyCast &&
						parseFloat(data?.thbBuyCast).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data.thbBuyTransfer &&
						parseFloat(data?.thbBuyTransfer).toLocaleString()}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data.thbSell && parseFloat(data?.thbSell).toLocaleString()}
				</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;
