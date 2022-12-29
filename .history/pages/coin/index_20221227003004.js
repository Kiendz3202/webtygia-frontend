import React from 'react';

function CoinPage() {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			<h1 className="text-[2.8rem] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div>
				<table className="w-full mt-[4rem] overflow-x-hidden">
					<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
						<tr>
							<th className="w-[4.8rem] bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
								#
							</th>
							<th className="w-[16rem] bg-back-ground-1 ">Tên</th>
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
							<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
								Khối lượng(24h)
							</th>
						</tr>
					</thead>
					<tbody className="w-full">
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-start ">
								<img
									className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1rem] text-blue-text">
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
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-start ">
								<img
									className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1rem] text-blue-text">
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
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-start ">
								<img
									className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1rem] text-blue-text">
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
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-start ">
								<img
									className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1rem] text-blue-text">
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
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-start ">
								<img
									className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
									src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
								/>
								<span className=" inline ml-[1rem] text-blue-text">
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
