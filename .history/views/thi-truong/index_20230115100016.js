import React from 'react';

function MarketView() {
	return (
		<div className="p-[5rem]">
			<div className="grid grid-cols-2 justify-items-center gap-[3rem]">
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem]">
					Vang
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1rem]">
					Co phieu
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1rem]">
					Tien dien tu
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1rem]">
					Lai suat
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1rem]">
					Ngoai te
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1rem]">
					Xang dau
				</div>
			</div>
		</div>
	);
}

export default MarketView;
