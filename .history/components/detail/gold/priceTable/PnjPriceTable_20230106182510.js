import React from 'react';

function PnjPriceTable({ data }) {
	console.log(data[0]);
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
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
					{data[0]?.vangmiengsjcBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengsjcSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Nhẫn Trơn PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.nhantronpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.nhantronpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng Kim Bảo 999.9</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangkimbaoBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangkimbaoSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng Phúc Lộc Tài 999.9
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangphucloctaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangphucloctaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 24K (999.9)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang24kBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang24kSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 750 (18K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang750Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang750Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 585 (14K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang585Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang585Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 416 (10K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang416Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang416Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng miếng PNJ (999.9)
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengpnjBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vangmiengpnjSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 916 (22K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang916Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang916Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 680 (16.3K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang680Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang680Sell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng 650 (15.6K)</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang650Buy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data[0]?.vang650Sell}
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
				<div className=" col-span-1 p-[1rem]">Hà Nội</div>
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
		</div>
	);
}

export default PnjPriceTable;
