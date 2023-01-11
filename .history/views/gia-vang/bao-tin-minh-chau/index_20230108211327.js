import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function BaoTinMinhChauView() {
	const { isSuccess, data, isLoading, isError } = useGold('baoTinMinhChau');
	const imageURL =
		'https://cdnimg.vietnamplus.vn/Uploaded/Subjects/1395653299_1.jpg';
	const name = 'Bảo Tín Minh Châu';
	return (
		<MainLayout>
			{data && (
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div>
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data[0]?.timeUpdate}
						/>
						{/* <DojiPriceTable data={data[0]} /> */}
						<div className=" mt-[4rem]">
							<h1 className="text-[2.4rem] text-blue-text font-medium">
								Giới thiệu về Bảo Tín Minh Châu
							</h1>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Công ty TNHH Vàng Bạc Đá Quý Bảo Tín Minh Châu
								(BTMC). Với hệ thống phân phối trải dài từ Bắc
								vào Nam. Sự đa dạng về chủng loại, độc đáo về
								kiểu dáng, dẫn đầu về xu hướng đã đang và sẽ
								chiếm được sự tin tưởng và yêu mến của hàng
								triệu khách hàng.
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Với trên 20 năm xây dựng và phát triển. BTMC đã
								đạt được một số thành công nhất định, ghi nhận
								bằng các giải thưởng lớn:
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Với tầm nhìn chiến lược, quan điểm phát triển
								bền vững, tiềm lực hùng mạnh, Tập đoàn DOJI
								khẳng định đẳng cấp thương hiệu quốc gia Việt
								Nam, sẵn sàng tâm thế hội nhập và vươn xa trong
								khu vực cũng như quốc tế trong tương lai.
							</p>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default BaoTinMinhChauView;