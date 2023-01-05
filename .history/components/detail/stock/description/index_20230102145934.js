import React from 'react';

function StockDescription({ description }) {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
				Thông tin về {description.symbol}
			</h2>
			<p className="text-[1.6rem] font-medium text-grey-text-2">
				{description.description}
			</p>
			<h3 className="text-[2rem] font-semibold text-back-text mt-[2rem]">
				Thông tin liên lạc
			</h3>
			<div>
				<div>
					<div>Địa chỉ</div>
					<div>Tầng 7, Ô Chợ Dừa, Đống Đa, Hà Nội, VIỆT NAM</div>
				</div>
			</div>
		</div>
	);
}

export default StockDescription;
