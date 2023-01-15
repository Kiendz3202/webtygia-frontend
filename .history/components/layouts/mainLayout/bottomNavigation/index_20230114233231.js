import React from 'react';

function BottomNavigation() {
	return (
		<div className=" absolute bottom-0 w-full h-[8rem] bg-slate-500">
			<div className="flex text-[1.8rem]">
				<div>Trang chủ</div>
				<div>Thị trường</div>
				<div>Tin tức</div>
				<div>Cá nhân</div>
			</div>
		</div>
	);
}

export default BottomNavigation;
