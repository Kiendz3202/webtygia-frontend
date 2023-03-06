import BidvPriceTable from '@components/detail/exchange/BidvPriceTable';
import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import { useExchange } from '@services/exchange/useExchange';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
import React, { useEffect, useState } from 'react';

function BidvExchangeView() {
	const [email, setEmail] = useState();
	const { isSuccess, data, isLoading, isError } = useExchange('bidv');
	const imageURL =
		'https://static.wixstatic.com/media/9d8ed5_ee14e082b86542d49a8a4460f290c976~mv2.png/v1/fill/w_1182,h_1182,al_c/9d8ed5_ee14e082b86542d49a8a4460f290c976~mv2.png';
	const name = 'Tỷ giá ngoại tệ BIDV mới nhất';

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		if (email && data) {
			fetchUpdateScoreAndView(
				email,
				data?._id,
				'exchange-rate',
				'BidvExchange'
			);
		}
	}, [typeof window, email, data]);

	return (
		<MainLayout>
			<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
				<ExchangeRateNavigation />
				{data && (
					<div className=" h-auto mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<BidvPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về BIDV – Ngân hàng Thương mại cổ
									phần Đầu tư và Phát triển Việt Nam
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng TMCP Đầu tư và Phát triển Việt Nam
									(tên giao dịch Tiếng Anh: Joint Stock
									Commercial Bank for Investment and
									Development of Vietnam [2]) tên gọi tắt:
									"BIDV", là ngân hàng thương mại lớn nhất
									Việt Nam tính theo quy mô tài sản năm 2019
									và là doanh nghiệp đứng thứ 10 trong danh
									sách 1000 doanh nghiệp đóng thuế thu nhập
									doanh nghiệp lớn nhất năm 2018.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Ngân hàng TMCP Đầu tư và Phát triển Việt Nam
									đã có hơn 60 năm hình thành và phát triển,
									gắn liền với quá trình xây dựng và bảo vệ
									Nhà nước Việt Nam Dân chủ Cộng hòa, và sau
									này là Cộng hòa xã hội chủ nghĩa Việt Nam.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Theo quy định của Luật Doanh nghiệp 2020,
									BIDV được xếp vào loại hình công ty cổ phần
									với cổ đông Nhà nước (Ngân hàng Nhà nước
									Việt Nam) chiếm cổ phần chi phối. Ngày
									8/4/2021, tạp chí The Asian Banker trao cho
									Ngân hàng này giải thưởng "Ngân hàng bán lẻ
									tốt nhất Việt Nam" năm 2020, đồng thời sản
									phẩm QuickLoan được giải "Sản phẩm cho vay
									tiêu dùng tốt nhất Việt Nam". BIDV là một
									trong bốn ngân hàng thương mại, thường được
									gọi là Bộ Tứ (Big 4), với các thành viên còn
									lại gồm có: Ngân hàng Nông nghiệp và Phát
									triển Nông thôn Việt Nam (Agribank), Ngân
									hàng TMCP Ngoại thương Việt Nam
									(Vietcombank) và Ngân hàng TMCP Công thương
									Việt Nam (Vietinbank). Nhóm bốn ngân hàng
									này đều có quy mô tài sản, nguồn vốn, doanh
									thu ở nhóm hàng đầu và đều có Nhà nước đóng
									vai trò là cổ đông kiểm soát (với BIDV,
									Vietinbank, Vietcombank) hoặc là chủ sở hữu
									(với Agribank). Tại thời điểm tháng 4 năm
									2021, BIDV và các công ty con, công ty liên
									kết (hệ thống BIDV) hoạt động chủ yếu trong
									4 lĩnh vực: ngân hàng, bảo hiểm, chứng khoán
									và đầu tư tài chính. Hệ thống BIDV hiện nay
									có 25.000 người lao động, 190 chi nhánh,
									hiện diện tại 63 tỉnh thành của Việt Nam và
									tại 6 nước khác. Các công ty con của BIDV
									gồm có: Ngân hàng Liên doanh Lào Việt
									(LaoViet Bank), Công ty cổ phần Chứng khoán
									Ngân hàng Đầu tư và Phát triển Việt Nam
									(BSC), Tổng Công ty cổ phần Bảo hiểm Ngân
									hàng TMCP Đầu tư và Phát triển Việt Nam BIDV
									(BIC), Công ty Bảo hiểm Lào Việt (LVI), Công
									ty Cho thuê tài chính TNHH BIDV (BIDV-SuMi
									Trust Leasing, Công ty TNHH MTV Quản lý nợ
									và khai thác tài sản BIDV (BAMC) và Ngân
									hàng Đầu tư và Phát triển Campuchia (BIDC).
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default BidvExchangeView;
