import MainLayout from '@components/layouts/mainLayout';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function MarketView() {
	return (
		<MainLayout>
			<div className="px-[28px] py-[1rem]">
				<div className="text-[32px] font-semibold mb-[1rem]">
					Thị trường
				</div>
				<div className="grid grid-cols-2 justify-items-center gap-[3rem]">
					<Link href="/gia-vang/sjc" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Vàng
							</div>
						</div>
					</Link>
					<Link href="/co-phieu" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Cổ phiếu
							</div>
						</div>
					</Link>
					<Link href="/coin" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Tiền điện tử
							</div>
						</div>
					</Link>
					<Link
						href="/lai-suat-ngan-hang"
						className="block w-full h-full"
					>
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Lãi suất
							</div>
						</div>
					</Link>
					<Link
						href="/ty-gia-ngoai-te"
						className="block w-full h-full"
					>
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Ngoại tệ
							</div>
						</div>
					</Link>
					<Link href="/gia-xang-dau" className="block w-full h-full">
						<div className="flex flex-col p-[2rem] items-start col-span-1 shadow-xl  w-full h-[16rem] rounded-[1.5rem]">
							<div>
								<Avatar className="w-[6rem] h-[6rem]" />
							</div>
							<div className="text-[20px] font-medium mt-[1rem]">
								Xăng dầu
							</div>
						</div>
					</Link>
				</div>
			</div>
		</MainLayout>
	);
}

export default MarketView;
