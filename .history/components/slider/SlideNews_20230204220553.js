import React, { useState, useRef, useEffect, use } from 'react';
import styles from './slideNews.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles2 from '../../views/tin-tuc/tin-tuc.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useNewsLatest } from '@services/news/useNews';
import { useUser } from '@services/user/useUser';
import { Email } from '@mui/icons-material';
import axios from 'axios';

const colors = [
	'https://coin98.net/_next/image?url=https%3A%2F%2Finventory.coin98.com%2Fimages%2F2000reports-TXlhfDugQZve0mFN.png&w=1920&q=75',
	'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/307677689_2233177293514350_506821838260481203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=0PbaupGeC78AX8NKd3D&tn=R5tPph1G-IwzutAt&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCF42kGI-VBgDXxKtPWdMmGXSS0G9v4tY_QJ0ARtIP3fA&oe=63DEC24B',
	'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/307721947_2233177316847681_9182540623992931146_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=vyI4yPaKPeIAX8v3jsU&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBnHuN9WAik_p_NuSTfZETx9EetP4hEOqjsgB3ZEy78wg&oe=63E044CC',
];
const delay = 2500;

function SlideNews() {
	const [email, setEmail] = useState();

	const {
		data: latestList,
		isLoading,
		isError,
		error,
		isFetching,
	} = useNewsLatest();

	const { data: user } = useUser(email);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
	}, [typeof window]);

	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	const router = useRouter();
	const path = router.pathname;

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === latestList?.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<>
			{/* slide  */}
			<div className="max-w-[80rem] mx-auto">
				<div className={`${styles.slideshow}`}>
					<div
						className={`${styles.slideshowSlider}`}
						style={{
							transform: `translate3d(${-index * 100}%, 0, 0)`,
						}}
					>
						{latestList &&
							latestList.map((news, index) => (
								<Link
									href={`${path}/${news.timeUpdate}`}
									key={news.timeUpdate}
								>
									<img
										// crossOrigin="anonymous"
										className={`${styles.slide} object-cover`}
										// style={{ backgroundColor }}
										src={news?.image}
									></img>
								</Link>
							))}
					</div>

					<div className={`${styles.slideshowDots}`}>
						{latestList &&
							latestList.map((_, idx) => (
								<div
									key={idx}
									className={`${styles.slideshowDot} ${
										index === idx ? styles.active : ''
									}`}
									onClick={() => {
										setIndex(idx);
									}}
								></div>
							))}
					</div>
				</div>
			</div>
			{/* tin cua slide  */}
			<div className="flex flex-wrap flex-col lg:flex-row justify-between mt-[1rem]">
				{latestList &&
					latestList.map((blog, index) => (
						<div
							key={blog.timeUpdate}
							className=" px-[1rem] mb-[1rem] lg:mb-0 w-full  lg:w-1/4"
						>
							<Link href={`${path}/${blog.timeUpdate}`}>
								<div className="flex lg:flex-col w-full ">
									<img
										className="max-w-[16rem] h-[16rem] lg:max-w-[24rem] w-full  lg:h-[13rem] object-cover rounded-[8px]"
										src={blog.image}
									/>
									<div className="flex flex-col w-full lg:mt-[1rem] ml-[1rem] lg:ml-0">
										<h2
											className={`${styles2.lineClamp3} lg:h-[8rem] text-[1.8rem] font-medium block`}
										>
											{blog?.title}
										</h2>
										<div className=" mb-[0.5rem] lg:h-[4.2rem]">
											<p
												className={`${styles2.lineClamp2}  text-[1.4rem]`}
											>
												{blog?.description}
											</p>
										</div>
										<div className="">
											<div className="flex items-center">
												<img
													className="w-[3rem] h-[3rem] rounded-[1000px]"
													src={blog.avatarAdminPost}
												/>
												<div className="ml-[1rem] text-[1.4rem] font-normal">
													{blog.nameAdminPost}
												</div>
											</div>
											<div className="flex items-center text-[1.4rem] mt-[0.5rem]">
												<div>
													<FiberManualRecordIcon className=" text-gray-400" />
												</div>
												<div className="ml-[0.5rem]">
													29/10
												</div>
												<div className="ml-auto">
													{user.followNews.includes(
														blog._id
													) ? (
														<BookmarkIcon className="text-[2.4rem] text-green-500" />
													) : (
														<BookmarkBorderIcon className="text-[2.4rem] " />
													)}
													{/* <BookmarkBorderIcon className="text-[2.4rem] " /> */}
													{/* <BookmarkIcon className="text-[2.4rem] text-green-500" /> */}
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
			</div>
		</>
	);
}

export default SlideNews;
