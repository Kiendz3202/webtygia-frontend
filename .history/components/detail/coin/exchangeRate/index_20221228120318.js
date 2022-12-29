import React from 'react';

function ExchagneRate() {
	return (
		<>
			<h2 className="text-[2.4rem] font-semibold">
				Công cụ chuyển đổi tiền tệ
			</h2>
			<div className="flex justify-between">
				<div className="ml-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black">
						<input
							className=" outline-none text-[1.6rem]"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[10rem] items-center">
						<img
							src={coin.image}
							className="w-[3.2rem] h-[3.2rem]"
						/>
						<div className="ml-[1rem]">
							<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								{coin.nameId}
								<p className=" text-[1.4rem] text-grey-text ">
									{coin.symbol.toUpperCase()}
								</p>
							</h1>
						</div>
					</div>
				</div>
				<div className="mr-[3rem] flex items-center">
					<div className="mr-[1rem] border-r border-black">
						<input
							className=" outline-none text-[1.6rem]"
							placeholder="0"
						/>
					</div>
					<div className="flex h-[10rem] items-center">
						<img
							src={coin.image}
							className="w-[3.2rem] h-[3.2rem]"
						/>
						<div className="ml-[1rem]">
							<h1 className="text-[1.8rem] font-semibold capitalize text-back-text w-fit">
								{coin.nameId}
								<p className=" text-[1.4rem] text-grey-text ">
									{coin.symbol.toUpperCase()}
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
