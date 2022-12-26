import React from 'react';

function ReferenceSideBar() {
	return (
		<div className="hidden md:block w-[31.8rem] ">
			<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
				<p className="text-back-text text-[1.8rem] font-semibold">
					Danh mục theo dõi
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Mã</li>
						<li>Giá</li>
						<li>Thay đổi</li>
					</ul>
					<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
						<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
							<img
								className="inline-block w-[2.4rem] h-[2.4rem]"
								src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
							/>
							<span className="pl-[1rem]">BTC</span>
						</li>
						<li className="text-[1.4rem] font-medium ">2000$</li>
						<li className="text-[1.4rem] font-medium text-price-increase">
							+5.4%
						</li>
					</ul>
					<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
						<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
							<img
								className="inline-block w-[2.4rem] h-[2.4rem]"
								src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
							/>
							<span className="pl-[1rem]">MATIC</span>
						</li>
						<li className="text-[1.4rem] font-medium">100$</li>
						<li className="text-[1.4rem] font-medium text-price-decrease">
							-3.7%
						</li>
					</ul>
				</div>
			</div>

			<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
				<div className="pt-[1.5rem] text-[1.6rem]">
					<p className="text-back-text text-[1.8rem] font-semibold">
						Tiền điện tử
					</p>
					<div className="py-[1.5rem]">
						<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
							<li className=" col-span-2">Mã</li>
							<li>Giá</li>
							<li>Thay đổi</li>
						</ul>
						<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
							<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
								<img
									className="inline-block w-[2.4rem] h-[2.4rem]"
									src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
								/>
								<span className="pl-[1rem]">BTC</span>
							</li>
							<li className="text-[1.4rem] font-medium ">
								2000$
							</li>
							<li className="text-[1.4rem] font-medium text-price-increase">
								+5.4%
							</li>
						</ul>
						<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
							<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
								<img
									className="inline-block w-[2.4rem] h-[2.4rem]"
									src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"
								/>
								<span className="pl-[1rem]">MATIC</span>
							</li>
							<li className="text-[1.4rem] font-medium">100$</li>
							<li className="text-[1.4rem] font-medium text-price-decrease">
								-3.7%
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
				<div className="pt-[1.5rem] text-[1.6rem]">
					<p className="text-back-text text-[1.8rem] font-semibold">
						Cổ phiếu
					</p>
					<div className="py-[1.5rem]">
						<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
							<li className=" col-span-2">Mã</li>
							<li>Giá</li>
							<li>Thay đổi</li>
						</ul>
						<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
							<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
								AAV
							</li>
							<li className="text-[1.4rem] font-medium ">
								50.000
							</li>
							<li className="text-[1.4rem] font-medium text-price-increase">
								+5.4%
							</li>
						</ul>
						<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
							<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer">
								MBS
							</li>
							<li className="text-[1.4rem] font-medium">
								34.530
							</li>
							<li className="text-[1.4rem] font-medium text-price-decrease">
								-3.7%
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReferenceSideBar;
