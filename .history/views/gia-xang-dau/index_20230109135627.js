import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { usePetrolimex } from '@services/petrol/usePetrol';
import Head from 'next/head';

function GiaXangDauView() {
	const { isSuccess, data, isLoading, isError } = usePetrolimex();
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Petrolimex-PLX.png';
	const name = 'Giá xăng dầu Petrolimex';
	console.log(data);
	return (
		<>
			<MainLayout>
				{data && (
					<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data[0].timeUpdate}
						/>
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về Tập đoàn Xăng dầu Việt Nam
								Petrolimex
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Tập đoàn Xăng dầu Việt Nam (tên viết tắt là
								Petrolimex) hiện nay được hình thành từ việc cổ
								phần hóa và cấu trúc lại Tổng công ty Xăng dầu
								Việt Nam. Lĩnh vực kinh doanh chính của
								Petrolimex là xuất nhập khẩu và kinh doanh xăng
								dầu, lọc - hóa dầu, đầu tư vốn vào các doanh
								nghiệp khác để kinh doanh các ngành nghề mà
								Petrolimex đang kinh doanh và các ngành nghề
								kinh doanh khác theo quy định của pháp luật.
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
				)}
			</MainLayout>
		</>
	);
}

export default GiaXangDauView;
