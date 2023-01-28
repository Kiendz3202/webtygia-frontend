import TechcombankPriceTable from '@components/detail/exchange/TechcombankPriceTable';
import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import { useExchange } from '@services/exchange/useExchange';
import React from 'react';

function TechcombankExchangeView() {
	const { isSuccess, data, isLoading, isError } = useExchange('techcombank');
	const imageURL =
		'https://inminhkhang.com/wp-content/uploads/2022/03/giai-ma-logo-techcombank-tai-mien-phi-file-logo-techcombank-vector-4.png';
	const name = 'Tỷ giá ngoại tệ Techcombank bank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			<div className="mt-[4.6rem] mb-[2.5rem]">
				<ExchangeRateNavigation />
				{data && (
					<div className=" h-auto  mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader
								name={name}
								image={imageURL}
								timeUpdate={data?.timeUpdate}
							/>
							<TechcombankPriceTable data={data} />
							<div className=" mt-[4rem]">
								<h1 className="text-[2.4rem] text-blue-text font-medium">
									Giới thiệu về Techcombank – Ngân hàng Thương
									mại cổ phần Kỹ Thương Việt Nam
								</h1>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Được thành lập năm 1993 với hội sở chính đặt
									tại Hà Nội, Techcombank là một trong những
									ngân hàng TMCP lớn nhất Việt Nam và một
									trong những ngân hàng hàng đầu ở Châu Á.
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Trong những năm trở lại đây, Techcombank
									liên tiếp được vinh danh tại các giải thưởng
									được trao bởi các tổ chức quốc tế uy tín
									như: EuroMoney, Global Finance, Wells Fargo,
									Bank of New York Mellon, AsiaRisk, Finance
									Asia, Global Banking and Finance Review,
									vv….Bên cạnh đó, ngân hàng còn được vinh
									danh tại các giải thưởng Nhân sự uy tín như:
									Nơi làm việc tốt nhất châu Á; Top 2 Nơi làm
									việc tốt nhất Việt Nam ngành Ngân hàng 5 năm
									liên tiếp (2016-2020); Vietnam HR Awards;
									Thương hiệu Nhà Tuyển dụng hấp dẫn nhất với
									sinh viên Việt Nam....
								</p>
								<p className="text-[2rem] mt-[1rem] font-normal">
									Với định vị thương hiệu “Vượt trội hơn mỗi
									ngày”, Techcombank cam kết tạo điều kiện để
									khách hàng, đối tác và chính cán bộ nhân
									viên có thể hiện thực hóa ước mơ theo cách
									riêng của mình.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
}

export default TechcombankExchangeView;
