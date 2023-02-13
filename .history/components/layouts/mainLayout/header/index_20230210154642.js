import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isOpenSearching, setIsOpenSearching] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setName(localStorage.getItem('name'));
		setAvatar(localStorage.getItem('avatar'));
	}, [typeof window]);

	const toggleModal = () => {
		setIsopenModal((prev) => !prev);
	};

	const logout = () => {
		router.push('/authentication');
		localStorage.clear();
	};

	const toggleOpenSearching = () => {
		setIsOpenSearching((prev) => !prev);
	};
	const toggleOpenModal = () => {
		setIsOpenModal((prev) => !prev);
	};
	return (
		<header
			id="header"
			className=" flex flex-col items-center w-full mx-auto top-0  z-50 h-[70px] bg-blue-2"
		>
			<div className="  w-full max-w-[144rem] flex justify-between h-[6rem] items-center ">
				<div className="text-[2.2rem] font-black italic text-white">
					Tygia24h
				</div>
				<div className="flex h-[4rem]">
					{!isOpenSearching && (
						<div
							onClick={toggleOpenSearching}
							className="flex items-center justify-center w-[4rem] rounded-[1000px] bg-white hover:opacity-80 cursor-pointer"
						>
							<SearchIcon
								sx={{ fontSize: '2.2rem', color: '#868697' }}
							/>
						</div>
					)}

					<div
						className={` relative ${
							isOpenSearching ? 'flex ' : 'hidden'
						} items-center transition-all ease-in-out duration-[1500ms]`}
					>
						<input
							className=" w-[30rem] h-full text-[1.4rem] text-black bg-white rounded-[25px] pl-[10px] pr-[40px] outline-none"
							placeholder="Tìm kiếm"
							type="text"
						/>
						<div
							onClick={toggleOpenSearching}
							className=" text-[#868697] absolute top-[10px] cursor-pointer hover:opacity-80 right-[10px]"
						>
							<CloseIcon sx={{ fontSize: '22px' }} />
						</div>
					</div>

					<div className="flex items-center justify-center w-[4rem] rounded-[1000px] bg-white ml-[15px] cursor-pointer hover:opacity-80">
						<NotificationsNoneIcon
							sx={{ fontSize: '2rem', color: '#868697' }}
						/>
					</div>
					<div className="flex relative items-center justify-between bg-white w-auto rounded-[25px] ml-[15px]">
						<img
							className="w-[4rem] h-full rounded-[1000px]"
							src={avatar}
						/>
						<div className="flex items-center justify-end ml-[2.5rem] mr-[1rem] text-[#868697]">
							<name className="text-[1.4rem] font-medium mr-[1rem]">
								{name}
							</name>
							<ExpandMoreIcon
								onClick={toggleOpenModal}
								className=" cursor-pointer hover:opacity-80"
								sx={{ fontSize: '2rem' }}
							/>
							{isOpenModal && (
								<div className="hidden md:block absolute top-[59px] -left-[20rem] z-[1000] text-[14px] w-[25rem] bg-white shadow-2xl ">
									<div
										onClick={toggleModal}
										className=" text-end mr-[10px] cursor-pointer hover:opacity-80 pt-[1rem]"
									>
										<CloseIcon />
									</div>
									<div className="px-[2rem] mx-[1rem] pb-[1rem] text-[16px] mb-[1rem] flex items-center border-b border-grey-text">
										{/* <div className=" text-grey-text pb-[1rem]">
                                                        Profile setting
                                                    </div>
                                                    <div>View profile</div> */}
										<div>
											<Avatar src={avatar} />
										</div>
										<div className="ml-[10px]">{name}</div>
									</div>
									<div className="px-[3rem] pb-[2rem] pt-[1rem]">
										<Link href="/ca-nhan">
											<div className="flex pb-[2rem] text-grey-text text-[16px] hover:opacity-80 cursor-pointer">
												<div>
													<PersonOutlineIcon
														sx={{
															fontSize: '20px',
														}}
													/>
												</div>
												<div className="pl-[1rem]">
													Cá nhân
												</div>
											</div>
										</Link>
										<Link href="/danh-muc-theo-doi">
											<div className="flex pb-[1rem] text-grey-text text-[16px] hover:opacity-80 cursor-pointer">
												<div>
													<BookmarkBorderIcon
														sx={{
															fontSize: '20px',
														}}
													/>
												</div>
												<div className="pl-[1rem]">
													Danh mục theo dõi
												</div>
											</div>
										</Link>
									</div>
									<div
										onClick={logout}
										className="text-grey-text text-[16px] pb-[2rem] px-[3.5rem] hover:opacity-80 cursor-pointer"
									>
										Đăng xuất
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
