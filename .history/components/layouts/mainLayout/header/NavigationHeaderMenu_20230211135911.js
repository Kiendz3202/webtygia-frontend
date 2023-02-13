import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavigationHeaderMenu() {
	const router = useRouter();
	return (
		<div className="absolute top-[70px] right-0 flex flex-col bg-slate-400 w-[300px] px-[26px]">
			<Link href="/trang-chu" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[20px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/trang-chu')
							? ' text-blue-2'
							: ''
					}`}
				>
					<div className="w-[25px]">
						<svg
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-0.000194771 8.20934L0.0300243 8.73436C0.0359366 8.75535 0.0418492 8.77601 0.0477615 8.797C0.234328 9.47977 0.857751 9.95298 1.56625 9.96183C1.63949 9.96282 1.71373 9.96183 1.7988 9.96183C1.7988 10.0517 1.7988 10.1163 1.7988 10.1809C1.7988 11.7625 1.7965 13.3439 1.79978 14.9255C1.80208 16.0241 2.58054 16.7977 3.67859 16.7993C4.5142 16.8006 5.35014 16.7997 6.18575 16.7993C6.60717 16.7993 6.79111 16.6144 6.79143 16.1897C6.79143 14.9462 6.79143 13.7029 6.79143 12.4594C6.79143 11.8032 7.18329 11.4802 7.90657 11.5504C8.27313 11.5861 8.64167 11.5769 9.00823 11.5431C9.66614 11.4825 10.0156 11.9521 10.0081 12.4535C9.98902 13.7131 10.0008 14.973 10.0022 16.2326C10.0025 16.6003 10.2028 16.799 10.5691 16.7993C11.4267 16.8 12.2843 16.8023 13.1419 16.7974C13.2989 16.7964 13.4596 16.7823 13.6116 16.7449C14.4532 16.5383 14.9922 15.8309 14.9938 14.9314C14.9968 13.3445 14.9948 11.7573 14.9948 10.1704C14.9948 10.1068 14.9948 10.0435 14.9948 9.96118C15.1088 9.96118 15.2004 9.96511 15.2917 9.96052C15.8793 9.93199 16.3221 9.66013 16.6069 9.14953C16.9531 8.52908 16.8256 7.80433 16.2863 7.26553C14.1086 5.08967 11.9273 2.91774 9.75417 0.737943C9.37874 0.361471 8.98852 0.035501 8.39795 -0.000244141C7.81262 0.0335334 7.4234 0.352944 7.05158 0.726137C4.93792 2.84625 2.819 4.96177 0.695491 7.07172C0.367356 7.39769 0.0822497 7.73678 0.000134012 8.20901L-0.000194771 8.20934Z"
								fill="#5646FF"
							/>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[1.5rem] font-medium text-grey ml-[9px]">
						Trang chủ
					</div>
				</div>
			</Link>
			<Link href="/coin" className="mr-[1rem] hover:opacity-80">
				<div
					className={`flex items-center h-fit  py- text-center align-middle   cursor-pointer mx-1 ${
						router.pathname.includes('/coin') ? 'text-blue-2' : ''
					}`}
				>
					<div className="w-[25px]">
						<svg
							width="19"
							height="23"
							viewBox="0 0 19 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.00725782 16.2985V16.5863H14.823V14.8794C14.7233 14.8794 14.6357 14.8794 14.5474 14.8794C12.2115 14.8794 9.87493 14.8794 7.53898 14.8794C6.99094 14.8794 6.7426 14.6308 6.7426 14.0896C6.7426 10.2329 6.7426 6.37546 6.7426 2.51866C6.7426 1.96378 6.98671 1.7253 7.5559 1.7253C9.8846 1.7253 12.2133 1.7253 14.542 1.7253H14.8212C14.8477 0.655982 14.9281 0.377056 14.2073 0H0.638678C0.152273 0.202801 -0.00120139 0.567963 7.07023e-06 1.07824C0.0120917 6.15184 0.00725782 11.2254 0.00725782 16.2985Z"
								fill="#5646FF"
							/>
							<path
								d="M14.834 18.1892C14.834 18.1107 14.834 18.0322 14.834 17.9465H0.00683594C0.00683594 18.0357 0.00683594 18.1077 0.00683594 18.1803C0.00683594 19.4042 0.00683594 20.6276 0.00683594 21.8515C0.00683594 22.4694 0.337954 22.7924 0.970582 22.7924C5.26545 22.7924 9.56091 22.7852 13.8558 22.8001C14.4606 22.8025 14.8479 22.3826 14.8401 21.8378C14.8219 20.6216 14.8346 19.4054 14.8346 18.1886L14.834 18.1892ZM8.48599 21.0225C8.13251 21.0272 7.77844 21.0236 7.42496 21.0236C7.06363 21.0236 6.7023 21.0278 6.34158 21.0225C5.9452 21.0165 5.6594 20.7453 5.65397 20.3784C5.64853 19.9995 5.93191 19.7135 6.33856 19.7093C7.05336 19.7028 7.76816 19.7034 8.48297 19.7093C8.89264 19.7123 9.18569 19.993 9.1869 20.3647C9.1881 20.7376 8.89445 21.0171 8.48599 21.023V21.0225Z"
								fill="#5646FF"
							/>
							<path
								d="M17.9807 3.04201C14.7698 3.04142 11.5595 3.04201 8.34865 3.04201H8.10938V4.71735C8.20907 4.71735 8.29729 4.71735 8.38551 4.71735C10.4054 4.71735 12.4254 4.71676 14.4453 4.71854C14.9958 4.71914 15.2067 4.91183 15.2616 5.44768C15.339 6.19465 15.8532 6.68054 16.6085 6.72039C17.0254 6.7424 17.2882 7.00824 17.2912 7.42217C17.2949 8.00797 17.2955 8.59437 17.2912 9.18018C17.2882 9.59529 17.026 9.85995 16.6079 9.88314C15.8471 9.92537 15.3396 10.4047 15.2616 11.1541C15.2067 11.6828 14.9801 11.8862 14.4429 11.8868C12.423 11.8868 10.403 11.8868 8.38309 11.8868C8.29487 11.8868 8.20666 11.8868 8.113 11.8868V13.5532C8.17161 13.5574 8.21511 13.5627 8.25922 13.5627C11.5076 13.5627 14.7559 13.5651 18.0042 13.5615C18.6344 13.5609 18.9988 13.1886 18.9988 12.5737C18.9988 9.73268 18.9988 6.89108 18.9988 4.05007C18.9988 3.40361 18.6351 3.04261 17.9801 3.04261L17.9807 3.04201Z"
								fill="#5646FF"
							/>
							<path
								d="M15.9482 8.0984C15.9404 8.04012 15.8902 7.95507 15.8401 7.93902C14.8951 7.63273 14.2975 6.99816 13.9978 6.0686H8.11621V10.5374H13.9984C14.2926 9.61436 14.8806 8.98573 15.8056 8.68123C15.9192 8.64377 15.9633 8.59143 15.9555 8.47665C15.947 8.35116 15.9652 8.22329 15.9482 8.099V8.0984Z"
								fill="#5646FF"
							/>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[1.5rem] font-medium text-grey  ml-[9px]">
						Tiền điện tử
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NavigationHeaderMenu;
