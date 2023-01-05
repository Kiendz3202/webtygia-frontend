import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import NameHeader from '@components/detail/gold/NameHeader';
import SjcPriceTable from '@components/detail/gold/priceTable/SjcPriceTable';

function SjcView() {
	const { isSuccess, data, isLoading, isError } = useGold('sjc');

	//convert to dd:mm:yy
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}
	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join('/');
	}
	const dateDay = formatDate(new Date(data?.timeUpdate * 1000));

	//convert to hh:mm:ss
	const d = new Date(data?.timeUpdate * 1000);
	let dateHour = d.toTimeString();
	dateHour = dateHour.split(' ')[0];

	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<NameHeader dateDay={dateDay} dateHour={dateHour} />
					<SjcPriceTable data={data} />
					<div className="mt-[2rem]">
						<h1 className="text-[2.4rem] text-blue-text font-medium">
							Giới thiệu về Công Ty TNHH Một Thành Viên Vàng Bạc
							Đá Quý Sài Gòn - SJC
						</h1>
						<p className="text-[1.6rem]">
							Được thành lập năm 1988, là doanh nghiệp nhà nước
							trực thuộc UBND TP.HCM. Hoạt động theo mô hình công
							ty mẹ - con như một tập đoàn kinh doanh đa ngành.
							Trong đó sản xuất, kinh doanh vàng và trang sức là
							ngành kinh doanh chính, địa ốc, đầu tư tài chính và
							dịch vụ.
						</p>
						<p>
							SJC định hướng phát triển thành một tập đoàn kinh tế
							đầu ngành của quốc gia trong vòng vài năm tới, phát
							triển ngành kinh doanh vàng và trang sức với nền
							tảng một thương hiệu quốc gia để trở thành thương
							hiệu quốc tế. Mạng lưới kinh doanh phân phối gồm hơn
							200 cửa hàng, 43 đại lý chính thức, trên 3.000 cửa
							hàng liên kết bán lẻ toàn quốc. Bên cạnh đó, SJC còn
							có một xí nghiệp sản xuất nữ trang tập trung, xuất
							xưởng hơn 500.000 sản phẩm một năm.
						</p>
						<p>
							Thương hiệu SJC đã đi vào tâm trí của khách hàng là
							sản phẩm của niềm tin, uy tín, chất lượng. Xứng đáng
							là danh hiệu thương hiệu Quốc gia, sản phẩm SJC đa
							dạng với nhiều chủng loại từ phổ thông đến cao cấp,
							được chia làm 2 dòng sản phẩm: dòng phổ thông nữ
							trang SJC và dòng nữ trang cao cấp SJC Diagold. Dòng
							phổ thông nữ trang SJC có nhiều mẫu mã độc đáo, thời
							trang từ công nghệ đúc, đột dập, kết dây, khắc máy…
							Đặc biệt giá tiền vừa phải phù hợp với nhiều đối
							tượng khách hàng và đáp ứng được nhu cầu của các cửa
							hàng đại lý tại các tỉnh trong cả nước.
						</p>
						<p>
							Các sản phẩm nữ trang SJC đáp ứng đầy đủ các tiêu
							chuẩn theo yêu cầu của Thông tư 22 về việc quản lý
							đo lường trong kinh doanh vàng và quản lý chất lượng
							vàng trang sức, mỹ nghệ lưu thông trên thị trường
							với khả năng đáp ứng số lượng lớn và nhanh chóng.
							Khách hàng khi mua sản phẩm nữ trang SJC hoàn toàn
							yên tâm về uy tín và chất lượng sản phẩm, cộng với
							chế độ hậu mãi tốt. SJC được đánh giá cao trong nước
							và trong khu vực: Danh hiệu Thương hiệu Quốc gia,
							đứng thứ 4 trong 500 Doanh nghiệp lớn nhất Việt Nam,
							giải Vàng Top 500 nhà bán lẻ hàng đầu châu Á - Thái
							Bình Dương…., cùng nhiều giải thưởng cao quý khác.
						</p>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default SjcView;
