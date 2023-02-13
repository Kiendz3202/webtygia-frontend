import MainLayout from '@components/layouts/mainLayout';
import { useNewsList } from '@services/news/useNews';
import Head from 'next/head';
import { useState } from 'react';

function TinTucView() {
	const [pageNumber, setPageNumber] = useState(1);

	const { data, isLoading, isError, error, isFetching } =
		useNewsList(pageNumber);
	if (data) {
		console.log(data);
	}
	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					<div className="text-[2.6rem] font-medium pt-[2rem] border-b border-grey-boder">
						<h1>Tin tức thị trường mới nhất</h1>
					</div>
					{/* tin tuc moi nhat */}
					<div>
						{/* slide  */}
						<div></div>
						{/* tin cua slide  */}
						<div className="flex justify-between mt-[1rem]">
							{data &&
								data.newsList.map((blog) => (
									<div className="max-w-[24rem]">
										<img
											className="w-full h-[13rem] object-cover rounded-[8px]"
											src="https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75"
										/>
									</div>
								))}
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TinTucView;
