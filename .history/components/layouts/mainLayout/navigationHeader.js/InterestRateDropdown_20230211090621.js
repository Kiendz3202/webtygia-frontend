import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useOnHoverOutside } from '@utils/useOnHoverOutside';

function Menu() {
	return (
		<div className=" absolute top-[45px] left-0 bg-white shadow-shadow-custom w-[20rem] text-[1.4rem]">
			<div className=" relative">
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					Agribank
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					BIDV
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					MB
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					SCB
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					VIB
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					Vietcombank
				</div>
				<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
					Vietinbank
				</div>
			</div>
			<div className=" absolute bg-yellow-200 w-[20rem] h-[22px] -top-[22px] opacity-0 "></div>
		</div>
	);
}

function InterestRateDropdown() {
	const dropdownRef = useRef(null); // Create a reference for dropdown container
	const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

	const router = useRouter();

	// Function to close dropdown
	const closeHoverMenu = () => {
		setMenuDropDownOpen(false);
	};

	useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
	return (
		<div ref={dropdownRef} className=" relative flex flex-col items-center">
			<Link
				onMouseOver={() => setMenuDropDownOpen(true)}
				href="/lai-suat-ngan-hang"
				className="mr-[1rem]"
			>
				<div
					className={`flex items-center h-fit px-[1.5rem] py- text-center align-middle   cursor-pointer mx-1 ${
						router.pathname.includes('/lai-suat-ngan-hang')
							? 'text-blue-2'
							: ''
					}`}
				>
					<div>
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_516_422)">
								<path
									d="M12.7724 9.33589C12.3681 9.74113 11.9616 10.1491 11.5534 10.556C11.3383 10.7702 11.1942 10.7702 10.9769 10.5533C10.4032 9.98119 9.83165 9.40692 9.25846 8.83375C9.2106 8.78585 9.16 8.74125 9.10169 8.68564C8.67152 9.15089 8.19019 9.53136 7.64066 9.82427C4.46335 11.5234 0.50438 9.48456 0.0445074 5.91338C-0.3169 3.10479 1.5589 0.563783 4.35499 0.073752C7.08342 -0.404717 9.8146 1.4987 10.313 4.22195C10.4125 4.76704 10.4466 5.31213 10.3564 5.85998C10.3289 6.02736 10.3575 6.15454 10.4934 6.27788C10.7519 6.51298 10.989 6.77121 11.247 7.0311C11.3064 6.97714 11.357 6.93474 11.4038 6.88794C11.7493 6.54382 12.0936 6.19859 12.438 5.85337C12.7389 5.55219 12.834 5.54999 13.13 5.84621C14.4023 7.11864 15.6741 8.39107 16.9448 9.6646C17.0026 9.72296 17.0521 9.78959 17.1214 9.87107C17.1902 9.80721 17.2391 9.76426 17.2853 9.71801C17.6544 9.34911 18.0252 8.98186 18.391 8.60966C18.5021 8.49678 18.6237 8.43292 18.7772 8.49238C18.9356 8.55405 18.9999 8.68454 18.9999 8.85192C18.9999 10.3154 19.0005 11.7783 18.9988 13.2418C18.9988 13.4968 18.874 13.6212 18.616 13.6217C17.1605 13.6239 15.7055 13.6228 14.2499 13.6228C14.0888 13.6228 13.9524 13.5815 13.8869 13.4114C13.8236 13.2462 13.9111 13.1372 14.0173 13.0315C14.4298 12.6202 14.8418 12.2084 15.2429 11.8081C14.4177 10.9827 13.603 10.1678 12.7724 9.33645V9.33589ZM12.773 6.3913C12.3577 6.81086 11.9621 7.21169 11.565 7.61087C11.3081 7.86965 11.1854 7.87021 10.9313 7.61583C10.676 7.36035 10.423 7.10322 10.1722 6.8505C9.94497 7.30529 9.72934 7.73696 9.5258 8.1433C10.1078 8.72583 10.6887 9.30781 11.2822 9.90246C11.6865 9.49722 12.1024 9.07932 12.5194 8.66362C12.7119 8.47201 12.8544 8.46705 13.0486 8.65976C13.9958 9.59688 14.9409 10.5356 15.8843 11.4766C16.0542 11.6462 16.0542 11.8092 15.8876 11.9799C15.6191 12.2552 15.3446 12.5244 15.0734 12.7975C15.0382 12.8327 15.0107 12.8751 14.9678 12.9285H18.3024V9.5264C17.9812 9.85456 17.6995 10.1447 17.4146 10.4316C17.1748 10.6733 17.0477 10.6744 16.8106 10.4376C16.14 9.76811 15.4706 9.09749 14.8011 8.42631C14.1322 7.75623 13.4639 7.08505 12.7724 6.3913H12.773ZM7.53999 3.18958C7.44703 3.08332 7.38982 2.97375 7.29905 2.92309C7.14613 2.8383 7.01576 2.91924 6.89914 3.03596C5.60038 4.33868 4.29943 5.63864 3.00012 6.94025C2.82465 7.11589 2.80704 7.28712 2.94236 7.42532C3.07769 7.56297 3.28837 7.55086 3.45505 7.39008C3.59807 7.25188 3.73669 7.10873 3.87696 6.96723C5.01894 5.81813 6.16147 4.67069 7.30015 3.51884C7.38707 3.43074 7.44868 3.31732 7.54054 3.18848L7.53999 3.18958ZM4.7615 3.58656C4.76315 2.90217 4.21692 2.35047 3.53646 2.34937C2.86535 2.34827 2.31637 2.89556 2.31582 3.56674C2.31527 4.26049 2.8494 4.80944 3.52931 4.81329C4.21197 4.81714 4.7593 4.27205 4.7615 3.58656ZM8.07908 6.8538C8.07633 6.19474 7.51469 5.63974 6.85073 5.63974C6.17633 5.63974 5.61414 6.20575 5.62349 6.87473C5.63284 7.54425 6.18568 8.0921 6.84963 8.09155C7.51909 8.09044 8.08183 7.52388 8.07908 6.8538Z"
									fill="#5646FF"
								/>
								<path
									d="M2.37563 18.3686C2.37563 18.2546 2.37563 18.1659 2.37563 18.0778C2.37563 16.1612 2.37563 14.2451 2.37563 12.3285C2.37563 11.9304 2.45925 11.8484 2.86136 11.8484C3.67824 11.8484 4.49512 11.8478 5.312 11.8484C5.6536 11.8484 5.74822 11.9442 5.74822 12.2911C5.74877 14.2281 5.74822 16.1651 5.74822 18.1021C5.74822 18.183 5.74822 18.2639 5.74822 18.3559H7.79619V18.1274C7.79619 16.7674 7.79619 15.4074 7.79619 14.0475C7.79619 13.6967 7.89796 13.5949 8.25056 13.5949C9.07404 13.5943 9.89807 13.5938 10.7216 13.5949C11.0714 13.5949 11.1721 13.6978 11.1721 14.0524C11.1721 15.4058 11.1721 16.7586 11.1721 18.112V18.3526H13.22C13.22 18.2838 13.22 18.2116 13.22 18.139C13.22 17.2943 13.2195 16.4492 13.22 15.6046C13.22 15.2527 13.3185 15.1569 13.6766 15.1569C14.5001 15.1569 15.3241 15.1564 16.1476 15.1569C16.4854 15.1569 16.5915 15.2621 16.5921 15.6007C16.5937 16.4321 16.5921 17.263 16.5921 18.0944C16.5921 18.1764 16.5921 18.2584 16.5921 18.3691C16.7263 18.3691 16.8473 18.3691 16.9683 18.3691C17.5036 18.3691 18.0394 18.368 18.5746 18.3691C18.8238 18.3697 18.9696 18.4908 18.9674 18.689C18.9652 18.8823 18.8293 18.9951 18.5867 18.9984C18.3188 19.0017 18.0515 18.9995 17.7836 18.9995C12.0385 18.9995 6.2928 18.9995 0.547696 18.9995C0.465183 18.9995 0.38267 19.0028 0.300707 18.9957C0.118629 18.9797 0.00256027 18.8602 -0.00184043 18.6934C-0.00624112 18.5205 0.118629 18.3807 0.304008 18.3719C0.50974 18.3625 0.716023 18.3691 0.921755 18.3686C1.39428 18.3686 1.86735 18.3686 2.37343 18.3686H2.37563Z"
									fill="#5646FF"
								/>
								<path
									d="M2.97365 3.57125C2.97585 3.23153 3.22174 2.98542 3.55839 2.98707C3.89614 2.98817 4.14918 3.23594 4.15248 3.5674C4.15578 3.90051 3.88679 4.1681 3.55014 4.167C3.22119 4.1659 2.97145 3.90767 2.97365 3.57125Z"
									fill="#5646FF"
								/>
								<path
									d="M7.43316 6.83577C7.43481 7.17439 7.19002 7.43482 6.86437 7.43978C6.52552 7.44528 6.26258 7.18485 6.26368 6.84568C6.26423 6.51037 6.51507 6.25434 6.84347 6.25269C7.17737 6.25159 7.43096 6.50266 7.43316 6.83522V6.83577Z"
									fill="#5646FF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_516_422">
									<rect width="19" height="19" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  mx-[9px]">
						Lãi suất
					</div>
					<div className=" rotate-180">
						<svg
							width="8"
							height="4"
							viewBox="0 0 8 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 0.52605C0.0795644 0.327095 0.271252 0.205886 0.445235 0.0763666C0.587271 -0.0294311 0.817825 -0.0186955 0.965965 0.0820807C1.00035 0.105457 1.0319 0.132122 1.06323 0.158788C2.01821 0.971231 2.97319 1.78367 3.92755 2.59664C3.94933 2.61516 3.96459 2.63923 3.98575 2.66417C4.02319 2.63386 4.04558 2.61638 4.06715 2.59802C5.02945 1.77935 5.99175 0.960496 6.95426 0.141992C7.126 -0.00397734 7.33763 -0.048305 7.50937 0.0606095C7.66749 0.160866 7.81034 0.28623 7.9306 0.41956C8.04354 0.544924 8.01037 0.713923 7.89071 0.837902C7.8726 0.856603 7.85327 0.874784 7.83313 0.891926C6.67039 1.88151 5.50785 2.87091 4.34491 3.86032C4.17072 4.00854 3.96764 4.04075 3.77982 3.94759C3.73342 3.92456 3.69171 3.89253 3.65345 3.85997C2.4899 2.87091 1.32655 1.8822 0.166454 0.890368C0.0960471 0.830283 0.0547387 0.74561 0 0.672366V0.526223V0.52605Z"
								fill="#434A54"
							/>
						</svg>
					</div>
				</div>
			</Link>
			{isMenuDropDownOpen && <Menu />}
		</div>
	);
}

export default InterestRateDropdown;
