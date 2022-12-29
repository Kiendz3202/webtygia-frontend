import React from 'react';
import { Avatar } from '@mui/material';

function CoinPage() {
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			<h1 className="text-[2.8rem] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			<div>
				<table className="w-full">
					<thead className="text-[1.4rem] font-medium h-[4.5rem]">
						<th className="w-[4.8rem] bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
							#
						</th>
						<th className="w-[16rem] bg-back-ground-1 ">Tên</th>
						<th className=" bg-back-ground-1 text-start">Giá</th>
						<th className=" bg-back-ground-1 text-start">24h%</th>
						<th className=" bg-back-ground-1 text-start">7d%</th>
						<th className=" bg-back-ground-1 text-start">
							Vốn hoá thị trường
						</th>
						<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
							Khối lượng(24h)
						</th>
					</thead>
					<tbody className="w-full">
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-center ">
								<Avatar
									className="text-[2rem] cursor-pointer"
									src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/319823466_1167699333875239_1971434876324844237_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ia7FzH6yNnoAX8u0JUT&tn=R5tPph1G-IwzutAt&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCE1l9GUAo6P5Et5d8v8DV1Hiht15ePzwUhlTt4G826QA&oe=63AC99B2"
								/>
								BTC
							</td>
							<td className="  ">$1000</td>
							<td className=" ">-4%</td>
							<td className=" ">-2.3%</td>
							<td className=" ">$324,300,441,798</td>
							<td className="">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-center ">BTC</td>
							<td className="  ">$1000</td>
							<td className=" ">-4%</td>
							<td className=" ">-2.3%</td>
							<td className=" ">$324,300,441,798</td>
							<td className="">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-center ">BTC</td>
							<td className="  ">$1000</td>
							<td className=" ">-4%</td>
							<td className=" ">-2.3%</td>
							<td className=" ">$324,300,441,798</td>
							<td className="">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-center ">BTC</td>
							<td className="  ">$1000</td>
							<td className=" ">-4%</td>
							<td className=" ">-2.3%</td>
							<td className=" ">$324,300,441,798</td>
							<td className="">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-center ">BTC</td>
							<td className="  ">$1000</td>
							<td className=" ">-4%</td>
							<td className=" ">-2.3%</td>
							<td className=" ">$324,300,441,798</td>
							<td className="">$12,494,089,506</td>
						</tr>
						<tr className="text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem] text-center">1</td>
							<td className="w-[16rem] text-center ">BTC</td>
							<td className="  ">$1000</td>
							<td className=" ">-4%</td>
							<td className=" ">-2.3%</td>
							<td className=" ">$324,300,441,798</td>
							<td className="">$12,494,089,506</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CoinPage;
