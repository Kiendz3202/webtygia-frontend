import React, { useEffect, useState } from 'react';

function Coin() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		// setLoading(true)
		fetch('http://localhost:5000/api/v1/coin/top-rank')
			.then((res) => res.json())
			.then((data) => {
				setCoins(data.data);
				// setLoading(false)
			});
	}, []);
	return (
		<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
			<div className="pt-[1.5rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Tiền điện tử
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li className="ml-[-3rem]">Giá</li>
						<li>Thay đổi</li>
					</ul>
					{coins &&
						coins.map((coin) => (
							<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
								<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
									<img
										className="inline-block w-[2.4rem] h-[2.4rem]"
										src={coin.image}
									/>
									<span className="pl-[1rem]">
										{coin.symbol}
									</span>
								</li>
								<li className="text-[1.4rem] font-medium ml-[-3rem]">
									{coin.currentPrice}$
								</li>
								<li className="text-[1.4rem] font-medium text-price-increase">
									{coin.priceChange1hPercent.slice(0, 8)}%
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default Coin;
