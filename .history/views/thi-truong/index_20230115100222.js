import { Avatar } from '@mui/material';
import React from 'react';

function MarketView() {
	return (
		<div className="p-[5rem]">
			<div className="grid grid-cols-2 justify-items-center gap-[3rem]">
				<div className="flex flex-col  items-start col-span-1 shadow-shadow-custom bg-slate-400 w-full h-[16rem] rounded-[1.5rem]">
					<div>
						<Avatar />
					</div>
					<div>Vàng</div>
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
