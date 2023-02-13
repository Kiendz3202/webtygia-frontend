import MbPriceTable from '@components/detail/exchange/MbPriceTable';
import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import { useExchange } from '@services/exchange/useExchange';
import React from 'react';

function MbExchangeView() {
	const { isSuccess, data, isLoading, isError } = useExchange('mbbank');
	const imageURL =
		'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg';
	const name = 'Tỷ giá ngoại tệ MB bank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
				<ExchangeRateNavigation />
				{data && (
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<MbPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về MBBank – Ngân hàng TMCP Quân
									đội (MBBank)
								</h1>
								<p className="text-[2rem] mt-[1rem] font-normal">
									MBBank là tên gọi viết tắt của Ngân hàng
									Thương mại Cổ phần Quân Đội (tên giao dịch
									tiếng Anh là Military Commercial Joint Stock
									Bank). Đây là một ngân hàng thương mại cổ
									phần của Việt Nam và đồng thời cũng là một
									doanh nghiệp trực thuộc Bộ Quốc Phòng, được
									thành lập vào ngày 4 tháng 11 năm 1994 bởi
									các cổ đông chính là: Viettel, Tổng Công ty
									Đầu tư và kinh doanh vốn Nhà nước, Tổng Công
									ty Trực thăng Việt Nam và Tổng Công ty Tân
									Cảng Sài Gòn.
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Ngân hàng Quân Đội hiện đang đặt trụ sở
									chính tại số 63 Lê Văn Lương, Cầu Giấy, Hà
									Nội. Ngoài trụ sở chính, MBBank cũng đã mở
									rộng mạng lưới, phủ sóng toàn quốc với hơn
									100 chi nhánh, 190 điểm giao dịch. Bên cạnh
									đó, ngân hàng MB còn xây dựng mạng lưới quốc
									tế với văn phòng đại diện ở Lào, Campuchia
									và Liên Bang Nga.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default MbExchangeView;
