import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function ManyBanksPriceTable() {
	const { isSuccess, data, isLoading, isError } = useInterest('manybanks');
	console.log(data.data);
	return (
		<div className="w-full overflow-x-auto mt-[2rem]">
			<div className="flex justify-between  text-center min-w-[80rem] text-[1.6rem] font-medium text-blue-text bg-grey-4 rounded-[0.6rem]">
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
			{data &&
				data.data.map((item) => (
					<div className="flex justify-between  text-center min-w-[80rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
						<div className="w-[12rem] p-[1rem]">{item.name}</div>
						<div className="w-[13rem] p-[1rem]">
							{item.khongkyhan}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month1Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month3Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month6Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month9Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month12Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month13Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month18Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month24Offline}
						</div>
						<div className="w-[8rem] p-[1rem]">
							{item.month36Offline}
						</div>
					</div>
				))}
		</div>
	);
}

export default ManyBanksPriceTable;
