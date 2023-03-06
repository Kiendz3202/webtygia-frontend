import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUsdVietcombankChart } from '@services/foreignCurrency/useUsd';

function NameHeader({
	// data
	rank1WithChartData,
}) {
	// convert to dd:mm:yy
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}
	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join('/');
	}
	const dateDay = formatDate(new Date(rank1WithChartData?.timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(rank1WithChartData?.timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];
	return (
		<div className="flex flex-col sm:flex-row sm:h-[8rem]">
			<div className="flex items-center">
				{/* https://vectorflags.s3.amazonaws.com/flags/us-square-01.png */}
				<img
					src={rank1WithChartData?.image}
					className="w-auto h-[5rem] rounded-[1000px] mb-auto mt-[5px]"
				/>
				<div className=" ml-[1rem]"></div>
			</div>
			<div className=" flex items-center sm:ml-auto text-[4.8rem] font-semibold ">
				<div>
					$
					{parseFloat(
						rank1WithChartData?.currentPrice
					).toLocaleString()}
					{/* <span className="text-grey-text text-[2.2rem] font-medium ml-[5px]">
						VND
					</span> */}
				</div>
				{/* <div className="bg-price-increase text-white-text font-normal ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5rem] rounded-[0.6rem] text-[1.4rem]">
					{changePercent}%
				</div> */}
				{/* <div
					className={`${
						changePercent > 0
							? 'bg-price-increase '
							: changePercent < 0
							? 'bg-price-decrease '
							: ' bg-orange-1 '
					} text-white-text  ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5.5rem] rounded-[0.6rem] text-[1.4rem]`}
				>
					{changePercent == '' ? '0,00%' : changePercent}%
				</div> */}
			</div>
		</div>
	);
}

export default NameHeader;
