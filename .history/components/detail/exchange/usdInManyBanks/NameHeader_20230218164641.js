import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function NameHeader(
	{
		// name,
		// image,
		// timeUpdate,
		// saveExchangeRate,
		// deleteExchangeRate,
		// user,
		// data,
	}
) {
	//convert to dd:mm:yy
	// function padTo2Digits(num) {
	// 	return num.toString().padStart(2, '0');
	// }
	// function formatDate(date) {
	// 	return [
	// 		padTo2Digits(date.getDate()),
	// 		padTo2Digits(date.getMonth() + 1),
	// 		date.getFullYear(),
	// 	].join('/');
	// }
	// const dateDay = formatDate(new Date(timeUpdate * 1000));

	// //convert to hh:mm:ss
	// const d = new Date(timeUpdate * 1000);
	// let dateHour = d.toTimeString();
	// dateHour = dateHour.split(' ')[0];
	return (
		<div className="flex">
			<div className="flex h-[10rem] items-center">
				<img
					src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png"
					className="w-auto h-[6rem] rounded-[1000px]"
				/>
				<div className=" ml-[1rem]">
					<h1 className="text-[2rem] font-semibold capitalize text-back-text w-fit">
						USD (Đô la Mỹ)
						<p className=" text-[1.4rem] text-grey-text">
							cập nhật lúc 05/02/2023 22:01:42{' '}
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
						</p>
					</h1>
				</div>
			</div>
			<div className=" items-center ml-auto text-[2.8rem] font-semibold text-center pt-[3rem]">
				23,457.00
			</div>
		</div>
	);
}

export default NameHeader;
