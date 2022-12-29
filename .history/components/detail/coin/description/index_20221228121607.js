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
			<div>
				Bitcoin is the first successful internet money based on
				peer-to-peer technology; whereby no central bank or authority is
				involved in the transaction and production of the Bitcoin
				currency. It was created by an anonymous individual/group under
				the name, Satoshi Nakamoto. The source code is available
				publicly as an open source project, anybody can look at it and
				be part of the developmental process.\r\n\r\nBitcoin is changing
				the way we see money as we speak. The idea was to produce a
				means of exchange, independent of any central authority, that
				could be transferred electronically in a secure, verifiable and
				immutable way. It is a decentralized peer-to-peer internet
				currency making mobile payment easy, very low transaction fees,
				protects your identity, and it works anywhere all the time with
				no central authority and banks.\r\n\r\nBitcoin is designed to
				have only 21 million BTC ever created, thus making it a
				deflationary currency. Bitcoin uses the{' '}
				<a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">
					SHA-256
				</a>
			</div>
		</div>
	);
}

export default Description;
