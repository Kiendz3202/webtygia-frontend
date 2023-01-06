import React from 'react';

function DojiPriceTable({ doji }) {
	return (
		<div className="w-full">
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div>Loại vàng</div>
				<div>Hà Nội</div>
				<div>Đà Nẵng</div>
				<div>Hồ Chí Minh</div>
			</div>
		</div>
	);
}

export default DojiPriceTable;
