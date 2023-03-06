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
						Lãi suấtt
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
