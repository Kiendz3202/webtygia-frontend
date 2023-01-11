import NameHeader from '@components/detail/gold/NameHeader';
import VibPriceTable from '@components/detail/interest/priceTable/VibPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function VibInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('vib');
	const imageURL =
		'https://static.wixstatic.com/media/9d8ed5_e8f0cd6914be4a50a8c93e800748313a~mv2.jpg/v1/fill/w_1182,h_1182,al_c,q_85/9d8ed5_e8f0cd6914be4a50a8c93e800748313a~mv2.jpg';
	const name = 'Lãi suất gửi tiết kiệm VIB mới nhất';
	console.log(data);
	return (
		<MainLayout>
			{data && (
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div>
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data?.timeUpdate}
						/>
						<VibPriceTable data={data} />
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về VIB – Ngân hàng Thương mại cổ phần
								Quốc Tế Việt Nam
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Ngân hàng Thương mại cổ phần (TMCP) Quốc Tế Việt
								Nam, tên viết tắt Ngân hàng Quốc Tế (VIB), là
								một trong những ngân hàng TMCP hàng đầu tại Việt
								Nam.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Ngân hàng Quân Đội hiện đang đặt trụ sở chính
								tại số 63 Lê Văn Lương, Cầu Giấy, Hà Nội. Ngoài
								trụ sở chính, MBBank cũng đã mở rộng mạng lưới,
								phủ sóng toàn quốc với hơn 100 chi nhánh, 190
								điểm giao dịch. Bên cạnh đó, ngân hàng MB còn
								xây dựng mạng lưới quốc tế với văn phòng đại
								diện ở Lào, Campuchia và Liên Bang Nga.
							</p>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default VibInterestView;
