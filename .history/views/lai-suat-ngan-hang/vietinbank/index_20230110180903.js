import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
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
			{data && (
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div>
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data?.timeUpdate}
						/>
						{/* <AgribankPriceTable data={data} /> */}
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về VietinBank – Ngân hàng Thương mại
								cổ phần Công Thương Việt Nam
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Ngân hàng TMCP Công Thương Việt Nam (tên giao
								dịch quốc tế: Vietnam Joint Stock Commercial
								Bank For Industry And Trade) tên viết tắt:
								"VietinBank", là một ngân hàng thương mại lớn
								của Việt Nam.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Được thành lập từ năm 1988 sau khi tách ra từ
								Ngân hàng Nhà nước Việt Nam.[2] Tên giao dịch
								ban đầu là IncomBank. Năm 2008, IncomBank đổi
								tên thành Vietinbank. VietinBank hiện có 1 Sở
								giao dịch, 150 Chi nhánh và trên 1000 Phòng giao
								dịch/ Quỹ tiết kiệm trải rộng trên toàn quốc.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Hoạt động phát triển SPDV được Agribank xác định
								lấy khách hàng là trung tâm, mở rộng cơ sở khách
								hàng, phát triển khách hàng mở tài khoản và sử
								dụng dịch vụ tiện ích, Agribank chính thức triển
								khai Đề án đẩy mạnh phát triển dịch vụ thẻ tại
								thị trường nông nghiệp, nông thôn, với mục tiêu
								gia tăng sự tiếp cận nguồn vốn ngân hàng của các
								cá nhân, gia đình cũng như các dịch vụ thanh
								toán văn minh, hiện đại trên địa bàn nông
								nghiệp, nông thôn, đẩy mạnh phát triển thanh
								toán không dùng tiền mặt tại Việt Nam. Thông qua
								các chương trình tín dụng và cung ứng sản phẩm
								dịch vụ ngân hàng tiện ích, Agribank đã cơ bản
								đáp ứng đủ vốn với lãi suất cho vay ưu đãi, phục
								vụ kịp thời nhu cầu sản xuất kinh doanh của
								người dân, doanh nghiệp, góp phần chung tay cùng
								các cấp, các ngành đẩy lùi tình trạng tín dụng
								đen, đồng thời tiếp tục khẳng định vai trò chủ
								đạo của NHTM Nhà nước trong việc cung ứng vốn và
								SPDV ngân hàng tiện ích phục vụ phát triển nông
								nghiệp, nông thôn và nông dân theo đúng mục tiêu
								cơ cấu lại, góp phần tạo những bước bứt phá
								trong tái cơ cấu nền nông nghiệp Việt Nam.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Trải qua 34 năm xây dựng và trưởng thành,
								Agribank duy trì được sự tăng trưởng ổn định cả
								về quy mô, cơ cấu, chất lượng và hiệu quả hoạt
								động. Nhiều năm liên tiếp, Agribank nằm trong
								Top 10 doanh nghiệp lớn nhất Việt Nam và đạt
								nhiều giải thưởng do các tổ chức quốc tế trao
								tặng. Đặc biệt, đúng vào dịp kỷ niệm 30 năm ngày
								thành lập 26/3/2018, Agribank vinh dự được đón
								nhận Huân chương Lao động hạng Nhất – phần
								thưởng cao quý nhất của Đảng, Nhà nước Việt Nam
								dành cho tập thể có công lao đóng góp vào công
								cuộc xây dựng đất nước, thành tích xuất sắc phục
								vụ phát triển kinh tế nông nghiệp, nông thôn và
								nông dân trong thời kỳ đổi mới.
							</p>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default VietinbankInterestView;
