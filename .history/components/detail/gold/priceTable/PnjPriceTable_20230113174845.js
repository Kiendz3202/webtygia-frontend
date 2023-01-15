import React from 'react';

function PnjPriceTable({ data }) {
	console.log(data[0]);
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className=" col-span-1 p-[1rem]">Khu vực</div>
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-1 p-[1rem]">Mua vào</div>
				<div className=" col-span-1 p-[1rem]">Bán ra</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hồ Chí Minh</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengsjcBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengsjcSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.nhantronpnjBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.nhantronpnjSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangkimbaoBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangkimbaoSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangphucloctaiBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangphucloctaiSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang24kBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang24kSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang750Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang750Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang585Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang585Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang416Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang416Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengpnjBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengpnjSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang916Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang916Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang680Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang680Sell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang650Buy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang650Sell / 1000000}
				</div>
			</div>
			{/* can tho  */}
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Cần Thơ</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangmiengsjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangmiengsjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.nhantronpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.nhantronpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangkimbaoBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangkimbaoSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangphucloctaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangphucloctaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang24kBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang24kSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang750Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang750Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang585Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang585Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang416Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang416Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangmiengpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vangmiengpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang916Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang916Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang680Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang680Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang650Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[1]?.vang650Sell}
				</div>
			</div>
			{/* ha noi  */}
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hà Nội</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangmiengsjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangmiengsjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.nhantronpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.nhantronpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangkimbaoBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangkimbaoSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangphucloctaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangphucloctaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang24kBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang24kSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang750Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang750Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang585Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang585Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang416Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang416Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangmiengpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vangmiengpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang916Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang916Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang680Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang680Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang650Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[2]?.vang650Sell}
				</div>
			</div>
			{/* da nang  */}
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Đà Nẵng</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangmiengsjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangmiengsjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.nhantronpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.nhantronpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangkimbaoBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangkimbaoSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangphucloctaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangphucloctaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang24kBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang24kSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang750Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang750Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang585Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang585Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang416Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang416Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangmiengpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vangmiengpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang916Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang916Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang680Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang680Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang650Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[3]?.vang650Sell}
				</div>
			</div>
			{/* tay nguyen  */}
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Tây Nguyên</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangmiengsjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangmiengsjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.nhantronpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.nhantronpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangkimbaoBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangkimbaoSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangphucloctaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangphucloctaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang24kBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang24kSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang750Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang750Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang585Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang585Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang416Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang416Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangmiengpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vangmiengpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang916Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang916Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang680Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang680Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang650Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[4]?.vang650Sell}
				</div>
			</div>
			{/* dong nam bo  */}
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Đông Nam Bộ</div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng SJC (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangmiengsjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangmiengsjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.nhantronpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.nhantronpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangkimbaoBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangkimbaoSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangphucloctaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangphucloctaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang24kBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang24kSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang750Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang750Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang585Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang585Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang416Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang416Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangmiengpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vangmiengpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang916Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang916Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang680Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang680Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang650Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[5]?.vang650Sell}
				</div>
			</div>
		</div>
	);
}

export default PnjPriceTable;
