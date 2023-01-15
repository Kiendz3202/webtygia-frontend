import React from 'react';

function NameHeader({ name, image, timeUpdate }) {
	//convert to dd:mm:yy
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
	const dateDay = formatDate(new Date(timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];
	return (
		<div className="flex h-[10rem] items-center">
			<img src={image} className="w-auto h-[6rem]" />
			<div className=" ml-[1rem]">
				<h1 className="text-[2.2rem] sm:text-[2.8rem] font-semibold capitalize text-back-text w-fit">
					{name}
					<p className=" text-[1.4rem] text-grey-text">
						cập nhật lúc {dateDay} {dateHour}
					</p>
				</h1>
			</div>
		</div>
	);
}

export default NameHeader;
