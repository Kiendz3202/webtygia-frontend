import React from 'react';

function StockDescription({ description }) {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
				Thông tin về {description.symbol}
			</h2>
		</div>
	);
}

export default StockDescription;
