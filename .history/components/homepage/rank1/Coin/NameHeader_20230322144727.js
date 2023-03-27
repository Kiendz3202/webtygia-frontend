import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUsdVietcombankChart } from '@services/foreignCurrency/useUsd';

function NameHeader({
	// data
	rank1WithChartData,
}) {
	// const [change, setChange] = useState();
	// const [changePercent, setChangePercent] = useState();
	// const {
	// 	data: priceChart,
	// 	isLoading,
	// 	isError,
	// 	error,
	// 	isFetching,
	// } = useUsdVietcombankChart('1y');

	// useEffect(() => {
	// 	if (priceChart) {
	// 		let changePrice =
	// 			priceChart.price[priceChart.price.length - 1] -
	// 			priceChart.price[priceChart.price.length - 8];

	// 		let changePricePercent =
	// 			(priceChart.price[priceChart.price.length - 1] -
	// 				priceChart.price[priceChart.price.length - 8]) /
	// 			priceChart.price[priceChart.price.length - 8];
	// 		setChange(changePrice);
	// 		setChangePercent(changePricePercent.toFixed(3));
	// 	}
	// }, [priceChart]);

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
	console.log(rank1WithChartData);
	return (
		<div className="flex flex-col sm:flex-row sm:h-[8rem]">
			<div className="flex items-center">
				{/* https://vectorflags.s3.amazonaws.com/flags/us-square-01.png */}
				<img
					src={rank1WithChartData?.image}
					className="w-auto h-[5rem] rounded-[1000px] mb-auto my-auto"
				/>
				<div className=" ml-[1rem]">
					<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
						{rank1WithChartData?.name}
						<p
							className={`${
								rank1WithChartData?.priceChange24hPercent > 0
									? 'bg-price-increase '
									: rank1WithChartData?.priceChange24hPercent <
									  0
									? 'bg-price-decrease '
									: ' bg-orange-1 '
							} text-white-text h-[20px] leading-[20px] text-center w-[70px] rounded-[4px] text-[12px]`}
						>
							{rank1WithChartData?.priceChange24hPercent.split(
								'.'
							)[0] +
								'.' +
								rank1WithChartData?.priceChange24hPercent
									.split('.')[1]
									.slice(0, 2)}
							%
						</p>
						{rank1WithChartData?.timeUpdate && (
							<p className=" text-[1.4rem] text-grey-text font-normal mt-[2px]">
								cập nhật {dateDay} {dateHour}{' '}
								{/* <span className="ml-[1rem]">
							{user?.followExchangeRates?.includes(rank1WithChartData?._id) ? (
								<BookmarkIcon
									onClick={() =>
										deleteExchangeRate(rank1WithChartData?._id)
									}
									className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
								/>
							) : (
								<BookmarkBorderIcon
									onClick={() => saveExchangeRate(rank1WithChartData?._id)}
									className="text-[2.4rem] cursor-pointer hover:opacity-80"
								/>
							)}
						</span> */}
								{/* <BookmarkBorderIcon
								// onClick={() => saveExchangeRate(rank1WithChartData?._id)}
								className="text-[2.4rem] cursor-pointer hover:opacity-80 ml-[1rem]"
							/> */}
							</p>
						)}
					</h1>
				</div>
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
