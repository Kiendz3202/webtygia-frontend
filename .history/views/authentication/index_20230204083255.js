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
			<div>
				<div className="flex">
					<div>Đăng nhập</div>
					<div>Đăng ký</div>
				</div>
				<form></form>
			</div>
		</div>
	);
}

export default AuthenticationView;
