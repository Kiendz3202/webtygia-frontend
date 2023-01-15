import React from 'react';

function MarketView() {
	return (
		<div className="p-[2rem]">
			<div className="grid grid-cols-2 justify-items-center gap-3">
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full">
					Vang
				</div>
				<div className=" col-span-1">Co phieu</div>
				<div className=" col-span-1">Tien dien tu</div>
				<div className=" col-span-1">Lai suat</div>
				<div className=" col-span-1">Ngoai te</div>
				<div className=" col-span-1">Xang dau</div>
			</div>
		</div>
	);
}

export default MarketView;
