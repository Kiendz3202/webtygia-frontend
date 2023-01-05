import React from 'react';
import MainLayout from '@components/layouts/mainLayout';

function SjcView() {
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<div className="flex h-[10rem] items-center">
						<img src={coin.image} className="w-[6rem] h-[6rem]" />
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold capitalize text-back-text w-fit">
								{coin.nameId}({coin.symbol.toUpperCase()})
								<p className=" text-[1.4rem] text-grey-text">
									#Xếp hạng {coin.rank}
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
