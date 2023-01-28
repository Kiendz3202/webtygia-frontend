import NameHeader from '@components/detail/gold/NameHeader';
import BaoTinMinhChauPriceTable from '@components/detail/gold/priceTable/BaoTinMinhChauPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import GoldNavigation from '@components/navigation/GoldNavigation';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function BaoTinMinhChauView() {
	const { isSuccess, data, isLoading, isError } = useGold('baoTinMinhChau');
	const imageURL =
		'https://cdnimg.vietnamplus.vn/Uploaded/Subjects/1395653299_1.jpg';
	const name = 'Giá vàng Bảo Tín Minh Châu';
	return (
		<MainLayout>
			<div className="mt-[1rem] sm:mt-[4.6rem] mb-[2.5rem]">
				<GoldNavigation />
				{data && (
					<div className=" h-auto  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data[0]?.timeUpdate}
							/>
							{/* <DojiPriceTable data={data[0]} /> */}
							<BaoTinMinhChauPriceTable data={data[0]} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Bảo Tín Minh Châu
								</h1>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Công ty TNHH Vàng Bạc Đá Quý Bảo Tín Minh
									Châu (BTMC). Với hệ thống phân phối trải dài
									từ Bắc vào Nam. Sự đa dạng về chủng loại,
									độc đáo về kiểu dáng, dẫn đầu về xu hướng đã
									đang và sẽ chiếm được sự tin tưởng và yêu
									mến của hàng triệu khách hàng.
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Với trên 20 năm xây dựng và phát triển. BTMC
									đã đạt được một số thành công nhất định, ghi
									nhận bằng các giải thưởng lớn:
								</p>
								<p className=" text-[1.9rem] mt-[1rem] font-normal">
									- 2 Huân chương Lao động do Chủ tịch nước
									trao tặng.
								</p>
								<p className="text-[1.9rem] mt-[1rem] font-normal">
									- 2 Bằng khen của Thủ tướng Chính phủ dành
									tặng Công ty và Doanh nhân văn hóa - Tổng
									Giám đốc Vũ Minh Châu.
								</p>
								<p className="text-[1.9rem] mt-[1rem] font-normal">
									- Cúp vàng Thương hiệu nổi tiếng quốc gia.
								</p>
								<p className="text-[1.9rem] mt-[1rem] font-normal">
									- 3 cúp đỉnh cao chất lượng quốc tế.
								</p>
								<p className="text-[1.9rem] mt-[1rem] font-normal">
									- Cùng nhiều giải thưởng cao quý khác.
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									BTMC luôn nỗ lực hết mình để xứng đáng với
									những giải thưởng đã đạt được. Cũng như
									không ngừng phấn đấu vì mục tiêu mang lại
									những sản phẩm và dịch vụ tốt nhất phục vụ
									khách hàng.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default BaoTinMinhChauView;
