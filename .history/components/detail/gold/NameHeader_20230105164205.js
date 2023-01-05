import React from 'react';

function NameHeader({ name, image, dateDay, dateHour }) {
	return (
		<div className="flex h-[10rem] items-center">
			<img src={image} className="w-[6rem] h-[6rem]" />
			<div className="">
				<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
					Giá Vàng {name} Việt Nam
					<p className=" text-[1.4rem] text-grey-text">
						cập nhật lúc {dateDay} {dateHour}
					</p>
				</h1>
			</div>
		</div>
	);
}

export default NameHeader;
