import React from 'react';

function TablePrice({ stock }) {
	return (
		<div className=" overflow-x-auto">
			<div className=" min-w-[70rem] max-w-[110rem] text-[1.8rem] grid grid-cols-2 mt-[4rem] sm:grid-cols-3 font-medium gap-y-[3rem] gap-x-[2rem] ">
				<div className=" col-span-1 grid grid-cols-3 ">
					<div className=" col-span-2">
						<div className=" p-[0.8rem] h-[5.8rem]">Mở cửa</div>
						<div className=" p-[0.8rem] h-[5.8rem]">Thấp nhất</div>
						<div className=" p-[0.8rem] h-[5.8rem]">Cao nhất</div>
						<div className=" p-[0.8rem] h-[5.8rem]">Tham chiếu</div>
					</div>
					<div className=" col-span-1">
						<div className=" p-[0.8rem] h-[5.8rem] ">
							{stock?.openPrice}
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							{stock?.low}
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							{stock?.high}
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							{stock?.reference}
						</div>
					</div>
				</div>
				<div className=" col-span-1 grid grid-cols-3 ">
					<div className=" col-span-2">
						<div className=" p-[0.8rem] h-[5.8rem]">Vốn hoá</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Cao 52 tuần
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Thấp 52 tuần
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Giá thay đổi 1 tuần
						</div>
					</div>
					<div className=" col-span-1">
						<div className=" p-[0.8rem] h-[5.8rem]">
							{stock?.marketcap}
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							{stock?.high52Week}
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							{stock?.low52Week}
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange1Week.slice(0, -1) > 0
									? 'text-price-increase'
									: 'text-price-decrease'
							} p-[0.8rem] h-[5.8rem] whitespace-nowrap`}
						>
							{stock?.priceChange1Week}(
							{stock?.percentPriceChange1Week.slice(0, 5)}% )
						</div>
					</div>
				</div>
				<div className=" col-span-1 grid grid-cols-3 ">
					<div className=" col-span-2 ">
						<div className=" p-[0.8rem] h-[5.8rem]">
							Giá thay đổi 1 tháng
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Giá thay đổi 3 tháng
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Giá thay đổi 6 tháng
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Giá thay đổi 1 năm
						</div>
					</div>
					<div className=" col-span-1">
						<div
							className={` ${
								+stock?.percentPriceChange1Month.slice(0, -1) >
								0
									? 'text-price-increase'
									: 'text-price-decrease'
							} p-[0.8rem] h-[5.8rem] whitespace-nowrap`}
						>
							{stock?.priceChange1Month}(
							{stock?.percentPriceChange1Month.slice(0, 5)}% )
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange3Month.slice(0, -1) >
								0
									? 'text-price-increase'
									: 'text-price-decrease'
							} p-[0.8rem] h-[5.8rem] whitespace-nowrap`}
						>
							{stock?.priceChange3Month}(
							{stock?.percentPriceChange3Month.slice(0, 5)}% )
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange6Month.slice(0, -1) >
								0
									? 'text-price-increase'
									: 'text-price-decrease'
							} p-[0.8rem] h-[5.8rem] whitespace-nowrap`}
						>
							{stock?.priceChange6Month}(
							{stock?.percentPriceChange6Month.slice(0, 5)}% )
						</div>
						<div
							className={` ${
								+stock?.percentPriceChange1Year.slice(0, -1) > 0
									? 'text-price-increase'
									: 'text-price-decrease'
							} p-[0.8rem] h-[5.8rem] whitespace-nowrap`}
						>
							{stock?.priceChange1Year}(
							{stock?.percentPriceChange1Year.slice(0, 5)}% )
						</div>
					</div>
				</div>
				<div className=" col-span-1 grid grid-cols-3 ">
					<div className=" col-span-2">
						<div className=" p-[0.8rem] h-[5.8rem]">
							Khối lượng giao dịch
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Khối lượng trung bình 10 ngày
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">EPS</div>
						<div className=" p-[0.8rem] h-[5.8rem]">PE</div>
					</div>
					<div className=" col-span-1">
						<div className=" p-[0.8rem] h-[5.8rem]">43</div>
						<div className=" p-[0.8rem] h-[5.8rem]">56</div>
						<div className=" p-[0.8rem] h-[5.8rem]">44</div>
						<div className=" p-[0.8rem] h-[5.8rem]">79</div>
					</div>
				</div>

				<div className=" col-span-1 grid grid-cols-3 ">
					<div className=" col-span-2">
						<div className=" p-[0.8rem] h-[5.8rem]">PB</div>
						<div className=" p-[0.8rem] h-[5.8rem]">ROE</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Cổ phiếu đang lưu hành
						</div>
						<div className=" p-[0.8rem] h-[5.8rem]">
							Tỷ lệ free-float
						</div>
					</div>
					<div className=" col-span-1">
						<div className=" p-[0.8rem] h-[5.8rem]">43</div>
						<div className=" p-[0.8rem] h-[5.8rem]">56</div>
						<div className=" p-[0.8rem] h-[5.8rem]">44</div>
						<div className=" p-[0.8rem] h-[5.8rem]">79</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TablePrice;
