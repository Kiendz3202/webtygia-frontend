import React from 'react';

function CoinPage() {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			<h1 className="text-[2.8rem] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div className="overflow-x-scroll w-full">
				<table className="w-[78.9rem] mt-[4rem]">
					<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
						<tr>
							<th className="w-[4.8rem] hidden sm:inline bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
								#
							</th>
							<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 ">
								Tên
							</th>
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
						<tr className=" text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] hidden sm:inline z-10 text-center">
								1
							</td>
							<td className="w-[16rem] text-start">
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
			{/* <div class="overflow-x-scroll w-full">
				<table class="w-[1000px]">
					<thead>
						<tr class="bg-gray-100">
							<th class="w-80 px-4 py-2">No.</th>
							<th class="w-80 px-4 py-2">First Name</th>
							<th class="w-80 px-4 py-2">Second Name</th>
							<th class="w-80 px-4 py-2">Third Name</th>
							<th class="w-80 px-4 py-2">Department</th>
							<th class="w-80 px-4 py-2">Stage</th>
							<th class="w-80 px-4 py-2">Email</th>
							<th class="w-80 px-4 py-2">Roles</th>
							<th class="w-80 px-4 py-2">status</th>
							<th class="w-80 px-4 py-2">University Email</th>
							<th class="w-80 px-4 py-2">University Password</th>
							<th class="w-80 px-4 py-2">Students Files</th>
							<th class="w-80 px-4 py-2">Actions</th>
							<th class="w-80 px-4 py-2">No.</th>
							<th class="w-80 px-4 py-2">First Name</th>
							<th class="w-80 px-4 py-2">Second Name</th>
							<th class="w-80 px-4 py-2">Third Name</th>
							<th class="w-80 px-4 py-2">Department</th>
							<th class="w-80 px-4 py-2">Stage</th>
							<th class="w-80 px-4 py-2">Email</th>
							<th class="w-80 px-4 py-2">Roles</th>
							<th class="w-80 px-4 py-2">status</th>
							<th class="w-80 px-4 py-2">University Email</th>
							<th class="w-80 px-4 py-2">University Password</th>
							<th class="w-80 px-4 py-2">Students Files</th>
							<th class="w-80 px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div> */}
		</div>
	);
}

export default CoinPage;
