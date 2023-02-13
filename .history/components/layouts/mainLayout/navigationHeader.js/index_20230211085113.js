import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ExchangeRateDropdown from './ExchangeRateDropdown';
import InterestRateDropdown from './InterestRateDropdown';

function NavigationHeader() {
	const router = useRouter();
	return (
		<nav className="hidden sm:flex items-center sticky top-0 mx-[1rem]  sm:mx-0 shadow-shadow-custom bg-white min-h-[65px] z-50">
			<div className="  w-[144rem] flex justify-between items-center mx-auto text-grey-text">
				<Link href="/trang-chu" className="mr-[1rem]">
					<div
						className={`flex items-center h-fit px-[1.5rem] py-[1rem] text-center align-middle   cursor-pointer  ${
							router.pathname.includes('/trang-chu')
								? ' text-blue-2'
								: ''
						}`}
					>
						<div>
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
						<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey ml-[9px]">
							Trang chủ
						</div>
					</div>
				</Link>

				<Link href="/coin" className="mr-[1rem]">
					<div
						className={`flex items-center h-fit px-[1.5rem] py- text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/coin')
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
						<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  ml-[9px]">
							Tiền điện tử
						</div>
					</div>
				</Link>
				<Link href="/co-phieu/hnx" className="mr-[1rem]">
					<div
						className={`flex items-center h-fit px-[1.5rem] py- text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/co-phieu')
								? 'text-blue-2'
								: ''
						}`}
					>
						<div>
							<svg
								width="19"
								height="16"
								viewBox="0 0 19 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.90617 7.45231C9.7001 5.45662 12.482 3.46882 15.2863 1.46524C15.0309 1.22058 14.7928 0.988544 14.5494 0.761773C14.4265 0.647598 14.3528 0.521848 14.4233 0.358741C14.4899 0.205105 14.6274 0.168274 14.7901 0.16196C16.0424 0.110924 17.2942 0.0546256 18.5465 0.00148431C18.9084 -0.0137741 19.0143 0.0856685 18.9985 0.436611C18.9434 1.64992 18.8844 2.8627 18.8276 4.076C18.8205 4.23121 18.7714 4.3617 18.6082 4.42063C18.4449 4.47956 18.3205 4.41011 18.2075 4.29961C17.8728 3.9734 17.5355 3.64982 17.191 3.31729C16.5108 3.80872 15.8421 4.29225 15.1733 4.77578C12.5213 6.69413 9.86879 8.613 7.21679 10.5314C7.17311 10.5629 7.12999 10.595 7.08577 10.6255C6.85321 10.786 6.70254 10.7686 6.52458 10.5566C5.72319 9.60269 4.9229 8.64773 4.12206 7.69329C3.75357 7.25448 3.38618 6.81514 3.01769 6.37633C2.97566 6.32635 2.9298 6.27952 2.87739 6.22164C2.30256 6.71097 1.737 7.19292 1.1709 7.67435C0.977101 7.83956 0.781122 8.00267 0.588417 8.16946C0.472686 8.2689 0.331297 8.33888 0.203009 8.24364C0.109113 8.17367 0.0141262 8.03792 0.0119426 7.93006C-0.00388867 7.1161 -0.00388867 6.30215 0.0113966 5.48819C0.0135803 5.37559 0.0987413 5.23722 0.189361 5.15777C0.993478 4.45851 1.80688 3.76978 2.61863 3.07842C2.87739 2.85796 3.02697 2.86848 3.24806 3.12998C4.41411 4.5085 5.57907 5.88859 6.74458 7.26763C6.79535 7.32814 6.84885 7.38602 6.90726 7.45179L6.90617 7.45231Z"
									fill="#5646FF"
								/>
								<path
									d="M18.6275 10.7232C18.6275 12.2001 18.6275 13.6775 18.6275 15.1544C18.6275 15.5159 18.5326 15.6074 18.157 15.6074C17.4757 15.6074 16.7944 15.608 16.1131 15.6074C15.7927 15.6074 15.6846 15.5027 15.6846 15.1939C15.6846 12.2132 15.6846 9.2326 15.6846 6.25195C15.6846 5.94258 15.7921 5.83945 16.1137 5.83892C16.8086 5.83787 17.5035 5.83787 18.1985 5.83892C18.5189 5.83892 18.627 5.9431 18.6275 6.25248C18.6281 7.74254 18.6275 9.23313 18.6275 10.7232Z"
									fill="#5646FF"
								/>
								<path
									d="M2.94283 12.4568C2.94283 13.3692 2.94283 14.282 2.94283 15.1944C2.94283 15.5032 2.8342 15.6074 2.51375 15.6079C1.81882 15.609 1.12388 15.609 0.428944 15.6079C0.108498 15.6079 0.000409428 15.5032 0.000409428 15.1944C-0.000136476 13.3691 -0.000136476 11.5439 0.000409428 9.71924C0.000409428 9.40986 0.107953 9.30674 0.42949 9.30621C1.12443 9.30516 1.81936 9.30516 2.5143 9.30621C2.83474 9.30621 2.94283 9.41039 2.94338 9.71976C2.94393 10.6321 2.94338 11.545 2.94338 12.4573L2.94283 12.4568Z"
									fill="#5646FF"
								/>
								<path
									d="M13.7221 12.4568C13.7221 13.3692 13.7221 14.282 13.7221 15.1944C13.7221 15.5032 13.6135 15.6074 13.293 15.6079C12.5981 15.609 11.9032 15.609 11.2082 15.6079C10.8878 15.6079 10.7797 15.5032 10.7797 15.1944C10.7792 13.3691 10.7792 11.5439 10.7797 9.71924C10.7797 9.40986 10.8872 9.30674 11.2088 9.30621C11.9037 9.30516 12.5987 9.30516 13.2936 9.30621C13.614 9.30621 13.7221 9.41039 13.7227 9.71976C13.7232 10.6321 13.7227 11.545 13.7227 12.4573L13.7221 12.4568Z"
									fill="#5646FF"
								/>
								<path
									d="M8.49109 13.7168C8.49109 14.2156 8.49219 14.7149 8.49109 15.2137C8.49 15.4962 8.37591 15.6067 8.08221 15.6073C7.37363 15.6088 6.66504 15.6088 5.95646 15.6073C5.66331 15.6067 5.54867 15.4968 5.54867 15.2137C5.54758 14.2156 5.54758 13.218 5.54867 12.2199C5.54867 11.9368 5.66276 11.8274 5.95701 11.8269C6.66559 11.8253 7.37417 11.8253 8.08276 11.8269C8.37645 11.8274 8.49 11.9374 8.49109 12.2204C8.49273 12.7192 8.49109 13.2185 8.49109 13.7173V13.7168Z"
									fill="#5646FF"
								/>
							</svg>
						</div>
						<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  ml-[9px]">
							Chứng khoán
						</div>
					</div>
				</Link>

				<InterestRateDropdown />
				<ExchangeRateDropdown />
				<Link href="/gia-vang/sjc" className="mr-[1rem]">
					<div
						className={`flex items-center h-fit px-[1.5rem] py-[1rem]  text-center align-middle   cursor-pointer  ${
							router.pathname.includes('/gia-vang')
								? 'text-blue-2'
								: ''
						}`}
					>
						<div>
							<svg
								width="19"
								height="20"
								viewBox="0 0 19 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.06895 15.9991C2.99863 15.688 3.12055 15.4404 3.24985 15.1905C3.57253 14.566 3.8918 13.9399 4.20427 13.3105C4.4226 12.8708 4.76853 12.6632 5.26871 12.6643C8.09115 12.6688 10.9136 12.6688 13.7354 12.6643C14.2373 12.6632 14.5793 12.8764 14.7971 13.3149C15.1254 13.9755 15.4725 14.6272 15.7923 15.2912C15.8915 15.4971 15.9295 15.7309 16.0101 15.9997C16.2069 15.9997 16.4723 16.0097 16.7365 15.9975C17.2821 15.973 17.6439 16.2101 17.8769 16.692C18.1945 17.3499 18.5382 17.9954 18.8682 18.6472C19.2278 19.3579 18.8217 19.9984 18.0125 19.9984C14.3768 19.9984 10.7412 20.0007 7.10497 19.9929C6.91556 19.9929 6.72671 19.9077 6.53617 19.8693C6.47549 19.8571 6.40801 19.8599 6.34676 19.8721C6.16302 19.91 5.98098 19.9912 5.79781 19.9923C4.19236 20.0018 2.58635 19.9984 0.980901 19.9979C0.174491 19.9979 -0.227579 19.3551 0.133093 18.6422C0.468814 17.9776 0.812474 17.317 1.14309 16.6503C1.36483 16.2028 1.71586 15.9824 2.22454 15.9975C2.49845 16.0058 2.77292 15.9991 3.06838 15.9991H3.06895ZM6.43409 15.9991C7.24674 15.9991 8.05996 16.0008 8.8726 15.998C9.1346 15.9975 9.21796 15.865 9.10228 15.6357C8.75748 14.9528 8.40588 14.2738 8.06449 13.5893C7.97149 13.4023 7.83765 13.3288 7.62896 13.3305C6.8373 13.3366 6.04563 13.3366 5.25397 13.3305C5.04414 13.3288 4.91258 13.4056 4.82014 13.5921C4.48612 14.2649 4.14189 14.9322 3.8022 15.6023C3.661 15.8817 3.73642 15.9986 4.05853 15.9986C4.85019 15.9997 5.64186 15.9986 6.43353 15.9986L6.43409 15.9991ZM3.38142 19.3317C4.18045 19.3317 4.97893 19.3323 5.77796 19.3317C6.09497 19.3317 6.16812 19.2115 6.02465 18.9293C5.68553 18.2592 5.34187 17.5914 5.00671 16.9196C4.91825 16.7427 4.79292 16.6625 4.59047 16.6642C3.79199 16.6698 2.99296 16.6703 2.19392 16.6642C1.98296 16.6625 1.85423 16.7432 1.76236 16.9286C1.43174 17.5947 1.08978 18.2565 0.752929 18.9199C0.602649 19.2165 0.673535 19.3323 1.00585 19.3323C1.79752 19.3328 2.58918 19.3323 3.38085 19.3323L3.38142 19.3317ZM9.49868 19.3317C10.2977 19.3317 11.0962 19.3323 11.8952 19.3317C12.202 19.3317 12.2808 19.2104 12.1459 18.9438C11.8068 18.2737 11.4614 17.607 11.1285 16.9341C11.0321 16.7399 10.8971 16.6614 10.6788 16.6631C9.89451 16.6703 9.10965 16.6703 8.32479 16.6631C8.10702 16.6609 7.97035 16.7365 7.87395 16.9313C7.54106 17.6042 7.1957 18.2715 6.85658 18.9416C6.72104 19.2098 6.79703 19.3306 7.10327 19.3312C7.9023 19.3323 8.70077 19.3312 9.49981 19.3312L9.49868 19.3317Z"
									fill="#5646FF"
								/>
								<path
									d="M7.45711 5.82015C7.39473 5.87858 7.33859 5.92978 7.28415 5.98266C5.54827 7.68624 3.81239 9.38982 2.07594 11.0934C1.74022 11.4229 1.63644 11.4212 1.29505 11.0856C1.02511 10.8201 0.753473 10.5569 0.485237 10.2898C0.276546 10.0816 0.27371 9.91965 0.481267 9.71595C2.40145 7.82983 4.31937 5.94147 6.24579 4.06147C6.95466 3.36968 7.97884 3.38081 8.69451 4.07371C9.35972 4.71707 10.0164 5.36823 10.6759 6.01772C10.7304 6.07115 10.7752 6.13404 10.8075 6.17188C12.2383 4.76883 13.6464 3.38805 15.059 2.00225C14.8815 2.00225 14.6808 1.9939 14.4806 2.00337C13.3708 2.05624 13.1819 1.83084 13.2352 0.769507C13.2375 0.727766 13.2341 0.686025 13.2364 0.644841C13.2557 0.289766 13.529 0.00759793 13.8914 0.0059283C15.1577 -0.000750232 16.424 -0.00353295 17.6903 0.00704139C18.224 0.0114937 18.6606 0.445598 18.6646 0.972089C18.6743 2.20817 18.6714 3.4437 18.6658 4.67979C18.6641 5.04488 18.3748 5.32093 18.0028 5.33317C17.7697 5.34096 17.5355 5.3404 17.3025 5.33317C16.9214 5.32204 16.639 5.04154 16.6327 4.66476C16.6265 4.28631 16.6316 3.9073 16.6316 3.48711C16.5442 3.56725 16.4881 3.61567 16.4354 3.66688C15.0142 5.06102 13.5937 6.45516 12.1731 7.84986C11.3525 8.65518 10.3657 8.65407 9.54062 7.84597C8.86464 7.18423 8.18923 6.52083 7.51325 5.8591C7.50361 5.84964 7.49057 5.84296 7.45654 5.82015H7.45711ZM1.73001 10.5268C1.81167 10.4339 1.88937 10.3343 1.9784 10.2463C3.69783 8.55667 5.41897 6.86756 7.1401 5.17901C7.38736 4.93635 7.53764 4.93691 7.78546 5.17956C8.53119 5.91031 9.27635 6.64216 10.0221 7.37346C10.5863 7.92667 11.1313 7.92722 11.6967 7.37235C13.3475 5.75225 14.9983 4.13215 16.6486 2.51149C16.7745 2.38794 16.9032 2.28386 17.0949 2.36178C17.2832 2.43803 17.3138 2.5933 17.3121 2.77251C17.3081 3.33462 17.3104 3.89729 17.3104 4.45939V4.65697H17.9898V4.46496C17.9898 3.34742 17.9898 2.22932 17.9898 1.11178C17.9898 0.775629 17.8781 0.668772 17.5287 0.668772C16.3968 0.668772 15.2649 0.668772 14.133 0.668772C14.0649 0.668772 13.9969 0.674894 13.9311 0.677677V1.33496C14.5764 1.33496 15.2053 1.33718 15.8348 1.33384C16.0146 1.33273 16.1768 1.35277 16.2601 1.53698C16.3486 1.734 16.2357 1.86423 16.1053 1.99279C14.4636 3.60232 12.8235 5.21296 11.1824 6.82304C10.9345 7.06625 10.7848 7.06569 10.537 6.82304C9.78617 6.08729 9.03647 5.34987 8.28564 4.61411C7.74179 4.08095 7.18547 4.08094 6.64163 4.61467C4.86548 6.35721 3.08991 8.10031 1.31433 9.8434C1.26556 9.89127 1.21963 9.94247 1.16859 9.99645C1.34836 10.1662 1.51962 10.3282 1.73058 10.528L1.73001 10.5268Z"
									fill="#5646FF"
								/>
								<path
									d="M9.83998 10.1855C9.83998 10.4421 9.84338 10.6992 9.83884 10.9557C9.83544 11.185 9.70104 11.3303 9.50199 11.3314C9.30294 11.3325 9.16343 11.1873 9.16173 10.9596C9.15833 10.432 9.15833 9.90443 9.16173 9.37683C9.16343 9.14753 9.2984 9.00283 9.49802 9.00172C9.69764 9.0006 9.83487 9.14475 9.83884 9.37293C9.84338 9.64341 9.83998 9.91445 9.83998 10.1849V10.1855Z"
									fill="#5646FF"
								/>
								<path
									d="M7.13961 12.0445C7.02222 11.9754 6.92751 11.9404 6.8606 11.8764C6.53622 11.5675 6.21694 11.253 5.89994 10.9358C5.73264 10.7683 5.72584 10.5813 5.86875 10.4388C6.01165 10.2963 6.2056 10.3002 6.37516 10.4628C6.70351 10.7778 7.02732 11.0978 7.35 11.4183C7.46455 11.5319 7.51729 11.676 7.42145 11.8135C7.35737 11.9059 7.24168 11.9632 7.13961 12.0439V12.0445Z"
									fill="#5646FF"
								/>
								<path
									d="M11.5058 12.0233C11.4235 11.9593 11.2942 11.9059 11.2568 11.8157C11.216 11.7178 11.2137 11.543 11.2767 11.4751C11.6237 11.1033 11.9901 10.7472 12.3638 10.401C12.4908 10.283 12.6587 10.3086 12.7863 10.4288C12.9207 10.5557 12.9513 10.726 12.8243 10.8579C12.4721 11.2252 12.1024 11.577 11.7337 11.9293C11.6878 11.9732 11.6078 11.9827 11.5052 12.0228L11.5058 12.0233Z"
									fill="#5646FF"
								/>
							</svg>
						</div>
						<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  mx-[9px]">
							vàng
						</div>
						<div>
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
				<Link href="/gia-xang-dau" className="mr-[1rem]">
					<div
						className={`flex items-center h-fit px-[1.5rem] py- text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/gia-xang-dau')
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
								<g clip-path="url(#clip0_516_394)">
									<path
										d="M6.53454 18.9983C4.79619 18.9983 3.05729 19.0032 1.31893 18.995C0.764081 18.9923 0.352452 18.7221 0.125044 18.2146C-0.0958034 17.7214 -0.0176321 17.2517 0.326212 16.8388C0.600632 16.509 0.967436 16.3762 1.39437 16.3767C4.26484 16.3794 7.13477 16.3784 10.0052 16.3784C10.5847 16.3784 11.1641 16.3767 11.7436 16.3784C12.5182 16.3811 13.1037 16.9443 13.1053 17.6848C13.1069 18.4257 12.522 18.9961 11.7496 18.9972C10.0113 18.9999 8.27235 18.9977 6.534 18.9977L6.53454 18.9983Z"
										fill="#5646FF"
									/>
									<path
										d="M14.407 0.0026909C16.9325 -0.00113699 18.9928 2.04952 18.9999 4.57374C19.0065 7.10725 16.9467 9.17377 14.4146 9.17322C11.8913 9.17267 9.83313 7.11491 9.83203 4.59178C9.82985 2.06647 11.8836 0.00651879 14.407 0.0026909ZM14.4206 1.31292C12.6189 1.31128 11.1467 2.77463 11.1413 4.5721C11.1358 6.38378 12.603 7.8608 14.4102 7.86299C16.2104 7.86517 17.6841 6.40019 17.6902 4.60327C17.6962 2.79213 16.2284 1.31511 14.4212 1.31292H14.4206Z"
										fill="#5646FF"
									/>
									<path
										d="M12.1134 12.4484V15.7322H1V12.4484C1.68004 12.4484 2.35296 12.444 3.02535 12.4544C3.0986 12.4555 3.19481 12.5255 3.23964 12.5917C4.06617 13.8062 5.20922 14.4416 6.67808 14.4039C8.03924 14.3683 9.09756 13.7357 9.85522 12.6075C9.93285 12.4916 10.0066 12.4435 10.1466 12.4451C10.7938 12.4528 11.4416 12.4484 12.114 12.4484H12.1134Z"
										fill="#5646FF"
									/>
									<path
										d="M9.83112 10.4813C9.83167 12.2897 8.35735 13.7618 6.54793 13.7586C4.75053 13.7553 3.28277 12.2843 3.28223 10.4846C3.28223 8.67513 4.75491 7.20577 6.56487 7.2085C8.36336 7.21123 9.83003 8.68114 9.83058 10.4813H9.83112ZM6.56542 12.4478C7.47232 12.4429 8.12393 11.4968 7.77243 10.6405C7.50184 9.98098 7.16729 9.34774 6.84804 8.70903C6.72942 8.4717 6.38503 8.47006 6.2675 8.7063C5.94606 9.35102 5.60659 9.99028 5.33709 10.6569C4.99106 11.5143 5.65688 12.4527 6.56597 12.4478H6.56542Z"
										fill="#5646FF"
									/>
									<path
										d="M9.88464 1.96808C9.41288 2.79873 9.18984 3.65235 9.17399 4.57378C9.11495 4.57924 9.06302 4.58799 9.01109 4.58799C6.45494 4.58854 3.89879 4.59073 1.34265 4.5869C0.787795 4.58581 0.370152 4.33207 0.133999 3.82843C-0.0945022 3.33901 -0.0272639 2.86708 0.308927 2.44766C0.576787 2.11354 0.940311 1.96698 1.36834 1.96753C2.87491 1.96972 4.38094 1.96808 5.88752 1.96808C7.13498 1.96808 8.38244 1.96808 9.6299 1.96808H9.88464Z"
										fill="#5646FF"
									/>
									<path
										d="M1 8.51807V5.24194H9.21509C9.39713 6.5303 9.96127 7.60703 10.9545 8.51698C10.6074 8.51698 10.3073 8.52299 10.0072 8.51096C9.96018 8.50877 9.90825 8.42948 9.87217 8.37698C9.05438 7.16682 7.91843 6.52975 6.45669 6.56257C5.08732 6.59373 4.02135 7.22479 3.25822 8.35948C3.18005 8.47542 3.1068 8.52354 2.9674 8.5219C2.32017 8.51424 1.67238 8.51862 1 8.51862V8.51807Z"
										fill="#5646FF"
									/>
									<path
										d="M18.3448 11.4652C18.3448 11.8791 18.3454 12.2729 18.3448 12.6666C18.3443 12.998 18.2377 13.103 17.9015 13.1035C17.5265 13.1041 17.1515 13.1057 16.7765 13.1035C16.4977 13.1019 16.3823 12.9843 16.3801 12.7027C16.3774 12.3073 16.3769 11.912 16.3752 11.5166C16.3752 11.51 16.3719 11.504 16.361 11.4663C16.2719 11.4663 16.1648 11.4903 16.0762 11.4603C15.9636 11.422 15.8247 11.3613 15.7744 11.2689C15.7291 11.1858 15.7471 11.0146 15.8072 10.9353C16.2293 10.383 16.6655 9.84162 17.1066 9.30353C17.2504 9.12799 17.4773 9.13018 17.6216 9.30681C18.0616 9.8449 18.4979 10.3868 18.9232 10.9364C19.0992 11.1639 18.9521 11.4466 18.6641 11.4646C18.564 11.4707 18.4629 11.4657 18.3437 11.4657L18.3448 11.4652Z"
										fill="#5646FF"
									/>
									<path
										d="M15.7252 15.3957C15.7252 15.8201 15.7262 16.2149 15.7252 16.6097C15.7241 16.9187 15.6131 17.0319 15.3097 17.033C14.9347 17.0346 14.5602 17.0341 14.1852 17.033C13.8687 17.0319 13.7616 16.922 13.761 16.5988C13.7599 16.2051 13.761 15.8113 13.761 15.3952C13.6435 15.3952 13.5435 15.4001 13.4434 15.3941C13.1553 15.3772 13.0056 15.0939 13.1799 14.868C13.6058 14.3185 14.042 13.7771 14.4815 13.239C14.6318 13.0553 14.8593 13.0585 15.0107 13.2439C15.4414 13.7722 15.87 14.3021 16.2833 14.844C16.3478 14.9282 16.3746 15.1065 16.3287 15.1923C16.2767 15.2886 16.1275 15.3449 16.01 15.3897C15.9334 15.4187 15.8372 15.3952 15.7262 15.3952L15.7252 15.3957Z"
										fill="#5646FF"
									/>
									<path
										d="M2.84996 9.17373C2.55586 10.0525 2.55531 10.9089 2.84559 11.7794C2.7696 11.7849 2.7122 11.7931 2.6548 11.792C2.11744 11.7822 1.57352 11.8199 1.04491 11.7477C0.387289 11.6575 -0.0472999 11.0221 0.0122852 10.3626C0.0713237 9.708 0.619616 9.1885 1.28052 9.17592C1.79109 9.16608 2.30167 9.17373 2.84941 9.17373H2.84996Z"
										fill="#5646FF"
									/>
									<path
										d="M10.2637 11.7932C10.5589 10.9079 10.5567 10.0516 10.2697 9.18864C10.859 9.18864 11.433 9.14162 11.996 9.20067C12.6908 9.27286 13.1555 9.90501 13.1024 10.5891C13.0494 11.2683 12.4875 11.785 11.7861 11.7922C11.2892 11.7971 10.7928 11.7932 10.2637 11.7932Z"
										fill="#5646FF"
									/>
									<path
										d="M4.87321 1.30535H1.65233C1.65233 1.04888 1.63156 0.797331 1.6578 0.550706C1.69005 0.244475 1.96721 0.00878605 2.27989 0.005505C2.93314 -0.00160394 3.58694 -0.00269762 4.24073 0.005505C4.57802 0.00987973 4.84807 0.273457 4.87048 0.612499C4.88524 0.835063 4.87321 1.05981 4.87321 1.3048V1.30535Z"
										fill="#5646FF"
									/>
									<path
										d="M14.4149 1.96802C15.8542 1.96802 17.0334 3.14373 17.035 4.58192C17.0372 6.03105 15.8548 7.21168 14.4062 7.20785C12.969 7.20457 11.7948 6.02339 11.7959 4.58356C11.7975 3.14537 12.9756 1.96856 14.4144 1.96802H14.4149ZM14.7424 3.2788C14.7424 3.14919 14.7484 3.04748 14.7413 2.94632C14.7276 2.75273 14.5904 2.62204 14.4122 2.62423C14.234 2.62641 14.1044 2.75875 14.0897 2.95343C14.0869 2.99389 14.0831 3.036 14.0897 3.07592C14.1137 3.22411 14.0618 3.30067 13.9136 3.36137C13.5889 3.4948 13.4074 3.82564 13.4364 4.16687C13.4654 4.51411 13.7136 4.80448 14.0629 4.88815C14.1542 4.91002 14.252 4.90237 14.346 4.91604C14.4914 4.93737 14.7342 4.83347 14.7287 5.08392C14.7232 5.33 14.4816 5.22828 14.3356 5.23922C14.146 5.25344 13.9541 5.23703 13.7633 5.24524C13.5681 5.25344 13.437 5.38906 13.4353 5.56787C13.4337 5.74614 13.5649 5.88285 13.7584 5.89598C13.8644 5.90309 13.971 5.89707 14.0897 5.89707C14.0897 6.02613 14.0842 6.12784 14.0907 6.229C14.1039 6.42204 14.2411 6.55383 14.4193 6.55164C14.5969 6.55 14.7276 6.41712 14.7424 6.22244C14.7456 6.18198 14.7489 6.13987 14.7424 6.09995C14.7188 5.95285 14.7691 5.8752 14.9178 5.81395C15.2491 5.67724 15.4333 5.33273 15.394 4.98822C15.3535 4.63442 15.0862 4.34404 14.7298 4.27514C14.6505 4.25983 14.5663 4.27077 14.486 4.25928C14.3406 4.2385 14.0979 4.34076 14.1033 4.09195C14.1088 3.84751 14.3504 3.94704 14.4969 3.93665C14.6866 3.92297 14.8785 3.93883 15.0693 3.93063C15.2639 3.92243 15.3956 3.78517 15.3967 3.60745C15.3978 3.42918 15.2666 3.29301 15.0731 3.28044C14.9725 3.27387 14.8708 3.27934 14.7429 3.27934L14.7424 3.2788Z"
										fill="#5646FF"
									/>
									<path
										d="M6.55784 9.59259C6.77759 10.053 6.98532 10.4582 7.16462 10.8755C7.28817 11.1631 7.169 11.5011 6.923 11.6755C6.69724 11.8352 6.40259 11.8314 6.17792 11.6657C5.93684 11.4879 5.82697 11.1456 5.95324 10.8591C6.13364 10.4484 6.33863 10.0487 6.55839 9.59204L6.55784 9.59259Z"
										fill="#5646FF"
									/>
								</g>
								<defs>
									<clipPath id="clip0_516_394">
										<rect
											width="19"
											height="19"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  ml-[9px]">
							Xăng dầu
						</div>
					</div>
				</Link>
				<Link href="/tin-tuc" className="mr-[1rem]">
					<div
						className={`flex items-center h-fit px-[1.5rem] py- text-center align-middle   cursor-pointer mx-1 ${
							router.pathname.includes('/tin-tuc')
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
								<g clip-path="url(#clip0_569_7)">
									<path
										d="M0 2.53392C0.129889 2.23124 0.363888 2.12432 0.681174 2.12984C1.2865 2.14038 1.89281 2.13185 2.49813 2.13335C2.97952 2.13436 3.16939 2.32711 3.16939 2.81853C3.16939 7.36176 3.16444 11.9055 3.17385 16.4487C3.17584 17.4391 2.54622 17.9787 1.98453 18.1227C1.12637 18.3426 0.275147 17.8351 0.0441226 16.9667C0.0332159 16.9266 0.0148728 16.8884 0 16.8493C0 12.0777 0 7.30554 0 2.53392Z"
										fill="#5646FF"
									/>
									<path
										d="M3.68359 18.1714C3.93742 17.801 4.11193 17.438 4.17093 17.031C4.20166 16.8211 4.21951 16.6078 4.21951 16.396C4.22199 11.1741 4.22149 5.95223 4.22248 0.73035C4.22248 0.617911 4.21406 0.500453 4.24281 0.39454C4.29883 0.185725 4.43963 0.0501959 4.65727 0.0160627C4.74204 0.00250979 4.82979 0.00150588 4.91605 0.00150588C9.38087 0.000501959 13.8457 0.00100392 18.3105 0C18.5257 0 18.7483 0.00100392 18.8762 0.203795C18.9475 0.317238 18.9937 0.468829 18.9941 0.603856C19.0026 2.05652 18.9991 3.50919 18.9991 4.96186C18.9991 8.45549 18.9991 11.9491 18.9991 15.4433C18.9991 16.8357 18.0864 17.927 16.7315 18.1503C16.5981 18.1724 16.4603 18.1709 16.3245 18.1714C12.1814 18.1724 8.03785 18.1724 3.89479 18.1724C3.83976 18.1724 3.78423 18.1724 3.68409 18.1724L3.68359 18.1714ZM11.6068 7.48621C12.7813 7.48621 13.9557 7.48621 15.1302 7.48571C15.2165 7.48571 15.3037 7.4827 15.388 7.46764C15.677 7.41694 15.8486 7.18253 15.8188 6.88888C15.7876 6.58068 15.5689 6.42005 15.1733 6.42005C12.7996 6.41955 10.4264 6.42005 8.05273 6.42005C7.97291 6.42005 7.8916 6.42306 7.81278 6.43662C7.53416 6.4843 7.34577 6.77042 7.40477 7.04951C7.46575 7.33864 7.67149 7.48521 8.02794 7.48571C9.22074 7.48722 10.4135 7.48571 11.6068 7.48621ZM11.6058 10.6892C12.8175 10.6892 14.0291 10.6902 15.2407 10.6892C15.5962 10.6892 15.8262 10.4744 15.8243 10.1526C15.8218 9.83136 15.5962 9.63058 15.2313 9.63058C12.8452 9.63008 10.4586 9.63058 8.07256 9.63058C8.00464 9.63058 7.93622 9.62857 7.8688 9.63359C7.66108 9.64915 7.48112 9.79623 7.41964 9.99701C7.3076 10.3644 7.56192 10.6882 7.97093 10.6887C9.18256 10.6907 10.3942 10.6897 11.6058 10.6897V10.6892ZM11.6044 4.27167C12.7788 4.27167 13.9533 4.27167 15.1277 4.27167C15.2021 4.27167 15.2764 4.27267 15.3503 4.26665C15.6071 4.24657 15.798 4.05432 15.8203 3.79682C15.8495 3.45799 15.617 3.21103 15.2512 3.21103C12.8219 3.20902 10.3922 3.20952 7.96299 3.21103C7.89607 3.21103 7.82716 3.22358 7.7632 3.24265C7.5416 3.30941 7.3889 3.52024 7.39039 3.74712C7.39237 3.96849 7.53763 4.1783 7.7513 4.24155C7.84401 4.26866 7.94614 4.27016 8.0438 4.27016C9.23065 4.27217 10.4175 4.27117 11.6044 4.27117V4.27167ZM11.6073 13.8907C12.3118 13.8907 13.0168 13.8907 13.7212 13.8907C14.2527 13.8907 14.7847 13.8942 15.3161 13.8867C15.6106 13.8822 15.8188 13.6628 15.8248 13.3757C15.8317 13.0444 15.5932 12.8291 15.211 12.8291C12.8125 12.8286 10.414 12.8291 8.01554 12.8291C7.96002 12.8291 7.9035 12.8281 7.84946 12.8381C7.63877 12.8772 7.48607 12.9922 7.42014 13.204C7.30809 13.5634 7.55597 13.8882 7.95407 13.8892C9.17166 13.8932 10.3897 13.8907 11.6073 13.8912V13.8907Z"
										fill="#5646FF"
									/>
								</g>
								<defs>
									<clipPath id="clip0_569_7">
										<rect
											width="19"
											height="18.1739"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className=" mt-[2px]  text-[1.4rem] font-medium text-grey  ml-[9px]">
							Tin tức
						</div>
					</div>
				</Link>
				{/* <Link href="/danh-muc-theo-doi" className="mr-[1rem]">
        <li
            className={`w-[16rem] h-[5rem] text- text-center align-middle   cursor-pointer mx-1 ${
                router.pathname == '/danh-muc-theo-doi'
                    ? 'text-blue-2'
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
