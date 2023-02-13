import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../views/tin-tuc/tin-tuc.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import axios from 'axios';
import { data } from 'autoprefixer';

function NewsFollowTable({ data, populateField }) {
	console.log(data?.email);
	const [blogData, sertBlogData] = useState();
	const router = useRouter();
	const path = router.pathname;

	useEffect(() => {
		sertBlogData(data);
	}, [data]);

	const deleteNews = async (id) => {
		const res = await axios
			.post('http://localhost:5000/api/v1/delete-news', {
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
				`http://localhost:5000/api/v1/user-populate/${data?.email}?populate=${populateField}`
			)
			.then((res) => res.data.data[0]);
		sertBlogData(data);
		console.log(data);
	};

	return (
		<div className="flex flex-wrap flex-col lg:flex-row  ">
			{blogData &&
				blogData[populateField].map((blog, index) => (
					<div
						key={blog.timeUpdate}
						className=" px-[1rem] mt-[2rem] lg:mb-0 w-full lg:w-1/4 "
					>
						<div className="flex lg:block">
							<Link
								className="w-full max-w-[16rem] lg:max-w-[24rem]"
								href={`${path}/${blog.timeUpdate}`}
							>
								<img
									className=" w-[16rem] h-[16rem]  lg:w-[24rem] lg:h-[13rem] object-cover rounded-[8px]"
									src={blog?.image}
								/>
							</Link>
							<div className="flex flex-col lg:mt-[1rem] ml-[1rem] lg:ml-0">
								<h2
									className={`${styles.lineClamp3} text-[1.8rem] font-medium block`}
								>
									{blog?.title}
								</h2>
								<div className="inline mb-[0.5rem]">
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
											src={blog.avatarAdminPost}
										/>
										<div className="ml-[1rem] text-[1.4rem] font-normal">
											{blog.nameAdminPost}
										</div>
									</div>
									<div className="flex text-[1.4rem] mt-[0.5rem]">
										<div>
											<FiberManualRecordIcon className=" text-gray-400" />
										</div>
										<div className="ml-[0.5rem]">29/10</div>
										<div className="ml-auto">
											<BookmarkIcon
												onClick={() =>
													deleteNews(blog._id)
												}
												className="text-[2.4rem] text-green-500 cursor-pointer hover:opacity-80"
											/>
											{/* {user?.followNews?.includes(
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
											)} */}
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
