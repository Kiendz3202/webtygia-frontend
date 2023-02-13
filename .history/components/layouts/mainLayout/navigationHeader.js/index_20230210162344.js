import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function NavigationHeader() {
	const router = useRouter();
	return (
		<nav className="hidden sm:flex items-center sticky top-0 mx-[1rem]  sm:mx-0 shadow-shadow-custom bg-white min-h-[65px] z-50">
			<div className="  w-[144rem] flex justify-between items-center mx-auto text-grey-text">
				<Link href="/trang-chu" className="mr-[1rem]">
					<div
						className={`flex items-center px-[1.5rem] py-[1rem] h-fit  text-[1.6rem] font-normal text-center align-middle   cursor-pointer  ${
							router.pathname.includes('/trang-chu')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						<HomeIcon sx={{ fontSize: '20px' }} />
						<div>Trang chủ</div>
					</div>
				</Link>

				<Link href="/coin" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] text-[1.6rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/coin')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Tiền điện tử
					</div>
				</Link>
				<Link href="/co-phieu/hnx" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] text-[1.6rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/co-phieu')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Cổ phiếu
					</div>
				</Link>

				<Link href="/lai-suat-ngan-hang" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] text-[1.6rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/lai-suat-ngan-hang')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Lãi suất
					</div>
				</Link>
				<Link href="/ty-gia-ngoai-te" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] text-[1.6rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/ty-gia-ngoai-te')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Ngoại tệ
					</div>
				</Link>
				<Link href="/gia-vang/sjc" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] h-fit  text-[1.6rem] font-normal text-center align-middle   cursor-pointer  ${
							router.pathname.includes('/gia-vang')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Vàng
					</div>
				</Link>
				<Link href="/gia-xang-dau" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] text-[1.6rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/gia-xang-dau')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Xăng dầu
					</div>
				</Link>
				<Link href="/tin-tuc" className="mr-[1rem]">
					<div
						className={` px-[1.5rem] py-[1rem] text-[1.6rem] font-normal text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/tin-tuc')
								? 'text-white-text bg-active-bg'
								: ''
						}`}
					>
						Tin tức
					</div>
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
			</div>
		</nav>
	);
}

export default NavigationHeader;
