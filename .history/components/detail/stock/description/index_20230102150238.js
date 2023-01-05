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
				<div className="flex">
					<div>Địa chỉ</div>
					<div>{description.address}</div>
				</div>
				<div className="flex">
					<div>Email</div>
					<div>{description.email}</div>
				</div>
				<div className="flex">
					<div>Điện thoại</div>
					<div>{description.phone}</div>
				</div>
				<div className="flex">
					<div>Fax</div>
					<div>{description.fax}</div>
				</div>
				<div className="flex">
					<div>Website</div>
					<div>{description.website}</div>
				</div>
			</div>
		</div>
	);
}

export default StockDescription;
