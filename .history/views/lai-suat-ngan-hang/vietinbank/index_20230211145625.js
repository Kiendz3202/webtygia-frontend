import NameHeader from '@components/detail/gold/NameHeader';
import VietinbankPriceTable from '@components/detail/interest/priceTable/VietinbankPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function VietinbankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('vietinbank');
	const imageURL =
		'https://scontent.iocvnpt.com/resources/portal/Images/CTO/superadminportal.cto/TienIch/NganHang/VietinBank/vietinbank_637018943312743351.jpg';
	const name = 'Lãi suất gửi tiết kiệm Vietinbank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
				<InterestRateNavigation />
				{data && (
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<VietinbankPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về VietinBank – Ngân hàng Thương
									mại cổ phần Công Thương Việt Nam
								</h1>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Ngân hàng TMCP Công Thương Việt Nam (tên
									giao dịch quốc tế: Vietnam Joint Stock
									Commercial Bank For Industry And Trade) tên
									viết tắt: "VietinBank", là một ngân hàng
									thương mại lớn của Việt Nam.
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Được thành lập từ năm 1988 sau khi tách ra
									từ Ngân hàng Nhà nước Việt Nam.[2] Tên giao
									dịch ban đầu là IncomBank. Năm 2008,
									IncomBank đổi tên thành Vietinbank.
									VietinBank hiện có 1 Sở giao dịch, 150 Chi
									nhánh và trên 1000 Phòng giao dịch/ Quỹ tiết
									kiệm trải rộng trên toàn quốc.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default VietinbankInterestView;
