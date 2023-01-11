import React from 'react';

function PriceTable({ data }) {
	return (
		<div className="w-full">
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-2 p-[1rem]">Sản phẩm</div>
				<div className=" col-span-1 p-[1rem]">Vùng 1</div>
				<div className=" col-span-1 p-[1rem]">Vùng 2</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-V</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-III</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95III_1}</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95III_2}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-V</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-V</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-V</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
			</div>
			<div className="grid grid-cols-4 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Xăng RON 95-V</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
				<div className=" col-span-1 p-[1rem]">{data?.ron95v_1}</div>
			</div>
		</div>
	);
}

export default PriceTable;
