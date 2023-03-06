import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function NavigationHeaderMenu({ setIsOpenMenu, isOpenMenu }) {
	const router = useRouter();
	return (
		<div
			className={`${
				isOpenMenu
					? ' visible opacity-100 translate-y-0 delay-300 '
					: ' invisible opacity-0 -translate-y-[1rem] -z-1'
			} transition-all ease-linear duration-100 absolute top-[43px] right-0 flex flex-col z-10 bg-white shadow-shadow-custom text-grey-text w-[300px] px-[26px]`}
		>
			<div
				onClick={() => setIsOpenMenu((prev) => !prev)}
				className="flex items-center justify-end my-[10px] ml-auto "
			>
				<CloseIcon sx={{ fontSize: '2rem' }} />
			</div>
			<Link href="/trang-chu" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
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
								d="M-0.00019455 8.20934L0.0300236 8.73436C0.0359364 8.75535 0.0418491 8.77601 0.0477619 8.797C0.234329 9.47977 0.857751 9.95298 1.56625 9.96183C1.63949 9.96282 1.71373 9.96183 1.7988 9.96183C1.7988 10.0517 1.7988 10.1163 1.7988 10.1809C1.7988 11.7625 1.7965 13.3439 1.79978 14.9255C1.80208 16.0241 2.58054 16.7977 3.67859 16.7993C4.5142 16.8006 5.35014 16.7997 6.18575 16.7993C6.60717 16.7993 6.79111 16.6144 6.79143 16.1897C6.79143 14.9462 6.79143 13.7029 6.79143 12.4594C6.79143 11.8032 7.18329 11.4802 7.90657 11.5504C8.27313 11.5861 8.64167 11.5769 9.00823 11.5431C9.66614 11.4825 10.0156 11.9521 10.0081 12.4535C9.98902 13.7131 10.0008 14.973 10.0022 16.2326C10.0025 16.6003 10.2028 16.799 10.5691 16.7993C11.4267 16.8 12.2843 16.8023 13.1419 16.7974C13.2989 16.7964 13.4596 16.7823 13.6116 16.7449C14.4532 16.5383 14.9922 15.8309 14.9938 14.9314C14.9968 13.3445 14.9948 11.7573 14.9948 10.1704C14.9948 10.1068 14.9948 10.0435 14.9948 9.96118C15.1088 9.96118 15.2004 9.96511 15.2917 9.96052C15.8793 9.93199 16.3221 9.66013 16.6069 9.14953C16.9531 8.52908 16.8256 7.80433 16.2863 7.26553C14.1086 5.08967 11.9273 2.91774 9.75417 0.737943C9.37874 0.361471 8.98852 0.035501 8.39795 -0.000244141C7.81262 0.0335334 7.4234 0.352944 7.05158 0.726137C4.93792 2.84625 2.819 4.96177 0.69549 7.07172C0.367355 7.39769 0.0822506 7.73678 0.000133514 8.20901L-0.00019455 8.20934Z"
								fill="#5646FF"
							/>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Trang chủ
					</div>
				</div>
			</Link>
			<Link href="/coin" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/coin') ? ' text-blue-2' : ''
					}`}
				>
					<div className="w-[25px]">
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_626_24)">
								<path
									d="M15.6618 9.46877C15.6594 12.8707 12.8858 15.6676 9.52237 15.6602C6.14597 15.6532 3.3333 12.828 3.33888 9.45019C3.34491 6.09701 6.14504 3.33774 9.54095 3.3396C12.9206 3.34099 15.6645 6.08865 15.6622 9.46877H15.6618ZM10.0875 12.2545C10.3666 12.2387 10.6197 12.2364 10.8695 12.2081C12.0968 12.0688 12.7302 10.6051 11.9872 9.61969C11.8962 9.49895 11.8939 9.43162 11.9849 9.30763C12.355 8.80287 12.4103 8.24702 12.1577 7.68003C11.912 7.12929 11.482 6.79123 10.8718 6.71833C10.6173 6.68814 10.3592 6.68629 10.087 6.67096C10.087 6.48986 10.0931 6.31758 10.0856 6.14576C10.0731 5.84625 9.91894 5.65214 9.67144 5.60942C9.26326 5.5393 8.9995 5.75338 8.98696 6.17038C8.98185 6.34033 8.98603 6.51029 8.98603 6.68675C8.87923 6.68675 8.80493 6.68675 8.73109 6.68675C8.27369 6.68675 7.81629 6.68304 7.35936 6.68814C7.0473 6.69186 6.84159 6.84556 6.79608 7.094C6.71992 7.50914 6.93864 7.77708 7.36586 7.7873C7.53024 7.79148 7.69463 7.78776 7.85994 7.78776V11.1368C7.67513 11.1368 7.50285 11.1307 7.33149 11.1382C7.03198 11.1507 6.83787 11.3049 6.79562 11.5528C6.7255 11.961 6.93957 12.2294 7.35703 12.2359C7.83255 12.2434 8.30852 12.2373 8.7845 12.2382C8.84951 12.2382 8.91405 12.2438 8.9865 12.2471C8.9865 12.437 8.98185 12.6042 8.98742 12.7704C8.99671 13.0435 9.13045 13.2422 9.33895 13.3054C9.73552 13.4256 10.0643 13.1981 10.0856 12.7816C10.0945 12.6097 10.087 12.4375 10.087 12.2536L10.0875 12.2545Z"
									fill="#5646FF"
								/>
								<path
									d="M4.46097 3.91463C4.45587 4.83454 3.70174 5.57799 2.77811 5.57474C1.84984 5.57102 1.10454 4.81178 1.11336 3.87841C1.12218 2.95989 1.88003 2.22062 2.80551 2.22759C3.72495 2.23455 4.46608 2.98961 4.46097 3.91463Z"
									fill="#5646FF"
								/>
								<path
									d="M16.0351 17.0572C15.1152 17.0525 14.3708 16.2989 14.374 15.3757C14.3773 14.4474 15.1365 13.7017 16.0699 13.71C16.9884 13.7184 17.7286 14.4758 17.7216 15.4008C17.7151 16.3202 16.9601 17.0618 16.0351 17.0572Z"
									fill="#5646FF"
								/>
								<path
									d="M8.98242 8.91153V7.80123C9.03907 7.79659 9.09155 7.78916 9.14449 7.78916C9.63764 7.78823 10.1308 7.7873 10.624 7.78916C10.9829 7.79055 11.2142 8.01716 11.2086 8.35801C11.203 8.69328 10.9773 8.91014 10.6267 8.91107C10.0853 8.91292 9.54384 8.91107 8.98242 8.91107V8.91153Z"
									fill="#5646FF"
								/>
								<path
									d="M8.98386 11.137V10.0383C9.00383 10.0313 9.02566 10.0169 9.04748 10.0165C9.6024 10.0151 10.1569 10.0086 10.7118 10.0178C11.002 10.0225 11.211 10.2723 11.2086 10.5783C11.2068 10.8774 11.0039 11.1254 10.7234 11.1314C10.2121 11.143 9.70038 11.1356 9.18865 11.1365C9.12735 11.1365 9.06652 11.1365 8.9834 11.1365L8.98386 11.137Z"
									fill="#5646FF"
								/>
								<path
									d="M9.5 0C7.52366 0 5.68848 0.603676 4.16815 1.63643L5.02676 2.37105C6.32234 1.55609 7.85614 1.08476 9.5 1.08476C14.1478 1.08476 17.9152 4.85216 17.9152 9.5C17.9152 10.6786 17.6728 11.8005 17.2354 12.8184L18.0945 13.553C18.6754 12.3238 19 10.9498 19 9.5C19 4.25313 14.7469 0 9.5 0ZM9.5 17.9148C4.85262 17.9148 1.08522 14.1474 1.08522 9.5C1.08522 8.51601 1.25379 7.57195 1.56445 6.6943L0.68819 5.94435C0.244256 7.04257 0 8.24296 0 9.5C0 14.7464 4.25359 19 9.5 19C11.2818 19 12.9488 18.5096 14.374 17.6557L13.4982 16.9062C12.3089 17.5498 10.9474 17.9148 9.5 17.9148Z"
									fill="#5646FF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_626_24">
									<rect width="19" height="19" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Tiền điện tử
					</div>
				</div>
			</Link>
			<Link href="/co-phieu/hnx" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/co-phieu')
							? ' text-blue-2'
							: ''
					}`}
				>
					<div className="w-[25px]">
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
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Chứng khoán
					</div>
				</div>
			</Link>
			<Link href="/lai-suat-ngan-hang" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/lai-suat-ngan-hang')
							? ' text-blue-2'
							: ''
					}`}
				>
					<div className="w-[25px]">
						<svg
							width="19"
							height="17"
							viewBox="0 0 19 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_625_9)">
								<path
									d="M3.05475 6.8408C3.07626 6.8408 3.09582 6.8408 3.11733 6.8408C3.23466 6.8408 3.34808 6.84469 3.45759 6.85637C3.56515 6.86804 3.67074 6.88167 3.77634 6.90308C3.9719 6.93811 4.16158 6.9926 4.3454 7.06072C4.57029 7.14245 4.78149 7.2456 4.98095 7.37016V7.06072H5.1198C5.21562 7.06072 5.29971 7.00233 5.331 6.91475L5.53242 6.36009H6.88565L7.04991 6.92254C7.07533 7.00622 7.1516 7.06266 7.2396 7.06266H7.40191V13.7556H7.31782C7.22396 13.7556 7.13791 13.8139 7.10662 13.9035L6.91694 14.4289H5.52459L5.36815 13.8957C5.34273 13.812 5.26646 13.7556 5.17846 13.7556H4.98095V13.3585C4.70327 13.5317 4.40016 13.666 4.0775 13.7556C3.87803 13.812 3.67074 13.8509 3.45759 13.8723C3.44195 13.8723 3.4263 13.8762 3.41066 13.8762C3.31484 13.8859 3.21902 13.8879 3.11928 13.8879C3.11537 13.8918 3.11342 13.8996 3.11146 13.9054L2.92177 14.4309H2.4192C2.30382 14.4309 2.21191 14.5223 2.21191 14.6372V15.0225H18.1417V14.6274C18.1417 14.5204 18.0537 14.4328 17.9462 14.4328H17.471L17.3145 13.8996C17.2891 13.8159 17.2128 13.7594 17.1248 13.7594H16.9528V7.05877H17.0662C17.16 7.05877 17.2461 7.00038 17.2774 6.91086L17.4768 6.3562H18.1535V5.37533C18.1535 5.24688 18.0889 5.12622 17.9794 5.05616L10.167 0L2.37422 5.09897C2.28036 5.16125 2.22365 5.26634 2.22365 5.37922V6.3562H2.91591L3.05671 6.8408H3.05475ZM9.3594 13.8918C9.33398 13.8081 9.25771 13.7517 9.16971 13.7517H8.9683V7.05877H9.09149C9.18536 7.05877 9.2714 7.00038 9.30269 6.91086L9.50216 6.3562H10.8652L11.0294 6.91864C11.0549 7.00233 11.1311 7.05877 11.2191 7.05877H11.3951V13.7517H11.2973C11.2035 13.7517 11.1174 13.81 11.0861 13.8996L10.8965 14.425H9.51389L9.35745 13.8918H9.3594ZM15.0246 6.91864C15.05 7.00233 15.1263 7.05877 15.2143 7.05877H15.3864V13.7517H15.2729C15.1791 13.7517 15.093 13.81 15.0617 13.8996L14.8721 14.425H13.4993L13.3428 13.8918C13.3174 13.8081 13.2411 13.7517 13.1531 13.7517H12.9674V7.05877H13.0749C13.1688 7.05877 13.2548 7.00038 13.2861 6.91086L13.4856 6.3562H14.8584L15.0226 6.91864H15.0246ZM10.0947 1.44406C11.2211 1.40319 12.148 2.30038 12.148 3.41359C12.148 4.5268 11.2621 5.38311 10.167 5.38311C9.07194 5.38311 8.14306 4.45479 8.18999 3.3299C8.23301 2.31595 9.07585 1.47909 10.0947 1.44406Z"
									fill="#5646FF"
								/>
								<path
									d="M18.6757 15.3904H1.63712C1.45676 15.3904 1.31055 15.5359 1.31055 15.7154V16.5639C1.31055 16.7434 1.45676 16.8889 1.63712 16.8889H18.6757C18.8561 16.8889 19.0023 16.7434 19.0023 16.5639V15.7154C19.0023 15.5359 18.8561 15.3904 18.6757 15.3904Z"
									fill="#5646FF"
								/>
								<path
									d="M2.11961 9.76976C2.32885 9.76976 2.49898 9.60045 2.49898 9.39221C2.49898 9.18397 2.32885 9.01465 2.11961 9.01465C1.91037 9.01465 1.74023 9.18397 1.74023 9.39221C1.74023 9.60045 1.91037 9.76976 2.11961 9.76976Z"
									fill="#5646FF"
								/>
								<path
									d="M6.14234 10.3458C6.14234 8.65649 4.7676 7.28833 3.07215 7.28833C1.3767 7.28833 0 8.65649 0 10.3458C0 12.035 1.37474 13.4013 3.07215 13.4013C4.76956 13.4013 6.14234 12.0331 6.14234 10.3458ZM4.03232 12.1538C3.55712 12.1538 3.16993 11.7704 3.16993 11.2955C3.16993 10.8206 3.55517 10.4372 4.03232 10.4372C4.50947 10.4372 4.89471 10.8226 4.89471 11.2955C4.89471 11.7684 4.50947 12.1538 4.03232 12.1538ZM2.1198 8.53193C2.595 8.53193 2.98219 8.91533 2.98219 9.3902C2.98219 9.86506 2.595 10.2485 2.1198 10.2485C1.64461 10.2485 1.25741 9.86312 1.25741 9.3902C1.25741 8.91728 1.64461 8.53193 2.1198 8.53193ZM1.7287 11.9591C1.6583 11.9591 1.5879 11.9319 1.53314 11.8774C1.42363 11.7704 1.42363 11.5972 1.53314 11.4882L4.22005 8.81218C4.2748 8.75769 4.3452 8.73044 4.41756 8.73044C4.48991 8.73044 4.55836 8.75769 4.61311 8.81218C4.72067 8.92117 4.72067 9.09438 4.61311 9.20142L1.92425 11.8774C1.86949 11.93 1.79909 11.9591 1.7287 11.9591Z"
									fill="#5646FF"
								/>
								<path
									d="M4.03269 10.918C3.82345 10.918 3.65332 11.0873 3.65332 11.2955C3.65332 11.5038 3.82345 11.6731 4.03269 11.6731C4.24194 11.6731 4.41207 11.5057 4.41207 11.2955C4.41207 11.0853 4.24389 10.918 4.03269 10.918Z"
									fill="#5646FF"
								/>
								<path
									d="M10.1533 4.93168C11.0039 4.93168 11.6942 4.24468 11.6942 3.40004C11.6942 2.5554 11.0039 1.86646 10.1533 1.86646C9.30261 1.86646 8.61426 2.55345 8.61426 3.40004C8.61426 4.24662 9.30261 4.93168 10.1533 4.93168ZM9.53532 3.93524C9.65851 4.11818 9.86385 4.20965 10.1552 4.20965C10.3684 4.20965 10.4759 4.11428 10.4759 3.92745C10.4759 3.86712 10.4583 3.81457 10.4251 3.76981C10.3899 3.727 10.3449 3.69197 10.2921 3.66472C10.2374 3.63942 10.1767 3.61217 10.1102 3.58882C10.0438 3.56352 9.97727 3.53433 9.91273 3.50513C9.84625 3.47205 9.78758 3.43702 9.73087 3.3942C9.67611 3.35139 9.63309 3.29495 9.59789 3.22099C9.56465 3.14898 9.54705 3.0653 9.54705 2.96799C9.54705 2.84343 9.59007 2.72861 9.68003 2.62935C9.76802 2.53205 9.88536 2.46393 10.0359 2.43085V2.38998C10.0359 2.27904 10.0222 2.20314 9.99291 2.16811L9.99682 2.16227H10.3703L10.3742 2.16811C10.3488 2.20704 10.3371 2.27904 10.3371 2.38998V2.41333C10.4505 2.41917 10.5698 2.43668 10.691 2.46198L10.7243 2.90182H10.7184C10.6089 2.77143 10.4446 2.7072 10.2217 2.7072C10.1239 2.7072 10.0496 2.72666 9.99878 2.76753C9.94793 2.8084 9.92251 2.86484 9.92251 2.93685C9.92251 2.99718 9.94011 3.04778 9.97336 3.08865C10.0086 3.13147 10.0535 3.16455 10.1083 3.1918C10.163 3.2171 10.2256 3.24435 10.2921 3.2677C10.3586 3.293 10.4251 3.32025 10.4916 3.34944C10.5581 3.38058 10.6167 3.41756 10.6734 3.46037C10.7282 3.50319 10.7751 3.56352 10.8084 3.63553C10.8436 3.71143 10.8612 3.79706 10.8612 3.89631C10.8612 4.04617 10.8103 4.17656 10.7086 4.28749C10.607 4.39843 10.4759 4.46654 10.3117 4.49184V4.50741C10.3117 4.61834 10.3234 4.69035 10.3488 4.72928L10.3449 4.73511H9.9714L9.96749 4.72928C9.99682 4.69035 10.0105 4.6164 10.0105 4.50741V4.49574C9.85016 4.48406 9.70545 4.45097 9.57638 4.39648L9.52749 3.93913L9.53336 3.93524H9.53532Z"
									fill="#5646FF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_625_9">
									<rect
										width="19"
										height="16.8889"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Lãi suất
					</div>
				</div>
			</Link>
			<Link href="/ty-gia-ngoai-te" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/ty-gia-ngoai-te')
							? ' text-blue-2'
							: ''
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
							<defs>
								<clipPath id="clip0_591_1241">
									<rect
										width="19"
										height="22.3529"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Ngoại tệ
					</div>
				</div>
			</Link>
			<Link href="/gia-vang/sjc" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/gia-vang')
							? ' text-blue-2'
							: ''
					}`}
				>
					<div className="w-[25px]">
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
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Vàng
					</div>
				</div>
			</Link>
			<Link href="/gia-xang-dau" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/gia-xang-dau')
							? ' text-blue-2'
							: ''
					}`}
				>
					<div className="w-[25px]">
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="#5646FF"
							// stroke="green"
						>
							{' '}
							<g>
								{' '}
								<path fill="none" d="M0 0h24v24H0z" />{' '}
								<path d="M3 19V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A.997.997 0 0 1 22 9v9a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1zM5 5v6h7V5H5z" />{' '}
							</g>{' '}
						</svg>
					</div>
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Xăng dầu
					</div>
				</div>
			</Link>
			<Link href="/tin-tuc" className=" hover:opacity-80">
				<div
					className={`flex items-center h-fit  py-[10px] text-center align-middle   cursor-pointer  ${
						router.pathname.includes('/tin-tuc')
							? ' text-blue-2'
							: ''
					}`}
				>
					<div className="w-[25px]">
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_569_7)">
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
					<div className=" mt-[2px]  text-[14px] font-medium text-grey ml-[9px]">
						Tin tức
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NavigationHeaderMenu;
