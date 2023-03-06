import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavigationHeaderMenu from './NavigationHeaderMenu';

function Header() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isOpenSearching, setIsOpenSearching] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setName(localStorage.getItem('email'));
		setName(localStorage.getItem('name'));
		setAvatar(localStorage.getItem('avatar'));
	}, [typeof window]);

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

	const toggleOpenMenu = () => {
		setIsOpenMenu((prev) => !prev);
	};
	return (
		<header
			id="header"
			className=" flex flex-col items-center w-full mx-auto top-0  z-50 h-[70px] bg-blue-2"
		>
			<div className="  w-full max-w-[144rem] my-auto flex justify-between h-[6rem] items-center px-[28px] lg:px-0">
				<div className="text-[2.4rem] font-black italic text-white">
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
							className=" w-[20rem] sm:w-[30rem] h-full text-[1.4rem] text-black bg-white rounded-[25px] pl-[10px] pr-[40px] outline-none"
							placeholder="Tìm kiếm"
							type="text"
						/>
						<div
							onClick={toggleOpenSearching}
							className=" text-[#868697] absolute top-[6px] sm:top-[10px] cursor-pointer hover:opacity-80 right-[10px]"
						>
							<CloseIcon sx={{ fontSize: '22px' }} />
						</div>
					</div>
					{email && (
						<div className="flex items-center justify-center w-[4rem] rounded-[1000px] bg-white ml-[9px] sm:ml-[15px] cursor-pointer hover:opacity-80">
							<NotificationsNoneIcon
								sx={{ fontSize: '2rem', color: '#868697' }}
							/>
						</div>
					)}
					{!email ? (
						<div className="flex relative items-center justify-between bg-white w-auto rounded-[25px] ml-[9px] sm:ml-[15px]">
							<Avatar
								className="w-[4rem] h-full rounded-[1000px]"
								src={avatar ? avatar : ''}
							/>
						</div>
					) : (
						<div className="flex relative items-center justify-between  w-auto rounded-[8px] ml-[9px] sm:ml-[15px] cursor-pointer hover:opacity-80">
							<div>
								<LoginIcon
									sx={{ fontSize: '2rem', color: 'white' }}
								/>
							</div>
							<div className="text-[14px] text-white">
								Đăng nhập
							</div>
						</div>
					)}
					<div className="relative my-auto">
						<div
							onClick={toggleOpenMenu}
							className="hidden sm:flex lg:hidden items-center justify-center ml-[9px] cursor-pointer hover:opacity-80"
						>
							<svg
								width="23"
								height="16"
								viewBox="0 0 23 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="23"
									height="3"
									rx="1.5"
									fill="white"
								/>
								<rect
									y="6"
									width="23"
									height="3"
									rx="1.5"
									fill="white"
								/>
								<rect
									y="13"
									width="23"
									height="3"
									rx="1.5"
									fill="white"
								/>
							</svg>
						</div>

						<NavigationHeaderMenu
							setIsOpenMenu={setIsOpenMenu}
							isOpenMenu={isOpenMenu}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
