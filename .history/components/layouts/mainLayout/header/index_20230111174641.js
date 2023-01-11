import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();
	return (
		<header
			id="header"
			className="sm:fixed flex flex-col items-center w-full mx-auto top-0  z-50 bg-white"
		>
			<div className="  w-full max-w-[144rem] flex justify-between h-[7.8rem] items-center ">
				<div className="flex h-[7.8rem] items-center  sm:pl-[0.1rem] cursor-pointer   pl-[2rem] ">
					<Link href="/">
						<svg
							className="ml-[3rem]"
							width="130"
							height="30"
							viewBox="0 0 130 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.107955 7.09091L0.863637 2.63636H18.5625L17.8068 7.09091H11.6818L9.05682 23H3.60795L6.23295 7.09091H0.107955ZM17.9982 28.7273C17.3619 28.7273 16.7686 28.6776 16.2184 28.5781C15.6682 28.4853 15.1876 28.3561 14.7766 28.1903L16.6261 24.2926C17.0503 24.4517 17.4414 24.5545 17.7994 24.6009C18.1639 24.6473 18.4854 24.6207 18.7638 24.5213C19.0423 24.4219 19.271 24.233 19.4499 23.9545L19.6289 23.6761L16.9045 7.72727H22.4329L23.1289 18.3068H23.288L27.5636 7.72727H33.5295L25.217 24.2727C24.7927 25.1146 24.2624 25.8703 23.6261 26.5398C22.9963 27.2159 22.2208 27.7495 21.2994 28.1406C20.378 28.5317 19.2776 28.7273 17.9982 28.7273ZM27.4641 5.46023H23.5266L23.4073 3.90909C24.1166 3.8892 24.637 3.79972 24.9684 3.64062C25.2998 3.48153 25.4689 3.29261 25.4755 3.07386C25.5484 2.71591 25.4192 2.48722 25.0877 2.38778C24.7563 2.28835 24.3155 2.23864 23.7653 2.23864L24.2425 0.0511353C26.2842 0.0511353 27.7989 0.289772 28.7866 0.767045C29.7809 1.24432 30.2018 1.92045 30.0494 2.79545C29.9632 3.35227 29.6715 3.78314 29.1744 4.08807C28.6838 4.39299 28.1535 4.58523 27.5835 4.66477L27.4641 5.46023ZM38.4837 29.0455C36.9458 29.0455 35.6664 28.8267 34.6456 28.3892C33.6314 27.9583 32.8823 27.3617 32.3984 26.5994C31.9212 25.8438 31.7223 24.9754 31.8018 23.9943H37.0916C37.1049 24.3258 37.201 24.5909 37.38 24.7898C37.5589 24.9886 37.8075 25.1312 38.1257 25.2173C38.4439 25.3035 38.8151 25.3466 39.2393 25.3466C39.9553 25.3466 40.575 25.1709 41.0987 24.8196C41.6224 24.4749 41.9439 23.8551 42.0632 22.9602L42.5007 20.375H42.3416C42.0632 20.892 41.6887 21.3329 41.218 21.6974C40.7474 22.0554 40.2072 22.3305 39.5973 22.5227C38.9875 22.7083 38.3378 22.8011 37.6484 22.8011C36.5613 22.8011 35.6035 22.5492 34.7749 22.0455C33.9529 21.5417 33.3563 20.7429 32.9851 19.6491C32.6205 18.5554 32.584 17.1269 32.8757 15.3636C33.1806 13.5208 33.7176 12.0227 34.4865 10.8693C35.2554 9.71591 36.1404 8.87074 37.1413 8.33381C38.1423 7.79688 39.1465 7.52841 40.1541 7.52841C40.9098 7.52841 41.5495 7.66098 42.0732 7.92614C42.5968 8.18466 43.0144 8.53267 43.326 8.97017C43.6375 9.40104 43.853 9.875 43.9723 10.392H44.0916L44.5291 7.72727H50.0178L47.4723 22.9602C47.2734 24.2595 46.7663 25.3598 45.951 26.2614C45.1423 27.1695 44.0949 27.8589 42.8089 28.3295C41.5296 28.8068 40.0878 29.0455 38.4837 29.0455ZM40.3132 18.9034C40.817 18.9034 41.2744 18.7642 41.6854 18.4858C42.0964 18.2008 42.4444 17.7964 42.7294 17.2727C43.0144 16.7424 43.2166 16.1061 43.3359 15.3636C43.4553 14.608 43.4619 13.9616 43.3558 13.4247C43.2498 12.8812 43.041 12.4669 42.7294 12.1818C42.4179 11.8902 42.0102 11.7443 41.5064 11.7443C41.0026 11.7443 40.5485 11.8902 40.1442 12.1818C39.7398 12.4669 39.3984 12.8812 39.12 13.4247C38.8416 13.9616 38.6428 14.608 38.5234 15.3636C38.4041 16.1193 38.3942 16.7623 38.4936 17.2926C38.593 17.8163 38.7952 18.2173 39.1001 18.4957C39.4051 18.7675 39.8094 18.9034 40.3132 18.9034ZM50.2638 23L52.8093 7.72727H58.2979L55.7525 23H50.2638ZM55.7923 6.13636C55.0498 6.13636 54.4499 5.8911 53.9925 5.40057C53.5352 4.90341 53.3661 4.31345 53.4854 3.63068C53.6048 2.93466 53.9693 2.3447 54.5792 1.86079C55.189 1.37026 55.8652 1.125 56.6076 1.125C57.3567 1.125 57.9532 1.37026 58.3974 1.86079C58.8415 2.3447 59.0072 2.93466 58.8945 3.63068C58.7885 4.31345 58.4305 4.90341 57.8207 5.40057C57.2174 5.8911 56.5413 6.13636 55.7923 6.13636ZM62.7649 23.2386C61.7971 23.2386 60.9652 23.0795 60.2692 22.7614C59.5798 22.4366 59.076 21.946 58.7578 21.2898C58.4463 20.6269 58.3767 19.7917 58.549 18.7841C58.6882 17.9489 58.95 17.2363 59.3345 16.6463C59.719 16.0563 60.1963 15.5724 60.7663 15.1946C61.3364 14.8168 61.9761 14.5284 62.6854 14.3295C63.4013 14.1241 64.157 13.9915 64.9524 13.9318C65.8142 13.8655 66.5135 13.7827 67.0504 13.6832C67.5874 13.5838 67.9884 13.4479 68.2536 13.2756C68.5187 13.1032 68.6778 12.8712 68.7308 12.5795V12.5398C68.7905 12.142 68.6844 11.8371 68.4126 11.625C68.1475 11.4129 67.7763 11.3068 67.299 11.3068C66.782 11.3068 66.3345 11.4195 65.9567 11.6449C65.5855 11.8703 65.3303 12.2216 65.1911 12.6989H60.1399C60.352 11.7708 60.7862 10.9157 61.4425 10.1335C62.1054 9.3447 62.9837 8.71496 64.0774 8.24432C65.1778 7.76705 66.4903 7.52841 68.0149 7.52841C69.102 7.52841 70.0566 7.65767 70.8786 7.91619C71.7005 8.16809 72.38 8.52273 72.9169 8.98011C73.4605 9.43087 73.8416 9.96117 74.0604 10.571C74.2857 11.1742 74.3388 11.8305 74.2195 12.5398L72.4695 23H67.3388L67.6967 20.8523H67.5774C67.1797 21.4223 66.7322 21.883 66.2351 22.2344C65.7446 22.5857 65.2076 22.8409 64.6243 23C64.0476 23.1591 63.4278 23.2386 62.7649 23.2386ZM65.1513 19.7784C65.5623 19.7784 65.9666 19.6922 66.3643 19.5199C66.7621 19.3475 67.1035 19.099 67.3885 18.7741C67.6735 18.4493 67.8558 18.0549 67.9354 17.5909L68.1342 16.3182C67.9884 16.3778 67.826 16.4342 67.647 16.4872C67.4747 16.5336 67.2924 16.58 67.1001 16.6264C66.9145 16.6728 66.7157 16.7159 66.5036 16.7557C66.2981 16.7955 66.0859 16.8352 65.8672 16.875C65.4297 16.9413 65.0618 17.0507 64.7635 17.2031C64.4652 17.349 64.2332 17.5312 64.0675 17.75C63.9018 17.9621 63.799 18.2008 63.7592 18.4659C63.6996 18.8835 63.7957 19.2083 64.0476 19.4403C64.3061 19.6657 64.674 19.7784 65.1513 19.7784ZM66.5831 5.81818L69.2479 1.36364H73.9411L70.2024 5.81818H66.5831ZM75.0522 23L75.7085 19.0227L84.359 12.7386C84.9357 12.321 85.4329 11.9299 85.8505 11.5653C86.2747 11.1941 86.6161 10.813 86.8746 10.4219C87.1332 10.0308 87.3022 9.59659 87.3817 9.11932C87.4679 8.59564 87.4281 8.1482 87.2624 7.77699C87.1033 7.39915 86.8448 7.11079 86.4869 6.91193C86.1289 6.71307 85.698 6.61364 85.1942 6.61364C84.6838 6.61364 84.2165 6.71638 83.7923 6.92188C83.368 7.12737 83.0134 7.42898 82.7283 7.8267C82.4499 8.22443 82.2643 8.70833 82.1715 9.27841H76.9215C77.1602 7.84659 77.6871 6.61364 78.5025 5.57954C79.3245 4.54545 80.3652 3.75 81.6246 3.19318C82.8907 2.63636 84.3126 2.35795 85.8903 2.35795C87.521 2.35795 88.8931 2.61979 90.0067 3.14347C91.1204 3.66051 91.9258 4.38968 92.4229 5.33097C92.9267 6.27225 93.0692 7.37595 92.8505 8.64204C92.7179 9.42424 92.4229 10.1998 91.9656 10.9688C91.5148 11.7377 90.7889 12.5928 89.788 13.5341C88.7937 14.4688 87.4149 15.5824 85.6516 16.875L83.484 18.4659L83.4641 18.5852H91.4187L90.6829 23H75.0522ZM93.0344 19.8182L93.7504 15.5227L104.091 2.63636H107.989L107.034 8.36364H104.807L99.239 15.3636L99.1992 15.5227H111.29L110.574 19.8182H93.0344ZM102.421 23L103.176 18.5057L103.614 16.6364L105.921 2.63636H111.091L107.711 23H102.421ZM119.376 14.4091L117.945 23H112.456L115.837 2.63636H121.126L119.814 10.6307H119.973C120.47 9.65625 121.166 8.89725 122.061 8.35369C122.956 7.8035 123.97 7.52841 125.104 7.52841C126.178 7.52841 127.072 7.77367 127.788 8.2642C128.504 8.75473 129.011 9.43087 129.31 10.2926C129.608 11.1544 129.664 12.142 129.479 13.2557L127.848 23H122.359L123.791 14.4091C123.911 13.6534 123.814 13.0601 123.503 12.6293C123.198 12.1984 122.697 11.983 122.001 11.983C121.551 11.983 121.14 12.0824 120.768 12.2812C120.404 12.4735 120.099 12.7519 119.854 13.1165C119.615 13.4744 119.456 13.9053 119.376 14.4091Z"
								fill="url(#paint0_linear_135_5105)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_135_5105"
									x1="168.5"
									y1="11"
									x2="-10"
									y2="30"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#1366FF" />
									<stop offset="1" stopColor="#6835FF" />
								</linearGradient>
							</defs>
						</svg>
					</Link>
				</div>
				<div className=" flex flex-1  h-[7.8rem] items-center ">
					<div className="hidden sm:flex flex-1 sm:ml-[5rem] ">
						<ul className="flex w-full px-[2rem] py-[2rem] border-grey-boder border rounded-[1.5rem]">
							<li>
								<label htmlFor="search">
									<SearchIcon
										sx={{ fontSize: '3rem' }}
										className=" text-[3rem] cursor-pointer"
									/>
								</label>
							</li>
							<li className=" w-full mr-[3rem] ">
								<input
									id="search"
									className=" w-full outline-none text-[2.0rem] "
									type="text"
									placeholder="Tìm kiếm"
								/>
							</li>
						</ul>
					</div>
					<div className="w-[31.8rem] ml-auto sm:ml-0">
						<ul className="flex justify-end pr-[2.5rem] items-center">
							<li className=" cursor-pointer">
								<NotificationsNoneIcon
									sx={{ fontSize: '3rem' }}
									className="text-[3rem]"
								/>
							</li>
							<li className=" px-[3rem]">
								<Avatar
									className="text-[3rem] cursor-pointer"
									src="https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-42.jpg"
								/>
							</li>
							<li className="block text-[1.8rem]  w-[30rem] font-medium ">
								Nguyen Manh Kien
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="sm:hidden flex border-b  h-[7.8rem] items-center bg-back-ground-1">
				<div className="w-full">
					<ul className="flex px-[1rem]">
						<li>
							<label htmlFor="search">
								<SearchIcon
									sx={{ fontSize: '3rem' }}
									className=" text-[3rem] cursor-pointer"
								/>
							</label>
						</li>
						<li className=" w-full">
							<input
								id="search"
								className=" w-full outline-none text-[2.0rem] bg-back-ground-1"
								type="text"
								placeholder="Tìm kiếm"
							/>
						</li>
					</ul>
				</div>
			</div>
			{/* bg-white-text shadow-shadow-custom rounded-[1.5rem] */}
			<div className="  w-full max-w-[144rem] flex   items-center  ">
				<ul className="flex flex-wrap  justify-between items-center text-grey-text p-3">
					<Link href="/" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname == '/trang-chu'
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							{/* <HomeIcon className="mr-[1rem]" /> */}
							Trang chủ
						</li>
					</Link>
					<Link href="/gia-vang/sjc" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1  ${
								router.pathname.includes('/gia-vang')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Vàng
						</li>
					</Link>
					<Link href="/co-phieu" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname.includes('/co-phieu')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Cổ phiếu
						</li>
					</Link>
					{/* <Link href="/coin" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname.includes('/coin')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tiền điện tử
						</li>
					</Link> */}
					<Link href="/lai-suat-ngan-hang" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname.includes('/lai-suat-ngan-hang')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Lãi suất
						</li>
					</Link>
					<Link href="/ty-gia-ngoai-te" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname.includes('/ty-gia-ngoai-te')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Ngoại tệ
						</li>
					</Link>
					<Link href="/gia-xang-dau" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname.includes('/gia-xang-dau')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Xăng dầu
						</li>
					</Link>
					<Link href="/tin-tuc" className="my-[0.5rem]">
						<li
							className={`w-[11rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
								router.pathname.includes('/tin-tuc')
									? 'text-white-text bg-active-bg rounded-[.4rem]'
									: ''
							}`}
						>
							Tin tức
						</li>
					</Link>
					{/* <Link href="/danh-muc-theo-doi" className="my-[0.5rem]">
						<li
							className={`w-[16rem] h-[5rem] text-[2rem] font-medium text-center align-middle  leading-[5rem] cursor-pointer mx-1 ${
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
		</header>
	);
}

export default Header;
