import { useEffect, useState } from 'react';
// import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Header = dynamic(() => import('./header/index'), {
	ssr: false,
});

function MainLayout({ children }) {
	const router = useRouter();
	const [marginTop, setMarginTop] = useState();
	useEffect(() => {
		const headerElement = document.getElementById('header');
		window.onresize = function () {
			if (headerElement?.offsetHeight > 0) {
				setMarginTop(headerElement.offsetHeight);
				console.log(headerElement.offsetHeight);
			}
		};
	}, []);
	return (
		<div>
			<div className="relative">
				<Header />
				<div className=" sticky top-0 w-full max-w-[144rem] flex   items-center bg-white shadow-shadow-custom mt-[1rem] mx-auto">
					<ul className="flex flex-wrap  justify-between items-center text-grey-text p-3">
						<Link href="/gia-vang/sjc" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] h-fit py-[1rem] text-[2rem] font-normal text-center align-middle   cursor-pointer  ${
									router.pathname.includes('/gia-vang')
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Vàng
							</li>
						</Link>
						<Link href="/co-phieu" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
									router.pathname.includes('/co-phieu')
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Cổ phiếu
							</li>
						</Link>
						<Link href="/coin" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
									router.pathname.includes('/coin')
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Tiền điện tử
							</li>
						</Link>
						<Link href="/lai-suat-ngan-hang" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
									router.pathname.includes(
										'/lai-suat-ngan-hang'
									)
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Lãi suất
							</li>
						</Link>
						<Link href="/ty-gia-ngoai-te" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
									router.pathname.includes('/ty-gia-ngoai-te')
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Ngoại tệ
							</li>
						</Link>
						<Link href="/gia-xang-dau" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
									router.pathname.includes('/gia-xang-dau')
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Xăng dầu
							</li>
						</Link>
						<Link href="/tin-tuc" className="mr-[1rem]">
							<li
								className={`w-fit px-[2rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
									router.pathname.includes('/tin-tuc')
										? 'text-white-text bg-active-bg rounded-[.4rem]'
										: ''
								}`}
							>
								Tin tức
							</li>
						</Link>
						{/* <Link href="/danh-muc-theo-doi" className="mr-[1rem]">
						<li
							className={`w-[16rem] h-[5rem] text-[2rem] font-normal text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname == '/danh-muc-theo-doi'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Danh mục theo dõi
						</li>
					</Link> */}
					</ul>
				</div>
				<div className="container">
					<div
						id="main-content"
						className="flex justify-between max-w-[144rem] mx-auto"
					>
						{/* <MenuSideBar /> */}
						{/* max-w-[89.5rem] */}
						{/* sm:mt-[16.3rem] */}
						<div
							className={`w-full  h-full lg:mr-[2rem] mx-auto  sm:mt-[16.3rem]`}
						>
							{children}
						</div>
						<ReferenceSideBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
