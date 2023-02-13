import LoginForm from '@components/auth/LoginForm';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function AuthenticationView() {
	const [isSignup, setIsSignup] = useState(false);
	const router = useRouter();
	console.log(router.query);

	const changeIsSignup = () => {
		setIsSignup((prev) => !prev);
	};
	return (
		<div className="lg:flex max-w-[144rem] mx-auto h-full">
			<div className="hidden lg:block h-full max-w-[100rem]">
				<img
					className="h-screen object-cover"
					src="https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg"
				/>
			</div>
			<div className="  px-[1rem] w-full lg:w-[44rem] mx-auto lg:mx-0">
				{!isSignup && (
					<div className="flex mt-[3rem] items-center ">
						<div className="text-[32px] font-semibold ml-[3rem] cursor-pointer">
							Đăng nhập
						</div>
						<div className="text-[18px] ml-[3rem] font-semibold opacity-60 cursor-pointer">
							Đăng ký
						</div>
					</div>
				)}
				{isSignup && (
					<div className="flex mt-[3rem] items-center ">
						<div className="text-[18px] ml-[3rem] opacity-60">
							Đăng nhập
						</div>
						<div className="text-[32px] font-semibold ml-[3rem]">
							Đăng ký
						</div>
					</div>
				)}
				<LoginForm />
			</div>
		</div>
	);
}

export default AuthenticationView;
