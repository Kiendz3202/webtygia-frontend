import React from 'react';

function CoinPage() {
	return (
		<div className=" text-[2.8rem] mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom h-60">
			<h1 className="text-[2.8rem] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div>
				<table>
					<thead>
						<th>#</th>
						<th>Tên</th>
						<th>Giá</th>
						<th>24h%</th>
						<th>7d%</th>
						<th>Vốn hoá thị trường</th>
						<th>Khối lượng(24h)</th>
					</thead>
				</table>
			</div>
		</div>
	);
}

export default CoinPage;
