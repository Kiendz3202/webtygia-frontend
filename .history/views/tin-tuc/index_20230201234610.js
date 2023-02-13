import MainLayout from '@components/layouts/mainLayout';
import { useNewsList } from '@services/news/useNews';
import Head from 'next/head';
import { useState } from 'react';
import styles from './tin-tuc.module.css';

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
						<div className="flex flex-col lg:flex-row justify-between mt-[1rem]">
							{data &&
								data.newsList.map((blog) => (
									<div className="flex lg:block px-[1rem] mb-[1rem] lg:mb-0">
										<img
											className="max-w-[18rem] lg:max-w-[24rem] h-[13rem] object-cover rounded-[8px]"
											src="https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75"
										/>
										<div className="lg:mt-[1rem] ml-[1rem] lg:ml-0">
											<h2
												className={`${styles.lineClamp3} text-[1.8rem] font-medium`}
											>
												{blog?.title}
											</h2>
											<p
												className={`${styles.lineClamp2} text-[1.4rem]`}
											>
												{blog?.description}
											</p>
											<div>
												<div>
													<img
														className="w-[2rem] h-[2rem]"
														src={
															blog.avatarAdminPost
														}
													/>
												</div>
											</div>
										</div>
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
