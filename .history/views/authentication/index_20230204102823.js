import LoginForm from '@components/auth/LoginForm';
import SignupForm from '@components/auth/SignupForm';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../css-module/slideAuthPage.module.css';

const images = [
	'https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75',
	'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/307677689_2233177293514350_506821838260481203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=0PbaupGeC78AX8NKd3D&tn=R5tPph1G-IwzutAt&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCF42kGI-VBgDXxKtPWdMmGXSS0G9v4tY_QJ0ARtIP3fA&oe=63DEC24B',
	'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/307721947_2233177316847681_9182540623992931146_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=vyI4yPaKPeIAX8v3jsU&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBnHuN9WAik_p_NuSTfZETx9EetP4hEOqjsgB3ZEy78wg&oe=63E044CC',
];
const delay = 2500;

function AuthenticationView() {
	const [isSignup, setIsSignup] = useState(false);
	const router = useRouter();

	const changeIsSignup = () => {
		setIsSignup((prev) => !prev);
	};
	return (
		<div className="lg:flex max-w-[1440px] mx-auto h-full">
			<div className="hidden lg:block h-full max-w-[100rem]">
				{/* <img
					className="h-full min-h-screen object-cover"
					src="https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg"
				/> */}
				<div className={`${styles.slideshow}`}>
					<div
						className={`${styles.slideshowSlider}`}
						style={{
							transform: `translate3d(${-index * 100}%, 0, 0)`,
						}}
					>
						{images &&
							images.map((news, index) => (
								<Link
									href={`${path}/${news.timeUpdate}`}
									key={news.timeUpdate}
								>
									<img
										// crossOrigin="anonymous"
										className={`${styles.slide} object-cover`}
										// style={{ backgroundColor }}
										src={news?.image}
									></img>
								</Link>
							))}
					</div>

					<div className={`${styles.slideshowDots}`}>
						{latestList &&
							latestList.map((_, idx) => (
								<div
									key={idx}
									className={`${styles.slideshowDot} ${
										index === idx ? styles.active : ''
									}`}
									onClick={() => {
										setIndex(idx);
									}}
								></div>
							))}
					</div>
				</div>
			</div>
			<div className="  px-[1rem] w-full lg:w-[440px] mx-auto lg:mx-0">
				<div className="flex mt-[3rem] items-center ">
					<div
						onClick={changeIsSignup}
						className={
							isSignup
								? 'text-[18px] ml-[3rem] font-semibold opacity-60 cursor-pointer'
								: 'text-[32px] font-semibold ml-[3rem] cursor-pointer'
						}
					>
						Đăng nhập
					</div>
					<div
						onClick={changeIsSignup}
						className={
							!isSignup
								? 'text-[18px] ml-[3rem] font-semibold opacity-60 cursor-pointer'
								: 'text-[32px] font-semibold ml-[3rem] cursor-pointer'
						}
					>
						Đăng ký
					</div>
				</div>
				{isSignup ? <SignupForm /> : <LoginForm />}
			</div>
		</div>
	);
}

export default AuthenticationView;
