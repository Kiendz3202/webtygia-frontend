import MainLayout from '@components/layouts/mainLayout';
import { useNewsList } from '@services/news/useNews';
import Head from 'next/head';
import { useState } from 'react';
import styles from './tin-tuc.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SlideNews from '@components/slider/SlideNews';
import { useRouter } from 'next/router';
import Link from 'next/link';

function TinTucView() {
	const [pageNumber, setPageNumber] = useState(1);

	const router = useRouter();
	const path = router.pathname;

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
					<div className="mt-[2rem]">
						{/* slide  */}
						<div className="max-w-[80rem] mx-auto">
							<SlideNews data={data?.newsList} />
						</div>
						{/* tin cua slide  */}
						<div className="flex flex-col lg:flex-row justify-between mt-[1rem]">
							{data &&
								data.newsList.map((blog, index) => (
									<div
										key={blog.timeUpdate}
										className="flex lg:block px-[1rem] mb-[1rem] lg:mb-0"
									>
										<Link
											href={`${path}/${blog.timeUpdate}`}
										>
											<img
												className="max-w-[16rem] h-[16rem] lg:max-w-[24rem] w-full lg:h-[13rem] object-contain rounded-[8px]"
												src={blog.image}
											/>
											<div className="flex flex-col lg:mt-[1rem] ml-[1rem] lg:ml-0">
												<h2
													className={`${styles.lineClamp3} text-[1.8rem] font-medium block`}
												>
													{blog?.title}
												</h2>
												<div className="hidden sm:inline mb-[0.5rem]">
													<p
														className={`${styles.lineClamp2}  text-[1.4rem]`}
													>
														{blog?.description}
													</p>
												</div>
												<div className="mt-auto">
													<div className="flex items-center">
														<img
															className="w-[3rem] h-[3rem] rounded-[1000px]"
															src={
																blog.avatarAdminPost
															}
														/>
														<div className="ml-[1rem] text-[1.4rem] font-normal">
															{blog.nameAdminPost}
														</div>
													</div>
													<div className="flex text-[1.4rem] mt-[0.5rem]">
														<div>
															<FiberManualRecordIcon className=" text-gray-400" />
														</div>
														<div className="ml-[0.5rem]">
															29/10
														</div>
														<div className="ml-auto">
															<BookmarkIcon className="text-[2.4rem] text-green-500" />
															{/* <BookmarkBorderIcon className="text-[2.4rem]" /> */}
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								))}
						</div>
					</div>
					<div className="text-[2.6rem] font-medium pt-[2rem] border-b border-grey-boder">
						<h1>Tin tức tổng hợp</h1>
					</div>
					<div className="flex flex-col lg:flex-row justify-between mt-[1rem]">
						{data &&
							data.newsList.map((blog, index) => (
								<div
									key={blog.timeUpdate}
									className="flex lg:block px-[1rem] mb-[1rem] lg:mb-0"
								>
									<Link href={`${path}/${blog.timeUpdate}`}>
										<img
											className="max-w-[16rem] h-[16rem] lg:max-w-[24rem] lg:h-[13rem] object-cover rounded-[8px]"
											src="https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75"
										/>
										<div className="flex flex-col lg:mt-[1rem] ml-[1rem] lg:ml-0">
											<h2
												className={`${styles.lineClamp3} text-[1.8rem] font-medium block`}
											>
												{blog?.title}
											</h2>
											<div className="hidden sm:inline mb-[0.5rem]">
												<p
													className={`${styles.lineClamp2}  text-[1.4rem]`}
												>
													{blog?.description}
												</p>
											</div>
											<div className="mt-auto">
												<div className="flex items-center">
													<img
														className="w-[3rem] h-[3rem] rounded-[1000px]"
														src={
															blog.avatarAdminPost
														}
													/>
													<div className="ml-[1rem] text-[1.4rem] font-normal">
														{blog.nameAdminPost}
													</div>
												</div>
												<div className="flex text-[1.4rem] mt-[0.5rem]">
													<div>
														<FiberManualRecordIcon className=" text-gray-400" />
													</div>
													<div className="ml-[0.5rem]">
														29/10
													</div>
													<div className="ml-auto">
														<BookmarkIcon className="text-[2.4rem] text-green-500" />
														{/* <BookmarkBorderIcon className="text-[2.4rem]" /> */}
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							))}
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TinTucView;
