import React from 'react';
import MainLayout from '@components/layouts/mainLayout';

function SjcView() {
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<div className="flex h-[10rem] items-center">
						<img
							src="https://printgo.vn/uploads/file-logo/1/512x512.075e191500b6b0dd513f7d34d8bbfa77.ai.1.png"
							className="w-[6rem] h-[6rem]"
						/>
						<div className="ml-[0.5rem]">
							<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
								Vàng SJC Việt Nam
								<p className=" text-[1.4rem] text-grey-text">
									cập nhật lúc...
								</p>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default SjcView;
