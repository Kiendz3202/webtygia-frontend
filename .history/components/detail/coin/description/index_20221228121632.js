import React from 'react';

function Description({ coin }) {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-[2.4rem] font-semibold text-back-text">
				{coin.symbol.toUpperCase()} Dữ liệu về giá theo thời gian thực
			</h2>
			<p className="text-[1.6rem] font-medium text-grey-text-2">
				Giá{' ' + coin.nameId.toUpperCase() + ' '}hôm nay là $
				{coin.currentPrice + ' '}USD với khối lượng giao dịch trong 24
				giờ là ${coin.volume24h.split('.')[0] + ' '}
				USD. Chúng tôi cập nhật
				{' ' + coin.symbol.toUpperCase() + ' '} của chúng tôi sang giá
				USD theo thời gian thực.
				{' ' + coin.nameId.toUpperCase() + ' '}
				{`${+coin.priceChange24hPercent > 0 ? 'tăng ' : 'giảm '}`}
				{' ' +
					`${
						+coin.priceChange24hPercent > 0
							? coin.priceChange24hPercent
							: coin.priceChange24hPercent.slice(0, 5)
					}`}
				% trong 24 giờ qua. Thứ hạng hiện tại trên là #{coin.rank}, với
				vốn hóa thị trường là ${coin.marketCap + ' '}USD. Lượng cung lưu
				hành là
				{' ' + coin.circulatingSupply + ' '}
				{coin.symbol.toUpperCase()} đồng coin và lượng cung tối đa là
				{' ' + coin.totalSupply + ' '} {coin.symbol.toUpperCase()} đồng
				coin.
			</p>
			<h2 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
				{coin.symbol.toUpperCase() + ' '}là gì
			</h2>
		</div>
	);
}

export default Description;
