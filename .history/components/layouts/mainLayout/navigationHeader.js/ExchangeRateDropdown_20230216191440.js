import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useOnHoverOutside } from '@utils/useOnHoverOutside';

function Menu({ isMenuDropDownOpen }) {
	return (
		<div
			className={`${
				isMenuDropDownOpen
					? ' visible opacity-100 translate-y-0 delay-300 '
					: ' invisible opacity-0 -translate-y-[1rem] -z-1'
			} transition-all ease-linear duration-100 absolute top-[45px] left-0 bg-white shadow-shadow-custom w-[20rem] text-[1.5rem]`}
		>
			<div className=" relative">
				<Link href="/ty-gia-ngoai-te/agribank">
					<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
						Agribank
					</div>
				</Link>
				<Link href="/ty-gia-ngoai-te/bidv">
					<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
						BIDV
					</div>
				</Link>
				<Link href="/ty-gia-ngoai-te/mbbank">
					<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
						MB
					</div>
				</Link>
				<Link href="/ty-gia-ngoai-te/techcombank">
					<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
						Techcombank
					</div>
				</Link>
				<Link href="/ty-gia-ngoai-te/vietcombank">
					<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
						Vietcombank
					</div>
				</Link>
				<Link href="/ty-gia-ngoai-te/vietinbank">
					<div className=" cursor-pointer hover:bg-blue-200 px-[20px] py-[10px]">
						Vietinbank
					</div>
				</Link>
			</div>
			<div className=" absolute bg-yellow-200 w-[20rem] h-[22px] -top-[22px] opacity-0 "></div>
		</div>
	);
}

