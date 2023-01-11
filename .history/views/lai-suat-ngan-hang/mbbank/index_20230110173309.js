import NameHeader from '@components/detail/gold/NameHeader';
import MbPriceTable from '@components/detail/interest/priceTable/MbPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function MbbankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('mbbank');
	const imageURL =
		'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg';
	const name = 'Lãi suất gửi tiết kiệm MB bank mới nhất';
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
						{/* <BidvPriceTable data={data} /> */}
						<MbPriceTable data={data} />
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về MBBank – Ngân hàng TMCP Quân đội
								(MBBank)
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								MBBank là tên gọi viết tắt của Ngân hàng Thương
								mại Cổ phần Quân Đội (tên giao dịch tiếng Anh là
								Military Commercial Joint Stock Bank). Đây là
								một ngân hàng thương mại cổ phần của Việt Nam và
								đồng thời cũng là một doanh nghiệp trực thuộc Bộ
								Quốc Phòng, được thành lập vào ngày 4 tháng 11
								năm 1994 bởi các cổ đông chính là: Viettel, Tổng
								Công ty Đầu tư và kinh doanh vốn Nhà nước, Tổng
								Công ty Trực thăng Việt Nam và Tổng Công ty Tân
								Cảng Sài Gòn.
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
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Theo quy định của Luật Doanh nghiệp 2020, BIDV
								được xếp vào loại hình công ty cổ phần với cổ
								đông Nhà nước (Ngân hàng Nhà nước Việt Nam)
								chiếm cổ phần chi phối. Ngày 8/4/2021, tạp chí
								The Asian Banker trao cho Ngân hàng này giải
								thưởng "Ngân hàng bán lẻ tốt nhất Việt Nam" năm
								2020, đồng thời sản phẩm QuickLoan được giải
								"Sản phẩm cho vay tiêu dùng tốt nhất Việt Nam".
								BIDV là một trong bốn ngân hàng thương mại,
								thường được gọi là Bộ Tứ (Big 4), với các thành
								viên còn lại gồm có: Ngân hàng Nông nghiệp và
								Phát triển Nông thôn Việt Nam (Agribank), Ngân
								hàng TMCP Ngoại thương Việt Nam (Vietcombank) và
								Ngân hàng TMCP Công thương Việt Nam
								(Vietinbank). Nhóm bốn ngân hàng này đều có quy
								mô tài sản, nguồn vốn, doanh thu ở nhóm hàng đầu
								và đều có Nhà nước đóng vai trò là cổ đông kiểm
								soát (với BIDV, Vietinbank, Vietcombank) hoặc là
								chủ sở hữu (với Agribank). Tại thời điểm tháng 4
								năm 2021, BIDV và các công ty con, công ty liên
								kết (hệ thống BIDV) hoạt động chủ yếu trong 4
								lĩnh vực: ngân hàng, bảo hiểm, chứng khoán và
								đầu tư tài chính. Hệ thống BIDV hiện nay có
								25.000 người lao động, 190 chi nhánh, hiện diện
								tại 63 tỉnh thành của Việt Nam và tại 6 nước
								khác. Các công ty con của BIDV gồm có: Ngân hàng
								Liên doanh Lào Việt (LaoViet Bank), Công ty cổ
								phần Chứng khoán Ngân hàng Đầu tư và Phát triển
								Việt Nam (BSC), Tổng Công ty cổ phần Bảo hiểm
								Ngân hàng TMCP Đầu tư và Phát triển Việt Nam
								BIDV (BIC), Công ty Bảo hiểm Lào Việt (LVI),
								Công ty Cho thuê tài chính TNHH BIDV (BIDV-SuMi
								Trust Leasing, Công ty TNHH MTV Quản lý nợ và
								khai thác tài sản BIDV (BAMC) và Ngân hàng Đầu
								tư và Phát triển Campuchia (BIDC).
							</p>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default MbbankInterestView;
