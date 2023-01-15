import NameHeader from '@components/detail/gold/NameHeader';
import PriceTable from '@components/detail/petrol/petrolimex/PriceTable';
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
					<div className=" h-auto mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data[0].timeUpdate}
						/>
						<PriceTable data={data[0]} />
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
								Petrolimex luôn bảo đảm đầy đủ và kịp thời các
								chủng loại xăng dầu phục vụ sự nghiệp phát triển
								kinh tế - xã hội của đất nước, bảo đảm an ninh
								quốc phòng và nhu cầu tiêu dùng của nhân dân
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Tiên phong trong việc áp dụng công nghệ mới vào
								hoạt động sản xuất kinh doanh, tăng năng suất
								lao động, phục vụ khách hàng ngày một tốt hơn
								đồng thời đảm bảo công tác an toàn, an ninh năng
								lượng, quản lý và kinh doanh có hiệu quả
							</p>
							<p className="text-[1.8rem] mt-[1rem] font-normal">
								Tập trung ưu tiên nghiên cứu và hoàn thiện các
								mô hình, phương án kinh doanh cũng như lựa chọn
								đối tác phù hợp để phát triển dịch vụ gia tặng
								tại hệ thống cửa hàng xăng dầu Petrolimex, tận
								dụng tối đa lợi thế chuỗi bán lẻ, làm gia tăng
								hiệu quả kinh doanh và lợi nhuận.
							</p>
						</div>
					</div>
				)}
			</MainLayout>
		</>
	);
}

export default GiaXangDauView;
