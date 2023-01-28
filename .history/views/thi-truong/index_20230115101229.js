import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function MarketView() {
	return (
		<div className="p-[5rem]">
			<div className="text-[32px] font-semibold mb-[3rem]">
				Thị trường
			</div>
			<div className="grid grid-cols-2 justify-items-center gap-[3rem]">
				<Link href="" className="block">
					<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
						<div>
							<Avatar className="w-[6rem] h-[6rem]" />
						</div>
						<div className="text-[20px] font-semibold mt-[1rem]">
							Vàng
						</div>
					</div>
				</Link>
				<Link href="" className="block">
					<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
						<div>
							<Avatar className="w-[6rem] h-[6rem]" />
						</div>
						<div className="text-[20px] font-semibold mt-[1rem]">
							Cổ phiếu
						</div>
					</div>
				</Link>
				<Link href="" className="block">
					<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
						<div>
							<Avatar className="w-[6rem] h-[6rem]" />
						</div>
						<div className="text-[20px] font-semibold mt-[1rem]">
							Tiền điện tử
						</div>
					</div>
				</Link>
				<Link href="" className="block">
					<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
						<div>
							<Avatar className="w-[6rem] h-[6rem]" />
						</div>
						<div className="text-[20px] font-semibold mt-[1rem]">
							Lãi suất
						</div>
					</div>
				</Link>
				<Link href="" className="block">
					<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
						<div>
							<Avatar className="w-[6rem] h-[6rem]" />
						</div>
						<div className="text-[20px] font-semibold mt-[1rem]">
							Ngoại tệ
						</div>
					</div>
				</Link>
				<Link href="" className="block">
					<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
						<div>
							<Avatar className="w-[6rem] h-[6rem]" />
						</div>
						<div className="text-[20px] font-semibold mt-[1rem]">
							Xăng dầu
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default MarketView;