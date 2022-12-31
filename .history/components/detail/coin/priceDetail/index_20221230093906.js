import React from 'react';

function PriceDetail({ coin }) {
	return (
		<div className="  pb-[4rem]">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<div className="flex h-[10rem] items-center">
						<img src={coin.image} className="w-[6rem] h-[6rem]" />
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
								{coin.nameId}({coin.symbol.toUpperCase()})
								<p className=" text-[1.4rem] text-grey-text">
									#Xếp hạng {coin.rank}
								</p>
							</h1>
						</div>
					</div>
					<div>url</div>
				</div>
				<div className="">
					<p className="text-[1.6rem] text-grey-text font-semibold">
						Giá {coin.symbol.toUpperCase()}
					</p>
					<div className="flex items-center">
						<div className="text-black-text-2 text-[4.8rem] font-semibold">
							${coin.currentPrice}
						</div>
						<div
							className={`${
								+coin.priceChange24hPercent > 0
									? 'bg-price-increase'
									: 'bg-price-decrease'
							} text-white-text ml-[2rem] h-[3rem] text-center leading-[3rem] w-fit rounded-[0.6rem] text-[1.4rem]`}
						>
							{+coin.priceChange24hPercent > 0 ? '+' : ''}
							{coin.priceChange24hPercent.slice(0, 5)}%
						</div>
					</div>
					<div className="flex">
						<div className=" text-grey-text text-[1.8rem] font-medium">
							Cao:
							<span className=" text-black-text-2 ml-[1rem]">
								${coin.high24h}
							</span>
						</div>
						<div className=" text-grey-text text-[1.8rem] font-medium ml-[1rem]">
							Thấp:
							<span className=" text-black-text-2 ml-[1rem]">
								${coin.low24h} (24h)
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[3.5rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2rem] text-center">
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						${coin.marketCap.split('.')[0]}
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Vốn hoá
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						${coin.fullyDilutedValuation.split('.')[0]}
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Vốn hoá thị trường pha loãng hoàn toàn
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						${coin.circulatingSupply.split('.')[0]}
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Lượng cung lưu hành
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						${coin.totalSupply.split('.')[0]}
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Tổng cung tối đa
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						${coin.volume24h.split('.')[0]}
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Khối lượng giao dịch 24h
					</p>
				</div>
			</div>
		</div>
	);
}

export default PriceDetail;