function ExchangeRateDropdown() {
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
				href="/ty-gia-ngoai-te"
				className="mr-[1rem] hover:opacity-80"
			>
				<div
					className={`flex items-center h-fit px-[1.5rem] py- text-center align-middle   cursor-pointer mx-1 ${
						router.pathname.includes('/ty-gia-ngoai-te')
							? 'text-blue-2'
							: ''
					}`}
				>
					<div>
						<svg
							width="19"
							height="23"
							viewBox="0 0 19 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_591_1241)">
								<path
									d="M12.3322 22.353C11.8846 22.2388 11.4168 22.1734 10.9925 22.0016C9.03209 21.2068 7.84793 19.7557 7.53352 17.6566C7.15751 15.1475 8.55888 12.85 10.7652 11.8715C12.8022 10.9679 15.3586 11.4812 16.8763 13.1151C18.6528 15.0277 18.9138 17.7128 17.4914 19.9015C16.5966 21.2781 15.3006 22.0715 13.6757 22.3188C13.6337 22.3252 13.5935 22.3416 13.5524 22.353H12.3322ZM9.86169 17.3006C9.86169 17.4747 9.86169 17.6049 9.86169 17.7352C9.86169 18.2361 9.86169 18.2489 10.3627 18.2306C10.5863 18.2229 10.6767 18.3033 10.7442 18.509C10.9176 19.0373 11.2407 19.4724 11.7267 19.7429C12.7552 20.3156 13.8468 20.3133 14.9556 20.0268C15.0109 20.0126 15.0966 19.9577 15.098 19.9198C15.109 19.562 15.1044 19.2032 15.1044 18.827C14.9178 18.8705 14.7722 18.9093 14.6244 18.9386C14.012 19.0588 13.4009 19.1008 12.8013 18.8769C12.5065 18.7667 12.2861 18.572 12.1346 18.2366C12.4541 18.2366 12.7338 18.2398 13.014 18.2357C13.2371 18.232 13.5547 18.3042 13.6588 18.1886C13.7779 18.0556 13.7026 17.7521 13.7213 17.5231C13.735 17.3568 13.6816 17.291 13.5041 17.2969C13.1345 17.3097 12.7639 17.3006 12.3934 17.3006C11.8645 17.3006 11.8494 17.2795 11.8964 16.7526C11.9106 16.5958 11.9726 16.541 12.1283 16.5437C12.5928 16.551 13.0573 16.546 13.5219 16.546C14.1808 16.546 14.1749 16.546 14.1721 15.8742C14.1712 15.6863 14.1137 15.6164 13.9221 15.6205C13.4215 15.6306 12.9204 15.6246 12.4194 15.6228C12.3373 15.6228 12.2551 15.6095 12.1465 15.6C12.3404 15.1818 12.6343 14.9309 13.0313 14.7983C13.4406 14.6621 13.8618 14.6754 14.2807 14.7316C14.5221 14.764 14.7599 14.8262 15.0446 14.8842C15.0446 14.5753 15.0282 14.2864 15.0496 14.0003C15.0665 13.7755 14.9648 13.6854 14.769 13.6452C14.2839 13.5461 13.8002 13.4949 13.3006 13.536C12.052 13.6388 11.17 14.2238 10.7342 15.4222C10.6812 15.568 10.606 15.6278 10.4508 15.6265C10.2651 15.6246 10.0105 15.5803 9.91234 15.6795C9.81423 15.7791 9.86443 16.0332 9.86397 16.2197C9.8626 16.5647 9.81195 16.5442 10.1916 16.5455C10.512 16.5469 10.5106 16.5465 10.4846 16.8559C10.4773 16.9423 10.47 17.0318 10.4827 17.1168C10.506 17.2709 10.4348 17.3083 10.2993 17.3019C10.1638 17.2951 10.0278 17.3006 9.8626 17.3006H9.86169Z"
									fill="#5646FF"
								/>
								<path
									d="M6.16167 10.9354C3.25717 10.9441 0.710874 8.61597 0.709961 5.46977C0.709505 2.33408 3.2453 -0.00820496 6.18221 2.16025e-05C9.19076 0.00824817 11.6412 2.45931 11.6421 5.46794C11.643 8.48618 9.18391 10.9395 6.16213 10.935L6.16167 10.9354ZM8.36618 3.89027C8.36618 3.57949 8.35933 3.27511 8.36892 2.97118C8.37394 2.81853 8.31735 2.74358 8.16905 2.7189C7.74832 2.64943 7.3285 2.57265 6.90777 2.50318C6.77087 2.48079 6.64264 2.4881 6.64629 2.27695C6.65314 1.86517 6.64036 1.86517 6.2283 1.86517C6.20639 1.86517 6.18495 1.86517 6.16304 1.86517C5.73227 1.86517 5.72725 1.86517 5.72406 2.29843C5.72315 2.44057 5.67888 2.49084 5.53468 2.52512C5.19837 2.6051 4.85202 2.68097 4.54172 2.82676C3.90834 3.12474 3.61675 3.65856 3.62953 4.35736C3.64185 5.01548 3.98957 5.45286 4.57321 5.6928C4.87119 5.81529 5.20065 5.86145 5.51597 5.94051C5.62184 5.96702 5.72725 5.97616 5.7236 6.1343C5.71493 6.48301 5.7195 6.83218 5.72178 7.1809C5.72269 7.28738 5.68983 7.35 5.57119 7.33537C5.21206 7.29013 4.85111 7.25631 4.49472 7.19598C4.25515 7.1553 4.02242 7.07624 3.75365 7.0054C3.75365 7.32578 3.76323 7.62239 3.75 7.91763C3.74224 8.08765 3.80521 8.18042 3.96538 8.20739C4.48559 8.29514 5.00535 8.38609 5.52738 8.4615C5.65561 8.48024 5.72041 8.50126 5.72452 8.64934C5.73592 9.07255 5.74231 9.07209 6.17171 9.07209H6.19362C6.63808 9.07209 6.64401 9.07209 6.64857 8.63197C6.64994 8.48389 6.70698 8.44459 6.84571 8.41168C7.17517 8.33353 7.5124 8.25721 7.81859 8.11827C8.3963 7.85593 8.69336 7.3893 8.71253 6.74032C8.7317 6.08722 8.4611 5.60551 7.87928 5.33632C7.55529 5.18641 7.19069 5.12471 6.84662 5.0164C6.77863 4.99492 6.66683 4.94373 6.66546 4.90351C6.65222 4.47847 6.65724 4.05343 6.65724 3.56578C7.24453 3.67684 7.78893 3.78013 8.36709 3.88936L8.36618 3.89027Z"
									fill="#5646FF"
								/>
								<path
									d="M1.06439 10.3193C1.22456 10.8796 1.33408 11.439 1.54901 11.9541C1.71283 12.3472 1.96928 12.7219 2.25677 13.0382C2.82763 13.6661 3.44869 14.2484 4.04921 14.8494C4.07431 14.8745 4.10351 14.8956 4.1601 14.9426C4.57672 14.5103 4.99198 14.0793 5.44465 13.6099C5.47614 13.726 5.49713 13.7694 5.4985 13.8138C5.54459 15.0912 5.5884 16.369 5.63357 17.6464C5.64133 17.864 5.64909 18.082 5.66551 18.2991C5.67738 18.4517 5.63768 18.5276 5.46473 18.5203C4.54432 18.4814 3.62346 18.4513 2.70305 18.417C2.15227 18.3964 1.60148 18.3731 1.0507 18.3507C0.97997 18.348 0.90924 18.3439 0.777819 18.337C1.25787 17.8905 1.70005 17.4792 2.16596 17.0463C1.98845 16.8658 1.87984 16.7529 1.7685 16.6423C1.314 16.1912 0.884599 15.7214 0.556501 15.1647C-0.187765 13.9011 -0.164492 12.6282 0.500829 11.3467C0.683359 10.9948 0.881861 10.6507 1.06439 10.3188V10.3193Z"
									fill="#5646FF"
								/>
								<path
									d="M14.8145 7.46384C14.3823 7.90168 13.9625 8.32718 13.5167 8.77872C13.4989 8.42772 13.4783 8.10552 13.4665 7.78285C13.4218 6.57035 13.3816 5.35739 13.3346 4.14488C13.3287 3.99086 13.3633 3.92002 13.5354 3.92642C15.0002 3.98081 16.4654 4.0288 17.9302 4.07998C18.0065 4.08273 18.0822 4.09872 18.2136 4.11609C17.7432 4.56627 17.3101 4.98034 16.8556 5.41543C17.0212 5.58362 17.1404 5.70702 17.2617 5.82767C17.7112 6.27373 18.1324 6.74128 18.4546 7.29337C19.1847 8.54564 19.16 9.80613 18.5093 11.0748C18.3569 11.3719 18.1885 11.6608 18.0252 11.9523C17.9919 12.0122 17.948 12.0657 17.902 12.1324C17.8084 11.7074 17.7413 11.3015 17.6272 10.9099C17.4648 10.3527 17.1905 9.84681 16.7812 9.42999C16.1506 8.78786 15.5081 8.1567 14.8149 7.46476L14.8145 7.46384Z"
									fill="#5646FF"
								/>
								<path
									d="M5.70581 3.66138V4.79938C5.19929 4.77013 4.91089 4.55167 4.91409 4.2121C4.91728 3.8739 5.19655 3.67509 5.70581 3.66138Z"
									fill="#5646FF"
								/>
								<path
									d="M6.66406 7.26868V6.17866C6.99399 6.12107 7.41609 6.38387 7.42521 6.65671C7.43708 7.0196 7.17606 7.25177 6.66406 7.26868Z"
									fill="#5646FF"
								/>
							</g>
							{/* <defs>
								<clipPath id="clip0_591_1241">
									<rect
										width="19"
										height="22.3529"
										fill="white"
									/>
								</clipPath>
							</defs> */}
						</svg>
					</div>
					<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  mx-[9px]">
						Ngoại tệ
					</div>
					<div
						className={`${
							isMenuDropDownOpen ? 'rotate-180' : 'rotate-0'
						} transition-transform ease-in-out duration-500`}
					>
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
			{/* {isMenuDropDownOpen && <Menu />} */}
			<Menu isMenuDropDownOpen={isMenuDropDownOpen} />
		</div>
	);
}

export default ExchangeRateDropdown;
