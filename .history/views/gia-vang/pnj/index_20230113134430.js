import NameHeader from '@components/detail/gold/NameHeader';
import PnjPriceTable from '@components/detail/gold/priceTable/PnjPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function PnjView() {
	const { isSuccess, data, isLoading, isError } = useGold('pnj');
	const imageURL =
		'https://brademar.com/wp-content/uploads/2022/09/PNJ-Logo-PNG-1.png';
	const name = 'Giá vàng PNJ';
	console.log(data);
	return (
		<MainLayout>
			{data && (
				<div className="mt-[4.6rem] mb-[2.5rem]">
					<div className=" grid grid-cols-7 items-center gap-x-[1rem] sm:gap-x-[2rem] mb-[2rem] px-[1rem] text-[2rem] bg-white rounded-[1.5rem] h-[5rem] shadow-shadow-custom">
						<div className=" col-span-1 text-center ">
							<Link
								className="block w-full h-full bg-blue-400 rounded-[1.5rem]"
								href="/gia-vang/sjc"
							>
								SJC
							</Link>
						</div>
						<div className=" col-span-1 text-center">
							<Link
								className="block w-full h-full"
								href="/gia-vang/pnj"
							>
								PNJ
							</Link>
						</div>
						<div className=" col-span-1 text-center">
							<Link
								className="block w-full h-full"
								href="/gia-vang/doji"
							>
								DOJI
							</Link>
						</div>
						<div className=" col-span-1 text-center">
							<Link
								className="block w-full h-full"
								href="/gia-vang/phu-quy-sjc"
							>
								Phú Quý
							</Link>
						</div>
						<div className=" col-span-2 text-center">
							<Link
								className="block w-full h-full"
								href="/gia-vang/bao-tin-minh-chau"
							>
								Bảo Tín Minh châu
							</Link>
						</div>
						<div className=" col-span-1 text-center">
							<Link
								className="block w-full h-full"
								href="/gia-vang/mi-hong"
							>
								Mi Hồng
							</Link>
						</div>
					</div>
					<div className=" h-auto mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data[0]?.timeUpdate}
							/>
							{/* <PhuQuySjcPriceTable data={data} /> */}
							<PnjPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Công ty Cổ Phần Vàng Bạc Đá
									Quý Phú Nhuận
								</h1>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Công ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận có
									tên viết tắt là PNJ.,JSC với các ngành nghề
									kinh doanh chính:
								</p>
								<p className="text-[1.6rem] mt-[1rem] font-normal">
									-Sản xuất kinh doanh trang sức bằng vàng,
									bạc, đá quý, phụ kiện thời trang, quà lưu
									niệm. Kinh doanh đồng hồ và mua bán vàng
									miếng.
								</p>
								<p className="text-[1.6rem] mt-[1rem] font-normal">
									-Dịch vụ kiểm định kim cương, đá quý, kim
									loại quý.
								</p>
								<p className="text-[1.6rem] mt-[1rem] font-normal">
									-Kinh doanh bất động sản.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Tầm nhìn: Là công ty chế tác và bán lẻ trang
									sức hàng đầu tại châu Á, giữ vị trí số 1
									trong các phân khúc thị trường trang sức
									trung và cao cấp ở Việt Nam.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Sứ mệnh: PNJ mang lại niềm kiêu hãnh cho
									khách hàng bằng các sản phẩm trang sức tinh
									tế, chất lượng vượt trội.
								</p>
								<p className="text-[1.8rem] mt-[1rem] font-normal">
									Giá trị cốt lõi: Trung thực - Chất lượng -
									Trách nhiệm - Đổi mới - Sáng tạo.
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default PnjView;
