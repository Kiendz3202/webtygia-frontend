import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoins = async () => {
	return axios
		.get('http://localhost:5000/api/v1/coin/markets?per_page=100&page=1')
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function CoinPage() {
	const router = useRouter();
	console.log(router.asPath);
	const path = router.asPath;

	const { data, isLoading, isError, error, isFetching } = useQuery(
		'coinList',
		fetchCoins,
		{
			// cacheTime: 600000,
			// refetchOnWindowFocus: false,
			// staleTime: 300000,
			refetchInterval: 120000,
		}
	);
	console.log(data)

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-back-ground-1 rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
			<h1 className="text-[2.8rem] font-semibold">
				Tỷ giá tiền điện tử hôm nay
			</h1>
			{/* <div className="overflow-x-scroll w-full">
				<table className="w-[78.9rem] mt-[4rem]">
					<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
						<tr>
							<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
								#
							</th>
							<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
								Tên
							</th>
							<th className=" bg-[#F5F5F5] text-start">Giá</th>
							<th className=" bg-back-ground-1 text-start pl-[1rem]">
								24h%
							</th>
							<th className=" bg-back-ground-1 text-start pl-[1rem]">
								7d%
							</th>
							<th className=" bg-back-ground-1 text-start pl-[3rem]">
								Vốn hoá thị trường
							</th>
							<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
								Khối lượng(24h)
							</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{data &&
							data.map((coin, index) => (
								<tr
									key={coin.nameId}
									className=" text-[1.4rem] font-medium h-[4.5rem] text-start"
								>
									<td className="w-[4.8rem]  z-10 text-center">
										{index + 1}
									</td>
									<td className="w-[16rem] text-start cursor-pointer hover:opacity-80">
										<Link href={`${path}/${coin.nameId}`}>
											<img
												className="w-[2.4rem] h-[2.4rem] inline-block ml-[1rem]"
												src={coin.image}
											/>
											<span className=" inline ml-[1rem] text-blue-text">
												{coin.symbol.toUpperCase()}
											</span>
										</Link>
									</td>
									<td className=" text-black-text">
										${coin.currentPrice}
									</td>
									<td
										className={`${
											+coin.priceChange24hPercent > 0
												? 'text-price-increase'
												: 'text-price-decrease'
										} text-price-increase pl-[1rem]`}
									>
										{+coin.priceChange24hPercent > 0
											? '+'
											: ''}
										{coin.priceChange24hPercent.slice(0, 7)}
										%
									</td>
									<td
										className={`${
											+coin.priceChange24hPercent > 0
												? 'text-price-increase'
												: 'text-price-decrease'
										} text-price-increase pl-[1rem]`}
									>
										{+coin.priceChange24hPercent > 0
											? '+'
											: ''}
										{coin.priceChange7dPercent.slice(0, 7)}%
									</td>
									<td className="text-black-text pl-[3rem]">
										${coin.marketCap}
									</td>
									<td className="text-black-text">
										${coin.volume24h}
									</td>
								</tr>
							))}
						{/* <tr className=" text-[1.4rem] font-medium h-[4.5rem] text-start">
							<td className="w-[4.8rem]  z-10 text-center">1</td>
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
							<td className=" text-price-increase pl-[1rem]">
								+4%
							</td>
							<td className=" text-price-decrease pl-[1rem]">
								-2.3%
							</td>
							<td className="text-black-text pl-[3rem]">
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
						</tr> */}
					</tbody>
				</table>
			</div> */}
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

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const data = await fetch(
// 		`http://localhost:5000/api/v1/coin/markets?per_page=100&page=1`
// 	)
// 		.then((res) => res.json())
// 		.then((res) => res.data.coinList);

// 	// Pass data to the page via props
// 	return { props: { data } };
// }
