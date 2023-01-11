import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function PnjView() {
	const { isSuccess, data, isLoading, isError } = useGold('pnj');
	const imageURL =
		'https://brademar.com/wp-content/uploads/2022/09/PNJ-Logo-PNG-1.png';
	const name = 'PNJ';
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<NameHeader
						name={name}
						image={imageURL}
						timeUpdate={data?.timeUpdate}
					/>
					{/* <PhuQuySjcPriceTable data={data} /> */}
					<div className=" mt-[4rem]">
						<h1 className="text-[2.4rem] text-blue-text font-medium">
							Giới thiệu về Công ty Cổ Phần Vàng Bạc Đá Quý Phú
							Nhuận
						</h1>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Công ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận có tên
							viết tắt là PNJ.,JSC với các ngành nghề kinh doanh
							chính:
						</p>
						<p className="text-[1.6rem] mt-[1rem] font-normal">
							-Sản xuất kinh doanh trang sức bằng vàng, bạc, đá
							quý, phụ kiện thời trang, quà lưu niệm. Kinh doanh
							đồng hồ và mua bán vàng miếng.
						</p>
						<p className="text-[1.6rem] mt-[1rem] font-normal">
							-Dịch vụ kiểm định kim cương, đá quý, kim loại quý.
						</p>
						<p className="text-[1.6rem] mt-[1rem] font-normal">
							-Kinh doanh bất động sản.
						</p>
						<p className="text-[1.8rem] mt-[1rem] font-normal">
							Tầm nhìn: Là công ty chế tác và bán lẻ trang sức
							hàng đầu tại châu Á, giữ vị trí số 1 trong các phân
							khúc thị trường trang sức trung và cao cấp ở Việt
							Nam.
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

export default PnjView;
