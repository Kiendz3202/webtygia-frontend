import NameHeader from '@components/detail/gold/NameHeader';
import VietcombankPriceTable from '@components/detail/interest/priceTable/VietcombankPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function VietcombankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('vietcombank');
	const imageURL =
		'https://www.inlogo.vn/vnt_upload/File/Image/logo_VCB_828891.jpg';
	const name = 'Lãi suất gửi tiết kiệm Vietcombank bank mới nhất';
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
						<VietcombankPriceTable data={data} />
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về Vietcombank – Ngân hàng thương mại
								cổ phần Ngoại thương Việt Nam
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Ngân hàng TMCP Ngoại thương Việt Nam (tên giao
								dịch quốc tế: Joint Stock Commercial Bank for
								Foreign Trade of Vietnam) tên viết tắt:
								"Vietcombank", là công ty lớn nhất trên thị
								trường chứng khoán Việt Nam tính theo vốn hóa.
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

export default VietcombankInterestView;
