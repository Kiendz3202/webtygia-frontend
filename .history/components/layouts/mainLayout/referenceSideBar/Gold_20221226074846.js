import React, { useEffect, useState } from 'react';

function Gold() {
	const [gold, setGold] = useState([]);

	useEffect(() => {
		// setLoading(true)
		fetch('http://66.42.58.72/api/v1/gold/baotinminhchau')
			.then((res) => res.json())
			.then((data) => {
				setGold(data.data);
				// setLoading(false)
				console.log(data.data);
			});
	}, []);
	return (
		<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
			<div className="pt-[1.5rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Giá vàng SJC
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Vàng</li>
						<li className="ml-[-3rem]">Giá mua</li>
						<li>Giá bán</li>
					</ul>

					{/* <ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem] ">
						<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
							SJC
						</li>
						<li className="text-[1.4rem] font-medium ml-[-3rem]">
							{gold[0].vangSjc.vangMiengSjcBuy}
						</li>
						<li className="text-[1.4rem] font-medium text-price-increase">
							{gold[0].vangSjc.vangMiengSjcSell}
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
}

export default Gold;
