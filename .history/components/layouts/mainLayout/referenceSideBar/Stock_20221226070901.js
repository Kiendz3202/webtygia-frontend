import React, { useEffect, useState } from 'react';

function Stock() {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		// setLoading(true)
		fetch('http://localhost:5000/api/v1/stock/stock-top-rank')
			.then((res) => res.json())
			.then((data) => {
				setStocks(data.data);
				// setLoading(false)
			});
	}, []);
	return (
		<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
			<div className="pt-[1.5rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Cổ phiếu
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li className="ml-[-3rem]">Giá</li>
						<li>Thay đổi</li>
					</ul>
					{stocks &&
						stocks.map((stock) => (
							<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
								<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
									{stock.symbol}
								</li>
								<li className="text-[1.4rem] font-medium ml-[-3rem]">
									{stock.currentPrice}
								</li>
								<li className="text-[1.4rem] font-medium text-price-increase">
									{stock.changePercent}
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default Stock;
