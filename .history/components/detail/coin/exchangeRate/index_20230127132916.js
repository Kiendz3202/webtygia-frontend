import React, { useRef } from 'react';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

function ExchagneRate({ data }) {
	const inputUsd = useRef();

	const inputCoin = useRef();

	const convertCoinToUsd = (e) => {
		let number = e.target.value;

		let result = number * data?.currentPrice;
		if (isNaN(result)) {
			inputUsd.current.value = 'Ngăn cách bằng dấu .';
		} else {
			inputUsd.current.value = result;
		}
	};

	const convertUsdToCoin = (e) => {
		let number = e.target.value;

		let result = number / data?.currentPrice;
		if (isNaN(result)) {
			inputCoin.current.value = 'Ngăn cách bằng dấu .';
		} else {
			inputCoin.current.value = result;
		}
	};
	return (
		<>
			<h2 className="text-[2.4rem] font-semibold">
				Công cụ chuyển đổi tiền tệ
			</h2>
			<div className="flex justify-between flex-col sm:flex-row bg-grey-4 rounded-[4px]">
				<div className=" justify-between ml-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black w-full border-grey-boder">
						<input
							ref={inputCoin}
							onChange={convertCoinToUsd}
							className=" outline-none text-[2rem] w-full bg-grey-4"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[10rem] items-center w-[9rem]">
						<img
							src={data?.image}
							className="w-[3.2rem] h-[3.2rem] "
						/>
						<div className="ml-[1rem]">
							<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								{data?.nameId}
								<p className=" text-[1.4rem] text-grey-text ">
									{data?.symbol.toUpperCase()}
								</p>
							</h1>
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<SyncAltIcon sx={{ fontSize: '3rem' }} />
				</div>
				<div className=" justify-between ml-[3rem] sm:ml-0 sm:mr-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black w-full">
						<input
							onChange={convertUsdToCoin}
							ref={inputUsd}
							className=" outline-none text-[2rem] w-full bg-grey-4"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[10rem] items-center w-[9rem]">
						<img
							src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663"
							className="w-[3.2rem] h-[3.2rem]"
						/>
						<div className="ml-[1rem]">
							<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								Tether
								<p className=" text-[1.4rem] text-grey-text ">
									USDT
								</p>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExchagneRate;