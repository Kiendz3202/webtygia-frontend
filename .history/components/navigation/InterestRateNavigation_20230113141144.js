import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function InterestRateNavigation() {
	const router = useRouter();
	return (
		<div className=" grid grid-cols-7 items-center grid-flow-col gap-x-[1rem] sm:gap-x-[2rem] mb-[2rem] px-[1rem] text-[2rem] bg-white rounded-[1.5rem] h-[5rem] shadow-shadow-custom">
			<div className=" col-span-1 text-center ">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/agribank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/Agribank"
				>
					Agribank
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/bidv')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/bidv"
				>
					BIDV
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/vietcombank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/vietcombank"
				>
					Vietcombank
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/mbbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/mbbank"
				>
					MB
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/scb')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/scb"
				>
					SCB
				</Link>
			</div>
			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/vib')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/vib"
				>
					VIB
				</Link>
			</div>

			<div className=" col-span-1 text-center">
				<Link
					className={`block w-full h-full ${
						router.pathname.includes('/vietinbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/lai-suat-ngan-hang/vietinbank"
				>
					Vietinbank
				</Link>
			</div>
		</div>
	);
}

export default InterestRateNavigation;
