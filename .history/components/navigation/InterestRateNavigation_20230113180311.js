import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function InterestRateNavigation() {
	const router = useRouter();
	return (
		<div className=" flex  flex-wrap items-center gap-x-[1rem]  mb-[2rem] text-[1.6rem] bg-white rounded-[1.5rem]  sm:shadow-shadow-custom">
			<div className="  w-fit h-[5rem]  mx-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center scale-[1.05] ${
						router.pathname.includes('/agribank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/agribank"
				>
					Agribank
				</Link>
			</div>
			<div className="  w-fit h-[5rem]  mx-[1rem] ">
				<Link
					className={`flex w-full h-[4rem] px-[1rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/bidv')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/bidv"
				>
					Bidv
				</Link>
			</div>
			<div className="  w-fit h-[5rem] mx-[1rem] ">
				<Link
					className={`flex w-full px-[1rem] h-[4rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/mbbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/mbbank"
				>
					MB
				</Link>
			</div>
			<div className="  w-fit h-[5rem] mx-[1rem] ">
				<Link
					className={`flex w-full px-[1rem] h-[4rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/scb')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/scb"
				>
					SCB
				</Link>
			</div>
			<div className=" w-fit h-[5rem] mx-[1rem] ">
				<Link
					className={`flex w-full px-[1rem] h-[4rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vib')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/vib"
				>
					VIB
				</Link>
			</div>
			<div className="  w-fit h-[5rem] mx-[1rem] ">
				<Link
					className={`flex w-full px-[1rem] h-[4rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vietcombank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/vietcombank"
				>
					Vietcombank
				</Link>
			</div>
			<div className="  w-fit h-[5rem] mx-[1rem] ">
				<Link
					className={`flex w-full px-[1rem] h-[4rem] text-center items-center  scale-[1.05] ${
						router.pathname.includes('/vietinbank')
							? 'text-white-text bg-blue-400 rounded-[1.5rem]'
							: ''
					}`}
					href="/gia-vang/vietinbank"
				>
					Vietinbank
				</Link>
			</div>
		</div>
	);
}

export default InterestRateNavigation;
