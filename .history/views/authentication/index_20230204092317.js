import LoginForm from '@components/auth/LoginForm';
import React from 'react';

function AuthenticationView() {
	return (
		<div className="lg:flex max-w-[144rem] mx-auto h-full">
			<div className="hidden lg:block h-full max-w-[100rem]">
				<img
					className="h-screen object-cover"
					src="https://thumbs.dreamstime.com/b/binance-logo-bitcoin-black-background-binance-one-largest-cryptocurrency-exchange-market-moscow-russia-260414550.jpg"
				/>
			</div>
			<div className="  px-[1rem] w-full lg:w-[44rem] mx-auto lg:mx-0">
				<div className="flex mt-[3rem] items-center ">
					<div className="text-[32px] font-semibold ml-[3rem]">
						Đăng nhập
					</div>
					<div className="text-[18px] ml-[3rem] font-semibold opacity-50">
						Đăng ký
					</div>
				</div>
				{/* <div className="flex mt-[3rem] items-center ">
					<div className="text-[18px] ml-[3rem]">Đăng nhập</div>
					<div className="text-[32px] font-semibold ml-[3rem]">
						Đăng ký
					</div>
				</div> */}
				<LoginForm />
			</div>
		</div>
	);
}

export default AuthenticationView;
