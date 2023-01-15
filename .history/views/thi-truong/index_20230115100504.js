import { Avatar } from '@mui/material';
import React from 'react';

function MarketView() {
	return (
		<div className="p-[5rem]">
			<div className="grid grid-cols-2 justify-items-center gap-[3rem]">
				<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-shadow-custom  w-full h-[16rem] rounded-[1.5rem]">
					<div>
						<Avatar className="w-[5rem] h-[5rem]" />
					</div>
					<div className="text-[16px] font-semibold mt-[1rem]">
						Vàng
					</div>
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1.5rem]">
					Co phieu
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1.5rem]">
					Tien dien tu
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1.5rem]">
					Lai suat
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1.5rem]">
					Ngoai te
				</div>
				<div className=" col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1.5rem]">
					Xang dau
				</div>
			</div>
		</div>
	);
}

export default MarketView;
