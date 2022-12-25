import React from 'react';

function ReferenceSideBar() {
	return (
		<div className="hidden md:block w-[31.8rem] ">
			<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
				<p className="text-back-text text-[1.8rem] font-semibold">
					Danh mục theo dõi
				</p>
				<div className="pt-[1.5rem]">
					<ul className="grid grid-cols-3  text-grey-text text-[1.4rem] font-semibold">
						<li>Mã</li>
						<li>Giá</li>
						<li>Thay đổi</li>
					</ul>
				</div>
				<div className="pt-[1.5rem] text-[1.6rem]">
					<p className=" font-medium">Tiền điện tử</p>
					<div>
						<ul className="grid grid-cols-3  text-grey-text text-[1.4rem]">
							<li className="text-[1.4rem] font-semibold">
								Bitcoin
							</li>
							<li className="text-[1.4rem] font-normal">2000$</li>
							<li className="text-[1.4rem] font-normal">+5.4%</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReferenceSideBar;
