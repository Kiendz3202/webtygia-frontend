import NameHeader from '@components/detail/gold/NameHeader';
import ScbPriceTable from '@components/detail/interest/priceTable/ScbPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function ScbInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('scb');
	const imageURL =
		'https://www.scb.com.vn/picture/y_nghi_logo_scb_truc_doc_1_.webp';
	const name = 'Lãi suất gửi tiết kiệm SCB bank mới nhất';
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
						<ScbPriceTable data={data} />
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về SCB – Ngân hàng Thương Mại Cổ Phần
								Sài Gòn
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Ngân hàng Thương mại cổ phần Sài Gòn (tên giao
								dịch bằng tiếng Anh Sai Gon Joint Stock
								Commercial Bank, viết tắt là SCB) là một ngân
								hàng thương mại tại Việt Nam có trụ sở đặt tại
								Thành phố Hồ Chí Minh. SCB được hợp nhất vào năm
								2012 từ ba ngân hàng Đệ Nhất (Ficombank), Việt
								Nam Tín Nghĩa (TinNghiaBank) và Sài Gòn (SCB)
								đều có trụ sở tại Thành phố Hồ Chí Minh. Đây là
								thương vụ hợp nhất đầu tiên trong ngành ngân
								hàng Việt Nam, đánh dấu sự bắt đầu quá trình tái
								cấu trúc hệ thống ngân hàng.
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

export default ScbInterestView;
