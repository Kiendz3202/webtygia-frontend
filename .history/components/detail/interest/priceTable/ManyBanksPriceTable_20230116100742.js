import React from 'react';

function ManyBanksPriceTable() {
	return (
		<div className="w-full overflow-x-auto mt-[2rem]">
			<div className="flex justify-between  text-center min-w-[80rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[4px]">
				<div className="w-[12rem] p-[1rem]">Ngân hàng</div>
				<div className=" w-[13rem] p-[1rem]">Không kỳ hạn</div>
				<div className=" w-[8rem] p-[1rem]">01 tháng</div>
				<div className="w-[8rem] p-[1rem]">03 tháng</div>
				<div className="w-[8rem] p-[1rem]">06 tháng</div>
				<div className="w-[8rem] p-[1rem]">09 tháng</div>
				<div className="w-[8rem] p-[1rem]">12 tháng</div>
				<div className="w-[8rem] p-[1rem]">13 tháng</div>
				<div className="w-[8rem] p-[1rem]">18 tháng</div>
				<div className="w-[8rem] p-[1rem]">24 tháng</div>
				<div className="w-[8rem] p-[1rem]">36 tháng</div>
			</div>
			<div className="flex justify-between  text-center min-w-[80rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className="w-[12rem] p-[1rem]">ABBank</div>
				<div className="w-[13rem] p-[1rem]">0.2</div>
				<div className="w-[8rem] p-[1rem]">4</div>
				<div className="w-[8rem] p-[1rem]">6</div>
				<div className="w-[8rem] p-[1rem]">3,5</div>
				<div className="w-[8rem] p-[1rem]">6.3</div>
				<div className="w-[8rem] p-[1rem]">12</div>
				<div className="w-[8rem] p-[1rem]">13</div>
				<div className="w-[8rem] p-[1rem]">18</div>
				<div className="w-[8rem] p-[1rem]">24</div>
				<div className="w-[8rem] p-[1rem]">36</div>
			</div>
		</div>
	);
}

export default ManyBanksPriceTable;
