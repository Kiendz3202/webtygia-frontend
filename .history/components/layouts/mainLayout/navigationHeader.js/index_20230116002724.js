import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavigationHeader() {
	const router = useRouter();
	return (
		<div className="hidden sm:block sticky top-0 mx-[1rem] shadow-shadow-custom  bg-white z-50">
			<div className="  w-full max-w-[144rem] flex   items-center mx-[1rem] mt-[1rem] mx-auto">
				<ul className="flex flex-wrap  justify-between items-center text-grey-text">
					<Link href="/gia-vang/sjc" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] h-fit  text-[1.8rem] font-normal text-center align-middle   cursor-pointer  ${
								router.pathname.includes('/gia-vang')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Vàng
						</li>
					</Link>
					<Link href="/co-phieu" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] text-[1.8rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
								router.pathname.includes('/co-phieu')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Cổ phiếu
						</li>
					</Link>
					<Link href="/coin" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] text-[2rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
								router.pathname.includes('/coin')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Tiền điện tử
						</li>
					</Link>
					<Link href="/lai-suat-ngan-hang" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] text-[2rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
								router.pathname.includes('/lai-suat-ngan-hang')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Lãi suất
						</li>
					</Link>
					<Link href="/ty-gia-ngoai-te" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] text-[2rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
								router.pathname.includes('/ty-gia-ngoai-te')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Ngoại tệ
						</li>
					</Link>
					<Link href="/gia-xang-dau" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] text-[2rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
								router.pathname.includes('/gia-xang-dau')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Xăng dầu
						</li>
					</Link>
					<Link href="/tin-tuc" className="mr-[1rem]">
						<li
							className={`w-fit px-[1.5rem] py-[1rem] text-[2rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
								router.pathname.includes('/tin-tuc')
									? 'text-white-text bg-active-bg'
									: ''
							}`}
						>
							Tin tức
						</li>
					</Link>
					{/* <Link href="/danh-muc-theo-doi" className="mr-[1rem]">
        <li
            className={`w-[16rem] h-[5rem] text-[2rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
                router.pathname == '/danh-muc-theo-doi'
                    ? 'text-white-text bg-active-bg'
                    : ''
            }`}
        >
            Danh mục theo dõi
        </li>
    </Link> */}
				</ul>
			</div>
		</div>
	);
}

export default NavigationHeader;
