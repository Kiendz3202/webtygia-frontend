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
									<th className="w-[16rem] bg-back-ground-1 text-start pl-[3rem]">
										Tên
									</th>
									<th className=" bg-[#F5F5F5] text-center">
										Tham chiếu
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem] w-[6rem]">
										Cao
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										Thấp
									</th>
									<th className=" bg-back-ground-1 text-center ">
										Thay đổi
									</th>
									<th className=" bg-back-ground-1  text-center ">
										Thay đổi %
									</th>
									<th className=" bg-back-ground-1  text-center ">
										Khối lượng
									</th>
								</tr>
							</thead>
							<tbody className="text-[1.4rem] font-medium h-[4.5rem] text-blue-text">
								{/* <CoinList /> */}
								<tr>
									<td className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder text-center">
										BII
									</td>
									<td className="w-[16rem]   bg-back-ground-1 text-start pl-[3rem]">
										CTCP Louis Land
									</td>
									<td className=" bg-[#F5F5F5] text-center max-w-[10rem] pl-[0.5rem]">
										2.10
									</td>
									<td className=" bg-back-ground-1 text-start pl-[1rem] w-[6rem]">
										2.20
									</td>
									<td className=" bg-back-ground-1 text-start pl-[1rem]">
										2.00
									</td>
									<td className=" bg-back-ground-1 text-center ">
										20
									</td>
									<td className=" bg-back-ground-1  text-center pl-[1rem]">
										5%
									</td>
									<td className=" bg-back-ground-1  text-center pl-[1rem]">
										473,07
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default CoPhieuView;
