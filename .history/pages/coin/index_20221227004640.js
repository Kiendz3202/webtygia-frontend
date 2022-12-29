import React from 'react';

function CoinPage() {
	return (
		<div className=" h-auto mt-[4.6px] mb-[2.5px] mx-[2.1px] bg-back-ground-1 rounded-[1.5px] px-[3.2px] py-[3.2px] shadow-shadow-custom">
			<h1 className="text-[2.8px] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div className="max-w-[789px] overflow-y-hidden overflow-x-auto">
				<table className="w-[789px] mt-[4px] max-w-none">
					<thead className="text-[1.4px] font-medium h-[4.5px] text-blue-text">
						<tr>
							<th className="w-[4.8px] bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6px]">
								#
							</th>
							<th className="w-[16px] bg-back-ground-1 ">Tên</th>
							<th className=" bg-[#F5F5F5] text-start">Giá</th>
							<th className=" bg-back-ground-1 text-start">
								24h%
							</th>
							<th className=" bg-back-ground-1 text-start">
								7d%
							</th>
							<th className=" bg-back-ground-1 text-start">
								Vốn hoá thị trường
							</th>
							<th className=" bg-back-ground-1 rounded-r-[0.6px] text-start">
								Khối lượng(24h)
							</th>
						</tr>
					</thead>
					<tbody className="w-full">
						<tr className="text-[1.4px] font-medium h-[4.5px] text-start">
							<td className="w-[4.8px] text-center">1</td>
							<td className="w-[16px] text-start ">
								<img
									className="w-[2.4px] h-[2.4px] inline-block ml-[1px]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-2.3%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4px] font-medium h-[4.5px] text-start">
							<td className="w-[4.8px] text-center">1</td>
							<td className="w-[16px] text-start ">
								<img
									className="w-[2.4px] h-[2.4px] inline-block ml-[1px]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-2.3%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4px] font-medium h-[4.5px] text-start">
							<td className="w-[4.8px] text-center">1</td>
							<td className="w-[16px] text-start ">
								<img
									className="w-[2.4px] h-[2.4px] inline-block ml-[1px]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-2.3%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4px] font-medium h-[4.5px] text-start">
							<td className="w-[4.8px] text-center">1</td>
							<td className="w-[16px] text-start ">
								<img
									className="w-[2.4px] h-[2.4px] inline-block ml-[1px]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-2.3%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4px] font-medium h-[4.5px] text-start">
							<td className="w-[4.8px] text-center">1</td>
							<td className="w-[16px] text-start ">
								<img
									className="w-[2.4px] h-[2.4px] inline-block ml-[1px]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-2.3%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CoinPage;
