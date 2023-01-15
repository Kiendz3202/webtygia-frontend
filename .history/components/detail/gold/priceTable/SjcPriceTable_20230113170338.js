import React from 'react';

function SjcPriceTable({ data }) {
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
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng nhẫn SJC 99,99 1 chỉ, 2 chỉ, 5 chỉ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_991chi2chi5chiBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_991chi2chi5chiSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">
					Vàng nhẫn SJC 99,99 0,5 chỉ
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_99_0_5chiBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nhansjc99_99_0_5chiSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 99,99%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99_99percentBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99_99percentSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 99%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99percentBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang99percentSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 75%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang75percentBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang75percentSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 58,3%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang58_3percentBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang58_3percentSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem]">Vàng nữ trang 41,7%</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang41_7percentBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.nutrang41_7percentSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hà Nội</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lHaNoiBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lHaNoiSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Đà nẵng</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lDaNangBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lDaNangSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Nha Trang</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lNhaTrangBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lNhaTrangSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Cà Mau</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lCaMauBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lCaMauSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Huế</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lHueBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lHueSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Bình Phước</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBinhPhuocBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBinhPhuocSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Biên Hoà</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBienHoaBuy / 1000000}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBienHoaSell / 1000000}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Miền Tây</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lMienTayBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lMienTaySell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Quảng Ngãi</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lQuangNgaiBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lQuangNgaiSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Long Xuyên</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lLongXuyenBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lLongXuyenSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Bạc Liêu</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBacLieuBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lBacLieuSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Quy Nhơn</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lQuyNhonBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lQuyNhonSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Phan Rang</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lPhanRangBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lPhanRangSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Hạ Long</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lHaLongBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lHaLongSell}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Quảng Nam</div>
				<div className=" col-span-2 p-[1rem]">Vàng SJC 1L - 10L</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lQuangNamBuy}
				</div>
				<div className=" col-span-1 p-[1rem]">
					{data?.sjc1l10lQuangNamSell}
				</div>
			</div>
		</div>
	);
}

export default SjcPriceTable;
