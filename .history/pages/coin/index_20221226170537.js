import React from 'react';

function CoinPage() {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			<h1 className="text-[2.8rem] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div>
				<table className="w-full">
					<thead className="text-[1.4rem] font-medium block h-[4.5rem]">
						<th className="w-[4.8rem]  bg-back-ground-1 rounded-l-[0.6rem] border-r border-grey-boder">
							#
						</th>
						<th className="w-[16rem]  bg-back-ground-1 rounded-r-[0.6rem]">
							Tên
						</th>
						<th className=" bg-back-ground-1 rounded-l-[0.6rem] ">
							Giá
						</th>
						<th className=" bg-back-ground-1">24h%</th>
						<th className=" bg-back-ground-1">7d%</th>
						<th className=" bg-back-ground-1">
							Vốn hoá thị trường
						</th>
						<th className="h-[4.5rem] bg-back-ground-1 rounded-r-[0.6rem]">
							Khối lượng(24h)
						</th>
					</thead>
					<tbody className="text-[1.4rem] font-medium">
						<tr>
							<td>1</td>
							<td>BTC</td>
							<td>$1000</td>
							<td>-5%</td>
							<td>2%</td>
							<td>$324,470,305,861</td>
							<td>$12,521,238,432</td>
						</tr>
						<tr>
							<td>1</td>
							<td>BTC</td>
							<td>$1000</td>
							<td>-5%</td>
							<td>2%</td>
							<td>$324,470,305,861</td>
							<td>$12,521,238,432</td>
						</tr>
						<tr>
							<td>1</td>
							<td>BTC</td>
							<td>$1000</td>
							<td>-5%</td>
							<td>2%</td>
							<td>$324,470,305,861</td>
							<td>$12,521,238,432</td>
						</tr>
						<tr>
							<td>1</td>
							<td>BTC</td>
							<td>$1000</td>
							<td>-5%</td>
							<td>2%</td>
							<td>$324,470,305,861</td>
							<td>$12,521,238,432</td>
						</tr>
						<tr>
							<td>1</td>
							<td>BTC</td>
							<td>$1000</td>
							<td>-5%</td>
							<td>2%</td>
							<td>$324,470,305,861</td>
							<td>$12,521,238,432</td>
						</tr>
						<tr>
							<td>1</td>
							<td>BTC</td>
							<td>$1000</td>
							<td>-5%</td>
							<td>2%</td>
							<td>$324,470,305,861</td>
							<td>$12,521,238,432</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CoinPage;