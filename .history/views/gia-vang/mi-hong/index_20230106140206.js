import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function MiHongView() {
	const { isSuccess, data, isLoading, isError } = useGold('mihong');
	const imageURL =
		'http://theme.hstatic.net/200000061680/1000549213/14/share_fb_home.png?v=693';
	const name = 'Phú Quý SJC';
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<NameHeader
						name={name}
						image={imageURL}
						timeUpdate={data?.timeUpdate}
					/>
					<PhuQuySjcPriceTable data={data} />
					<div className=" mt-[4rem]">
						<h1 className="text-[2.4rem] text-blue-text font-medium">
							Giới thiệu Vàng Phú Quý
						</h1>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Được thành lập từ năm 2003 đến nay đã hơn một thập
							kỷ. Với phương châm kinh doanh trọng chữ tín, luôn
							đảm bảo tối đa lợi ích của khách hàng, Phú Quý đã
							nhanh chóng có chỗ đứng vững chắc trên thị trường
							Vàng bạc đá quý trong nước. Đáp ứng nhu cầu sở hữu
							đồ trang sức gắn với các dịp kỷ niệm, làm quà tặng
							hay để đeo trong các ngày lễ trang trọng, sản phẩm
							của Phú Quý là kết tinh của sáng tạo độc đáo, đa
							dạng theo xu hướng, phù hợp với phong cách người
							dùng cùng năng lực chế tác tinh xảo, chất lượng cao.
							Mỗi dòng sản phẩm trang sức của Phú Quý đều thể hiện
							tâm huyết mang tới niềm hạnh phúc bền lâu cho mọi
							khách hàng.
						</p>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Các sản phẩm thiết kế độc quyền của Phú Quý như nhẫn
							tròn trơn vàng 999.9, BST Thần Tài Phú Quý với những
							sản phẩm độc đáo như bộ Lộc 12 con giáp bằng vàng
							24K - 999.9, bộ Tượng 12 con giáp bằng vàng 24K –
							999.9, trang sức vàng Phú Quý, nhẫn cưới Phú Quý
							không những được khách hàng lựa chọn và tin dùng
							trong nhiều năm qua, mà còn thể hiện một bước tiến
							mới trong việc khẳng đinh uy tín của thương hiệu Phú
							Quý.
						</p>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Là thương hiệu Vàng bạc Đá quý có mặt trên thị
							trường từ năm 2003, Phú Quý đã trở thành trung tâm
							giao dịch vàng miếng được ngân hàng nhà nước cấp
							phép.
						</p>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Phú Quý cũng được biết đến là một trong những thương
							hiệu uy tín hàng đầu Việt Nam với hệ thống sản phẩm
							được đầu tư chuyên nghiệp về thiết kế, công nghệ chế
							tác, đội ngũ nhân sự, trình độ nghệ nhân và tiềm lực
							kinh doanh vững mạnh.
						</p>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Cùng với đó là chính sách bảo hành ưu việt, chính
							sách thu đổi sản phẩm một cách minh bạch, đảm bảo
							tối đa quyền lợi của khách hàng.
						</p>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default MiHongView;