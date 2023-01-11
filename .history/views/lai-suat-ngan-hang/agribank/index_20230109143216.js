import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function AgribankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('agribank');
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png';
	const name = 'Lãi suất gửi tiết kiệm Agribank mới nhất';
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
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về Agribank – Ngân hàng Thương mại
								hàng đầu Việt Nam
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Ngân hàng Nông nghiệp và Phát triển Nông thôn
								Việt Nam (Agribank) được thành lập theo Nghị
								định số 53-HĐBT ngày 26/03/1988 của Hội đồng Bộ
								trưởng (nay là Chính phủ). Trải qua mỗi thời kỳ
								phát triển với những tên gọi gắn với sứ mệnh
								khác nhau, xuyên suốt 33 năm xây dựng và phát
								triển, Agribank luôn khẳng định vị thế, vai trò
								của một trong những Ngân hàng Thương mại hàng
								đầu Việt Nam, đi đầu thực hiện chính sách tiền
								tệ, góp phần ổn định kinh tế vĩ mô, kiềm chế lạm
								phát, hỗ trợ tăng trưởng, luôn đồng hành cùng sự
								nghiệp phát triển nông nghiệp, nông dân, nông
								thôn, có nhiều đóng góp tích cực thúc đẩy quá
								trình tái cơ cấu nền kinh tế, xây dựng nông thôn
								mới và bảo đảm an sinh xã hội.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								SJC định hướng phát triển thành một tập đoàn
								kinh tế đầu ngành của quốc gia trong vòng vài
								năm tới, phát triển ngành kinh doanh vàng và
								trang sức với nền tảng một thương hiệu quốc gia
								để trở thành thương hiệu quốc tế. Mạng lưới kinh
								doanh phân phối gồm hơn 200 cửa hàng, 43 đại lý
								chính thức, trên 3.000 cửa hàng liên kết bán lẻ
								toàn quốc. Bên cạnh đó, SJC còn có một xí nghiệp
								sản xuất nữ trang tập trung, xuất xưởng hơn
								500.000 sản phẩm một năm.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Thương hiệu SJC đã đi vào tâm trí của khách hàng
								là sản phẩm của niềm tin, uy tín, chất lượng.
								Xứng đáng là danh hiệu thương hiệu Quốc gia, sản
								phẩm SJC đa dạng với nhiều chủng loại từ phổ
								thông đến cao cấp, được chia làm 2 dòng sản
								phẩm: dòng phổ thông nữ trang SJC và dòng nữ
								trang cao cấp SJC Diagold. Dòng phổ thông nữ
								trang SJC có nhiều mẫu mã độc đáo, thời trang từ
								công nghệ đúc, đột dập, kết dây, khắc máy… Đặc
								biệt giá tiền vừa phải phù hợp với nhiều đối
								tượng khách hàng và đáp ứng được nhu cầu của các
								cửa hàng đại lý tại các tỉnh trong cả nước.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Các sản phẩm nữ trang SJC đáp ứng đầy đủ các
								tiêu chuẩn theo yêu cầu của Thông tư 22 về việc
								quản lý đo lường trong kinh doanh vàng và quản
								lý chất lượng vàng trang sức, mỹ nghệ lưu thông
								trên thị trường với khả năng đáp ứng số lượng
								lớn và nhanh chóng. Khách hàng khi mua sản phẩm
								nữ trang SJC hoàn toàn yên tâm về uy tín và chất
								lượng sản phẩm, cộng với chế độ hậu mãi tốt. SJC
								được đánh giá cao trong nước và trong khu vực:
								Danh hiệu Thương hiệu Quốc gia, đứng thứ 4 trong
								500 Doanh nghiệp lớn nhất Việt Nam, giải Vàng
								Top 500 nhà bán lẻ hàng đầu châu Á - Thái Bình
								Dương…., cùng nhiều giải thưởng cao quý khác.
							</p>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default AgribankInterestView;
