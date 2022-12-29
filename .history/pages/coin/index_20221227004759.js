import React from 'react';

function CoinPage() {
	return (
		<div className=" h-auto mt-[460px] mb-[250px] mx-[210px] bg-back-ground-1 rounded-[150px] 0px-[320px] py-[320px] shadow-shadow-custom">
			<h1 className="text-[280px] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div className="w-[789rem] overflow-y-hidden overflow-x-auto">
				<table className="w-[7890px] mt-[40px] max-w-none">
					<thead className="text-[140px] font-medium h-[450px] text-blue-text">
						<tr>
							<th className="w-[480px] bg-back-ground-1  border-r border-grey-boder rounded-l-[060px]">
								#
							</th>
							<th className="w-[160px] bg-back-ground-1 ">Tên</th>
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
							<th className=" bg-back-ground-1 rounded-r-[060px] text-start">
								Khối lượng(24h)
							</th>
						</tr>
					</thead>
					<tbody className="w-full">
						<tr className="text-[140px] font-medium h-[450px] text-start">
							<td className="w-[480px] text-center">1</td>
							<td className="w-[160px] text-start ">
								<img
									className="w-[240px] h-[240px] inline-block ml-[10px]"
									src="https://s2coinmarketcapcom/static/img/coins/64x64/1png"
								/>
								<span className=" inline ml-[10px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-23%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[140px] font-medium h-[450px] text-start">
							<td className="w-[480px] text-center">1</td>
							<td className="w-[160px] text-start ">
								<img
									className="w-[240px] h-[240px] inline-block ml-[10px]"
									src="https://s2coinmarketcapcom/static/img/coins/64x64/1png"
								/>
								<span className=" inline ml-[10px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-23%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[140px] font-medium h-[450px] text-start">
							<td className="w-[480px] text-center">1</td>
							<td className="w-[160px] text-start ">
								<img
									className="w-[240px] h-[240px] inline-block ml-[10px]"
									src="https://s2coinmarketcapcom/static/img/coins/64x64/1png"
								/>
								<span className=" inline ml-[10px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-23%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[140px] font-medium h-[450px] text-start">
							<td className="w-[480px] text-center">1</td>
							<td className="w-[160px] text-start ">
								<img
									className="w-[240px] h-[240px] inline-block ml-[10px]"
									src="https://s2coinmarketcapcom/static/img/coins/64x64/1png"
								/>
								<span className=" inline ml-[10px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-23%</td>
							<td className="text-black-text ">
								$324,300,441,798
							</td>
							<td className="text-black-text">$12,494,089,506</td>
						</tr>
						<tr className="text-[140px] font-medium h-[450px] text-start">
							<td className="w-[480px] text-center">1</td>
							<td className="w-[160px] text-start ">
								<img
									className="w-[240px] h-[240px] inline-block ml-[10px]"
									src="https://s2coinmarketcapcom/static/img/coins/64x64/1png"
								/>
								<span className=" inline ml-[10px] text-blue-text">
									Bitcoin
								</span>
							</td>
							<td className=" text-black-text">$1000</td>
							<td className=" text-price-increase">+4%</td>
							<td className=" text-price-decrease">-23%</td>
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
