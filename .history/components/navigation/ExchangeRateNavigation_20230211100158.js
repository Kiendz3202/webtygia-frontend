import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function ExchangeRateNavigation() {
	const router = useRouter();
	return (
		<div className=" flex flex-wrap gap-x-[1rem] mx-[1rem] mb-[2rem] text-[1.6rem] bg-white rounded-[1.5rem]  sm:shadow-shadow-custom">
			<div className="flex items-center w-fit h-[5rem]  mr-[1rem]">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/agribank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/ty-gia-ngoai-te/agribank"
				>
					Agribank
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[5rem]   ">
				<Link
					className={`flex w-full h-full px-[1rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/bidv')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/ty-gia-ngoai-te/bidv"
				>
					Bidv
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/mbbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/ty-gia-ngoai-te/mbbank"
				>
					MB
				</Link>
			</div>
			<div className=" flex items-center  mr-[1rem] w-fit h-[5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/techcombank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/ty-gia-ngoai-te/techcombank"
				>
					Techcombank
				</Link>
			</div>
			<div className="flex items-center   mr-[1rem] w-fit h-[5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vietcombank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/ty-gia-ngoai-te/vietcombank"
				>
					Vietcombank
				</Link>
			</div>
			<div className=" flex items-center   mr-[1rem] w-fit h-[5rem]  ">
				<Link
					className={`flex w-full px-[1rem] h-full text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vietinbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/ty-gia-ngoai-te/vietinbank"
				>
					Vietinbank
				</Link>
			</div>
		</div>
	);
}

export default ExchangeRateNavigation;
