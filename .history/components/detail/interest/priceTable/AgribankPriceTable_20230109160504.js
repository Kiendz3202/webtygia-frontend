import React from 'react';

function AgribankPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-1 p-[1rem]">Kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng cá nhân
				</div>
				<div className=" col-span-2 p-[1rem]">
					Lãi suất %/năm cho khách hàng tổ chức
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">Không kỳ hạn</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanPersonal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.khongkyhanBusiness}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">1 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month1Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month1Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">2 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month2Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month2Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">3 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month3Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month3Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">4 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month4Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month4Business}
				</div>
			</div>
			<div className="grid grid-cols-5 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-1 p-[1rem]">5 tháng</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month5Personal}
				</div>
				<div className=" col-span-2 p-[1rem]">
					{data?.month5Business}
				</div>
			</div>
		</div>
	);
}

export default AgribankPriceTable;