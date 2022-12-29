import React from 'react';

function CategoryFollowing() {
	return (
		<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem] bg-white-text mt-[4.6rem]">
			<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
				Danh mục theo dõi
			</p>
			<div className="py-[1.5rem]">
				<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
					<li className=" col-span-2">Mã</li>
					<li className="ml-[-3rem]">Giá</li>
					<li className="ml-[-1rem]">Thay đổi</li>
				</ul>
				<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
					<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
						<img
							className="inline-block w-[2.4rem] h-[2.4rem]"
							src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
						/>
						<span className="pl-[1rem]">BTC</span>
					</li>
					<li className="text-[1.4rem] font-medium ml-[-3rem] ">
						2000$
					</li>
					<li className="text-[1.4rem] font-medium text-price-increase ml-[-1rem]">
						+5.4%
					</li>
				</ul>
				<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
					<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
						<img
							className="inline-block w-[2.4rem] h-[2.4rem]"
							src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
						/>
						<span className="pl-[1rem]">MATIC</span>
					</li>
					<li className="text-[1.4rem] font-medium ml-[-3rem]">
						100$
					</li>
					<li className="text-[1.4rem] font-medium text-price-decrease ml-[-1rem]">
						-3.7%
					</li>
				</ul>
			</div>
		</div>
	);
}

export default CategoryFollowing;
