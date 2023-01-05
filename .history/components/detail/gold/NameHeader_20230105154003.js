import React from 'react';

function NameHeader() {
	return (
		<div className="flex h-[10rem] items-center">
			<img
				src="https://printgo.vn/uploads/file-logo/1/512x512.075e191500b6b0dd513f7d34d8bbfa77.ai.1.png"
				className="w-[6rem] h-[6rem]"
			/>
			<div className="">
				<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
					Vàng SJC Việt Nam
					<p className=" text-[1.4rem] text-grey-text">
						cập nhật lúc {dateDay} {dateHour}
					</p>
				</h1>
			</div>
		</div>
	);
}

export default NameHeader;
