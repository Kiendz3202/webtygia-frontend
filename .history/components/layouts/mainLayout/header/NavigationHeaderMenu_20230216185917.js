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
							<g clip-path="url(#clip0_626_24)">
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
							<g clip-path="url(#clip0_625_9)">
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
						Tin tức
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NavigationHeaderMenu;