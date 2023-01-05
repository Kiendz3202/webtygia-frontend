import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import Head from 'next/head';

function CoPhieuView() {
	return (
		<>
			<MainLayout>
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<h1 className="text-[2.8rem] font-semibold">
						Báo giá cổ phiếu chứng khoán
					</h1>
					<div className="overflow-x-auto w-full">
						<table className="w-[78.9rem] mt-[4rem]">
							<thead className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
								<tr>
									<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder ">
										Mã
									</th>
									<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
										Tên
									</th>
									<th className=" bg-[#F5F5F5] text-start w-[10rem]">
										Tham chiếu
									</th>
									<th className=" bg-back-ground-1 text-start pr-[1rem]">
										Cao
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										Thấp
									</th>
									<th className=" bg-back-ground-1 text-start ">
										Thay đổi
									</th>
									<th className=" bg-back-ground-1  text-start">
										Thay đổi %
									</th>
									<th className=" bg-back-ground-1  text-start">
										Khối lượng
									</th>
								</tr>
							</thead>
							<tbody className="w-full">
								{/* <CoinList /> */}
							</tbody>
						</table>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default CoPhieuView;
