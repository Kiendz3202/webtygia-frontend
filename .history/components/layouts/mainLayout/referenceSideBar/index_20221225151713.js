import React from 'react';

function ReferenceSideBar() {
	return (
		<div className="hidden md:block w-[31.8rem] bg-slate-600">
			<div className=" text-[1.6rem]">
				<p className="text-back-text text-[1.8rem]">
					Danh mục theo dõi
				</p>
				<div>
					<ul className="flex justify-between text-grey-text text-[1.4rem]">
						<li>Mã</li>
						<li>Giá</li>
						<li>Thay đổi</li>
					</ul>
				</div>
				<div>
					<p>Tiền điện tử</p>
					<div>
						<ul className="flex justify-between text-grey-text text-[1.4rem]">
							<li>Mã</li>
							<li>Giá</li>
							<li>Thay đổi</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReferenceSideBar;
