import React from 'react';

function TablePrice() {
	return (
		<div className=" text-[1.4rem] grid grid-cols-2 mt-[4rem] sm:grid-cols-3 font-medium gap-[3rem] ">
			<div className=" col-span-1 grid grid-cols-3 justify-items-center">
				<div className=" col-span-2">
					<div className=" p-[0.8rem]">Mở cửa</div>
					<div className=" p-[0.8rem]">Thấp nhất</div>
					<div className=" p-[0.8rem]">Cao nhất</div>
					<div className=" p-[0.8rem]">Khối lượng giao dịch</div>
					<div className=" p-[0.8rem]">Vốn hoá</div>
				</div>
				<div className=" col-span-1">
					<div className=" p-[0.8rem]">43</div>
					<div className=" p-[0.8rem]">56</div>
					<div className=" p-[0.8rem]">44</div>
					<div className=" p-[0.8rem]">79</div>
					<div className=" p-[0.8rem]">45</div>
				</div>
			</div>
			<div className=" col-span-1 grid grid-cols-3 justify-items-center">
				<div className=" col-span-2">
					<div className=" p-[0.8rem]">Cao 52 tuần</div>
					<div className=" p-[0.8rem]">Thấp 52 tuần</div>
					<div className=" p-[0.8rem]">Giá thay đổi 1 tuần</div>
					<div className=" p-[0.8rem]">Giá thay đổi 1 tháng</div>
					<div className=" p-[0.8rem]">Giá thay đổi 3 tháng</div>
				</div>
				<div className=" col-span-1">
					<div className=" p-[0.8rem]">43</div>
					<div className=" p-[0.8rem]">56</div>
					<div className=" p-[0.8rem]">44</div>
					<div className=" p-[0.8rem]">79</div>
					<div className=" p-[0.8rem]">45</div>
				</div>
			</div>
			<div className=" col-span-1 grid grid-cols-3 justify-items-center">
				<div className=" col-span-2">
					<div className=" p-[0.8rem]">Giá thay đổi 6 tháng</div>
					<div className=" p-[0.8rem]">Giá thay đổi 1 năm</div>
					<div className=" p-[0.8rem]">Khoi luong</div>
					<div className=" p-[0.8rem]">K.Lg T.bình (3 thg)</div>
					<div className=" p-[0.8rem]">Thay đổi 1 năm</div>
				</div>
				<div className=" col-span-1">
					<div className=" p-[0.8rem]">43</div>
					<div className=" p-[0.8rem]">56</div>
					<div className=" p-[0.8rem]">44</div>
					<div className=" p-[0.8rem]">79</div>
					<div className=" p-[0.8rem]">45</div>
				</div>
			</div>
		</div>
	);
}

export default TablePrice;
