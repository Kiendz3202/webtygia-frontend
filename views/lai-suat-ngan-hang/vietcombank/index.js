import NameHeader from '@components/detail/gold/NameHeader';
import VietcombankPriceTable from '@components/detail/interest/priceTable/VietcombankPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
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
			<div className="mt-[1rem] sm:mt-[4.6rem] mb-[2.5rem]">
				<InterestRateNavigation />
				{data && (
					<div className=" h-auto mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<VietcombankPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Vietcombank – Ngân hàng thương
									mại cổ phần Ngoại thương Việt Nam
								</h1>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Ngân hàng TMCP Ngoại thương Việt Nam (tên
									giao dịch quốc tế: Joint Stock Commercial
									Bank for Foreign Trade of Vietnam) tên viết
									tắt: "Vietcombank", là công ty lớn nhất trên
									thị trường chứng khoán Việt Nam tính theo
									vốn hóa.
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Tại ngày 30/06/2020, Vietcombank có 30.115
									nhân viên, Ngân hàng có 1 Trụ sở chính, 1
									Trường Đào tạo và Phát triển nguồn nhân lực
									Vietcombank, 2 Trung tâm xử lý tiền mặt, 116
									chi nhánh trên toàn quốc, 4 công ty con tại
									Việt Nam, 3 Công ty con tại nước ngoài, 2
									công ty liên doanh, 1 công ty liên kết, 1
									văn phòng đại diện đặt tại Mỹ, 1 văn phòng
									đại diện đặt tại Singapore và 1 văn phòng
									đại diện đặt tại thành phố Hồ Chí Minh.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default VietcombankInterestView;
