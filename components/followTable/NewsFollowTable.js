import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../views/tin-tuc/tin-tuc.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import axios from 'axios';
import { data } from 'autoprefixer';
import { DeleteDataToLocalStorage } from '@utils/saveDataToLocalStorage';

function NewsFollowTable({ data, populateField, setFollowDataOffline }) {
	const [userFollowNews, setUserFollowNews] = useState();
	const [blogData, setBlogData] = useState();
	const router = useRouter();
	const path = router.pathname;

	useEffect(() => {
		setBlogData(data);
		// if (user?.followCoins[0]?.title) {
		const newsIdArr = data?.followNews.map((item) => item._id);
		setUserFollowNews(newsIdArr);
		// } else {
		// 	setUserFollowCoin(user?.followCoins);
		// }
	}, [data]);

	const deleteNews = async (id) => {
		const isEmail = localStorage.getItem('email');
		if (isEmail) {
			const res = await axios
				.post(`${process.env.NEXT_PUBLIC_BASE_URL}/unfollow-news`, {
					email: localStorage.getItem('email'),
					newsId: id,
				})
				.then(function (response) {
					console.log('success');
				})
				.catch(function (error) {
					console.log(error);
				});
			// const { data } = useUserPopulate(data?.email, populateField);
			const data = await axios
				.get(
					`${
						process.env.NEXT_PUBLIC_BASE_URL
					}/user-populate/${localStorage.getItem(
						'email'
					)}?populate=${populateField}`
				)
				.then((res) => res.data.data[0]);
			setBlogData(data);
		} else {
			DeleteDataToLocalStorage('followNews', id);

			setFollowDataOffline((prev) => {
				const followNews = prev.followNews.filter(
					(item) => item._id !== id
				);
				return { ...prev, followNews };
			});
		}
	};

	return (
		<div className="flex flex-wrap flex-col lg:flex-row  ">
			{blogData &&
				blogData[populateField].map((blog, index) => (
					<div
						key={index}
						className=" px-[1rem] mt-[2rem] lg:mb-0 w-full lg:w-1/4 "
					>
						<div className="flex lg:block">
							<Link
								className="w-full max-w-[16rem] lg:max-w-[24rem]"
								href={`${path}/${blog?.timeUpdate}`}
							>
								<img
									className=" w-[16rem] h-[16rem]  lg:w-[24rem] lg:h-[13rem] object-cover rounded-[8px]"
									src={blog?.image}
								/>
							</Link>
							<div className="flex flex-col lg:mt-[1rem] ml-[1rem] lg:ml-0">
								<h2
									className={`${styles.lineClamp3} lg:h-[8rem] text-[1.8rem] font-medium block`}
								>
									{blog?.title}
								</h2>
								<div className="inline mb-[0.5rem] lg:h-[4.2rem]">
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
											src={blog?.avatarAdminPost}
										/>
										<div className="ml-[1rem] text-[1.4rem] font-normal">
											{blog?.nameAdminPost}
										</div>
									</div>
									<div className="flex text-[1.4rem] mt-[0.5rem]">
										<div>
											<FiberManualRecordIcon className=" text-gray-400" />
										</div>
										<div className="ml-[0.5rem]">29/10</div>
										<div className="ml-auto">
											{userFollowNews?.includes(
												blog._id
											) ? (
												<BookmarkIcon
													onClick={() =>
														deleteNews(blog._id)
													}
													className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
												/>
											) : (
												<BookmarkBorderIcon
													onClick={() =>
														saveNews(blog._id)
													}
													className="text-[2.4rem] cursor-pointer hover:opacity-80"
												/>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default NewsFollowTable;
