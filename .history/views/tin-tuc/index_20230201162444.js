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
						<div className="flex justify-between">
							{data &&
								data.newsList.map((blog) => (
									<div>
										<img src="http://localhost:5000/api/v1/postImages/1675239672259-e5fc935b60035305099554810357012a.webp" />
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
