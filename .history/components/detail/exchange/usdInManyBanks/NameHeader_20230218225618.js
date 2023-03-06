import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useUsdVietcombankChart } from '@services/foreignCurrency/useUsd';

function NameHeader({
	// name,
	// image,
	// timeUpdate,
	// saveExchangeRate,
	// deleteExchangeRate,
	// user,
	data,
}) {
	const [change, setChange] = useState();
	const [changePercent, setChangePercent] = useState();
	const {
		data: priceChart,
		isLoading,
		isError,
		error,
		isFetching,
	} = useUsdVietcombankChart('1y');

	useEffect(() => {
		if (priceChart) {
			let changePrice =
				priceChart.price[priceChart.price.length - 1] -
				priceChart.price[priceChart.price.length - 8];

			let changePricePercent =
				(priceChart.price[priceChart.price.length - 1] -
					priceChart.price[priceChart.price.length - 8]) /
				priceChart.price[priceChart.price.length - 8];
			setChange(changePrice);
			setChangePercent(changePricePercent.toFixed(3));
		}
	}, [priceChart]);

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
	const dateDay = formatDate(new Date(data?.timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(data?.timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];
	return (
		<div className="flex flex-col s sm:h-[6rem]">
			<div className="flex items-center">
				<img
					src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
					className="w-auto h-[6rem] rounded-[1000px]"
				/>
				<div className=" ml-[1rem]">
					<h1 className="text-[2rem] font-semibold capitalize text-back-text w-fit">
						USD (Đô la Mỹ)
						<p className=" text-[1.4rem] text-grey-text">
							cập nhật lúc {dateDay} {dateHour}{' '}
							{/* <span className="ml-[1rem]">
							{user?.followExchangeRates?.includes(data?._id) ? (
								<BookmarkIcon
									onClick={() =>
										deleteExchangeRate(data?._id)
									}
									className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
								/>
							) : (
								<BookmarkBorderIcon
									onClick={() => saveExchangeRate(data?._id)}
									className="text-[2.4rem] cursor-pointer hover:opacity-80"
								/>
							)}
						</span> */}
							<BookmarkBorderIcon
								// onClick={() => saveExchangeRate(data?._id)}
								className="text-[2.4rem] cursor-pointer hover:opacity-80 ml-[1rem]"
							/>
						</p>
					</h1>
				</div>
			</div>
			<div className=" flex items-start sm:items-center ml-auto text-[4.8rem] font-semibold ">
				<div>
					{data && data?.usdSell}
					<span className="text-[#B3BBDD] text-[2.2rem] font-medium ml-[5px]">
						VND
					</span>
				</div>
				{/* <div className="bg-price-increase text-white-text font-normal ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5rem] rounded-[0.6rem] text-[1.4rem]">
					{changePercent}%
				</div> */}
				<div
					className={`${
						changePercent > 0
							? 'bg-price-increase '
							: changePercent < 0
							? 'bg-price-decrease '
							: ' bg-orange-1 '
					} text-white-text  ml-[2rem] h-[3rem] text-center leading-[3rem] w-[5.5rem] rounded-[0.6rem] text-[1.4rem]`}
				>
					{/* {changePercent > 0 ? '+' : ''} */}
					{changePercent == '' ? '0,00%' : changePercent}%
				</div>
			</div>
		</div>
	);
}

export default NameHeader;
